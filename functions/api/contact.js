export async function onRequestPost({ request, env }) {
  try {
    let body = {};
    const contentType = request.headers.get("content-type") || "";

    if (contentType.includes("application/json")) {
      body = await request.json();
    } else if (contentType.includes("application/x-www-form-urlencoded") || contentType.includes("multipart/form-data")) {
      const form = await request.formData();
      body = Object.fromEntries(form.entries());
    }

    const name = String(body.name || "").trim();
    const email = String(body.email || "").trim();
    const subject = String(body.subject || "").trim();
    const message = String(body.message || "").trim();
    const company = String(body.company || ""); // honeypot

    if (company) {
      return new Response("OK", { status: 200 });
    }

    if (!name || !email || !message) {
      return json({ error: "Faltan campos" }, 400);
    }

    if (!isValidEmailFormat(email)) {
      return json({ error: "Email invalido" }, 400);
    }

    const emailDomain = email.split("@")[1]?.toLowerCase() || "";
    const canReceiveEmail = await domainCanReceiveEmail(emailDomain);
    if (!canReceiveEmail) {
      return json({ error: "El dominio del email no existe o no puede recibir correo" }, 400);
    }

    const resendResponse = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${env.RESEND_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: env.CONTACT_FROM,
        to: [env.CONTACT_TO],
        reply_to: email,
        subject: subject || "Contacto",
        text: `Nombre: ${name}\nEmail: ${email}\n\nMensaje:\n${message}`,
      }),
    });

    if (!resendResponse.ok) {
      const err = await resendResponse.text();
      return json({ error: "Error enviando email", details: err }, 500);
    }

    return json({ ok: true }, 200);
  } catch {
    return json({ error: "Peticion invalida" }, 400);
  }
}

function json(data, status = 200) {
  return new Response(JSON.stringify(data), {
    status,
    headers: { "Content-Type": "application/json" },
  });
}

function isValidEmailFormat(email) {
  if (!email || email.length > 254) return false;
  return /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i.test(email);
}

async function domainCanReceiveEmail(domain) {
  const normalizedDomain = String(domain || "").trim().replace(/\.$/, "").toLowerCase();
  if (!normalizedDomain || normalizedDomain.includes("..") || normalizedDomain === "localhost") {
    return false;
  }

  // Reject only explicit NXDOMAIN responses. Any transient/ambiguous DNS state
  // should not block legitimate contact requests.
  const existsByA = await dnsDomainExists(normalizedDomain, "A");
  if (existsByA === false) return false;
  if (existsByA === true) return true;

  const existsByMX = await dnsDomainExists(normalizedDomain, "MX");
  if (existsByMX === false) return false;
  if (existsByMX === true) return true;

  const existsByAAAA = await dnsDomainExists(normalizedDomain, "AAAA");
  if (existsByAAAA === false) return false;

  // Fail open if DNS provider is unavailable or inconclusive.
  return true;
}

async function dnsDomainExists(domain, type) {
  try {
    const url = `https://dns.google/resolve?name=${encodeURIComponent(domain)}&type=${type}`;
    const response = await fetch(url, {
      headers: { Accept: "application/dns-json" },
    });

    if (!response.ok) return null;
    const data = await response.json();

    const status = Number(data?.Status);
    if (status === 3) {
      return false;
    }

    // Any non-NXDOMAIN response means the domain likely exists.
    if (Number.isFinite(status)) return true;

    return null;
  } catch {
    return null;
  }
}

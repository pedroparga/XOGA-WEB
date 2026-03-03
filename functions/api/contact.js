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

    if (!name || !email || !message) {
      return json({ error: "Faltan campos" }, 400);
    }

    if (!env.RESEND_API_KEY) {
      return json({ error: "Falta configurar RESEND_API_KEY en el entorno" }, 500);
    }
    if (!env.CONTACT_FROM) {
      return json({ error: "Falta configurar CONTACT_FROM en el entorno" }, 500);
    }
    if (!env.CONTACT_TO) {
      return json({ error: "Falta configurar CONTACT_TO en el entorno" }, 500);
    }

    if (!isValidEmailFormat(email)) {
      return json({ error: "Email invalido" }, 400);
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

export async function onRequestGet({ env }) {
  return json(
    {
      ok: true,
      endpoint: "/api/contact",
      functions_active: true,
      config: {
        resend_api_key: Boolean(env.RESEND_API_KEY),
        contact_from: Boolean(env.CONTACT_FROM),
        contact_to: Boolean(env.CONTACT_TO),
      },
    },
    200
  );
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

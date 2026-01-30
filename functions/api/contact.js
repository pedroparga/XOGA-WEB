export async function onRequestPost({ request, env }) {
  try {
    const body = await request.json();

    const name = String(body.name || "").trim();
    const email = String(body.email || "").trim();
    const message = String(body.message || "").trim();
    const company = String(body.company || ""); // honeypot

    if (company) {
      return new Response("OK", { status: 200 });
    }

    if (!name || !email || !message) {
      return json({ error: "Faltan campos" }, 400);
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
        subject: `Mensaje desde la web - ${name}`,
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
import { NextResponse } from "next/server";
import { Resend } from "resend";

function isValidEmailFormat(email: string) {
  if (!email || email.length > 254) return false;
  return /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i.test(email);
}

export async function GET() {
  return NextResponse.json({
    ok: true,
    endpoint: "/api/contact",
    service: "nextjs-route-handler",
    config: {
      resend_api_key: Boolean(process.env.RESEND_API_KEY),
      contact_from: Boolean(process.env.CONTACT_FROM),
      contact_to: Boolean(process.env.CONTACT_TO)
    }
  });
}

export async function POST(request: Request) {
  try {
    let body: Record<string, FormDataEntryValue | string> = {};
    const contentType = request.headers.get("content-type") || "";

    if (contentType.includes("application/json")) {
      body = (await request.json()) as Record<string, string>;
    } else if (
      contentType.includes("application/x-www-form-urlencoded") ||
      contentType.includes("multipart/form-data")
    ) {
      const formData = await request.formData();
      body = Object.fromEntries(formData.entries());
    }

    const name = String(body.name || "").trim();
    const email = String(body.email || "").trim();
    const subject = String(body.subject || "").trim();
    const message = String(body.message || "").trim();
    const honeypot = String(body.hp_field || body.company || "").trim();

    if (honeypot) {
      return NextResponse.json({ ok: true });
    }

    if (!name || !email || !message) {
      return NextResponse.json({ error: "Faltan campos" }, { status: 400 });
    }

    if (!isValidEmailFormat(email)) {
      return NextResponse.json({ error: "Email invalido" }, { status: 400 });
    }

    const apiKey = process.env.RESEND_API_KEY;
    const from = process.env.CONTACT_FROM;
    const to = process.env.CONTACT_TO;

    if (!apiKey || !from || !to) {
      return NextResponse.json(
        { error: "Falta configurar RESEND_API_KEY, CONTACT_FROM o CONTACT_TO" },
        { status: 500 }
      );
    }

    const resend = new Resend(apiKey);

    await resend.emails.send({
      from,
      to: [to],
      replyTo: email,
      subject: subject || "Contacto",
      text: `Nombre: ${name}\nEmail: ${email}\n\nMensaje:\n${message}`
    });

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ error: "Peticion invalida" }, { status: 400 });
  }
}

import { NextResponse } from "next/server";
import { validateContact } from "@/lib/validation";

export async function POST(request: Request) {
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ ok: false, message: "Invalid request." }, { status: 400 });
  }

  const { values, errors } = validateContact(body);
  if (Object.keys(errors).length > 0) {
    return NextResponse.json({ ok: false, errors }, { status: 422 });
  }

  // Honeypot filled in: pretend success so bots learn nothing.
  if (values.website) return NextResponse.json({ ok: true });

  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.CONTACT_TO_EMAIL;
  const from = process.env.CONTACT_FROM_EMAIL;

  if (!apiKey || !to || !from) {
    return NextResponse.json(
      { ok: false, code: "not_configured", message: "Email delivery is not configured on this site yet." },
      { status: 501 },
    );
  }

  try {
    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: { Authorization: `Bearer ${apiKey}`, "Content-Type": "application/json" },
      body: JSON.stringify({
        from,
        to: [to],
        reply_to: values.email,
        subject: `[Portfolio] ${values.subject}`,
        text: `From: ${values.name} <${values.email}>\n\n${values.message}`,
      }),
    });
    if (!res.ok) {
      return NextResponse.json({ ok: false, message: "The email service rejected the message." }, { status: 502 });
    }
    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ ok: false, message: "Could not reach the email service." }, { status: 502 });
  }
}

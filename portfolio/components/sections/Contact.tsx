"use client";

import { useState, type ChangeEvent, type FormEvent } from "react";
import { AlertCircle, Check, Loader2, Mail, MessageCircle, Phone, Send } from "lucide-react";
import { FaGithub, FaLinkedinIn } from "react-icons/fa6";
import { personalInfo } from "@/data/personal-info";
import { isPlaceholder } from "@/lib/utils";
import { validateContact, type ContactErrors, type ContactField, type ContactValues } from "@/lib/validation";
import SectionHeading from "@/components/ui/SectionHeading";
import SocialLinks from "@/components/ui/SocialLinks";

type Status =
  | { kind: "idle" }
  | { kind: "sending" }
  | { kind: "success" }
  | { kind: "error"; message: string };

const emptyValues: ContactValues = { name: "", email: "", subject: "", message: "", website: "" };

function InfoRow({ icon, label, value, href }: { icon: React.ReactNode; label: string; value: string; href?: string }) {
  const content = isPlaceholder(value) ? <span className="placeholder-text">{value || `[EDIT: ${label}]`}</span> : value;
  return (
    <li className="flex items-center gap-4">
      <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-accent-soft text-accent-strong">
        {icon}
      </span>
      <div className="min-w-0">
        <p className="text-sm text-muted">{label}</p>
        {href && !isPlaceholder(value) ? (
          <a href={href} className="break-words font-medium hover:text-accent" {...(href.startsWith("http") ? { target: "_blank", rel: "noopener noreferrer" } : {})}>
            {content}
          </a>
        ) : (
          <p className="break-words font-medium">{content}</p>
        )}
      </div>
    </li>
  );
}

export default function Contact() {
  const [values, setValues] = useState<ContactValues>(emptyValues);
  const [errors, setErrors] = useState<ContactErrors>({});
  const [status, setStatus] = useState<Status>({ kind: "idle" });

  const { email, phone, whatsapp, socials } = personalInfo;
  const emailReady = !isPlaceholder(email);
  const github = socials.find((s) => s.id === "github")?.url ?? "";
  const linkedin = socials.find((s) => s.id === "linkedin")?.url ?? "";

  const mailto = emailReady
    ? `mailto:${email}?subject=${encodeURIComponent(values.subject || "Portfolio enquiry")}&body=${encodeURIComponent(
      `${values.message}${values.name ? `\n\n${values.name}` : ""}${values.email ? ` (${values.email})` : ""}`,
    )}`
    : undefined;

  const onChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setValues((v) => ({ ...v, [name]: value }));
    if (name in errors) setErrors((prev) => ({ ...prev, [name]: undefined }));
  };

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const result = validateContact(values);
    setErrors(result.errors);
    if (Object.keys(result.errors).length > 0) {
      setStatus({ kind: "error", message: "Please fix the highlighted fields and try again." });
      return;
    }

    setStatus({ kind: "sending" });
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });
      const data = (await res.json().catch(() => ({}))) as { ok?: boolean; code?: string; errors?: ContactErrors };

      if (res.ok && data.ok) {
        setValues(emptyValues);
        setStatus({ kind: "success" });
      } else if (res.status === 422 && data.errors) {
        setErrors(data.errors);
        setStatus({ kind: "error", message: "Please fix the highlighted fields and try again." });
      } else if (data.code === "not_configured") {
        setStatus({
          kind: "error",
          message: "Sending from this form isn't set up yet, so your message was not sent. Use the email button below instead.",
        });
      } else {
        setStatus({ kind: "error", message: "Your message was not sent. Try again, or use the email button below." });
      }
    } catch {
      setStatus({ kind: "error", message: "Network error: your message was not sent. Check your connection and try again." });
    }
  }

  const field = (name: ContactField, label: string, type = "text", autoComplete?: string) => {
    const err = errors[name];
    const cls = `mt-1.5 w-full rounded-xl border bg-bg px-4 py-3 text-base outline-none transition-colors focus:border-accent ${err ? "border-red-600" : "border-line"
      }`;
    return (
      <div>
        <label htmlFor={`c-${name}`} className="text-sm font-medium">
          {label}
        </label>
        {name === "message" ? (
          <textarea id="c-message" name={name} rows={6} required value={values.message} onChange={onChange} aria-invalid={!!err} aria-describedby={err ? "c-message-err" : undefined} className={cls} />
        ) : (
          <input id={`c-${name}`} name={name} type={type} autoComplete={autoComplete} required value={values[name]} onChange={onChange} aria-invalid={!!err} aria-describedby={err ? `c-${name}-err` : undefined} className={cls} />
        )}
        {err && (
          <p id={`c-${name}-err`} className="mt-1.5 text-sm text-red-700">
            {err}
          </p>
        )}
      </div>
    );
  };

  return (
    <section id="contact" aria-labelledby="contact-title" className="section-pad border-t border-line bg-surface">
      <div className="container-page">
        <SectionHeading
          id="contact-title"
          title="Contact"
          intro="Have a project, an internship or a question? Send a message and I'll get back to you."
        />

        <div className="grid gap-12 lg:grid-cols-[1fr_1.2fr]">
          <div>
            <ul className="space-y-5">
              <InfoRow icon={<Mail aria-hidden className="h-5 w-5" />} label="Email" value={email} href={`mailto:${email}`} />
              {phone && (
                <InfoRow
                  icon={<Phone aria-hidden className="h-5 w-5" />}
                  label="Phone"
                  value={phone}
                  href={`tel:${phone.replace(/\s/g, "")}`}
                />
              )}
              {whatsapp && (
                <InfoRow
                  icon={<MessageCircle aria-hidden className="h-5 w-5" />}
                  label="WhatsApp"
                  value={whatsapp}
                  href={`https://wa.me/${whatsapp.replace(/\D/g, "")}`}
                />
              )}
              <InfoRow icon={<FaGithub aria-hidden className="h-5 w-5" />} label="GitHub" value={github.replace("https://", "")} href={github} />
              <InfoRow icon={<FaLinkedinIn aria-hidden className="h-5 w-5" />} label="LinkedIn" value={linkedin.replace("https://", "")} href={linkedin} />
            </ul>
            <SocialLinks className="mt-8" />
          </div>

          <form onSubmit={onSubmit} noValidate className="space-y-5 rounded-2xl border border-line bg-bg p-6 sm:p-8">
            {field("name", "Full name", "text", "name")}
            {field("email", "Email", "email", "email")}
            {field("subject", "Subject")}
            {field("message", "Message")}

            {/* Honeypot: hidden from people, bots tend to fill it. */}
            <div aria-hidden className="absolute -left-[9999px] h-0 w-0 overflow-hidden">
              <label htmlFor="c-website">Website</label>
              <input id="c-website" name="website" tabIndex={-1} autoComplete="off" value={values.website} onChange={onChange} />
            </div>

            <div className="flex flex-wrap items-center gap-3">
              <button type="submit" className="btn btn-primary" disabled={status.kind === "sending"}>
                {status.kind === "sending" ? (
                  <><Loader2 aria-hidden className="h-4 w-4 animate-spin" /> Sending…</>
                ) : (
                  <><Send aria-hidden className="h-4 w-4" /> Send message</>
                )}
              </button>
              {mailto ? (
                <a href={mailto} className="btn btn-outline">
                  <Mail aria-hidden className="h-4 w-4" /> Open in email app
                </a>
              ) : (
                <span className="btn btn-disabled">Add your email to enable the email link</span>
              )}
            </div>

            <div aria-live="polite" role="status">
              {status.kind === "success" && (
                <p className="flex items-start gap-2 rounded-xl bg-accent-soft p-4 text-accent-strong">
                  <Check aria-hidden className="mt-0.5 h-5 w-5 shrink-0" /> Message sent. Thanks for reaching out!
                </p>
              )}
              {status.kind === "error" && (
                <p className="flex items-start gap-2 rounded-xl bg-red-50 p-4 text-red-800">
                  <AlertCircle aria-hidden className="mt-0.5 h-5 w-5 shrink-0" /> {status.message}
                </p>
              )}
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

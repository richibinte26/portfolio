export type ContactField = "name" | "email" | "subject" | "message";
export type ContactValues = Record<ContactField, string> & { website: string };
export type ContactErrors = Partial<Record<ContactField, string>>;

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

export function validateContact(input: unknown): { values: ContactValues; errors: ContactErrors } {
  const src = (typeof input === "object" && input !== null ? input : {}) as Record<string, unknown>;
  const get = (key: string) => (typeof src[key] === "string" ? (src[key] as string).trim() : "");

  const values: ContactValues = {
    name: get("name"),
    email: get("email"),
    subject: get("subject"),
    message: get("message"),
    website: get("website"), // honeypot, must stay empty
  };

  const errors: ContactErrors = {};
  if (!values.name) errors.name = "Enter your full name.";
  else if (values.name.length < 2 || values.name.length > 100) errors.name = "Name must be 2–100 characters.";

  if (!values.email) errors.email = "Enter your email address.";
  else if (!EMAIL_RE.test(values.email) || values.email.length > 200) errors.email = "Enter a valid email address, like name@example.com.";

  if (!values.subject) errors.subject = "Enter a subject.";
  else if (values.subject.length < 3 || values.subject.length > 150) errors.subject = "Subject must be 3–150 characters.";

  if (!values.message) errors.message = "Write a message.";
  else if (values.message.length < 10) errors.message = "Message must be at least 10 characters.";
  else if (values.message.length > 5000) errors.message = "Message must be under 5,000 characters.";

  return { values, errors };
}

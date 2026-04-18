"use client";

import { useState } from "react";
import type { Lang } from "@/lib/site-data";

type FormContent = {
  name: string;
  namePlaceholder: string;
  email: string;
  emailPlaceholder: string;
  subject: string;
  subjectOptions: string[];
  company: string;
  message: string;
  messagePlaceholder: string;
  submit: string;
  idleStatus: string;
  sending: string;
  required: string;
  success: string;
  error: string;
};

export default function ContactForm({
  content,
  lang
}: {
  content: FormContent;
  lang: Lang;
}) {
  const [status, setStatus] = useState(content.idleStatus);
  const [isError, setIsError] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  return (
    <form
      className="contact-form-element"
      onSubmit={async (event) => {
        event.preventDefault();

        const form = event.currentTarget;
        const formData = new FormData(form);
        const name = String(formData.get("name") || "").trim();
        const email = String(formData.get("email") || "").trim();
        const message = String(formData.get("message") || "").trim();

        if (!name || !email || !message) {
          setIsError(true);
          setStatus(content.required);
          return;
        }

        setIsSubmitting(true);
        setIsError(false);
        setStatus(content.sending);

        try {
          const response = await fetch("/api/contact", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              name,
              email,
              subject: String(formData.get("subject") || "").trim(),
              message,
              hp_field: String(formData.get("hp_field") || "").trim(),
              lang
            })
          });

          const payload = (await response.json()) as { ok?: boolean; error?: string };

          if (!response.ok || payload.ok !== true) {
            setIsError(true);
            setStatus(payload.error || content.error);
            return;
          }

          form.reset();
          setIsError(false);
          setStatus(content.success);
        } catch {
          setIsError(true);
          setStatus(content.error);
        } finally {
          setIsSubmitting(false);
        }
      }}
    >
      <label>
        {content.name}
        <input name="name" placeholder={content.namePlaceholder} required type="text" />
      </label>
      <label>
        {content.email}
        <input name="email" placeholder={content.emailPlaceholder} required type="email" />
      </label>
      <label>
        {content.subject}
        <select name="subject">
          {content.subjectOptions.map((option) => (
            <option key={option}>{option}</option>
          ))}
        </select>
      </label>
      <div className="sr-only">
        <label>
          {content.company}
          <input autoComplete="off" inputMode="none" name="hp_field" tabIndex={-1} type="text" />
        </label>
      </div>
      <label>
        {content.message}
        <textarea name="message" placeholder={content.messagePlaceholder} required rows={5} />
      </label>
      <button className="cta-primary" disabled={isSubmitting} type="submit">
        {isSubmitting ? content.sending : content.submit}
      </button>
      <p className={`form-note${isError ? " is-error" : ""}`}>{status}</p>
    </form>
  );
}

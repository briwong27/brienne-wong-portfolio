"use client";

import { FormEvent, useState } from "react";
import { site } from "@/content/site";

export function ContactForm() {
  const [status, setStatus] = useState("");

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const name = String(data.get("name") ?? "").trim();
    const email = String(data.get("email") ?? "").trim();
    const message = String(data.get("message") ?? "").trim();
    const subject = encodeURIComponent(`Portfolio inquiry from ${name}`);
    const body = encodeURIComponent(`${message}\n\n— ${name} (${email})`);

    if (site.email) {
      window.location.href = `mailto:${site.email}?subject=${subject}&body=${body}`;
      setStatus("Opening your email app…");
      return;
    }

    void navigator.clipboard
      ?.writeText(`From: ${name} <${email}>\n\n${message}`)
      .then(() => {
        setStatus(
          "Copied. Paste it into an email when you have a preferred address for Brienne.",
        );
      })
      .catch(() => {
        setStatus("Thanks — add a contact email on this page later to send directly.");
      });
  }

  return (
    <form onSubmit={onSubmit}>
      <label>
        Name
        <input name="name" required autoComplete="name" />
      </label>
      <label>
        Email
        <input name="email" type="email" required autoComplete="email" />
      </label>
      <label>
        Message
        <textarea name="message" rows={6} required />
      </label>
      <button className="btn btn-primary" type="submit">
        Send message
      </button>
      {status ? <p className="note">{status}</p> : null}
    </form>
  );
}

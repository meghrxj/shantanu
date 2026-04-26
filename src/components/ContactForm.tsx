"use client";

import { useState, FormEvent } from "react";

type FormState = "idle" | "submitting" | "success" | "error";

export function ContactForm() {
  const [state, setState] = useState<FormState>("idle");

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setState("submitting");
    const data = new FormData(e.currentTarget);
    const payload = Object.fromEntries(data.entries());

    try {
      const res = await fetch("/api/quote", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      if (!res.ok) throw new Error("submit-failed");
      setState("success");
      (e.target as HTMLFormElement).reset();
    } catch {
      setState("error");
    }
  }

  return (
    <form onSubmit={onSubmit} className="space-y-6">
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
        <Field label="Your name" name="name" required />
        <Field label="Company" name="company" required />
        <Field label="Email" name="email" type="email" required />
        <Field label="Phone" name="phone" type="tel" />
      </div>

      <FieldSelect
        label="Product vertical"
        name="vertical"
        options={[
          "Packing Materials",
          "Safety Equipment & PPE",
          "Finishing & Chemicals",
          "Housekeeping & Cleaning",
          "Multiple / unsure",
        ]}
      />

      <FieldArea
        label="What do you need?"
        name="message"
        placeholder="Briefly describe quantities, sizes, brands, timelines…"
      />

      <div className="flex flex-col items-start gap-4 pt-4 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-[12px] text-ink/55">
          We respond on the same working day.
        </p>
        <button
          type="submit"
          disabled={state === "submitting"}
          className="inline-flex items-center gap-2 bg-ink text-cream px-7 py-4 text-[13px] font-semibold tracking-tight transition-all duration-300 ease-out-quint hover:bg-accent hover:text-white disabled:opacity-60"
        >
          {state === "submitting" ? "Sending…" : "Send enquiry"}
          <span aria-hidden="true">→</span>
        </button>
      </div>

      {state === "success" && (
        <div className="border border-line bg-cream p-5 text-[14px] text-ink">
          Thank you — your enquiry is in. We will be in touch shortly.
        </div>
      )}
      {state === "error" && (
        <div className="border border-ink/30 bg-cream p-5 text-[14px] text-ink">
          Something went wrong. Please email{" "}
          <a className="underline" href="mailto:shantanu.ent@gmail.com">
            shantanu.ent@gmail.com
          </a>{" "}
          directly.
        </div>
      )}
    </form>
  );
}

function Field({
  label,
  name,
  type = "text",
  required = false,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
}) {
  return (
    <label className="block">
      <span className="mb-2 block text-[11px] font-semibold uppercase tracking-[0.18em] text-ink/55">
        {label}
        {required && <span className="text-accent"> *</span>}
      </span>
      <input
        type={type}
        name={name}
        required={required}
        className="w-full border-0 border-b border-ink/20 bg-transparent px-0 py-3 text-[15px] text-ink outline-none transition-colors duration-200 focus:border-ink"
      />
    </label>
  );
}

function FieldArea({
  label,
  name,
  placeholder,
}: {
  label: string;
  name: string;
  placeholder?: string;
}) {
  return (
    <label className="block">
      <span className="mb-2 block text-[11px] font-semibold uppercase tracking-[0.18em] text-ink/55">
        {label}
      </span>
      <textarea
        name={name}
        rows={5}
        placeholder={placeholder}
        className="w-full border-0 border-b border-ink/20 bg-transparent px-0 py-3 text-[15px] text-ink outline-none transition-colors duration-200 placeholder:text-ink/30 focus:border-ink"
      />
    </label>
  );
}

function FieldSelect({
  label,
  name,
  options,
}: {
  label: string;
  name: string;
  options: string[];
}) {
  return (
    <label className="block">
      <span className="mb-2 block text-[11px] font-semibold uppercase tracking-[0.18em] text-ink/55">
        {label}
      </span>
      <select
        name={name}
        defaultValue=""
        className="w-full appearance-none border-0 border-b border-ink/20 bg-transparent px-0 py-3 text-[15px] text-ink outline-none transition-colors duration-200 focus:border-ink"
      >
        <option value="" disabled>
          Select a category…
        </option>
        {options.map((o) => (
          <option key={o} value={o}>
            {o}
          </option>
        ))}
      </select>
    </label>
  );
}

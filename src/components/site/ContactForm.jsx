"use client";

import emailjs from "@emailjs/browser";
import { useRef, useState } from "react";

const SERVICE_ID = "service_vnffu3b";
const TEMPLATE_ID = "template_4v039wg";
const PUBLIC_KEY = "eeTupei1lQv4J14Z0";

const INITIAL_FORM = {
  from_name: "",
  from_email: "",
  phone: "",
  subject: "",
  contact_method: "",
  message: "",
};

export default function ContactForm() {
  const formRef = useRef(null);
  const [form, setForm] = useState(INITIAL_FORM);
  const [status, setStatus] = useState("idle"); // idle | sending | success | error

  function handleChange(e) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setStatus("sending");
    try {
      await emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, formRef.current, {
        publicKey: PUBLIC_KEY,
      });
      setStatus("success");
      setForm(INITIAL_FORM);
    } catch {
      setStatus("error");
    }
  }

  return (
    <div>
      <h2 className="font-display text-2xl sm:text-3xl font-semibold text-[#1a1f24]">
        Send Us a Message
      </h2>
      <p className="mt-2 text-xs text-[#7f8890]">
        Fill out the form below and a member of our team will get back to you
        promptly
      </p>

      <form ref={formRef} onSubmit={handleSubmit} className="mt-6 space-y-4">
        <label className="block text-xs font-medium text-[#4c565d]">
          Full Name
          <input
            type="text"
            name="from_name"
            value={form.from_name}
            onChange={handleChange}
            required
            placeholder="Enter your full name"
            className="mt-1 w-full rounded-md border border-[#dfe5e3] bg-white px-3 py-2 text-sm outline-none focus:border-[#215f66]"
          />
        </label>

        <div className="grid gap-4 sm:grid-cols-2">
          <label className="block text-xs font-medium text-[#4c565d]">
            Email Address
            <input
              type="email"
              name="from_email"
              value={form.from_email}
              onChange={handleChange}
              required
              placeholder="Enter your email"
              className="mt-1 w-full rounded-md border border-[#dfe5e3] bg-white px-3 py-2 text-sm outline-none focus:border-[#215f66]"
            />
          </label>
          <label className="block text-xs font-medium text-[#4c565d]">
            Phone Number
            <input
              type="tel"
              name="phone"
              value={form.phone}
              onChange={handleChange}
              placeholder="Enter your phone number"
              className="mt-1 w-full rounded-md border border-[#dfe5e3] bg-white px-3 py-2 text-sm outline-none focus:border-[#215f66]"
            />
          </label>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          <label className="block text-xs font-medium text-[#4c565d]">
            Subject
            <input
              type="text"
              name="subject"
              value={form.subject}
              onChange={handleChange}
              required
              placeholder="Purpose of inquiry"
              className="mt-1 w-full rounded-md border border-[#dfe5e3] bg-white px-3 py-2 text-sm outline-none focus:border-[#215f66]"
            />
          </label>
          <label className="block text-xs font-medium text-[#4c565d]">
            Preferred Response Method
            <select
              name="contact_method"
              value={form.contact_method}
              onChange={handleChange}
              className="mt-1 w-full rounded-md border border-[#dfe5e3] bg-white px-3 py-2 text-sm outline-none focus:border-[#215f66]"
            >
              <option value="">Select</option>
              <option value="Email">Email</option>
              <option value="Phone">Phone</option>
            </select>
          </label>
        </div>

        <label className="block text-xs font-medium text-[#4c565d]">
          Message
          <textarea
            name="message"
            value={form.message}
            onChange={handleChange}
            required
            rows="4"
            placeholder="Provide details about your inquiry so we can assist you effectively"
            className="mt-1 w-full rounded-md border border-[#dfe5e3] bg-white px-3 py-2 text-sm outline-none focus:border-[#215f66]"
          />
        </label>

        {status === "success" && (
          <p className="rounded-md bg-green-50 px-3 py-2 text-xs text-green-700">
            Your message has been sent. We will get back to you shortly.
          </p>
        )}
        {status === "error" && (
          <p className="rounded-md bg-red-50 px-3 py-2 text-xs text-red-700">
            Something went wrong. Please try again or email us directly.
          </p>
        )}

        <button
          type="submit"
          disabled={status === "sending"}
          className="inline-flex w-full items-center justify-center gap-2 rounded-md bg-[#1a6268] px-4 py-3 text-sm font-medium text-white hover:bg-[#14545a] disabled:opacity-60"
        >
          {status === "sending" ? "Sending…" : "Send a Message"}
          {status !== "sending" && (
            <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M16.6915026,12.4744748 L3.50612381,13.2599618 C3.19218622,13.2599618 3.03521743,13.4170592 3.03521743,13.5741566 L1.15159189,20.0151496 C0.8376543,20.8006365 0.99,21.89 1.77946707,22.52 C2.41,22.99 3.50612381,23.1 4.13399899,22.8429026 L21.714504,14.0454487 C22.6563168,13.5741566 23.1272231,12.6315722 22.9702544,11.6889879 L4.13399899,1.16582773 C3.34915502,0.9 2.40734225,1.00636533 1.77946707,1.4776575 C0.994623095,2.10604706 0.837654326,3.0486314 1.15159189,3.99701575 L3.03521743,10.4380088 C3.03521743,10.5951061 3.19218622,10.7522035 3.50612381,10.7522035 L16.6915026,11.5376905 C16.6915026,11.5376905 17.1624089,11.5376905 17.1624089,12.0089827 C17.1624089,12.4744748 16.6915026,12.4744748 16.6915026,12.4744748 Z" />
            </svg>
          )}
        </button>
      </form>
    </div>
  );
}

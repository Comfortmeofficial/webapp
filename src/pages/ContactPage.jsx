import emailjs from "@emailjs/browser";
import { useRef, useState } from "react";
import BACKGROUND from "../assets/sections/background.jpg";
import CONTACT_TOP_BG from "../assets/sections/footer/contact_top_bg.jpg";
import CONTACT_BG from "../assets/sections/contact-us.svg";
import WOMAN_IMAGE from "../assets/sections/woman_law.svg";
import Footer from "../components/Footer";
import Header from "../components/Header";

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

function ContactPage() {
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
    <>
      <Header currentPage="contact" />
      <div
        className="flex items-center justify-center min-h-screen "
        style={{
          backgroundImage: `url(${BACKGROUND})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <main className="bg-[#f8f8f7] text-[#1f252b] w-[98vw]">
          {/* Hero */}
          <section
            className="mx-auto flex min-h-[45vh] sm:min-h-[100vh] w-full items-center justify-center px-4 pb-10 sm:pb-16 text-center sm:px-8"
            style={{
              backgroundImage: `linear-gradient(rgba(0,0,0,0.35), rgba(0,0,0,0.35)), url(${CONTACT_TOP_BG})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundAttachment: "fixed",
            }}
          >
            <h1 className="font-display text-4xl text-white sm:text-6xl">
              Contact Us
            </h1>
          </section>

          {/* Decorative band + Form card */}
          <section className="relative pb-28">
            {/* CONTACT_BG visible at top — card overlaps the bottom half */}
            <div
              className="h-36 sm:h-68 w-[70vw] mx-auto rounded-tl-3xl rounded-tr-3xl mb-[-5rem] sm:mb-[-8rem] mt-28"
              style={{
                backgroundImage: `url(${CONTACT_BG})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            />

            {/* Form card pulls up into the decorative band */}
            <div className="px-4 sm:px-8">
              <div className="relative z-10 mx-auto -mt-16 sm:-mt-24 grid gap-8 rounded-2xl w-full sm:w-[85vw] lg:w-[65vw] bg-white p-6 sm:p-10 shadow-md lg:grid-cols-[1.2fr_1fr]">
              {/* Form */}
              <div>
                <h2 className="font-display text-2xl sm:text-3xl font-semibold text-[#1a1f24]">
                  Send Us a Message
                </h2>
                <p className="mt-2 text-xs text-[#7f8890]">
                  Fill out the form below and a member of our team will get
                  back to you promptly
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
                      Preferred Contact Method
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

              {/* Contact Info */}
              <div className="space-y-4">
                {/* Map */}
                <div className="h-40 rounded-lg border border-[#e0e5e3] overflow-hidden">
                  <iframe
                    width="100%"
                    height="100%"
                    frameBorder="0"
                    src="https://maps.google.com/maps?q=Plot%2012a%2C%20Stella%20Ogunleye%20Street%2C%20off%20T.F%20Kuboye%20Street%2C%20Oniru%2C%20Lagos&output=embed"
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="w-full h-full"
                  />
                </div>

                {/* Office Address */}
                <section className="rounded-lg border border-[#e6ebea] bg-[#f9faf9] p-4">
                  <div className="flex items-start gap-3">
                    <svg className="mt-0.5 h-5 w-5 shrink-0 text-[#d32f2f]" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2m0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8m3.5-9c.83 0 1.5-.67 1.5-1.5S16.33 8 15.5 8 14 8.67 14 9.5s.67 1.5 1.5 1.5zm-7 0c.83 0 1.5-.67 1.5-1.5S9.33 8 8.5 8 7 8.67 7 9.5 7.67 11 8.5 11zm3.5 6.5c2.33 0 4.31-1.46 5.11-3.5H6.89c.8 2.04 2.78 3.5 5.11 3.5z" />
                    </svg>
                    <div>
                      <p className="text-xs text-[#7f8890]">Office Address</p>
                      <p className="mt-1 text-sm font-medium text-[#2f3941]">
                        Plot 12a, Stella Ogunleye Street, off T.F Kuboye Street, Oniru, Lagos.
                      </p>
                    </div>
                  </div>
                </section>

                {/* Phone & Email */}
                <section className="rounded-lg border border-[#e6ebea] bg-[#f9faf9] p-4 space-y-3 text-sm text-[#4e5961]">
                  <div className="flex items-center gap-2">
                    <svg className="h-4 w-4 shrink-0" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
                    </svg>
                    <span>+234 703 867 8083</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <svg className="h-4 w-4 shrink-0" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
                    </svg>
                    <span>reachbsylegal@gmail.com</span>
                  </div>
                </section>

                {/* Office Hours */}
                <section className="rounded-lg border border-[#e6ebea] bg-[#f9faf9] p-4 text-sm text-[#4e5961]">
                  <div className="flex justify-between">
                    <span>Monday – Friday</span>
                    <span className="font-medium">09:00am – 05:00pm</span>
                  </div>
                  <div className="mt-2 flex justify-between">
                    <span>Saturday</span>
                    <span className="font-medium">By Appointment</span>
                  </div>
                  <div className="mt-2 flex justify-between">
                    <span>Sunday</span>
                    <span className="font-medium">Closed</span>
                  </div>
                </section>

                {/* Social */}
                <section className="rounded-lg border border-[#e6ebea] bg-[#f9faf9] p-4">
                  <p className="text-sm font-medium text-[#2e3740]">Connect With Us</p>
                  <div className="mt-3 flex gap-4">
                    <a href="https://www.linkedin.com/company/bsy-legal/" target="_blank" rel="noopener noreferrer"
                      className="inline-flex h-8 w-8 items-center justify-center rounded-full hover:bg-[#f0f0f0]">
                      <svg className="h-5 w-5" fill="#0A66C2" viewBox="0 0 24 24">
                        <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.02-3.03-1.85-3.03-1.85 0-2.14 1.45-2.14 2.94v5.66H9.36V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.38-1.85 3.61 0 4.28 2.38 4.28 5.47v6.27zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zM7.12 20.45H3.56V9h3.56v11.45z" />
                      </svg>
                    </a>
                    <a href="https://instagram.com/bsylegal" target="_blank" rel="noopener noreferrer"
                      className="inline-flex h-8 w-8 items-center justify-center rounded-full hover:bg-[#f0f0f0]">
                      <svg className="h-5 w-5" fill="#E4405F" viewBox="0 0 24 24">
                        <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0m0 22.5C6.2 22.5 1.5 17.8 1.5 12S6.2 1.5 12 1.5 22.5 6.2 22.5 12 17.8 22.5 12 22.5m5.5-16.5h-11c-.825 0-1.5.675-1.5 1.5v11c0 .825.675 1.5 1.5 1.5h11c.825 0 1.5-.675 1.5-1.5v-11c0-.825-.675-1.5-1.5-1.5m-5.5 16c-3.314 0-6-2.686-6-6s2.686-6 6-6 6 2.686 6 6-2.686 6-6 6m3-10.5c-.828 0-1.5-.672-1.5-1.5s.672-1.5 1.5-1.5 1.5.672 1.5 1.5-.672 1.5-1.5 1.5" />
                      </svg>
                    </a>
                    <a href="https://twitter.com/bsylegal" target="_blank" rel="noopener noreferrer"
                      className="inline-flex h-8 w-8 items-center justify-center rounded-full hover:bg-[#f0f0f0]">
                      <svg className="h-5 w-5" fill="#000000" viewBox="0 0 24 24">
                        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24h-6.514l-5.106-6.694-5.829 6.694h-3.31l7.73-8.835L.424 2.25h6.68l4.881 6.236 5.259-6.236zM17.09 19.32h1.827L5.75 4.154H3.81l13.28 15.166z" />
                      </svg>
                    </a>
                  </div>
                </section>
              </div>
            </div>
            </div>
          </section>
        </main>
      </div>
      <Footer />
    </>
  );
}

export default ContactPage;

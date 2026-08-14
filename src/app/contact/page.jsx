import Header from "@/components/site/Header";
import Footer from "@/components/site/Footer";
import ContactForm from "@/components/site/ContactForm";

export const metadata = {
  title: "Contact Us | BSY Legal",
  description:
    "Get in touch with BSY Legal — fill out the form and a member of our team will get back to you promptly.",
};

const BACKGROUND = "/assets/sections/background.jpg";
const CONTACT_TOP_BG = "/assets/sections/footer/contact_top_bg.jpg";
const CONTACT_BG = "/assets/sections/contact-us.svg";
const InstagramIcon = "/assets/sections/footer/social-icons/instagram.svg";
const XIcon = "/assets/sections/footer/social-icons/x.svg";

export default function ContactPage() {
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
            <div
              className="h-36 sm:h-68 w-[70vw] mx-auto rounded-tl-3xl rounded-tr-3xl mb-[-5rem] sm:mb-[-8rem] mt-28"
              style={{
                backgroundImage: `url(${CONTACT_BG})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            />

            <div className="px-4 sm:px-8">
              <div className="relative z-10 mx-auto -mt-16 sm:-mt-24 grid gap-8 rounded-2xl w-full sm:w-[85vw] lg:w-[65vw] bg-white p-6 sm:p-10 shadow-md lg:grid-cols-[1.2fr_1fr]">
                <ContactForm />

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
                        <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5z" />
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
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img src={InstagramIcon} alt="Instagram" className="h-5 w-5" />
                      </a>
                      <a href="https://twitter.com/bsylegal" target="_blank" rel="noopener noreferrer"
                        className="inline-flex h-8 w-8 items-center justify-center rounded-full hover:bg-[#f0f0f0]">
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img src={XIcon} alt="X" className="h-5 w-5" />
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

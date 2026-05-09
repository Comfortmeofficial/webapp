import Footer from "../components/Footer";
import Header from "../components/Header";

function ContactPage() {
  return (
    <>
      <Header currentPage="contact" />
      <main className="bg-[#f4f5f2] text-[#1f252b]">
        <section className="mx-auto max-w-[90vw] px-4 py-14 text-center sm:px-8">
          <h1 className="font-display text-5xl text-[#141b20] sm:text-7xl">
            Contact Us
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-[#3f474d] sm:text-lg">
            Get in touch with our team for trusted legal advice and professional
            support tailored to your needs.
          </p>
        </section>

        <section className="mx-auto max-w-[90vw] px-4 pb-20 sm:px-8">
          <div className="rounded-2xl bg-[linear-gradient(120deg,#1d252d,#7f3f2a,#142231)] p-4 sm:p-8">
            <div className="grid gap-6 rounded-2xl bg-[#f7f7f6] p-5 sm:p-8 lg:grid-cols-[1.15fr_1fr]">
              <div>
                <h2 className="text-3xl font-semibold text-[#141b20]">
                  Send Us a Message
                </h2>
                <p className="mt-1 text-xs text-[#8b9298]">
                  Fill out the form below and a member of our team will get back
                  to you promptly.
                </p>

                <form className="mt-4 space-y-3">
                  <label className="block text-xs text-[#4c565d]">
                    Full Name
                    <input
                      type="text"
                      placeholder="Enter your full name"
                      className="mt-1 w-full rounded-md border border-[#dfe5e3] bg-white px-3 py-2 text-sm outline-none focus:border-[#215f66]"
                    />
                  </label>
                  <label className="block text-xs text-[#4c565d]">
                    Email Address
                    <input
                      type="email"
                      placeholder="Enter your email address"
                      className="mt-1 w-full rounded-md border border-[#dfe5e3] bg-white px-3 py-2 text-sm outline-none focus:border-[#215f66]"
                    />
                  </label>
                  <label className="block text-xs text-[#4c565d]">
                    Phone Number
                    <input
                      type="text"
                      placeholder="Enter your phone number"
                      className="mt-1 w-full rounded-md border border-[#dfe5e3] bg-white px-3 py-2 text-sm outline-none focus:border-[#215f66]"
                    />
                  </label>
                  <label className="block text-xs text-[#4c565d]">
                    Subject
                    <input
                      type="text"
                      placeholder="Briefly state the purpose of your inquiry"
                      className="mt-1 w-full rounded-md border border-[#dfe5e3] bg-white px-3 py-2 text-sm outline-none focus:border-[#215f66]"
                    />
                  </label>
                  <label className="block text-xs text-[#4c565d]">
                    Preferred Contact Method
                    <select className="mt-1 w-full rounded-md border border-[#dfe5e3] bg-white px-3 py-2 text-sm outline-none focus:border-[#215f66]">
                      <option>Select</option>
                      <option>Email</option>
                      <option>Phone</option>
                    </select>
                  </label>
                  <label className="block text-xs text-[#4c565d]">
                    Message
                    <textarea
                      rows="5"
                      placeholder="Provide details about your inquiry so we can assist you effectively"
                      className="mt-1 w-full rounded-md border border-[#dfe5e3] bg-white px-3 py-2 text-sm outline-none focus:border-[#215f66]"
                    />
                  </label>
                  <button
                    type="button"
                    className="inline-flex w-full items-center justify-center rounded-md bg-[#1a6268] px-4 py-3 text-sm font-medium text-white hover:bg-[#14545a]"
                  >
                    Send a Message
                  </button>
                </form>
              </div>

              <div className="space-y-3">
                <section className="rounded-md border border-[#e6ebea] bg-[#f3f5f4] p-4">
                  <p className="text-xs text-[#6f7880]">Office Address</p>
                  <p className="mt-1 text-sm text-[#2f3941]">
                    No. 12 Adeola Odeku Street, Victoria Island, Lagos, Nigeria
                  </p>
                </section>
                <div className="h-36 rounded-md border border-[#d9dddf] bg-[linear-gradient(135deg,#d8dadb,#a8d28f)]" />
                <section className="rounded-md border border-[#e6ebea] bg-[#f3f5f4] p-4 text-sm text-[#4e5961]">
                  <p>+234 1234567890</p>
                  <p className="mt-2">info@bsylegal.com</p>
                  <p className="mt-2">support@bsylegal.com</p>
                </section>
                <section className="rounded-md border border-[#e6ebea] bg-[#f3f5f4] p-4 text-sm text-[#4e5961]">
                  <div className="flex justify-between">
                    <span>Monday - Friday</span>
                    <span>09:00am-05:00pm</span>
                  </div>
                  <div className="mt-2 flex justify-between">
                    <span>Saturday</span>
                    <span>By Appointment</span>
                  </div>
                  <div className="mt-2 flex justify-between">
                    <span>Sunday</span>
                    <span>Closed</span>
                  </div>
                </section>
                <section className="rounded-md border border-[#e6ebea] bg-[#f3f5f4] p-4">
                  <p className="text-sm font-medium text-[#2e3740]">
                    Connect With Us
                  </p>
                  <div className="mt-2 flex gap-4 text-xs text-[#4f5961]">
                    <a href="#">bsylegal</a>
                    <a href="#">bsylegal</a>
                    <a href="#">bsylegal</a>
                  </div>
                </section>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

export default ContactPage;

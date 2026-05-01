import SEO from "@/components/SEO/SEO";
import { breadcrumbSchema, personSchema } from "@/components/SEO/schema";
import { Mail, MapPin, Phone, Send } from "lucide-react";

const Contact = () => {
  return (
    <main>
      <SEO
        title="Contact Niroj Shrestha"
        description="Contact Niroj Shrestha for community development collaborations, social work initiatives, speaking invitations, mentorship, and humanitarian work in Nepal."
        path="/contact"
        image="/og-image.jpg"
        keywords={[
          "contact Niroj Shrestha",
          "social worker contact Nepal",
          "community development collaboration Nepal",
          "Pharping Kathmandu social work",
        ]}
        jsonLd={[
          personSchema,
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Contact", path: "/contact" },
          ]),
        ]}
      />
      <section className="bg-[#20382b] py-16 text-[#fffaf1] md:py-24">
        <div className="story-container max-w-5xl animate-reveal-up">
          <p className="editorial-kicker text-[#f0b35a]">Contact</p>
          <h1 className="mt-5 text-[46px] font-black leading-[1.02] md:text-[76px]">
            Let us work together to make a difference.
          </h1>
          <p className="mt-6 max-w-2xl text-[18px] leading-9 text-[#e8dbc3]">
            Whether you want to collaborate, support a local initiative, invite
            Niroj to speak, or simply begin a conversation, this is a warm place
            to start.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="story-container grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
          <aside className="space-y-5">
            <div className="bg-[#fffaf1] p-6 shadow-[0_18px_45px_rgba(81,63,38,0.08)]">
              <Phone className="text-[#d96f4b]" />
              <h2 className="mt-4 text-[24px] font-black text-[#2f2a22]">Phone</h2>
              <a className="mt-2 block text-[#675b49] hover:text-[#264f36]" href="tel:+9779851013055">
                +977 9851013055
              </a>
              <a className="mt-1 block text-[#675b49] hover:text-[#264f36]" href="tel:015928105">
                015928105
              </a>
            </div>
            <div className="bg-[#fffaf1] p-6 shadow-[0_18px_45px_rgba(81,63,38,0.08)]">
              <Mail className="text-[#d96f4b]" />
              <h2 className="mt-4 text-[24px] font-black text-[#2f2a22]">Email</h2>
              <a className="mt-2 block break-words text-[#675b49] hover:text-[#264f36]" href="mailto:Niroj@pharping.org.np">
                Niroj@pharping.org.np
              </a>
            </div>
            <div className="bg-[#fffaf1] p-6 shadow-[0_18px_45px_rgba(81,63,38,0.08)]">
              <MapPin className="text-[#d96f4b]" />
              <h2 className="mt-4 text-[24px] font-black text-[#2f2a22]">Location</h2>
              <p className="mt-2 leading-7 text-[#675b49]">
                Pharping, Kathmandu
                <br />
                Bagmati Province, Nepal
              </p>
            </div>
          </aside>

          <div className="bg-[#fffaf1] p-6 shadow-[0_18px_45px_rgba(81,63,38,0.08)] md:p-10">
            <p className="editorial-kicker">Send a message</p>
            <h2 className="mt-3 text-[34px] font-black leading-[1.08] text-[#2f2a22] md:text-[46px]">
              Tell me what you hope to build, support, or learn.
            </h2>
            <form
              className="mt-8 grid gap-5"
              onSubmit={(event) => event.preventDefault()}
            >
              <div className="grid gap-2">
                <label htmlFor="name" className="font-black text-[#3f392f]">
                  Name
                </label>
                <input
                  id="name"
                  type="text"
                  required
                  placeholder="Your full name"
                  className="border border-[#d8c7ad] bg-white px-4 py-4 text-[#2f2a22] outline-none transition placeholder:text-[#9a8b75] focus:border-[#264f36]"
                />
              </div>
              <div className="grid gap-2">
                <label htmlFor="email" className="font-black text-[#3f392f]">
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  required
                  placeholder="you@example.com"
                  className="border border-[#d8c7ad] bg-white px-4 py-4 text-[#2f2a22] outline-none transition placeholder:text-[#9a8b75] focus:border-[#264f36]"
                />
              </div>
              <div className="grid gap-2">
                <label htmlFor="message" className="font-black text-[#3f392f]">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={6}
                  required
                  placeholder="Let us work together to make a difference..."
                  className="resize-y border border-[#d8c7ad] bg-white px-4 py-4 text-[#2f2a22] outline-none transition placeholder:text-[#9a8b75] focus:border-[#264f36]"
                />
              </div>
              <button
                type="submit"
                className="inline-flex w-fit items-center gap-2 rounded-full bg-[#d96f4b] px-7 py-4 font-black text-white transition hover:-translate-y-0.5 hover:bg-[#bf5737]"
              >
                Send Message <Send size={18} />
              </button>
            </form>
          </div>
        </div>
      </section>

      <section className="pb-16 md:pb-24">
        <div className="story-container overflow-hidden shadow-[0_18px_45px_rgba(81,63,38,0.08)]">
          <iframe
            src="https://www.google.com/maps?q=27.614877050065196,85.26810395805465&z=15&output=embed"
            width="100%"
            height="430"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            title="Shikharapur Community Campus location"
          />
        </div>
      </section>
    </main>
  );
};

export default Contact;

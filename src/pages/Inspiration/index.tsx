import ImageWithSashiSir from "@/assets/images/ImageWithSashiSir.jpeg";
import SashiSharmaSir from "@/assets/images/SashiSharmaSir.jpg";
import SEO from "@/components/SEO/SEO";
import { breadcrumbSchema } from "@/components/SEO/schema";
import { ArrowRight, BookOpen, HeartHandshake, Lightbulb, Sprout } from "lucide-react";
import { Link } from "react-router-dom";

const lessons = [
  {
    icon: <HeartHandshake size={22} />,
    title: "Lead by lifting others",
    text: "True leadership is measured by how many people feel stronger, braver, and more capable after walking beside you.",
  },
  {
    icon: <BookOpen size={22} />,
    title: "Keep learning close to life",
    text: "Education becomes powerful when it respects culture, place, memory, and the everyday realities of families.",
  },
  {
    icon: <Sprout size={22} />,
    title: "Build what can keep growing",
    text: "The best community work does not end with one person; it becomes a habit, a place, or a shared responsibility.",
  },
];

const legacyNotes = [
  "Mentorship that shaped Niroj's belief in service with humility.",
  "A shared commitment to sustainable development and community upliftment.",
  "A reminder that meaningful institutions are built through patience and trust.",
];

const Inspiration = () => {
  return (
    <main>
      <SEO
        title="Inspiration Behind Niroj Shrestha's Social Work"
        description="A tribute to Sir Shashi Sharma Aryal, whose mentorship shaped Niroj Shrestha's philosophy of community-centered leadership, education, and service."
        path="/inspiration"
        image="/og-image.jpg"
        keywords={[
          "Niroj Shrestha inspiration",
          "Shashi Sharma Aryal",
          "mentor social work Nepal",
          "community leadership Nepal",
        ]}
        jsonLd={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Inspiration", path: "/inspiration" },
        ])}
      />
      <section className="relative overflow-hidden bg-[#20382b] text-[#fffaf1]">
        <div className="absolute inset-0 opacity-20">
          <img
            src={ImageWithSashiSir}
            alt=""
            className="h-full w-full object-cover object-center"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-[#17261f] via-[#20382b]/90 to-[#8b4f37]/58" />
        <div className="relative story-container grid min-h-[620px] gap-10 py-16 md:py-24 lg:grid-cols-[1.05fr_0.95fr] lg:items-end">
          <div className="animate-reveal-up">
            <p className="editorial-kicker text-[#f0b35a]">My inspiration</p>
            <h1 className="mt-5 text-[46px] font-black leading-[1.02] md:text-[76px]">
              The mentor behind the mission.
            </h1>
            <p className="mt-6 max-w-2xl text-[19px] leading-9 text-[#f4e6ca]">
              A tribute to Sir Shashi Sharma Aryal, whose wisdom, discipline,
              and servant leadership continue to shape Niroj Shrestha's journey
              in education, community action, and social empowerment.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href="#legacy"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-[#f0b35a] px-6 py-4 font-black text-[#20382b] transition hover:-translate-y-0.5"
              >
                Read the tribute <ArrowRight size={18} />
              </a>
              <Link
                to="/about"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-white/45 px-6 py-4 font-black text-white transition hover:-translate-y-0.5 hover:bg-white/12"
              >
                Niroj's journey
              </Link>
            </div>
          </div>

          <div className="animate-soft-scale">
            <img
              src={SashiSharmaSir}
              alt="Sir Shashi Sharma Aryal"
              className="aspect-[4/5] w-full object-cover object-[65%_center] shadow-[0_24px_70px_rgba(0,0,0,0.35)]"
            />
            <div className="bg-[#fffaf1] p-5 text-[#2f2a22]">
              <p className="text-[22px] font-black leading-8">
                Sir Shashi Sharma Aryal
              </p>
              <p className="mt-2 text-[15px] font-semibold leading-7 text-[#675b49]">
                A guiding presence in Niroj's philosophy of community-centered
                leadership.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="legacy" className="py-18 md:py-24">
        <div className="story-container grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
          <div>
            <p className="editorial-kicker">The relationship</p>
            <h2 className="mt-4 text-[38px] font-black leading-[1.08] text-[#2f2a22] md:text-[56px]">
              A bond beyond the classroom.
            </h2>
          </div>
          <div className="space-y-6 text-[18px] leading-9 text-[#5f5546]">
            <p>
              For Niroj, mentorship has never been a distant idea. It has been a
              living relationship: someone who listens, challenges, models
              courage, and shows what public service can look like when it is
              practiced with patience.
            </p>
            <p>
              Sir Shashi Sharma Aryal's influence helped Niroj see leadership as
              a responsibility to create space for others. His example connected
              education with compassion, sustainability with discipline, and
              community work with deep personal integrity.
            </p>
            <p>
              That guidance continues to echo through Niroj's work with youth,
              women, farmers, learning centers, and local institutions. The
              tribute is not only about gratitude; it is about carrying a set of
              values forward.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-[#f4ead9] py-18 md:py-24">
        <div className="story-container">
          <div className="max-w-3xl">
            <p className="editorial-kicker">Lessons carried forward</p>
            <h2 className="mt-4 text-[38px] font-black leading-[1.08] text-[#2f2a22] md:text-[56px]">
              The values that became part of the work.
            </h2>
          </div>
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {lessons.map((lesson) => (
              <article
                key={lesson.title}
                className="bg-[#fffaf1] p-7 shadow-[0_18px_45px_rgba(81,63,38,0.08)]"
              >
                <div className="inline-flex h-12 w-12 items-center justify-center bg-[#264f36] text-white">
                  {lesson.icon}
                </div>
                <h3 className="mt-6 text-[25px] font-black text-[#2f2a22]">
                  {lesson.title}
                </h3>
                <p className="mt-4 text-[15px] leading-7 text-[#675b49]">
                  {lesson.text}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="py-18 md:py-24">
        <div className="story-container grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div className="order-2 lg:order-1">
            <p className="editorial-kicker">Shared vision</p>
            <h2 className="mt-4 text-[38px] font-black leading-[1.08] text-[#2f2a22] md:text-[56px]">
              Inspiration becomes meaningful when it becomes action.
            </h2>
            <div className="mt-8 grid gap-4">
              {legacyNotes.map((note, index) => (
                <div key={note} className="flex gap-5 border-t border-[#d8c7ad] pt-5">
                  <span className="text-[34px] font-black text-[#d96f4b]">
                    0{index + 1}
                  </span>
                  <p className="pt-2 text-[20px] font-bold leading-8 text-[#332d25]">
                    {note}
                  </p>
                </div>
              ))}
            </div>
          </div>
          <div className="order-1 lg:order-2">
            <img
              src={ImageWithSashiSir}
              alt="Niroj Shrestha with Sir Shashi Sharma Aryal"
              className="aspect-[4/3] w-full object-cover shadow-[0_24px_70px_rgba(44,35,24,0.18)]"
            />
            <div className="bg-[#d96f4b] p-5 text-white">
              <Lightbulb className="mb-3" />
              <p className="text-[22px] font-black leading-8">
                A teacher's influence can become a community's future when the
                lesson is lived, not just remembered.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#20382b] py-16 text-[#fffaf1]">
        <div className="story-container flex flex-col gap-7 md:flex-row md:items-center md:justify-between">
          <div className="max-w-2xl">
            <p className="editorial-kicker text-[#f0b35a]">Continuing the legacy</p>
            <h2 className="mt-3 text-[34px] font-black leading-[1.08] md:text-[50px]">
              The best tribute is work that keeps serving people.
            </h2>
          </div>
          <Link
            to="/projects"
            className="inline-flex w-fit items-center justify-center gap-2 rounded-full bg-[#f0b35a] px-6 py-4 font-black text-[#20382b]"
          >
            See the impact <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </main>
  );
};

export default Inspiration;

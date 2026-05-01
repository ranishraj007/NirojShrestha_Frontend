import NirojShrestha from "@/assets/images/NirojShresthaImage.jpeg";
import SEO from "@/components/SEO/SEO";
import { breadcrumbSchema, personSchema } from "@/components/SEO/schema";
import { ArrowRight, Compass, GraduationCap, HeartHandshake, Sprout } from "lucide-react";
import { Link } from "react-router-dom";

const values = [
  {
    icon: <HeartHandshake size={22} />,
    title: "Human dignity",
    text: "Every program begins with respect for the people who know their community best.",
  },
  {
    icon: <GraduationCap size={22} />,
    title: "Lifelong learning",
    text: "Education is not limited to classrooms; it grows through culture, skills, reflection, and shared practice.",
  },
  {
    icon: <Sprout size={22} />,
    title: "Sustainable action",
    text: "Good work should last after the event ends, so communities can maintain and adapt it themselves.",
  },
];

const milestones = [
  {
    year: "Roots",
    title: "Raised in Dakshinkali",
    text: "Niroj's early life in a Newari community shaped his belief that identity, place, and learning belong together.",
  },
  {
    year: "Study",
    title: "Master's in Social Work",
    text: "At St. Xavier's College, he deepened the social work lens that guides his field practice today.",
  },
  {
    year: "Build",
    title: "Shikharapur Community Campus and CLC",
    text: "He helped create learning spaces that connect education with local leadership, culture, and livelihood.",
  },
  {
    year: "Share",
    title: "Representing Nepal globally",
    text: "Through IVLP, ESD exchange programs, and international conferences, he carries local lessons into global conversations.",
  },
];

const About = () => {
  return (
    <main>
      <SEO
        title="About Niroj Shrestha"
        description="Learn about Niroj Shrestha's journey as a social worker, educator, Shikharapur Community Campus founder, and community learning practitioner in Nepal."
        path="/about"
        image="/og-image.jpg"
        type="profile"
        keywords={[
          "about Niroj Shrestha",
          "Niroj Shrestha biography",
          "social worker Kathmandu",
          "Shikharapur Community Campus",
          "St Xavier's College social work",
        ]}
        jsonLd={[
          personSchema,
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "About", path: "/about" },
          ]),
        ]}
      />
      <section className="bg-[#20382b] py-16 text-[#fffaf1] md:py-24">
        <div className="story-container grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <div className="animate-reveal-up">
            <p className="editorial-kicker text-[#f0b35a]">About Niroj</p>
            <h1 className="mt-5 text-[46px] font-black leading-[1.02] md:text-[74px]">
              A life shaped by service, learning, and community trust.
            </h1>
            <p className="mt-6 max-w-2xl text-[18px] leading-9 text-[#e8dbc3]">
              Niroj Shrestha is a social worker, educator, and community learning
              practitioner from Pharping, Kathmandu. His work is rooted in a
              simple conviction: when people are trusted with knowledge,
              opportunity, and dignity, communities begin to transform from
              within.
            </p>
            <Link
              to="/projects"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-[#f0b35a] px-6 py-4 font-black text-[#20382b] transition hover:-translate-y-0.5"
            >
              Explore his impact <ArrowRight size={18} />
            </Link>
          </div>
          <div className="relative animate-soft-scale">
            <img
              src={NirojShrestha}
              alt="Niroj Shrestha"
              className="aspect-[4/5] w-full object-cover shadow-[0_24px_70px_rgba(0,0,0,0.28)]"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-[#d96f4b] p-5 text-white">
              <p className="text-[21px] font-black leading-7">
                "The most meaningful change is built with people, not for them."
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-18 md:py-24">
        <div className="story-container grid gap-10 lg:grid-cols-[0.85fr_1.15fr]">
          <div>
            <p className="editorial-kicker">Personal journey</p>
            <h2 className="mt-4 text-[38px] font-black leading-[1.08] md:text-[56px]">
              From a local community to lifelong public service.
            </h2>
          </div>
          <div className="space-y-6 text-[18px] leading-9 text-[#5f5546]">
            <p>
              Born in Dakshinkali Municipality, Niroj grew up surrounded by the
              strength of community life: shared rituals, local knowledge,
              neighborly care, and the everyday challenges families face when
              opportunity is uneven.
            </p>
            <p>
              Social work became his way of responding to that reality. After
              earning his Master's in Social Work from St. Xavier's College, he
              committed himself to education and lifelong learning as practical
              tools for equity.
            </p>
            <p>
              As Founder and Principal of Shikharapur Community Campus and an
              initiator of Shikharapur Community Learning Center, he has helped
              create places where youth, women, farmers, and local leaders can
              gather, learn, and build confidence together.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-[#f4ead9] py-18 md:py-24">
        <div className="story-container">
          <div className="max-w-3xl">
            <p className="editorial-kicker">Values and mission</p>
            <h2 className="mt-4 text-[38px] font-black leading-[1.08] md:text-[56px]">
              The mission is warm in spirit and practical in action.
            </h2>
          </div>
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {values.map((value) => (
              <article key={value.title} className="bg-[#fffaf1] p-7 shadow-[0_18px_45px_rgba(81,63,38,0.08)]">
                <div className="inline-flex h-12 w-12 items-center justify-center bg-[#264f36] text-white">
                  {value.icon}
                </div>
                <h3 className="mt-6 text-[25px] font-black text-[#2f2a22]">
                  {value.title}
                </h3>
                <p className="mt-4 text-[15px] leading-7 text-[#675b49]">
                  {value.text}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="py-18 md:py-24">
        <div className="story-container grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <p className="editorial-kicker">Timeline</p>
            <h2 className="mt-4 text-[38px] font-black leading-[1.08] md:text-[56px]">
              A journey of learning, building, and sharing.
            </h2>
          </div>
          <div className="space-y-4">
            {milestones.map((item) => (
              <article key={item.title} className="grid gap-4 border-t border-[#d8c7ad] py-6 md:grid-cols-[120px_1fr]">
                <div className="flex items-center gap-2 text-[#b15b3f]">
                  <Compass size={18} />
                  <span className="font-black">{item.year}</span>
                </div>
                <div>
                  <h3 className="text-[26px] font-black text-[#2f2a22]">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-[16px] leading-8 text-[#675b49]">
                    {item.text}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default About;

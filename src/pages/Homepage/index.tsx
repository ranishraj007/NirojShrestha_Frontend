import NirojImage from "@/assets/images/NirojShresthaImage.jpeg";
import FieldImage from "@/assets/images/backgroundImage.jpeg";
import CommunityImage from "@/assets/images/HeroSectionBGImage.png";
import SEO from "@/components/SEO/SEO";
import { personSchema, websiteSchema } from "@/components/SEO/schema";
import { articles, blogs, projects } from "@/staticData";
import { ArrowRight, BookOpen, HandHeart, Leaf, MapPin, Users } from "lucide-react";
import { Link } from "react-router-dom";

const impactStats = [
  { value: "20+", label: "years nurturing community learning" },
  { value: "4", label: "countries represented through exchange and advocacy" },
  { value: "1000+", label: "learners reached through education initiatives" },
];

const values = [
  {
    icon: <BookOpen size={22} />,
    title: "Learning as dignity",
    text: "Education is treated as a lifelong path where children, youth, women, and elders all have a place to grow.",
  },
  {
    icon: <Leaf size={22} />,
    title: "Sustainability made local",
    text: "Ideas like the Bottle House Project turn environmental care into something a community can see, touch, and maintain.",
  },
  {
    icon: <HandHeart size={22} />,
    title: "Service with humility",
    text: "The work begins by listening first, then building practical programs that respond to real needs.",
  },
];

const storySteps = [
  "A child finds a classroom that welcomes curiosity.",
  "A woman learns a skill that can support her family.",
  "A young person discovers leadership close to home.",
  "A community sees that change can grow from its own hands.",
];

const Homepage = () => {
  const featuredProjects = projects.slice(0, 3);
  const featuredStories = [...blogs.slice(0, 2), articles[0]].filter(Boolean);

  return (
    <main className="overflow-hidden">
      <SEO
        title="Niroj Shrestha | Social Worker and Community Impact Leader in Nepal"
        description="Explore Niroj Shrestha's community work in Nepal, including lifelong learning, sustainability, youth leadership, women's empowerment, and humanitarian initiatives."
        path="/"
        image="/og-image.jpg"
        keywords={[
          "Niroj Shrestha",
          "social worker Nepal",
          "community impact Nepal",
          "Pharping Kathmandu",
          "Shikharapur Community Campus",
          "lifelong learning Nepal",
          "humanitarian work Nepal",
        ]}
        jsonLd={[websiteSchema, personSchema]}
      />
      <section
        className="relative min-h-[calc(100vh-76px)] bg-cover bg-center md:min-h-[calc(100vh-88px)]"
        style={{ backgroundImage: `url(${FieldImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-[#17261f]/88 via-[#264f36]/66 to-[#8b4f37]/38" />
        <div className="relative story-container flex min-h-[calc(100vh-76px)] items-center py-14 md:min-h-[calc(100vh-88px)]">
          <div className="max-w-4xl animate-reveal-up text-white">
            <p className="editorial-kicker text-[#f0b35a]">Social worker from Pharping, Kathmandu</p>
            <h1 className="mt-5 text-[48px] font-black leading-[0.98] md:text-[76px] lg:text-[92px]">
              Niroj Shrestha
            </h1>
            <p className="mt-6 max-w-2xl text-[22px] font-semibold leading-8 text-[#fff4df] md:text-[30px] md:leading-10">
              Working towards a better community through education, dignity, and
              sustainable local action.
            </p>
            <p className="mt-5 max-w-2xl text-[16px] leading-8 text-[#f7e8ce] md:text-[18px]">
              From community learning centers to youth leadership and women-led
              entrepreneurship, his work turns compassion into practical systems
              that people can carry forward.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                to="/projects"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-[#f0b35a] px-6 py-4 font-black text-[#20382b] transition hover:-translate-y-0.5 hover:bg-[#ffd27d]"
              >
                View My Work <ArrowRight size={18} />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-white/45 px-6 py-4 font-black text-white transition hover:-translate-y-0.5 hover:bg-white/12"
              >
                Get in Touch
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#fbf7ee] py-12">
        <div className="story-container grid gap-4 md:grid-cols-3">
          {impactStats.map((stat, index) => (
            <div
              key={stat.label}
              className="animate-reveal-up border-l-4 border-[#d96f4b] bg-[#fffaf1] px-6 py-7 shadow-[0_18px_45px_rgba(81,63,38,0.08)]"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <strong className="block text-[42px] font-black text-[#264f36]">
                {stat.value}
              </strong>
              <span className="mt-2 block text-[15px] font-semibold leading-6 text-[#675b49]">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </section>

      <section className="py-18 md:py-24">
        <div className="story-container grid gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <div className="relative animate-soft-scale">
            <img
              src={NirojImage}
              alt="Niroj Shrestha"
              className="aspect-[4/5] w-full object-cover shadow-[0_24px_70px_rgba(44,35,24,0.22)]"
            />
            <div className="absolute bottom-6 left-6 right-6 bg-[#fffaf1]/94 p-5 backdrop-blur">
              <p className="text-[20px] font-black leading-7 text-[#264f36]">
                "Community work is not a single event. It is a promise to keep
                showing up."
              </p>
            </div>
          </div>

          <div className="animate-reveal-up">
            <p className="editorial-kicker">Who I am</p>
            <h2 className="mt-4 text-[40px] font-black leading-[1.05] text-[#2f2a22] md:text-[58px]">
              A teacher, organizer, and lifelong learner shaped by community.
            </h2>
            <p className="mt-6 text-[18px] leading-9 text-[#5f5546]">
              Born in a Newari community in Dakshinkali Municipality, Niroj has
              spent his career building spaces where people feel seen and capable.
              His work connects formal education, local culture, sustainability,
              and social service into one shared mission.
            </p>
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {["Founder and Principal, Shikharapur Community Campus", "Initiator, Shikharapur Community Learning Center", "Master's in Social Work, St. Xavier's College", "MPhil scholar, Tribhuvan University"].map(
                (item) => (
                  <div key={item} className="border-t border-[#d8c7ad] pt-4 text-[15px] font-bold leading-6 text-[#3f392f]">
                    {item}
                  </div>
                ),
              )}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#20382b] py-18 text-[#fffaf1] md:py-24">
        <div className="story-container">
          <div className="max-w-3xl">
            <p className="editorial-kicker text-[#f0b35a]">What I do</p>
            <h2 className="mt-4 text-[38px] font-black leading-[1.08] md:text-[56px]">
              The work begins with listening, then becomes a program people can own.
            </h2>
          </div>

          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {values.map((value) => (
              <article key={value.title} className="border border-white/12 bg-white/7 p-6">
                <div className="inline-flex h-12 w-12 items-center justify-center bg-[#f0b35a] text-[#20382b]">
                  {value.icon}
                </div>
                <h3 className="mt-6 text-[24px] font-black">{value.title}</h3>
                <p className="mt-4 text-[15px] leading-7 text-[#e7dac3]">{value.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="py-18 md:py-24">
        <div className="story-container grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="editorial-kicker">Why it matters</p>
            <h2 className="mt-4 text-[38px] font-black leading-[1.08] md:text-[56px]">
              Impact is strongest when people recognize themselves in the solution.
            </h2>
            <p className="mt-6 text-[17px] leading-8 text-[#5f5546]">
              Community development can sound abstract. In practice, it is a set
              of ordinary moments that change what a family believes is possible.
            </p>
          </div>
          <div className="grid gap-4">
            {storySteps.map((step, index) => (
              <div key={step} className="flex gap-5 border-b border-[#dacbb6] pb-5">
                <span className="text-[34px] font-black text-[#d96f4b]">
                  0{index + 1}
                </span>
                <p className="pt-2 text-[22px] font-bold leading-8 text-[#332d25]">
                  {step}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#f4ead9] py-18 md:py-24">
        <div className="story-container">
          <div className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
            <div className="max-w-3xl">
              <p className="editorial-kicker">Impact in action</p>
              <h2 className="mt-4 text-[38px] font-black leading-[1.08] md:text-[56px]">
                Projects told through problem, action, and result.
              </h2>
            </div>
            <Link to="/projects" className="inline-flex w-fit items-center gap-2 rounded-full bg-[#264f36] px-5 py-3 font-black text-white">
              See all impact <ArrowRight size={18} />
            </Link>
          </div>

          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            {featuredProjects.map((project) => (
              <Link
                key={project.id}
                to={`/projects/${project.slug}`}
                className="group bg-[#fffaf1] shadow-[0_18px_45px_rgba(81,63,38,0.08)] transition hover:-translate-y-1"
              >
                <img src={project.image} alt="" className="h-64 w-full object-cover" />
                <div className="p-6">
                  <p className="text-[13px] font-black uppercase tracking-[0.14em] text-[#b15b3f]">
                    {project.category} / {project.location}
                  </p>
                  <h3 className="mt-3 text-[26px] font-black leading-8 text-[#2f2a22]">
                    {project.title}
                  </h3>
                  <p className="mt-4 text-[15px] leading-7 text-[#675b49]">
                    {project.description}
                  </p>
                  <span className="mt-6 inline-flex items-center gap-2 font-black text-[#264f36]">
                    Read the field story <ArrowRight size={17} />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-18 md:py-24">
        <div className="story-container grid gap-10 lg:grid-cols-[1fr_0.9fr] lg:items-center">
          <div>
            <p className="editorial-kicker">Field notes</p>
            <h2 className="mt-4 text-[38px] font-black leading-[1.08] md:text-[56px]">
              Stories, lessons, and reflections from the work.
            </h2>
            <div className="mt-8 grid gap-4">
              {featuredStories.map((story) => (
                <Link
                  key={story.id}
                  to={`${blogs.includes(story) ? "/blog" : "/articles"}/${story.slug}`}
                  className="group flex items-start justify-between gap-6 border-t border-[#d8c7ad] py-5"
                >
                  <div>
                    <p className="text-[13px] font-black uppercase tracking-[0.14em] text-[#b15b3f]">
                      {story.category}
                    </p>
                    <h3 className="mt-2 text-[24px] font-black leading-8 text-[#2f2a22]">
                      {story.title}
                    </h3>
                    <p className="mt-2 text-[15px] leading-7 text-[#675b49]">
                      {story.description}
                    </p>
                  </div>
                  <ArrowRight className="mt-8 shrink-0 text-[#264f36] transition group-hover:translate-x-1" />
                </Link>
              ))}
            </div>
          </div>
          <div
            className="min-h-[520px] bg-cover bg-center"
            style={{ backgroundImage: `url(${CommunityImage})` }}
            aria-label="Community work in Nepal"
          >
            <div className="flex h-full min-h-[520px] items-end bg-gradient-to-t from-[#20382b]/82 to-transparent p-7">
              <div className="text-white">
                <MapPin className="mb-3 text-[#f0b35a]" />
                <p className="text-[24px] font-black leading-8">
                  Rooted in Pharping, connected to learning communities across Nepal and beyond.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#d96f4b] py-16 text-white">
        <div className="story-container flex flex-col gap-7 md:flex-row md:items-center md:justify-between">
          <div className="max-w-2xl">
            <p className="editorial-kicker text-[#ffe2b1]">Get involved</p>
            <h2 className="mt-3 text-[34px] font-black leading-[1.08] md:text-[50px]">
              Let us work together to make a difference.
            </h2>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row">
            <Link to="/contact" className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-6 py-4 font-black text-[#b15b3f]">
              Support the Cause <Users size={18} />
            </Link>
            <Link to="/about" className="inline-flex items-center justify-center gap-2 rounded-full border border-white/55 px-6 py-4 font-black text-white">
              Read Niroj's Story
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Homepage;

import SEO from "@/components/SEO/SEO";
import { breadcrumbSchema } from "@/components/SEO/schema";
import { projects } from "@/staticData";
import { ArrowRight, CheckCircle2, MapPin, Wrench } from "lucide-react";
import { Link } from "react-router-dom";

const Projects = () => {
  return (
    <main>
      <SEO
        title="Community Impact Projects in Nepal"
        description="Explore Niroj Shrestha's social work projects and community initiatives across Nepal, told through problems, actions, and real-world impact."
        path="/projects"
        image="/og-image.jpg"
        keywords={[
          "community projects Nepal",
          "social initiatives Nepal",
          "Niroj Shrestha projects",
          "education projects Nepal",
          "women empowerment projects Nepal",
          "youth leadership Nepal",
        ]}
        jsonLd={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Impact", path: "/projects" },
        ])}
      />
      <section
        className="relative min-h-[520px] bg-cover bg-center"
        style={{ backgroundImage: `url(${projects[0]?.image ?? ""})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-[#17261f]/88 via-[#264f36]/68 to-[#d96f4b]/32" />
        <div className="relative story-container flex min-h-[520px] items-center py-16 text-white">
          <div className="max-w-4xl animate-reveal-up">
            <p className="editorial-kicker text-[#f0b35a]">Work and impact</p>
            <h1 className="mt-5 text-[46px] font-black leading-[1.02] md:text-[76px]">
              Community initiatives with a human story at the center.
            </h1>
            <p className="mt-6 max-w-2xl text-[18px] leading-9 text-[#f7e8ce]">
              Each initiative begins with a real problem, grows through local
              participation, and aims to leave behind confidence, skills, and
              systems that continue after the project ends.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="story-container grid gap-7">
          {projects.map((project, index) => (
            <Link
              key={project.id}
              to={`/projects/${project.slug}`}
              className="group grid overflow-hidden bg-[#fffaf1] shadow-[0_18px_45px_rgba(81,63,38,0.08)] transition hover:-translate-y-1 lg:grid-cols-[0.78fr_1.22fr]"
            >
              <div className="relative min-h-[300px] overflow-hidden">
                <img
                  src={project.image}
                  alt=""
                  className="h-full min-h-[300px] w-full object-cover transition duration-700 group-hover:scale-105"
                />
                <span className="absolute left-5 top-5 bg-[#fffaf1] px-4 py-2 text-[12px] font-black uppercase tracking-[0.14em] text-[#264f36]">
                  {project.category}
                </span>
              </div>
              <div className="grid gap-6 p-6 md:p-9">
                <div className="flex flex-wrap gap-3 text-[13px] font-black uppercase tracking-[0.12em] text-[#b15b3f]">
                  <span className="inline-flex items-center gap-2">
                    <MapPin size={15} /> {project.location}
                  </span>
                  <span>{project.status}</span>
                </div>
                <div>
                  <p className="text-[15px] font-black text-[#d96f4b]">
                    Impact story 0{index + 1}
                  </p>
                  <h2 className="mt-2 text-[32px] font-black leading-[1.08] text-[#2f2a22] md:text-[46px]">
                    {project.title}
                  </h2>
                  <p className="mt-4 max-w-3xl text-[17px] leading-8 text-[#675b49]">
                    {project.description}
                  </p>
                </div>
                <div className="grid gap-4 md:grid-cols-3">
                  <div className="border-t border-[#d8c7ad] pt-4">
                    <h3 className="font-black text-[#2f2a22]">Problem</h3>
                    <p className="mt-2 text-[14px] leading-6 text-[#675b49]">
                      A community need was limiting access, confidence, or local opportunity.
                    </p>
                  </div>
                  <div className="border-t border-[#d8c7ad] pt-4">
                    <h3 className="inline-flex items-center gap-2 font-black text-[#2f2a22]">
                      <Wrench size={16} /> Action
                    </h3>
                    <p className="mt-2 text-[14px] leading-6 text-[#675b49]">
                      Local people, partners, and learners worked together through practical steps.
                    </p>
                  </div>
                  <div className="border-t border-[#d8c7ad] pt-4">
                    <h3 className="inline-flex items-center gap-2 font-black text-[#2f2a22]">
                      <CheckCircle2 size={16} /> Impact
                    </h3>
                    <p className="mt-2 text-[14px] leading-6 text-[#675b49]">
                      The result created momentum that people could continue building on.
                    </p>
                  </div>
                </div>
                <span className="inline-flex w-fit items-center gap-2 font-black text-[#264f36]">
                  Open the full story <ArrowRight size={18} />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
};

export default Projects;

import { useState, useEffect } from "react";
import ProjectCards from "./HomepageCards/ProjectCards";
import { getLatestItems } from "@/lib/content";
import { projects } from "@/staticData";

const ProjectSection = () => {
  const featuredProjects = getLatestItems(projects, 3).map((project) => ({
    title: project.title,
    description: project.description,
    category: project.category,
    image: project.image,
    link: `/projects/${project.slug}`,
  }));
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % featuredProjects.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [featuredProjects.length]);

  return (
    <div className="pt-[48px] px-[31px] flex flex-col gap-[18px] lg:gap-[24px]">
      <div className="flex flex-col justify-center text-center text-[#424242] gap-[16px]">
        <h1 className="lg:text-[49px] text-[30px] font-[700] leading-[100%]">
          Community Initiatives in Action
        </h1>
        <h1 className="lg:text-[24px] text-[16px] font-[400] leading-[150%]">
          Real projects creating lasting impact in rural Nepal, one community at
          a time
        </h1>
      </div>

      {/* project card in carousel */}
      <div className="flex flex-col items-center py-[16px] w-full">
        <div className="w-full overflow-hidden px-[10px] pb-[10px]">
          <div
            className="flex transition-transform duration-500 ease-in-out w-full"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {featuredProjects.map((project, index) => (
              <div
                key={index}
                className="w-full shrink-0 flex justify-center gap-[10px]"
              >
                <ProjectCards project={project} />
              </div>
            ))}
          </div>
        </div>

        {/* three dot of carousel */}
        <div className="flex justify-center items-center gap-[8px] mt-[14px]">
          {featuredProjects.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-[12px] h-[12px] rounded-full transition-colors ${
                index === currentIndex
                  ? "bg-[#2BBD06] hover:bg-[#2BBD06]"
                  : "bg-[#e0e0e0] hover:bg-[#bdbdbd]"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectSection;

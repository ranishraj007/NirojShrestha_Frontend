import { useState, useEffect } from "react";
import ProjectCards from "./HomepageCards/ProjectCards";
import CardImage from "@/assets/images/CardImage.png";

const projects = [
  {
    title: "Project 1",
    description: "Description of Project 1",
    category: "Education",
    image: CardImage,
    link: "#",
  },
  {
    title: "Project 2",
    description: "Description of Project 2",
    category: "Agriculture",
    image: CardImage,
    link: "#",
  },
  {
    title: "Project 3",
    description: "Description of Project 3",
    category: "Health",
    image: CardImage,
    link: "#",
  },
];

const ProjectSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % projects.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

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
            {projects.map((project, index) => (
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
          {projects.map((_, index) => (
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

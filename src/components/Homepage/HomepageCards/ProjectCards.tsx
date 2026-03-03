interface Project {
  title: string;
  description: string;
  category: string;
  image: string;
  link: string;
}

const ProjectCards = ({ project }: { project: Project }) => {
  const Navigate = () => {
    window.open(project.link, "_blank");
  };
  return (
    // #00000040
    <div className="flex flex-col md:flex-row rounded-[32px] shadow-md shadow-[#00000040] overflow-hidden bg-[#FFFFFF] w-full ">
      {/* left side  */}
      <div
        className="lg:w-[50%] w-full h-[300px] md:h-[890px]"
        style={{
          backgroundImage: `url(${project.image})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="h-full w-full bg-gradient-to-b from-[#00000000] to-[#2E7D3299] pt-[27px] pl-[32px]">
          <span className="text-[#2E7D32] rounded-full bg-[#FFFFFFF2] px-[18px] py-[10px] shadow-[0px_5.25px_7.88px_-5.25px_#0000001A,0px_13.14px_19.7px_-3.94px_#0000001A]">
            {project.category}
          </span>
        </div>
      </div>
      {/* right side */}
      <div className="w-full lg:w-[50%] flex items-center py-[20px]">
        <div className="px-[30px] lg:px-[63px] flex flex-col gap-[16px]">
          {/* Badge */}
          <span className="w-fit text-[#2E7D32] bg-[#2E7D321A] px-[24px] py-[6px] rounded-full text-[13px] lg:text-[16px] font-[700] leading-[100%]">
            Featured Project
          </span>

          {/* Main Title */}
          <h2 className="text-[#424242] text-[24px] lg:text-[49px] font-[700] leading-[110%]">
            {project.title}
          </h2>

          {/* Description */}
          <p className="text-[#424242] text-[16px] lg:text-[24px] font-[400] leading-[140%]">
            {project.description}
          </p>

          {/* CTA */}
          <button
            onClick={Navigate}
            className="w-fit cursor-pointer text-[16px] lg:text-[24px] font-[700] text-[#449548] leading-[100%]"
          >
            Explore this project
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProjectCards;

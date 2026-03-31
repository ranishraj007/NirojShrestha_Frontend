import { Link } from "react-router-dom";
import { getLatestItems } from "@/lib/content";
import { projects } from "@/staticData";

const Projects = () => {
  const projectItems = getLatestItems(projects, projects.length);

  return (
    <div className="flex min-h-screen w-full flex-col">
      <div
        className="relative flex h-[400px] w-full items-center justify-center bg-cover bg-center md:h-[500px]"
        style={{ backgroundImage: `url('${projectItems[0]?.image ?? ""}')` }}
      >
        <div className="absolute inset-0 z-0 bg-black/55"></div>
        <div className="relative z-10 flex max-w-[900px] flex-col items-center justify-center gap-4 px-[20px] text-center text-white">
          <h1 className="text-[36px] font-[700] leading-[110%] md:text-[56px]">
            Projects
          </h1>
          <p className="text-[16px] font-[400] md:text-[24px]">
            Explore the community projects and initiatives creating impact
            across Nepal.
          </p>
        </div>
      </div>

      <div className="grid w-full grid-cols-1 gap-[30px] px-[20px] py-[40px] md:px-[40px] lg:px-[80px]">
        {projectItems.map((project) => (
          <Link
            key={project.id}
            to={`/projects/${project.slug}`}
            className="overflow-hidden rounded-[32px] bg-white shadow-md shadow-[#00000020] transition-transform duration-300 hover:scale-[1.01]"
          >
            <div className="grid grid-cols-1 md:grid-cols-[340px_minmax(0,1fr)]">
              <div
                className="min-h-[260px] bg-cover bg-center"
                style={{ backgroundImage: `url(${project.image})` }}
              >
                <div className="flex h-full w-full items-start bg-gradient-to-b from-[#00000000] to-[#2E7D3299] p-[24px]">
                  <span className="rounded-full bg-[#FFFFFFF2] px-[18px] py-[10px] text-[#2E7D32] shadow-[0px_5.25px_7.88px_-5.25px_#0000001A,0px_13.14px_19.7px_-3.94px_#0000001A]">
                    {project.category}
                  </span>
                </div>
              </div>
              <div className="flex flex-col gap-[16px] p-[24px] md:p-[36px]">
                <span className="w-fit rounded-full bg-[#2E7D321A] px-[18px] py-[8px] text-[14px] font-[700] text-[#2E7D32]">
                  {project.status}
                </span>
                <h2 className="text-[28px] font-[700] leading-[110%] text-[#424242] md:text-[40px]">
                  {project.title}
                </h2>
                <p className="text-[16px] leading-[150%] text-[#424242] md:text-[20px]">
                  {project.description}
                </p>
                <p className="text-[15px] font-[500] text-[#616161]">
                  {project.location}
                </p>
                <span className="w-fit text-[16px] font-[700] text-[#449548]">
                  Explore this project
                </span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Projects;

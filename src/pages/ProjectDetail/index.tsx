import { useNavigate, useParams } from "react-router-dom";
import { formatContentDate } from "@/lib/content";
import { projects } from "@/staticData";

const ProjectDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const project = projects.find((item) => item.slug === slug);

  if (!project) {
    return (
      <div className="flex min-h-[60vh] w-full flex-col items-center justify-center gap-[20px]">
        <h1 className="text-[32px] font-bold text-[#424242]">
          Project Not Found
        </h1>
        <button
          type="button"
          onClick={() => navigate("/projects")}
          className="rounded-full bg-[#2E7D32] px-[24px] py-[10px] font-[700] text-white"
        >
          Back to Projects
        </button>
      </div>
    );
  }

  return (
    <div className="flex min-h-screen w-full flex-col pb-[60px]">
      <div
        className="relative flex h-[320px] w-full flex-col justify-end bg-cover bg-center md:h-[520px]"
        style={{ backgroundImage: `url(${project.image})` }}
      >
        <div className="absolute inset-0 z-0 bg-gradient-to-t from-black/85 to-transparent"></div>
        <div className="relative z-10 flex flex-col gap-[12px] px-[20px] pb-[40px] text-white md:px-[80px]">
          <div className="flex flex-wrap gap-3">
            <span className="w-fit rounded-full bg-[#FFFFFFF2] px-[16px] py-[6px] text-[14px] font-[700] text-[#2E7D32]">
              {project.category}
            </span>
            <span className="w-fit rounded-full bg-[#2E7D32] px-[16px] py-[6px] text-[14px] font-[700] text-white">
              {project.status}
            </span>
          </div>
          <h1 className="max-w-[850px] text-[36px] font-[700] leading-[110%] md:text-[56px]">
            {project.title}
          </h1>
          <p className="text-[16px] font-[400] text-gray-300">
            {project.location} • {formatContentDate(project.createdAt)}
          </p>
        </div>
      </div>

      <div className="mx-auto flex w-full max-w-[1000px] flex-col gap-[24px] px-[20px] py-[40px] md:px-[80px]">
        <button
          type="button"
          onClick={() => navigate("/projects")}
          className="w-fit rounded-full border border-[#2E7D32] px-[20px] py-[8px] text-[#2E7D32] transition-all hover:bg-[#2E7D321A]"
        >
          Back to Projects
        </button>
        <p className="text-[18px] leading-[160%] text-[#424242] md:text-[22px]">
          {project.description}
        </p>
        <p className="text-[17px] leading-[170%] text-[#616161] md:text-[20px]">
          {project.content}
        </p>
      </div>
    </div>
  );
};

export default ProjectDetail;

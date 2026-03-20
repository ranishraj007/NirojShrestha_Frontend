import { useParams, useNavigate } from "react-router-dom";
import BlogStaticData from "@/components/constaintData/BlgoStaticData";

const BlogDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();

  const blog = BlogStaticData.find((b) => b.slug === slug);

  if (!blog) {
    return (
      <div className="w-full min-h-[60vh] flex flex-col items-center justify-center gap-[20px]">
        <h1 className="text-[32px] font-bold text-[#424242]">Blog Not Found</h1>
        <button 
          onClick={() => navigate("/blog")}
          className="px-[24px] py-[10px] bg-[#2E7D32] text-white rounded-full font-[700]"
        >
          Back to Blogs
        </button>
      </div>
    );
  }

  return (
    <div className="w-full flex flex-col min-h-screen pb-[60px]">
      {/* Detail Hero */}
      <div 
        className="relative w-full h-[300px] md:h-[500px] flex flex-col justify-end bg-cover bg-center"
        style={{ backgroundImage: `url(${blog.image})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent z-0"></div>
        <div className="relative z-10 px-[20px] md:px-[80px] pb-[40px] text-white flex flex-col gap-[12px]">
          <span className="w-fit text-[#2E7D32] bg-[#FFFFFFF2] px-[16px] py-[6px] rounded-full text-[14px] font-[700]">
            {blog.category}
          </span>
          <h1 className="text-[36px] md:text-[56px] font-[700] leading-[110%] max-w-[800px]">
            {blog.title}
          </h1>
          <p className="text-[16px] text-gray-300 font-[400]">
            {blog.date}
          </p>
        </div>
      </div>

      {/* Detail Content */}
      <div className="w-full px-[20px] md:px-[80px] py-[40px] flex flex-col max-w-[1000px] mx-auto gap-[24px]">
        <button 
          onClick={() => navigate("/blog")}
          className="w-fit text-[#2E7D32] border border-[#2E7D32] px-[20px] py-[8px] rounded-full hover:bg-[#2E7D321A] transition-all"
        >
          &larr; Back to Blogs
        </button>
        <p className="text-[#424242] text-[18px] md:text-[22px] font-[400] leading-[160%] mt-[20px]">
          {blog.description}
        </p>
      </div>
    </div>
  );
};

export default BlogDetail;

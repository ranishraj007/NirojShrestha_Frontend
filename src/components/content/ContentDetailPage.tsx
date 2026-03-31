import { useNavigate } from "react-router-dom";
import { formatContentDate, type BaseContentItem } from "@/lib/content";

type ContentDetailPageProps = {
  item?: BaseContentItem;
  fallbackTitle: string;
  backLabel: string;
  backLink: string;
};

const ContentDetailPage = ({
  item,
  fallbackTitle,
  backLabel,
  backLink,
}: ContentDetailPageProps) => {
  const navigate = useNavigate();

  if (!item) {
    return (
      <div className="flex min-h-[60vh] w-full flex-col items-center justify-center gap-[20px]">
        <h1 className="text-[32px] font-bold text-[#424242]">{fallbackTitle}</h1>
        <button
          type="button"
          onClick={() => navigate(backLink)}
          className="rounded-full bg-[#2E7D32] px-[24px] py-[10px] font-[700] text-white"
        >
          {backLabel}
        </button>
      </div>
    );
  }

  return (
    <div className="flex min-h-screen w-full flex-col pb-[60px]">
      <div
        className="relative flex h-[300px] w-full flex-col justify-end bg-cover bg-center md:h-[500px]"
        style={{ backgroundImage: `url(${item.image})` }}
      >
        <div className="absolute inset-0 z-0 bg-gradient-to-t from-black/80 to-transparent"></div>
        <div className="relative z-10 flex flex-col gap-[12px] px-[20px] pb-[40px] text-white md:px-[80px]">
          <span className="w-fit rounded-full bg-[#FFFFFFF2] px-[16px] py-[6px] text-[14px] font-[700] text-[#2E7D32]">
            {item.category}
          </span>
          <h1 className="max-w-[800px] text-[36px] font-[700] leading-[110%] md:text-[56px]">
            {item.title}
          </h1>
          <p className="text-[16px] font-[400] text-gray-300">
            {formatContentDate(item.createdAt)}
          </p>
        </div>
      </div>

      <div className="mx-auto flex w-full max-w-[1000px] flex-col gap-[24px] px-[20px] py-[40px] md:px-[80px]">
        <button
          type="button"
          onClick={() => navigate(backLink)}
          className="w-fit rounded-full border border-[#2E7D32] px-[20px] py-[8px] text-[#2E7D32] transition-all hover:bg-[#2E7D321A]"
        >
          {backLabel}
        </button>
        <p className="mt-[20px] text-[18px] font-[400] leading-[160%] text-[#424242] md:text-[22px]">
          {item.content}
        </p>
      </div>
    </div>
  );
};

export default ContentDetailPage;

export type Article = {
  title: string;
  category: string;
  date: string;
  author: string;
  description: string;
  image: string;
  link: string;
};

type ArticleCardProps = {
  article: Article;
};

const ArticleCard = ({ article }: ArticleCardProps) => {
  return (
    <div className="flex h-full min-h-0 shrink-0 flex-col gap-4 rounded-lg shadow-[0px_3.28px_4.92px_-3.28px_rgba(0,0,0,0.1)] shadow-[0px_8.2px_12.29px_-2.46px_rgba(0,0,0,0.1)]">
      <div
        className="pt-[20px] pl-[22px] rounded-t-lg"
        style={{
          backgroundImage: `url(${article.image})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "250px",
        }}
      >
        <span className="rounded-[12px] bg-[#2BBD06] px-[14px] py-[7px] text-[10px] font-bold text-white shadow-[0px_3.28px_4.92px_-3.28px_rgba(0,0,0,0.1)] shadow-[0px_8.2px_12.29px_-2.46px_rgba(0,0,0,0.1)]">
          {article.category}
        </span>
      </div>
      <div className="flex flex-1 flex-col justify-between gap-[6px] p-[19px]">
        <div className="flex flex-col gap-[6px]">
          <span className="text-[#757575] text-[12px] font-[400]">
            {article.date}
          </span>
          <h1 className="text-[#424242] text-[19px] font-bold leading-[26px]">
            {article.title}
          </h1>
          <p className="text-[#757575] text-[14px] font-[400] leading-[23px] line-clamp-3">
            {article.description}
          </p>
        </div>
        <div className="flex justify-between border-t pt-[14px] text-[14px] text-[#2E7D32] font-bold">
          <span className="">{article.author}</span>
          <span>Read More</span>
        </div>
      </div>
    </div>
  );
};

export default ArticleCard;

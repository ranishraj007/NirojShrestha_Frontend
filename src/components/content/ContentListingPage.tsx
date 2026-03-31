import { useState } from "react";
import { Link } from "react-router-dom";
import ArticleCard from "@/components/Homepage/HomepageCards/ArticleCard";
import { formatContentDate, type BaseContentItem } from "@/lib/content";

type ContentListingPageProps = {
  items: BaseContentItem[];
  pageTitle: string;
  pageDescription: string;
  emptyLabel: string;
  detailBasePath: string;
};

const ContentListingPage = ({
  items,
  pageTitle,
  pageDescription,
  emptyLabel,
  detailBasePath,
}: ContentListingPageProps) => {
  const [activeTab, setActiveTab] = useState("All");

  const categories = [
    "All",
    ...Array.from(new Set(items.map((item) => item.category))),
  ];

  const filteredItems =
    activeTab === "All"
      ? items
      : items.filter((item) => item.category === activeTab);

  return (
    <div className="flex min-h-screen w-full flex-col">
      <div
        className="relative flex h-[400px] w-full items-center justify-center bg-cover bg-center md:h-[500px]"
        style={{ backgroundImage: `url('${items[0]?.image ?? ""}')` }}
      >
        <div className="absolute inset-0 z-0 bg-black/55"></div>
        <div className="relative z-10 flex max-w-[900px] flex-col items-center justify-center gap-4 px-[20px] text-center text-white">
          <h1 className="text-[36px] font-[700] leading-[110%] md:text-[56px]">
            {pageTitle}
          </h1>
          <p className="text-[16px] font-[400] md:text-[24px]">
            {pageDescription}
          </p>
        </div>
      </div>

      <div className="flex w-full justify-center bg-[#f9f9f9] px-[20px] py-[20px]">
        <div className="flex flex-wrap justify-center gap-[10px] md:gap-[20px]">
          {categories.map((category) => (
            <button
              key={category}
              type="button"
              onClick={() => setActiveTab(category)}
              className={`rounded-full px-[24px] py-[10px] font-semibold transition-all duration-300 ${
                activeTab === category
                  ? "bg-[#2E7D32] text-white shadow-md"
                  : "border border-[#2E7D32] bg-white text-[#2E7D32] hover:bg-[#2E7D321A]"
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      <div className="grid w-full grid-cols-1 gap-[30px] px-[20px] py-[40px] md:grid-cols-2 md:px-[40px] lg:grid-cols-3 lg:px-[80px]">
        {filteredItems.length > 0 ? (
          filteredItems.map((item) => (
            <Link
              key={item.id}
              to={`${detailBasePath}/${item.slug}`}
              className="flex h-full flex-col transition-transform duration-300 hover:scale-[1.02]"
            >
              <ArticleCard
                article={{
                  title: item.title,
                  description: item.description,
                  category: item.category,
                  date: formatContentDate(item.createdAt),
                  author: "Niroj Shrestha",
                  image: item.image,
                  link: `${detailBasePath}/${item.slug}`,
                }}
              />
            </Link>
          ))
        ) : (
          <div className="col-span-full py-[40px] text-center text-[20px] text-[#424242]">
            {emptyLabel}
          </div>
        )}
      </div>
    </div>
  );
};

export default ContentListingPage;

import { Link } from "react-router-dom";
import ArticleCard from "./HomepageCards/ArticleCard";
import { formatContentDate, type BaseContentItem } from "@/lib/content";

type LatestContentSectionProps = {
  items: BaseContentItem[];
  title: string;
  viewAllLink: string;
  detailBasePath: string;
};

const LatestContentSection = ({
  items,
  title,
  viewAllLink,
  detailBasePath,
}: LatestContentSectionProps) => {
  return (
    <section className="flex w-full flex-col items-center px-[20px] py-12 md:px-[40px] lg:px-[80px]">
      <div className="mb-8 flex w-full max-w-[1280px]s items-center justify-between gap-4">
        <h2 className="text-2xl font-bold text-black lg:text-4xl">{title}</h2>
        <Link
          to={viewAllLink}
          className="rounded-full border border-[#2E7D32] px-5 py-2 text-sm font-semibold text-[#2E7D32] transition hover:bg-[#2E7D321A]"
        >
          View All
        </Link>
      </div>

      <div className="grid w-full max-w-[1280px]s grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {items.map((item) => (
          <Link
            key={item.id}
            to={`${detailBasePath}/${item.slug}`}
            className="h-full transition-transform duration-300 hover:scale-[1.02]"
          >
            <ArticleCard
              article={{
                title: item.title,
                category: item.category,
                date: formatContentDate(item.createdAt),
                author: "Niroj Shrestha",
                description: item.description,
                image: item.image,
                link: `${detailBasePath}/${item.slug}`,
              }}
            />
          </Link>
        ))}
      </div>
    </section>
  );
};

export default LatestContentSection;

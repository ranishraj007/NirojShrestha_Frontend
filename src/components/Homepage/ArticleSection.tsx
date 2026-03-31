import LatestContentSection from "./LatestContentSection";
import { getLatestItems } from "@/lib/content";
import { articles } from "@/staticData";

const ArticleSection = () => {
  return (
    <LatestContentSection
      title="Articles"
      items={getLatestItems(articles, 3)}
      viewAllLink="/articles"
      detailBasePath="/articles"
    />
  );
};

export default ArticleSection;

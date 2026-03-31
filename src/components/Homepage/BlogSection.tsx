import LatestContentSection from "./LatestContentSection";
import { getLatestItems } from "@/lib/content";
import { blogs } from "@/staticData";

const BlogSection = () => {
  return (
    <LatestContentSection
      title="Blogs"
      items={getLatestItems(blogs, 3)}
      viewAllLink="/blog"
      detailBasePath="/blog"
    />
  );
};

export default BlogSection;

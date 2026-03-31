import ContentListingPage from "@/components/content/ContentListingPage";
import { getLatestItems } from "@/lib/content";
import { blogs } from "@/staticData";

const Blog = () => {
  return (
    <ContentListingPage
      items={getLatestItems(blogs, blogs.length)}
      pageTitle="Blogs"
      pageDescription="Explore recent stories, field notes, and personal reflections from the journey."
      emptyLabel="No blogs found for this category."
      detailBasePath="/blog"
    />
  );
};

export default Blog;

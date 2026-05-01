import ContentListingPage from "@/components/content/ContentListingPage";
import { getLatestItems } from "@/lib/content";
import { blogs } from "@/staticData";

const Blog = () => {
  return (
    <ContentListingPage
      items={getLatestItems(blogs, blogs.length)}
      pageTitle="Field Stories"
      pageDescription="Personal reflections from villages, classrooms, learning centers, and the quiet moments where community work becomes real."
      emptyLabel="No blogs found for this category."
      detailBasePath="/blog"
    />
  );
};

export default Blog;

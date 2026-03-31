import ContentDetailPage from "@/components/content/ContentDetailPage";
import { blogs } from "@/staticData";
import { useParams } from "react-router-dom";

const BlogDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const blog = blogs.find((item) => item.slug === slug);

  return (
    <ContentDetailPage
      item={blog}
      fallbackTitle="Blog Not Found"
      backLabel="Back to Blogs"
      backLink="/blog"
    />
  );
};

export default BlogDetail;

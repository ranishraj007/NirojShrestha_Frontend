import ContentDetailPage from "@/components/content/ContentDetailPage";
import { articles } from "@/staticData";
import { useParams } from "react-router-dom";

const ArticleDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const article = articles.find((item) => item.slug === slug);

  return (
    <ContentDetailPage
      item={article}
      fallbackTitle="Article Not Found"
      backLabel="Back to Articles"
      backLink="/articles"
    />
  );
};

export default ArticleDetail;

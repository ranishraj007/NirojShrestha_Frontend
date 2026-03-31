import ContentListingPage from "@/components/content/ContentListingPage";
import { getLatestItems } from "@/lib/content";
import { articles } from "@/staticData";

const Articles = () => {
  return (
    <ContentListingPage
      items={getLatestItems(articles, articles.length)}
      pageTitle="Articles"
      pageDescription="Read the latest articles, ideas, and reflections from our work across communities."
      emptyLabel="No articles found for this category."
      detailBasePath="/articles"
    />
  );
};

export default Articles;

import ContentListingPage from "@/components/content/ContentListingPage";
import { getLatestItems } from "@/lib/content";
import { articles } from "@/staticData";

const Articles = () => {
  return (
    <ContentListingPage
      items={getLatestItems(articles, articles.length)}
      pageTitle="Articles"
      pageDescription="Ideas, lessons, and practical reflections on education, sustainability, culture, and community-led change."
      emptyLabel="No articles found for this category."
      detailBasePath="/articles"
    />
  );
};

export default Articles;

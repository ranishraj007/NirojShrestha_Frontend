import { useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import SEO, { absoluteUrl, siteConfig } from "@/components/SEO/SEO";
import { breadcrumbSchema } from "@/components/SEO/schema";
import { formatContentDate, type BaseContentItem } from "@/lib/content";

type ContentDetailPageProps = {
  item?: BaseContentItem;
  fallbackTitle: string;
  backLabel: string;
  backLink: string;
};

const ContentDetailPage = ({
  item,
  fallbackTitle,
  backLabel,
  backLink,
}: ContentDetailPageProps) => {
  const navigate = useNavigate();

  if (!item) {
    return (
      <div className="flex min-h-[60vh] w-full flex-col items-center justify-center gap-5 bg-[#fbf7ee] px-5 text-center">
        <h1 className="text-[34px] font-black text-[#2f2a22]">{fallbackTitle}</h1>
        <button
          type="button"
          onClick={() => navigate(backLink)}
          className="rounded-full bg-[#264f36] px-6 py-3 font-black text-white"
        >
          {backLabel}
        </button>
      </div>
    );
  }
  const itemPath = `${backLink}/${item.slug}`;
  const isArticleLike = backLink === "/blog" || backLink === "/articles";
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": isArticleLike ? "Article" : "CreativeWork",
    headline: item.title,
    description: item.description,
    image: item.image.startsWith("http") ? item.image : siteConfig.defaultImage,
    datePublished: item.createdAt,
    dateModified: item.createdAt,
    author: {
      "@type": "Person",
      name: "Niroj Shrestha",
      url: siteConfig.url,
    },
    publisher: {
      "@type": "Person",
      name: "Niroj Shrestha",
      url: siteConfig.url,
    },
    mainEntityOfPage: absoluteUrl(itemPath),
  };

  return (
    <main>
      <SEO
        title={item.title}
        description={item.description}
        path={itemPath}
        image="/og-image.jpg"
        type={isArticleLike ? "article" : "website"}
        publishedTime={item.createdAt}
        keywords={[item.title, item.category, "Niroj Shrestha", "social work Nepal", "community impact Nepal"]}
        jsonLd={[
          articleSchema,
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: backLabel.replace("Back to ", ""), path: backLink },
            { name: item.title, path: itemPath },
          ]),
        ]}
      />
      <section
        className="relative min-h-[520px] bg-cover bg-center"
        style={{ backgroundImage: `url(${item.image})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-[#17261f]/92 via-[#20382b]/48 to-transparent" />
        <div className="relative story-container flex min-h-[520px] items-end py-12 text-white">
          <div className="max-w-4xl">
            <span className="bg-[#f0b35a] px-4 py-2 text-[12px] font-black uppercase tracking-[0.14em] text-[#20382b]">
              {item.category}
            </span>
            <h1 className="mt-5 text-[42px] font-black leading-[1.04] md:text-[68px]">
              {item.title}
            </h1>
            <p className="mt-4 text-[16px] font-bold text-[#f7e8ce]">
              {formatContentDate(item.createdAt)} / By Niroj Shrestha
            </p>
          </div>
        </div>
      </section>

      <article className="story-container py-12 md:py-18">
        <button
          type="button"
          onClick={() => navigate(backLink)}
          className="inline-flex items-center gap-2 rounded-full border border-[#d8c7ad] bg-[#fffaf1] px-5 py-3 font-black text-[#264f36] transition hover:border-[#264f36]"
        >
          <ArrowLeft size={17} /> {backLabel}
        </button>
        <div className="mx-auto mt-10 max-w-3xl">
          <p className="text-[24px] font-bold leading-10 text-[#2f2a22]">
            {item.description}
          </p>
          <div className="mt-8 border-l-4 border-[#d96f4b] pl-6">
            <p className="text-[18px] leading-9 text-[#5f5546]">
              {item.content}
            </p>
          </div>
        </div>
      </article>
    </main>
  );
};

export default ContentDetailPage;

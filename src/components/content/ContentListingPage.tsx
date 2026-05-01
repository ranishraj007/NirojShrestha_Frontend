import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import SEO from "@/components/SEO/SEO";
import { breadcrumbSchema } from "@/components/SEO/schema";
import { formatContentDate, type BaseContentItem } from "@/lib/content";

type ContentListingPageProps = {
  items: BaseContentItem[];
  pageTitle: string;
  pageDescription: string;
  emptyLabel: string;
  detailBasePath: string;
};

const ContentListingPage = ({
  items,
  pageTitle,
  pageDescription,
  emptyLabel,
  detailBasePath,
}: ContentListingPageProps) => {
  const [activeTab, setActiveTab] = useState("All");

  const categories = [
    "All",
    ...Array.from(new Set(items.map((item) => item.category))),
  ];

  const filteredItems =
    activeTab === "All"
      ? items
      : items.filter((item) => item.category === activeTab);
  const normalizedPath = detailBasePath === "/blog" ? "/blog" : detailBasePath;
  const pageKeywords =
    detailBasePath === "/blog"
      ? ["Niroj Shrestha stories", "social work stories Nepal", "field stories Nepal", "community work blog"]
      : ["Niroj Shrestha articles", "social work articles Nepal", "community development ideas", "lifelong learning Nepal"];

  return (
    <main>
      <SEO
        title={pageTitle}
        description={pageDescription}
        path={normalizedPath}
        image="/og-image.jpg"
        keywords={pageKeywords}
        jsonLd={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: pageTitle, path: normalizedPath },
        ])}
      />
      <section
        className="relative min-h-[480px] bg-cover bg-center"
        style={{ backgroundImage: `url('${items[0]?.image ?? ""}')` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-[#17261f]/88 via-[#264f36]/62 to-[#d96f4b]/28" />
        <div className="relative story-container flex min-h-[480px] items-center py-16 text-white">
          <div className="max-w-4xl animate-reveal-up">
            <p className="editorial-kicker text-[#f0b35a]">Stories and reflections</p>
            <h1 className="mt-5 text-[46px] font-black leading-[1.02] md:text-[76px]">
              {pageTitle}
            </h1>
            <p className="mt-6 max-w-2xl text-[18px] leading-9 text-[#f7e8ce]">
              {pageDescription}
            </p>
          </div>
        </div>
      </section>

      <section className="border-b border-[#e2d4bf] bg-[#fbf7ee] py-6">
        <div className="story-container flex flex-wrap gap-3">
          {categories.map((category) => (
            <button
              key={category}
              type="button"
              onClick={() => setActiveTab(category)}
              className={`rounded-full px-5 py-3 text-[14px] font-black transition ${
                activeTab === category
                  ? "bg-[#264f36] text-white"
                  : "border border-[#d8c7ad] bg-[#fffaf1] text-[#4f4638] hover:border-[#264f36]"
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </section>

      <section className="py-14 md:py-20">
        <div className="story-container grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {filteredItems.length > 0 ? (
            filteredItems.map((item) => (
              <Link
                key={item.id}
                to={`${detailBasePath}/${item.slug}`}
                className="group flex h-full flex-col bg-[#fffaf1] shadow-[0_18px_45px_rgba(81,63,38,0.08)] transition hover:-translate-y-1"
              >
                <img
                  src={item.image}
                  alt=""
                  className="h-60 w-full object-cover transition duration-700 group-hover:brightness-95"
                />
                <div className="flex flex-1 flex-col p-6">
                  <p className="text-[12px] font-black uppercase tracking-[0.14em] text-[#b15b3f]">
                    {item.category} / {formatContentDate(item.createdAt)}
                  </p>
                  <h2 className="mt-3 text-[27px] font-black leading-8 text-[#2f2a22]">
                    {item.title}
                  </h2>
                  <p className="mt-4 flex-1 text-[15px] leading-7 text-[#675b49]">
                    {item.description}
                  </p>
                  <span className="mt-6 inline-flex items-center gap-2 font-black text-[#264f36]">
                    Read the story <ArrowRight size={17} />
                  </span>
                </div>
              </Link>
            ))
          ) : (
            <div className="col-span-full py-16 text-center text-[20px] font-bold text-[#4f4638]">
              {emptyLabel}
            </div>
          )}
        </div>
      </section>
    </main>
  );
};

export default ContentListingPage;

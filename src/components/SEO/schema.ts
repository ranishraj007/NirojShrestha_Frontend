import { absoluteUrl, siteConfig } from "./SEO";

export const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Niroj Shrestha",
  url: siteConfig.url,
  image: siteConfig.defaultImage,
  jobTitle: "Social Worker and Community Educator",
  description: siteConfig.description,
  email: siteConfig.email,
  telephone: siteConfig.phone,
  address: {
    "@type": "PostalAddress",
    addressLocality: "Pharping",
    addressRegion: "Bagmati Province",
    addressCountry: "NP",
  },
  alumniOf: [
    {
      "@type": "CollegeOrUniversity",
      name: "St. Xavier's College",
    },
    {
      "@type": "CollegeOrUniversity",
      name: "Tribhuvan University",
    },
  ],
  knowsAbout: [
    "Social work",
    "Community development",
    "Lifelong learning",
    "Education for Sustainable Development",
    "Youth leadership",
    "Women's empowerment",
    "Humanitarian initiatives",
  ],
  sameAs: siteConfig.socialLinks,
};

export const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: siteConfig.name,
  url: siteConfig.url,
  description: siteConfig.description,
  inLanguage: "en",
  publisher: personSchema,
};

export const breadcrumbSchema = (items: Array<{ name: string; path: string }>) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: items.map((item, index) => ({
    "@type": "ListItem",
    position: index + 1,
    name: item.name,
    item: absoluteUrl(item.path),
  })),
});

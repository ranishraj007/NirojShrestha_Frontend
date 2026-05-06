import { Helmet } from "react-helmet-async";

const DEFAULT_SITE_URL = "https://nirojshrestha05.com.np";
const SITE_URL = (import.meta.env.VITE_SITE_URL || DEFAULT_SITE_URL).replace(/\/$/, "");
const DEFAULT_IMAGE = `${SITE_URL}/og-image.jpg`;

type JsonLdValue =
  | string
  | number
  | boolean
  | null
  | JsonLdValue[]
  | { [key: string]: JsonLdValue };

type SEOProps = {
  title: string;
  description: string;
  path?: string;
  image?: string;
  type?: "website" | "article" | "profile";
  keywords?: string[];
  publishedTime?: string;
  jsonLd?: JsonLdValue | JsonLdValue[];
  noIndex?: boolean;
};

export const siteConfig = {
  name: "Niroj Shrestha",
  title: "Niroj Shrestha | Social Worker and Community Impact Leader in Nepal",
  description:
    "Niroj Shrestha is a social worker, educator, and community impact leader from Pharping, Kathmandu, focused on lifelong learning, sustainability, youth leadership, and humanitarian initiatives.",
  url: SITE_URL,
  defaultImage: DEFAULT_IMAGE,
  email: "Niroj@pharping.org.np",
  phone: "+9779851013055",
  locale: "en_US",
  socialLinks: [
    "https://www.facebook.com/niroj.shrestha.92",
    "https://www.linkedin.com/in/niroj-shrestha-32421339/",
    "https://www.instagram.com/niroj.shrestha.92/",
    "https://www.flickr.com/people/198803957@N06/",
  ],
};

export const absoluteUrl = (path = "/") => {
  if (/^https?:\/\//i.test(path)) return path;
  return `${SITE_URL}${path.startsWith("/") ? path : `/${path}`}`;
};

const absoluteImageUrl = (image?: string) => {
  if (!image) return DEFAULT_IMAGE;
  if (/^https?:\/\//i.test(image)) return image;
  return image.startsWith("/") ? `${SITE_URL}${image}` : image;
};

const buildTitle = (title: string) =>
  title === siteConfig.name || title.includes(siteConfig.name)
    ? title
    : `${title} | ${siteConfig.name}`;

const SEO = ({
  title,
  description,
  path = "/",
  image,
  type = "website",
  keywords = [],
  publishedTime,
  jsonLd,
  noIndex = false,
}: SEOProps) => {
  const pageTitle = buildTitle(title);
  const canonicalUrl = absoluteUrl(path);
  const imageUrl = absoluteImageUrl(image);
  const jsonLdItems = Array.isArray(jsonLd) ? jsonLd : jsonLd ? [jsonLd] : [];

  return (
    <Helmet>
      <title>{pageTitle}</title>
      <meta name="description" content={description} />
      {keywords.length > 0 && <meta name="keywords" content={keywords.join(", ")} />}
      <link rel="canonical" href={canonicalUrl} />
      <meta name="robots" content={noIndex ? "noindex, nofollow" : "index, follow"} />

      <meta property="og:type" content={type} />
      <meta property="og:site_name" content={siteConfig.name} />
      <meta property="og:title" content={pageTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:image" content={imageUrl} />
      <meta property="og:locale" content={siteConfig.locale} />
      {publishedTime && <meta property="article:published_time" content={publishedTime} />}

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={pageTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={imageUrl} />

      {jsonLdItems.map((item, index) => (
        <script key={index} type="application/ld+json">
          {JSON.stringify(item)}
        </script>
      ))}
    </Helmet>
  );
};

export default SEO;

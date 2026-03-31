export type BaseContentItem = {
  id: number;
  title: string;
  slug: string;
  category: string;
  description: string;
  content: string;
  createdAt: string;
  image: string;
};

export type ProjectContentItem = BaseContentItem & {
  location: string;
  status: string;
};

export const formatContentDate = (date: string) =>
  new Date(date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

export const getLatestItems = <T extends { createdAt: string }>(
  items: T[],
  count: number,
) =>
  [...items]
    .sort(
      (first, second) =>
        new Date(second.createdAt).getTime() - new Date(first.createdAt).getTime(),
    )
    .slice(0, count);

import { useState } from "react";
import ArticleCard, { type Article } from "./HomepageCards/ArticleCard";
import ArticleImage from "@/assets/images/CardImage.png";
import ArticleImage1 from "@/assets/images/HeroSectionBGImage.png";

const ArticleSection = () => {
  const articles: Article[] = [
    {
      title: "Article 1",
      category: "Education",
      date: "June 20, 2024",
      author: "Niroj Shrestha",
      description: "Description of Article 1",
      image: ArticleImage,
      link: "#",
    },
    {
      title: "Article 2",
      category: "Agriculture",
      date: "June 18, 2024",
      author: "Niroj Shrestha",
      description: "Description of Article 2  </br> with more text to test the layout and see how it handles longer descriptions. This should give us a good idea of the card's flexibility and responsiveness.   hello this and see how it handles longer descriptions. This should give us a good idea of the card's flexibility and responsiveness.   hello thisand see how it handles longer descriptions. This should give us a good idea of the card's flexibility and responsiveness.   hello thisand see how it handles longer descriptions. This should give us a good idea of the card's flexibility and responsiveness.   hello this",
      image: ArticleImage1,
      link: "#",
    },
    {
      title: "Article 3",
      category: "Health",
      date: "June 15, 2024",
      author: "Niroj Shrestha",
      description: "Description of Article 3",
      image: ArticleImage,
      link: "#",
    },
    {
      title: "Article 4",
      category: "Technology",
      date: "June 10, 2024",
      author: "Niroj Shrestha",
      description: "Description of Article 4",
      image: ArticleImage1,
      link: "#",
    },
    {
      title: "Article 5",
      category: "Science",
      date: "June 5, 2024",
      author: "Niroj Shrestha",
      description: "Description of Article 5",
      image: ArticleImage,
      link: "#",
    },
  ];

  const [startIndex, setStartIndex] = useState(0);
  const visibleCount = 3; // how many cards to show at once

  const handleNext = () => {
    setStartIndex((prev) =>
      prev + visibleCount >= articles.length ? 0 : prev + visibleCount,
    );
  };

  const handlePrev = () => {
    setStartIndex((prev) =>
      prev - visibleCount < 0
        ? articles.length - visibleCount
        : prev - visibleCount,
    );
  };

  return (
    <div className="flex flex-col pt-12 items-center w-full">
      <h2 className="text-2xl lg:text-4xl font-bold text-black mb-8">
        Articles
      </h2>

      {/* Article Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-6xls px-4">
        {articles
          .slice(startIndex, startIndex + visibleCount)
          .map((article, index) => (
            <ArticleCard key={index} article={article} />
          ))}
      </div>

      {/* Carousel Buttons */}
      {articles.length > visibleCount && (
        <div className="flex gap-4 mt-6">
          <button
            onClick={handlePrev}
            className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300"
          >
            Prev
          </button>
          <button
            onClick={handleNext}
            className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300"
          >
            Next
          </button>
        </div>
      )}
    </div>
  );
};

export default ArticleSection;

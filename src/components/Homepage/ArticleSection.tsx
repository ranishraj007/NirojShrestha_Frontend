import { useEffect, useRef, useState, type PointerEvent } from "react";
import ArticleCard, { type Article } from "./HomepageCards/ArticleCard";
import ArticleImage from "@/assets/images/CardImage.png";
import ArticleImage1 from "@/assets/images/HeroSectionBGImage.png";

const SWIPE_THRESHOLD_PX = 60;

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
      description:
        "Description of Article 2  </br> with more text to test the layout and see how it handles longer descriptions. This should give us a good idea of the card's flexibility and responsiveness.   hello this and see how it handles longer descriptions. This should give us a good idea of the card's flexibility and responsiveness.   hello thisand see how it handles longer descriptions. This should give us a good idea of the card's flexibility and responsiveness.   hello thisand see how it handles longer descriptions. This should give us a good idea of the card's flexibility and responsiveness.   hello this",
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

  const [cardsPerView, setCardsPerView] = useState(3);
  const [currentPage, setCurrentPage] = useState(0);
  const [dragOffset, setDragOffset] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const dragStartX = useRef<number | null>(null);

  useEffect(() => {
    const updateCardsPerView = () => {
      if (window.innerWidth >= 1024) {
        setCardsPerView(3);
      } else if (window.innerWidth >= 768) {
        setCardsPerView(2);
      } else {
        setCardsPerView(1);
      }
    };

    updateCardsPerView();
    window.addEventListener("resize", updateCardsPerView);

    return () => {
      window.removeEventListener("resize", updateCardsPerView);
    };
  }, []);

  const totalPages = Math.ceil(articles.length / cardsPerView);
  const safeCurrentPage = Math.min(currentPage, Math.max(totalPages - 1, 0));

  useEffect(() => {
    setCurrentPage(safeCurrentPage);
  }, [safeCurrentPage]);

  const articlePages = Array.from({ length: totalPages }, (_, pageIndex) =>
    articles.slice(
      pageIndex * cardsPerView,
      pageIndex * cardsPerView + cardsPerView,
    ),
  );

  const shouldShowPagination = articles.length > 3;
  const isFirstPage = safeCurrentPage === 0;
  const isLastPage = safeCurrentPage >= totalPages - 1;

  const handlePointerDown = (event: PointerEvent<HTMLDivElement>) => {
    if (totalPages <= 1) return;
    dragStartX.current = event.clientX;
    setIsDragging(true);
    event.currentTarget.setPointerCapture(event.pointerId);
  };

  const handlePointerMove = (event: PointerEvent<HTMLDivElement>) => {
    if (!isDragging || dragStartX.current === null) return;
    setDragOffset(event.clientX - dragStartX.current);
  };

  const handlePointerEnd = () => {
    if (!isDragging) return;

    if (Math.abs(dragOffset) > SWIPE_THRESHOLD_PX) {
      if (dragOffset < 0 && !isLastPage) {
        setCurrentPage((page) => Math.min(page + 1, totalPages - 1));
      } else if (dragOffset > 0 && !isFirstPage) {
        setCurrentPage((page) => Math.max(page - 1, 0));
      }
    }

    setDragOffset(0);
    dragStartX.current = null;
    setIsDragging(false);
  };

  return (
    <div className="flex w-full flex-col items-center pt-12">
      <h2 className="mb-8 text-2xl font-bold text-black lg:text-4xl">
        Articles
      </h2>

      <div className="w-full overflow-hidden px-8">
        <div
          className={`flex select-none touch-pan-y ease-out ${isDragging ? "" : "transition-transform duration-500"}`}
          style={{
            transform: `translateX(calc(-${safeCurrentPage * 100}% + ${dragOffset}px))`,
            cursor: totalPages > 1 ? (isDragging ? "grabbing" : "grab") : "default",
          }}
          onPointerDown={handlePointerDown}
          onPointerMove={handlePointerMove}
          onPointerUp={handlePointerEnd}
          onPointerCancel={handlePointerEnd}
          onPointerLeave={handlePointerEnd}
        >
          {articlePages.map((page, pageIndex) => (
            <div key={pageIndex} className="min-w-full">
              <div className="flex flex-wrap justify-center gap-6 pb-4">
                {page.map((article, articleIndex) => (
                  <div
                    key={`${article.title}-${articleIndex}`}
                    className="h-[470px] w-full md:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)]"
                  >
                    <ArticleCard article={article} />
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* pagenation for the article cards */}

      {shouldShowPagination && (
        <div className="mt-6 flex items-center justify-center gap-3">
          <button
            type="button"
            onClick={() =>
              setCurrentPage((page) =>
                Math.max(Math.min(page, totalPages - 1) - 1, 0),
              )
            }
            disabled={isFirstPage}
            className="cursor-pointer rounded-full border border-[#9E9E9E] bg-[#F5F5F5] px-5 py-2 text-[14px] font-semibold text-[#424242] transition hover:bg-[#EEEEEE] disabled:cursor-not-allowed disabled:opacity-40"
          >
            Previous
          </button>
          <span className="text-[14px] font-semibold text-[#616161]">
            {safeCurrentPage + 1} / {totalPages}
          </span>
          <button
            type="button"
            onClick={() =>
              setCurrentPage((page) =>
                Math.min(Math.min(page, totalPages - 1) + 1, totalPages - 1),
              )
            }
            disabled={isLastPage}
            className="cursor-pointer rounded-full border border-[#9E9E9E] bg-[#F5F5F5] px-5 py-2 text-[14px] font-semibold text-[#424242] transition hover:bg-[#EEEEEE] disabled:cursor-not-allowed disabled:opacity-40"
          >
            Next
          </button>
        </div>
      )}
    </div>
  );
};

export default ArticleSection;

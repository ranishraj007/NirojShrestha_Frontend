import { useEffect, useState } from "react";
import TestimonialsCards, {
  type Testimonial,
} from "./HomepageCards/TestimonialsCards";

const VoicesOfCommunitySection = () => {
  const testimonials: Testimonial[] = [
    {
      name: "Ranish Raj Shrestha",
      designation: "Computer Engineer",
      rating: 5,
      comment:
        "He is a dedicated social worker who genuinely cares for the community and always strives to make a positive difference. His passion, leadership, and powerful speaking skills leave a lasting impact on everyone around him. On a personal level, he continuously motivates and guides me to grow and do better. I’m grateful to learn from him and see his commitment to serving others every day.",
      photo: "https://randomuser.me/api/portraits/men/1.jpg",
    },
    {
      name: "Jane Smith",
      designation: "Graphic Designer",
      rating: 4,
      comment:
        "I have learned so much from this community. The mentorship and guidance have been invaluable.",
      photo: "https://randomuser.me/api/portraits/women/1.jpg",
    },
    {
      name: "Michael Johnson",
      designation: "Entrepreneur",
      rating: 5,
      comment:
        "The opportunities and connections I have made through this project have been incredible. I highly recommend it to anyone looking to grow their skills and network.",
      photo: "https://randomuser.me/api/portraits/men/2.jpg",
    },
    {
      name: "Sofia Martinez",
      designation: "Community Mentor",
      rating: 5,
      comment:
        "Watching people grow here has been the best part. The shared support system helps everyone move faster with confidence.",
      photo: "https://randomuser.me/api/portraits/women/7.jpg",
    },
    {
      name: "Daniel Kim",
      designation: "Product Designer",
      rating: 4,
      comment:
        "The practical projects and feedback cycles made a real difference in how I approach design decisions in my daily work.",
      photo: "https://randomuser.me/api/portraits/men/8.jpg",
    },
    {
      name: "Priya Shah",
      designation: "Frontend Developer",
      rating: 5,
      comment:
        "I joined for learning resources and stayed for the people. Every conversation pushes me to build better products.",
      photo: "https://randomuser.me/api/portraits/women/13.jpg",
    },
  ];

  const [cardsPerView, setCardsPerView] = useState(3);
  const [currentPage, setCurrentPage] = useState(0);

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

  const totalPages = Math.ceil(testimonials.length / cardsPerView);
  const safeCurrentPage = Math.min(currentPage, Math.max(totalPages - 1, 0));
  const testimonialPages = Array.from({ length: totalPages }, (_, pageIndex) =>
    testimonials.slice(
      pageIndex * cardsPerView,
      pageIndex * cardsPerView + cardsPerView,
    ),
  );

  const shouldShowPagination = testimonials.length > 3;
  const isFirstPage = safeCurrentPage === 0;
  const isLastPage = safeCurrentPage >= totalPages - 1;

  return (
    <div className="mt-[48px] flex flex-col gap-[32px] bg-gradient-to-b from-[#88695E] to-[#88695E] px-[38px] py-[48px]">
      <div className="flex flex-col items-center justify-center gap-[8px] text-center">
        <h1 className="text-[42px] font-bold leading-[100%] text-white lg:text-[61px]">
          Voices from the <span className="text-[#FFD54F]">Community</span>
        </h1>
        <h1 className="text-[18px] font-bold leading-[100%] text-[#FFFFFFE5] lg:text-[26px]">
          Real stories of transformation and hope
        </h1>
      </div>

      <div className="mx-auto w-full max-w-[1280px] overflow-hidden">
        <div
          className="flex transition-transform duration-500 ease-out"
          style={{ transform: `translateX(-${safeCurrentPage * 100}%)` }}
        >
          {testimonialPages.map((page, pageIndex) => (
            <div key={pageIndex} className="min-w-full">
              <div className="flex flex-wrap justify-center gap-6">
                {page.map((testimonial, index) => (
                  <div
                    key={`${testimonial.name}-${index}`}
                    className="w-full md:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)]"
                  >
                    <TestimonialsCards
                      testimonial={testimonial}
                      cardsPerView={cardsPerView}
                    />
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* pagenation for the testimonial cards */}
      {shouldShowPagination && (
        <div className="flex items-center justify-center gap-3">
          <button
            type="button"
            onClick={() =>
              setCurrentPage((page) =>
                Math.max(Math.min(page, totalPages - 1) - 1, 0),
              )
            }
            disabled={isFirstPage}
            className="cursor-pointer rounded-full border border-white/60 bg-white/10 px-5 py-2 text-[14px] font-semibold text-white transition hover:bg-white/20 disabled:cursor-not-allowed disabled:opacity-40"
          >
            Previous
          </button>
          <span className="text-[14px] font-semibold text-[#FFF3E0]">
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
            className="cursor-pointer rounded-full border border-white/60 bg-white/10 px-5 py-2 text-[14px] font-semibold text-white transition hover:bg-white/20 disabled:cursor-not-allowed disabled:opacity-40"
          >
            Next
          </button>
        </div>
      )}
    </div>
  );
};

export default VoicesOfCommunitySection;

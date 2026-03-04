export type Testimonial = {
  name: string;
  designation: string;
  rating: number;
  comment: string;
  photo: string;
};

type TestimonialsCardsProps = {
  testimonial: Testimonial;
  cardsPerView: number;
};

const TestimonialsCards = ({
  testimonial,
  cardsPerView,
}: TestimonialsCardsProps) => {
  return (
    <article
      className={`relative flex h-full flex-col justify-between overflow-hidden rounded-[22px] border border-white/20 bg-gradient-to-br from-[#FFF8E6] via-white to-[#FFE7B5] p-6 shadow-[0_14px_36px_rgba(0,0,0,0.16)] ${
        cardsPerView === 1 ? "max-w-[620px] mx-auto" : "w-full"
      }`}
    >
      <div className="absolute -right-5 -top-5 h-[88px] w-[88px] rounded-full bg-[#FFB300]/20" />
      <div className="absolute -bottom-8 -left-8 h-[100px] w-[100px] rounded-full bg-[#8D6E63]/12" />

      <div className="relative z-10 flex flex-col gap-5">
        <div className="flex items-center gap-4">
          <img
            src={testimonial.photo}
            alt={testimonial.name}
            className="h-[64px] w-[64px] rounded-full border-[3px] border-white object-cover shadow-md"
          />
          <div>
            <h2 className="text-[20px] font-bold leading-tight text-[#3E2723]">
              {testimonial.name}
            </h2>
            <p className="text-[14px] font-medium text-[#6D4C41]">
              {testimonial.designation}
            </p>
          </div>
        </div>

        <div className="flex gap-1 text-[18px] leading-none text-[#FF8F00]">
          {Array.from({ length: testimonial.rating }).map((_, index) => (
            <span key={index} aria-hidden="true">
              ★
            </span>
          ))}
        </div>

        <p className="line-clamp-6 text-[15px] leading-[1.7] text-[#5D4037]">
          "{testimonial.comment}"
        </p>
      </div>
    </article>
  );
};

export default TestimonialsCards;

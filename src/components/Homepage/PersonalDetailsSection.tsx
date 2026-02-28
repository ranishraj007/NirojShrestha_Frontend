const PersonalDetailsSection = () => {
  return (
    <section className="pt-[48px] px-[31px] flex flex-col gap-[18px] lg:gap-[24px]">
      <div className="flex flex-col gap-6">
        {/* Section Heading */}
        <div className="flex justify-center">
          <h1 className="text-[42px] lg:text-[61px] font-bold text-[#424242] text-center relative inline-block">
            Meet Niroj Shrestha
            <svg
              className="absolute left-0 -bottom-4 w-full"
              height="20"
              viewBox="0 0 300 20"
              fill="none"
              preserveAspectRatio="none"
            >
              <path
                d="M0 12 Q25 2 50 12 T100 12 T150 12 T200 12 T250 12 T300 12"
                stroke="#E76F51"
                strokeWidth="4"
                fill="transparent"
                strokeLinecap="round"
              />
            </svg>
          </h1>
        </div>

        {/* Description */}
        <div className="flex flex-col gap-4 text-[#424242] text-base lg:text-[20px] leading-[36px] font-[700] px-[33px]">
          <p>
            Born and raised in{" "}
            <span className="text-[#2E7D32]">Pharping, Kathmandu Valley, </span>{" "}
            Niroj Shrestha has devoted his life to creating pathways for
            education, empowerment, and sustainable development in rural Nepal.
          </p>

          <p>
            As the founder of{" "}
            <span className="text-[#2E7D32]">
              Shikharapur Community Campus,{" "}
            </span>{" "}
            he has transformed how communities access learning—championing
            education for youth, economic empowerment for women, and sustainable
            agriculture for local farmers.
          </p>

          <p>
            His work bridges local tradition with global innovation, having
            participated in youth exchange programs in{" "}
            <span className="text-[#4FC3F7]">Japan</span> and leadership
            initiatives in the{" "}
            <span className="text-[#4FC3F7]">United States, </span> bringing
            world-class insights back to grassroots action.
          </p>
        </div>

        {/* read full story */}

        <div className="flex justify-center">
          <button className="bg-[#787878] px-[45px] py-[21px] text-[#FFFFFF] text-[20px] font-[700] rounded-[20px] cursor-pointer">
            Read Full Story
          </button>
        </div>
      </div>
    </section>
  );
};

export default PersonalDetailsSection;

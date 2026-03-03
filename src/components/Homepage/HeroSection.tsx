import HeroSectionBGImage from "@/assets/images/backgroundImage.jpeg";

const HeroSection = () => {
  return (
    <>
      <div
        className=""
        style={{
          backgroundImage: `url(${HeroSectionBGImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* background: linear-gradient(135deg, rgba(46, 125, 50, 0.9) 0%, rgba(46, 125, 50, 0.75) 50%, rgba(27, 94, 32, 0.9) 100%); */}

        <div className="h-full w-full bg-gradient-to-b from-[#2E7D32E5] via-[#2E7D32BF] to-[#1B5E20E5] flex justify-center items-center md:py-[100px] md:px-[150px] xl:py-[211px] xl:px-[343px] py-[100px] px-[20px]">
          <div className="flex flex-col lg:gap-[16px] gap-[12px] items-start">
            <h1 className="text-[14px] lg:text-[16px] font-[500] leading-[26px] text-white text-center bg-[#FFFFFF33] border-[1.5px] border-[#FFFFFF4D] rounded-full px-[22px] py-[11px]">
              Community Leader | Educator | Change Maker
            </h1>
            <p className="text-[48px] lg:text-[61px] font-[700] text-white leading-[100%]">
              Empowering Communities Through{" "}
              <span className="text-[#0AC712]">Education </span> and Sustainable
              Development
            </p>
            <p className="text-[14px] lg:text-[20px] text-[#FFFFFFF2] font-[400] leading-[100%] ">
              Niroj Shrestha is a community educator and social worker dedicated
              to uplifting youth, women, and farmers through learning,
              innovation, and sustainable action.
            </p>{" "}
            <div className="flex justify-center w-full">
              <button className="text-[#2E7D32] font-[700] text-[14px] lg:text-[16px] px-[16px] py-[12px] bg-[#FFFFFF] rounded-full border-[1.5px] border-[#FFFFFF4D] hover:bg-[#FFFFFFCC] transition duration-300 cursor-pointer">
                Explore His Work
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroSection;

import BookIcon from "@/assets/icons/bookIcon.svg";
const StayConnectedSection = () => {
  return (
    <div className="bg-gradient-to-b from-[#F1F8E9] to-[#FFFFFF] py-12 flex flex-col justify-center items-center">
      <div className="container mx-auto py-6 flex flex-col justify-center items-center gap-[16px] text-center px-[20px]">
        <div className="p-[21px] bg-[#2E7D321A] rounded-[21px] w-fit">
          <img src={BookIcon} alt="" />
        </div>
        <h1 className="text-[#424242] lg:text-[39px] text-[24px] font-[700] leading-[100%]">
          Stay Connected
        </h1>
        <p className="text-[#424242] text-[16px] lg-[24px] font-[400] leading-[100%]">
          Get updates on community initiatives, stories, and insights delivered
          to your inbox
        </p>
        <div className="flex flex-col sm:flex-row gap-[16px] mt-[16px] justify-center items-center">
          <input
            placeholder="Enter your email"
            type="text"
            className="bg-[#FFFFFF] rounded-[19px] px-[16px] py-[16px] w-[250px] lg:w-[350px] text-[#424242] text-[16px] lg:text-[18px] font-[400] leading-[100%] border-[2px] border-[#81C7844D] focus:outline-none focus:ring-2 focus:ring-[#424242] focus:ring-offset-2 focus:ring-offset-[#F1F8E9]"
          />
          {/* box-shadow: 0px 5.25px 7.88px -5.25px #0000001A;

box-shadow: 0px 13.14px 19.7px -3.94px #0000001A; */}

          <button className="bg-[#449548] shadow-2xl rounded-[19px] px-[25px] py-[16px] text-[#FFFFFF] text-[16px] lg:text-[18px] font-[700] leading-[100%] hover:bg-[#2BBD06] transition-colors w-fit">
            Get In Touch
          </button>
        </div>
      </div>
    </div>
  );
};

export default StayConnectedSection;

import React from "react";
import NirojShrestha from "@/assets/images/NirojShresthaImage.jpeg";

const About = () => {
  return (
    <div className="flex flex-col lg:gap-[73px] gap-[40px] pt-[48px] px-[24px] md:px-[40px] lg:px-[100px] xl:px-[150px] pb-[80px] w-full max-w-[1600px] mx-auto overflow-hidden">
      <div className="flex justify-center">
        <h1 className="text-[42px] lg:text-[61px] font-bold text-[#424242] text-center relative inline-block">
          Meet Niroj Shrestha
          <svg
            className="absolute left-0 -bottom-2 lg:-bottom-4 w-full"
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

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center mt-6 lg:mt-0">
        {/* Image Section */}
        <div className="flex justify-center w-full px-4 lg:px-0">
          <div className="relative w-full max-w-[500px] z-10 group">
            {/* Decorative background shape */}
            <div className="absolute inset-0 bg-linear-to-tr from-[#E76F51] to-[#F4A261] rounded-[40px] transform translate-x-4 lg:translate-x-8 translate-y-4 lg:translate-y-8 -z-10 opacity-70 transition-transform duration-500 group-hover:translate-x-6 group-hover:translate-y-6"></div>
            <img
              src={NirojShrestha}
              alt="Niroj Shrestha Profile"
              className="w-full h-auto object-cover rounded-[40px] shadow-2xl border-[6px] border-white transition-transform duration-500 group-hover:scale-[1.02]"
            />
          </div>
        </div>

        {/* Text Section */}
        <div className="flex flex-col gap-6 text-[#424242] text-[16px] md:text-[18px] lg:text-[20px] leading-[32px] md:leading-[36px] font-medium bg-white/80 backdrop-blur-sm p-6 md:p-10 lg:p-12 rounded-[30px] shadow-sm border border-gray-100">
          <h2 className="text-[32px] lg:text-[42px] font-extrabold text-[#2A2A2A] leading-tight mb-2">
            The Story Behind <span className="text-[#E76F51]">The Mission</span>
          </h2>

          <div className="flex flex-col gap-5 text-gray-700">
            <p>
              Born in a vibrant Newari ethnic community in{" "}
              <span className="text-[#2E7D32] font-bold">
                Dakshinkali Municipality, Kathmandu
              </span>
              , Niroj Shrestha’s journey began with a profound commitment to
              social equity and education. He recognized early on that
              sustainable change requires empowering the roots of society.
            </p>

            <p>
              After earning his Master’s in Social Work from{" "}
              <span className="text-[#4FC3F7] font-bold">
                St. Xavier’s College
              </span>
              , he set out to bridge gaps in local education. This vision
              materialized when he became the Founder and Principal of the{" "}
              <span className="text-[#2E7D32] font-bold">
                Shikharapur Community Campus
              </span>{" "}
              and an initiator of the Shikharapur Community Learning Center.
            </p>

            <p>
              His pioneering approaches, such as the{" "}
              <span className="text-[#E76F51] font-bold">
                Bottle House Project
              </span>
              , have redefined sustainable learning. This initiative stands as a
              Japanese award-winning model of Education for Sustainable
              Development (ESD), promoted extensively by UNESCO and Nepal’s Ministry
              of Education.
            </p>

            <p>
              Today, he continues his academic exploration by pursuing an MPhil
              in Social Work from Tribhuvan University, representing Nepal globally,
              and empowering youth and women towards lifelong learning and
              local entrepreneurship.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;

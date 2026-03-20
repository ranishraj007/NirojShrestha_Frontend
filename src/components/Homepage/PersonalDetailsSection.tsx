import { useNavigate } from "react-router-dom";

const PersonalDetailsSection = () => {
  const navigate = useNavigate();
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

        <div className="flex flex-col gap-4 text-[#424242] text-base lg:text-[20px] leading-[36px] font-[700]">
          <p>
            <span className="text-[#2E7D32] font-bold">Niroj Shrestha</span> is
            a social work professional and CLC development practitioner from
            <span className="text-[#2E7D32]">
              {" "}
              Dakshinkal Municipality, Kathmandu
            </span>
            , born in a Newari ethnic community. He holds a Master’s in Social
            Work from
            <span className="text-[#4FC3F7]"> St. Xavier’s College</span> and is
            currently pursuing an MPhil in Social Work from
            <span className="text-[#4FC3F7]"> Tribhuvan University</span>.
          </p>

          <p>
            As the Founder and Principal of
            <span className="text-[#2E7D32]">
              {" "}
              Shikharapur Community Campus
            </span>{" "}
            and an initiator of the
            <span className="text-[#2E7D32]">
              {" "}
              Shikharapur Community Learning Center
            </span>
            , he has led impactful community-based projects such as the
            <span className="text-[#2E7D32]"> Bottle House Project</span> — a
            Japanese award-winning model of
            <span className="text-[#4FC3F7]">
              {" "}
              Education for Sustainable Development (ESD)
            </span>
            , promoted by UNESCO and Nepal’s Ministry of Education.
          </p>

          <p>
            Niroj has represented Nepal internationally through the
            <span className="text-[#4FC3F7]"> IVLP Program (USA)</span>,
            multiple
            <span className="text-[#4FC3F7]">
              {" "}
              ESD and Youth Exchange Programs in Japan
            </span>
            , and the{" "}
            <span className="text-[#4FC3F7]">
              {" "}
              CLC-Kominkan International Conference
            </span>
            . In 2024, he represented Nepal at the
            <span className="text-[#4FC3F7]"> ESD Weeks in Luxembourg</span>,
            strengthening global collaboration in sustainability and education.
          </p>

          <p>
            He has worked with
            <span className="text-[#2E7D32]">
              {" "}
              UNESCO Office in Kathmandu
            </span>{" "}
            and
            <span className="text-[#2E7D32]"> CEHRD</span>, supporting lifelong
            learning and non-formal education initiatives. His research on
            <span className="text-[#4FC3F7]">
              {" "}
              Lifelong Learning Education and Intangible Cultural Heritage
            </span>
            was published by{" "}
            <span className="text-[#4FC3F7]"> ICHCAP Korea</span>.
          </p>

          <p>
            Passionate about{" "}
            <span className="text-[#2E7D32]"> youth leadership</span>,
            <span className="text-[#2E7D32]"> women’s empowerment</span>, and
            <span className="text-[#2E7D32]"> lifelong learning</span>, Niroj
            continues to inspire communities through education, sustainability
            campaigns, and skill-based initiatives that reduce migration and
            promote local entrepreneurship.
          </p>
        </div>

        {/* read full story */}

        <div className="flex justify-center">
          <button 
            onClick={() => navigate('/about')}
            className="bg-[#787878] px-[45px] py-[21px] text-[#FFFFFF] text-[20px] font-[700] rounded-[20px] cursor-pointer hover:bg-[#666666] transition-colors"
          >
            Read Full Story
          </button>
        </div>
      </div>
    </section>
  );
};

export default PersonalDetailsSection;

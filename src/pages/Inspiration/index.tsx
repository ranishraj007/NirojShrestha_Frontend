import ImageWithSashiSir from "@/assets/images/ImageWithSashiSir.jpeg";
import SashiSharmaSir from "@/assets/images/SashiSharmaSir.jpg";

const Inspiration = () => {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="w-full bg-gradient-to-b from-[#2E7D32E5] via-[#2E7D32BF] to-[#1B5E20E5] py-[80px] md:py-[120px] px-[20px] md:px-[80px] lg:px-[150px] flex justify-center items-center text-center">
        <div className="max-w-4xl flex flex-col gap-[16px] items-center">
          <span className="text-[14px] lg:text-[16px] font-[500] leading-[26px] text-white text-center bg-[#FFFFFF33] border-[1.5px] border-[#FFFFFF4D] rounded-full px-[22px] py-[11px]">
            My Inspiration
          </span>
          <h1 className="text-[36px] md:text-[48px] lg:text-[61px] font-[700] text-white leading-[120%] md:leading-[100%]">
            A Guiding Light:
            <br className="hidden md:block" />{" "}
            <span className="text-[#0AC712]">Shashi Sharma Aryal</span>
          </h1>
          <p className="text-[16px] md:text-[20px] text-[#FFFFFFF2] font-[400] leading-[150%] max-w-2xl mt-4">
            A tribute to the man whose wisdom, mentorship, and vision continue
            to shape my journey in community leadership and social empowerment.
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section className="w-full max-w-7xl mx-auto py-[60px] md:py-[100px] px-[20px] md:px-[40px] lg:px-[80px] flex flex-col gap-[60px] md:gap-[100px]">
        {/* Solo Section */}
        <div className="flex flex-col md:flex-row items-center gap-[40px] md:gap-[60px]">
          <div className="w-full md:w-1/2 flex justify-center">
            <div className="w-full max-w-[500px] aspect-[4/5] bg-gray-200 rounded-[24px] shadow-sm flex items-center justify-center overflow-hidden">
              <img
                src={SashiSharmaSir}
                alt="Sashi Sharma"
                className="w-full h-full object-cover object-[65%_center]"
              />
            </div>
          </div>
          <div className="w-full md:w-1/2 flex flex-col gap-[20px]">
            <h2 className="text-[28px] md:text-[36px] lg:text-[42px] font-[700] text-[#1B5E20] leading-[120%]">
              The Visionary Mentor
            </h2>
            <div className="text-[16px] md:text-[18px] text-[#424242] font-[400] leading-[180%] flex flex-col gap-[20px]">
              <p>
                Mentorship and inspiration play a pivotal role in shaping one's
                journey to create a lasting community impact. For Niroj
                Shrestha, much of the drive to serve, educate, and empower
                others has been deeply influenced by the profound guidance of
                Sir Shashi Sharma Aryal.
              </p>
              <p>
                As a visionary educator and a compassionate leader, Sir Shashi
                Sharma has been a beacon of hope and excellence, modeling what
                it means to lead with a servant's heart. His unwavering
                commitment to sustainable development, academic brilliance, and
                community upliftment left an indelible mark on Niroj's own
                philosophy and life choices.
              </p>
            </div>
          </div>
        </div>

        {/* Together Section */}
        <div className="flex flex-col md:flex-row-reverse items-center gap-[40px] md:gap-[60px]">
          <div className="w-full md:w-1/2 flex justify-center">
            {/* Together Image Placeholder */}
            <div className="w-full max-w-[600px] aspect-[16/10] bg-gray-200 rounded-[24px] shadow-sm flex flex-col items-center justify-center overflow-hidden">
              <img src={ImageWithSashiSir} alt="Image with sashi sir" />
            </div>
          </div>
          <div className="w-full md:w-1/2 flex flex-col gap-[20px]">
            <h2 className="text-[28px] md:text-[36px] lg:text-[42px] font-[700] text-[#1B5E20] leading-[120%]">
              A Bond Beyond the Classroom
            </h2>
            <div className="text-[16px] md:text-[18px] text-[#424242] font-[400] leading-[180%] flex flex-col gap-[20px]">
              <p>
                Their bond goes far beyond a formal mentorship; it is a shared
                vision for a better, more inclusive society. Under Sir Shashi
                Sharma's gentle yet powerful tutelage, Niroj learned the vital
                importance of resilience, innovative thinking, and, perhaps most
                importantly, leading by example.
              </p>
              <p>
                Sir Shashi's life work has continuously demonstrated that true
                leadership is not about standing above others, but about lifting
                them up. This core belief has become the fuel for Niroj's
                numerous initiatives aimed at empowering youth, women, and
                farmers. The beautiful legacy of cascading positive change that
                Niroj champions today is firmly rooted in the values and lessons
                instilled by his beloved mentor.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Inspiration;

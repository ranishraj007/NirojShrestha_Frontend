import { Mail, Phone, MapPin, Send } from "lucide-react";

const Contact = () => {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="w-full bg-gradient-to-b from-[#2E7D32E5] via-[#2E7D32BF] to-[#1B5E20E5] py-[80px] md:py-[120px] px-[20px] md:px-[80px] lg:px-[150px] flex justify-center items-center text-center">
        <div className="max-w-4xl flex flex-col gap-[16px] items-center">
          <span className="text-[14px] lg:text-[16px] font-[500] leading-[26px] text-white text-center bg-[#FFFFFF33] border-[1.5px] border-[#FFFFFF4D] rounded-full px-[22px] py-[11px]">
            Get In Touch
          </span>
          <h1 className="text-[36px] md:text-[48px] lg:text-[61px] font-[700] text-white leading-[120%] md:leading-[100%]">
            Let's Make a <span className="text-[#0AC712]">Difference</span>{" "}
            Together
          </h1>
          <p className="text-[16px] md:text-[20px] text-[#FFFFFFF2] font-[400] leading-[150%] max-w-2xl mt-4">
            Whether you are looking to collaborate, seek mentorship, or
            participate in community development initiatives, feel free to reach
            out.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="w-full max-w-7xl mx-auto py-[60px] md:py-[100px] px-[20px] md:px-[40px] lg:px-[80px] flex flex-col gap-[60px] md:gap-[100px]">
        {/* Contact Info & Form */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-[40px] md:gap-[60px]">
          {/* Contact Information */}
          <div className="flex flex-col gap-[30px] lg:pr-10">
            <h2 className="text-[28px] md:text-[36px] lg:text-[42px] font-[700] text-[#1B5E20] leading-[120%]">
              Contact Information
            </h2>
            <p className="text-[16px] md:text-[18px] text-[#424242] font-[400] leading-[180%] mb-4">
              I am always open to discussing new projects, creative ideas or
              opportunities to be part of your visions.
            </p>

            <div className="flex flex-col gap-[24px]">
              <div className="flex items-start gap-4 p-4 rounded-xl bg-white shadow-sm border border-gray-100 transition-transform duration-300 hover:-translate-y-1 hover:shadow-md">
                <div className="bg-[#2E7D321A] text-[#2E7D32] p-3 rounded-lg flex-shrink-0">
                  <Phone size={24} />
                </div>
                <div>
                  <h3 className="text-[18px] font-[600] text-[#1B5E20] mb-1">
                    Call Us
                  </h3>
                  <div className="flex flex-col text-[#424242] text-[16px]">
                    <a
                      href="tel:+9779851013055"
                      className="hover:text-[#2E7D32] transition-colors"
                    >
                      +977 9851013055
                    </a>
                    <a
                      href="tel:015928105"
                      className="hover:text-[#2E7D32] transition-colors"
                    >
                      015928105
                    </a>
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 rounded-xl bg-white shadow-sm border border-gray-100 transition-transform duration-300 hover:-translate-y-1 hover:shadow-md">
                <div className="bg-[#2E7D321A] text-[#2E7D32] p-3 rounded-lg flex-shrink-0">
                  <Mail size={24} />
                </div>
                <div>
                  <h3 className="text-[18px] font-[600] text-[#1B5E20] mb-1">
                    Email Us
                  </h3>
                  <div className="flex flex-col text-[#424242] text-[16px]">
                    <a
                      href="mailto:Niroj@pharping.org.np"
                      className="hover:text-[#2E7D32] transition-colors"
                    >
                      Niroj@pharping.org.np
                    </a>
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 rounded-xl bg-white shadow-sm border border-gray-100 transition-transform duration-300 hover:-translate-y-1 hover:shadow-md">
                <div className="bg-[#2E7D321A] text-[#2E7D32] p-3 rounded-lg flex-shrink-0">
                  <MapPin size={24} />
                </div>
                <div>
                  <h3 className="text-[18px] font-[600] text-[#1B5E20] mb-1">
                    Location
                  </h3>
                  <div className="flex flex-col text-[#424242] text-[16px]">
                    <span>Pharping, Kathmandu</span>
                    <span>Bagmati Province, Nepal</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Send Message Form */}
          <div className="bg-white rounded-[24px] p-[30px] md:p-[40px] shadow-lg border border-gray-100">
            <h2 className="text-[28px] md:text-[32px] font-[700] text-[#1B5E20] mb-[30px]">
              Send a Message
            </h2>
            <form
              className="flex flex-col gap-[20px]"
              onSubmit={(e) => e.preventDefault()}
            >
              <div className="flex flex-col gap-2">
                <label
                  htmlFor="name"
                  className="text-[#424242] font-[500] text-[16px]"
                >
                  Name *
                </label>
                <input
                  type="text"
                  id="name"
                  required
                  placeholder="Your full name"
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#2E7D32] focus:ring-2 focus:ring-[#2E7D3233] outline-none transition-all placeholder:text-gray-400 text-[#424242]"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label
                  htmlFor="email"
                  className="text-[#424242] font-[500] text-[16px]"
                >
                  Email *
                </label>
                <input
                  type="email"
                  id="email"
                  required
                  placeholder="Your email address"
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#2E7D32] focus:ring-2 focus:ring-[#2E7D3233] outline-none transition-all placeholder:text-gray-400 text-[#424242]"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label
                  htmlFor="message"
                  className="text-[#424242] font-[500] text-[16px]"
                >
                  Message *
                </label>
                <textarea
                  id="message"
                  rows={5}
                  required
                  placeholder="Write your message here..."
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#2E7D32] focus:ring-2 focus:ring-[#2E7D3233] outline-none transition-all placeholder:text-gray-400 text-[#424242] resize-y"
                ></textarea>
              </div>

              <button
                type="submit"
                className="mt-4 w-full bg-[#2E7D32] hover:bg-[#1B5E20] text-white font-[600] text-[16px] py-4 rounded-xl flex items-center justify-center gap-2 transition-all duration-300 shadow-md hover:shadow-lg hover:-translate-y-1"
              >
                <span>Send Message</span>
                <Send size={18} />
              </button>
            </form>
          </div>
        </div>

        {/* Find Us Map Section */}
        <div className="flex flex-col gap-[30px] pt-[40px] border-t border-gray-200">
          <div className="flex flex-col items-center text-center gap-4">
            <h2 className="text-[28px] md:text-[36px] lg:text-[42px] font-[700] text-[#1B5E20] leading-[120%]">
              Find Us
            </h2>
            <div className="flex items-center gap-2 text-[#424242] font-[500] bg-white px-6 py-3 rounded-full shadow-sm border border-gray-100">
              <MapPin className="text-[#2E7D32]" size={20} />
              <span className="text-[16px] md:text-[18px]">
                Shikharapur Community Campus, Pharping Kathmandu
              </span>
            </div>
          </div>

          {/* <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d18943378.388246797!2d69.08009823051826!3d22.843263700013598!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb3d7ebc6d3e17%3A0xc1de4c01a6fc1ad2!2sShikharapur%20School.!5e1!3m2!1sen!2snp!4v1772557824914!5m2!1sen!2snp" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe> */}

          <div className="w-full h-[400px] md:h-[500px] rounded-[24px] overflow-hidden shadow-lg border-[4px] border-white relative bg-gray-200">
            <iframe
              src="https://www.google.com/maps?q=27.614877050065196,85.26810395805465&z=15&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              title="School Location"
              className="absolute inset-0"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;

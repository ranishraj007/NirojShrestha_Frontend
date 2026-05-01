import { Facebook, Instagram, Linkedin, Mail, MapPin, Phone, Zap } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  const links = [
    { name: "About", path: "/about" },
    { name: "Impact", path: "/projects" },
    { name: "Stories", path: "/blog" },
    { name: "Inspiration", path: "/inspiration" },
    { name: "Contact", path: "/contact" },
  ];

  const socials = [
    {
      icon: <Facebook size={18} />,
      href: "https://www.facebook.com/niroj.shrestha.92",
      label: "Facebook",
    },
    {
      icon: <Linkedin size={18} />,
      href: "https://www.linkedin.com/in/niroj-shrestha-32421339/",
      label: "LinkedIn",
    },
    {
      icon: <Instagram size={18} />,
      href: "https://www.instagram.com/niroj.shrestha.92/",
      label: "Instagram",
    },
    {
      icon: <Zap size={18} />,
      href: "https://www.flickr.com/people/198803957@N06/",
      label: "Flickr",
    },
  ];

  return (
    <footer className="bg-[#20382b] text-[#f7ecd8]">
      <div className="story-container grid gap-10 py-14 md:grid-cols-[1.4fr_0.8fr_1fr] md:py-18">
        <div>
          <p className="editorial-kicker text-[#f0b35a]">Keep the work moving</p>
          <h2 className="mt-4 max-w-xl text-[34px] font-black leading-[1.05] md:text-[46px]">
            Let us build learning, dignity, and opportunity with communities.
          </h2>
          <p className="mt-5 max-w-lg text-[16px] leading-8 text-[#e4d6bd]">
            For collaborations, field visits, speaking invitations, or support for
            community learning initiatives, reach out with a simple note.
          </p>
        </div>

        <div>
          <h3 className="text-[18px] font-black">Explore</h3>
          <div className="mt-5 flex flex-col gap-3">
            {links.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className="w-fit text-[#e4d6bd] transition hover:text-white"
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-[18px] font-black">Reach Niroj</h3>
          <div className="mt-5 flex flex-col gap-4 text-[#e4d6bd]">
            <a className="flex gap-3 hover:text-white" href="mailto:Niroj@pharping.org.np">
              <Mail className="mt-1 shrink-0 text-[#f0b35a]" size={18} />
              <span>Niroj@pharping.org.np</span>
            </a>
            <a className="flex gap-3 hover:text-white" href="tel:+9779851013055">
              <Phone className="mt-1 shrink-0 text-[#f0b35a]" size={18} />
              <span>+977 9851013055</span>
            </a>
            <p className="flex gap-3">
              <MapPin className="mt-1 shrink-0 text-[#f0b35a]" size={18} />
              <span>Pharping, Kathmandu, Nepal</span>
            </p>
          </div>

          <div className="mt-6 flex gap-3">
            {socials.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noreferrer"
                aria-label={social.label}
                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-[#f7ecd8]/20 text-[#f7ecd8] transition hover:-translate-y-0.5 hover:border-[#f0b35a] hover:text-[#f0b35a]"
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="border-t border-white/10 py-5">
        <div className="story-container flex flex-col gap-2 text-[13px] text-[#cdbfaa] md:flex-row md:items-center md:justify-between">
          <p>&copy; {new Date().getFullYear()} Niroj Shrestha. Rooted in community.</p>
          <p>Designed for stories, service, and shared action.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

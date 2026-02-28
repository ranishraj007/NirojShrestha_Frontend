import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Send, Facebook, Twitter, Linkedin, Github } from 'lucide-react';

const Footer = () => {
    return (
        <footer style={{ background: 'linear-gradient(180deg, #424242 0%, #37474F 50%, #263238 100%)' }} className="text-gray-300 pt-16 pb-8 border-t border-gray-700 relative z-10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
                    {/* Get In Touch */}
                    <div className="animate-fade-in-up">
                        <h3 className="text-white text-xl font-bold mb-6 border-b-2 border-blue-500 pb-2 inline-block">Get In Touch</h3>
                        <ul className="space-y-4">
                            <li className="flex items-start gap-3 group">
                                <div className="mt-1 bg-gray-700/50 p-2 rounded-lg group-hover:bg-blue-600/20 transition-colors">
                                    <MapPin className="text-blue-400 group-hover:text-blue-300 transition-colors" size={20} />
                                </div>
                                <span>Pharping, Kathmandu<br />Bagmati Province, Nepal</span>
                            </li>
                            <li className="flex items-center gap-3 group">
                                <div className="bg-gray-700/50 p-2 rounded-lg group-hover:bg-blue-600/20 transition-colors">
                                    <Phone className="text-blue-400 group-hover:text-blue-300 transition-colors" size={20} />
                                </div>
                                <span>+977 980-0000000</span>
                            </li>
                            <li className="flex items-center gap-3 group">
                                <div className="bg-gray-700/50 p-2 rounded-lg group-hover:bg-blue-600/20 transition-colors">
                                    <Mail className="text-blue-400 group-hover:text-blue-300 transition-colors" size={20} />
                                </div>
                                <a href="mailto:info@example.com" className="hover:text-white transition-colors">info@example.com</a>
                            </li>
                        </ul>
                    </div>

                    {/* Quick Links */}
                    <div className="animate-fade-in-up" style={{ animationDelay: '100ms' }}>
                        <h3 className="text-white text-xl font-bold mb-6 border-b-2 border-blue-500 pb-2 inline-block">Quick Links</h3>
                        <ul className="space-y-3">
                            {[
                                { name: 'Home', path: '/' },
                                { name: 'About', path: '/about' },
                                { name: 'Projects', path: '/projects' },
                                { name: 'Contact', path: '/contact' }
                            ].map((link) => (
                                <li key={link.name}>
                                    <Link to={link.path} className="group flex items-center hover:text-white transition-all duration-300">
                                        <span className="text-blue-500 mr-2 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">→</span>
                                        <span className="group-hover:translate-x-1 transition-transform duration-300">{link.name}</span>
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Stay Updated / Form */}
                    <div className="lg:col-span-2 animate-fade-in-up" style={{ animationDelay: '200ms' }}>
                        <h3 className="text-white text-xl font-bold mb-6 border-b-2 border-blue-500 pb-2 inline-block">Stay Updated</h3>
                        <p className="mb-5 text-sm leading-relaxed text-gray-400">Subscribe to our newsletter to receive the latest updates, news, and exclusive offers right to your inbox.</p>
                        <form className="flex flex-col sm:flex-row gap-3" onSubmit={(e) => e.preventDefault()}>
                            <div className="relative grow">
                                <input 
                                    type="email" 
                                    placeholder="Enter your email address" 
                                    className="w-full pl-11 pr-4 py-3 rounded-xl bg-gray-800/60 border border-gray-600 focus:border-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-400/50 text-white placeholder-gray-500 transition-all shadow-inner"
                                    required
                                />
                                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500" size={18} />
                            </div>
                            <button 
                                type="submit" 
                                className="bg-blue-600 border border-blue-500 hover:bg-blue-700 hover:border-blue-600 text-white px-6 py-3 rounded-xl flex items-center justify-center gap-2 font-semibold transition-all shadow-[0_4px_14px_0_rgba(37,99,235,0.39)] hover:shadow-[0_6px_20px_rgba(37,99,235,0.23)] hover:-translate-y-0.5"
                            >
                                <span>Subscribe</span>
                                <Send size={18} />
                            </button>
                        </form>
                        
                        {/* Social Media */}
                        <div className="mt-10">
                            <h4 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">Follow Us</h4>
                            <div className="flex gap-4">
                                {[
                                    { icon: <Facebook size={20} />, href: "#", bgHover: "hover:bg-[#1877F2]" },
                                    { icon: <Twitter size={20} />, href: "#", bgHover: "hover:bg-[#1DA1F2]" },
                                    { icon: <Linkedin size={20} />, href: "#", bgHover: "hover:bg-[#0A66C2]" },
                                    { icon: <Github size={20} />, href: "#", bgHover: "hover:bg-[#333]" }
                                ].map((social, idx) => (
                                    <a 
                                        key={idx} 
                                        href={social.href} 
                                        className={`w-11 h-11 rounded-full bg-gray-800 border border-gray-600 flex items-center justify-center text-gray-400 hover:text-white transition-all duration-300 hover:border-transparent ${social.bgHover} hover:shadow-lg hover:-translate-y-1`}
                                    >
                                        {social.icon}
                                    </a>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Copyright Part */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16 pt-8 border-t border-gray-600/50 text-sm flex flex-col md:flex-row justify-between items-center gap-4 text-gray-400">
                <p>&copy; {new Date().getFullYear()} Niroj Shrestha. All rights reserved.</p>
                <div className="flex gap-6">
                    <Link to="/privacy-policy" className="hover:text-white transition-colors relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-px after:bg-white hover:after:w-full after:transition-all after:duration-300">Privacy Policy</Link>
                    <Link to="/terms-of-service" className="hover:text-white transition-colors relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-px after:bg-white hover:after:w-full after:transition-all after:duration-300">Terms of Service</Link>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
import React from 'react';
import { Mail, Phone, MapPin, Clock, Facebook, Twitter, Instagram, Linkedin, Youtube, Zap } from 'lucide-react';

// --- Data Structures ---

interface FooterLink {
  name: string;
  href: string;
}

interface LinkGroup {
  title: string;
  links: FooterLink[];
}

const COMPANY_LINKS: FooterLink[] = [
  { name: "About Codemonk", href: "#about" },
  { name: "Our Portfolio", href: "#portfolio" },
  { name: "Our Software Development Team", href: "#team" },
  { name: "Career Opportunities", href: "#careers" },
  { name: "Contact Our Experts", href: "#contact" },
  { name: "Client Success Stories", href: "#success" },
  { name: "Blog & Resources", href: "#blog" },
];

const SERVICE_LINKS: FooterLink[] = [
  { name: "Custom Software Development", href: "#custom-dev" },
  { name: "Web Application Development", href: "#web-app" },
  { name: "Mobile App Development", href: "#mobile-app" },
  { name: "E-commerce Solutions", href: "#ecommerce" },
  { name: "Cloud Solutions & Migration", href: "#cloud" },
  { name: "UI/UX Design", href: "#ui-ux" },
];

const INDUSTRY_LINKS: FooterLink[] = [
  { name: "Healthcare Software", href: "#healthcare" },
  { name: "Education Technology", href: "#edu-tech" },
  { name: "FinTech Solutions", href: "#fintech" },
  { name: "NGO & Non-Profit", href: "#ngo" },
  { name: "Travel & Tourism", href: "#travel" },
  { name: "Manufacturing", href: "#manufacturing" },
];

const LINK_GROUPS: LinkGroup[] = [
  { title: "Company", links: COMPANY_LINKS },
  { title: "Our Services", links: SERVICE_LINKS },
  { title: "Industries", links: INDUSTRY_LINKS },
];

// --- Utility Components ---

const SocialIcon: React.FC<{ Icon: React.ElementType; href: string }> = ({ Icon, href }) => (
  <a 
    href={href} 
    target="_blank" 
    rel="noopener noreferrer"
    className="p-3 rounded-full border border-blue-500/30 text-blue-300 hover:text-white hover:bg-blue-600 
               transition-all duration-300 transform hover:scale-110"
    // aria-label={Icon.name}
  >
    <Icon className="w-5 h-5" />
  </a>
);

const FooterLinkItem: React.FC<{ link: FooterLink }> = ({ link }) => (
  <li className="mb-2">
    <a 
      href={link.href}
      className="text-blue-200 hover:text-white transition-colors duration-200 text-sm relative group"
    >
      {link.name}
      {/* Animated underline effect */}
      <span className="absolute left-0 bottom-0 h-0.5 w-0 bg-white transition-all duration-300 group-hover:w-full"></span>
    </a>
  </li>
);

// --- Main App Component ---

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#0e1630] text-white pt-16 pb-6 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* 1. Main Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 border-b border-blue-800/50 pb-12">
          
          {/* Company Info (Span 4 columns) */}
          <div className="md:col-span-4 space-y-6">
            <div className="flex items-center space-x-2">
              <Zap className="w-8 h-8 text-blue-500" />
              <h3 className="text-3xl font-extrabold tracking-tight">
                Code<span className="text-blue-400">monk</span>
              </h3>
            </div>
            
            <p className="text-blue-200/90 text-sm max-w-sm">
              Professional software development company specializing in custom solutions, web and mobile applications for global growth.
            </p>

            <div className="space-y-3 text-blue-300">
              <div className="flex items-center space-x-3 transition duration-300 hover:text-white cursor-default">
                <MapPin className="w-5 h-5 shrink-0" />
                <span className="text-sm">Pune, Maharashtra, India</span>
              </div>
              <a href="mailto:info@codemonk.com" className="flex items-center space-x-3 transition duration-300 hover:text-white group">
                <Mail className="w-5 h-5 shrink-0 group-hover:animate-pulse" />
                <span className="text-sm">info@codemonk.com</span>
              </a>
              <a href="tel:+919876543210" className="flex items-center space-x-3 transition duration-300 hover:text-white group">
                <Phone className="w-5 h-5 shrink-0 group-hover:animate-pulse" />
                <span className="text-sm">+91 98765 43210</span>
              </a>
              <div className="flex items-center space-x-3 transition duration-300 hover:text-white cursor-default">
                <Clock className="w-5 h-5 shrink-0" />
                <span className="text-sm">Mon-Fri: 9:00 AM - 6:00 PM IST</span>
              </div>
            </div>

            {/* Social Icons */}
            <div className="flex space-x-3 pt-4">
              <SocialIcon Icon={Facebook} href="https://facebook.com" />
              <SocialIcon Icon={Twitter} href="https://twitter.com" />
              <SocialIcon Icon={Instagram} href="https://instagram.com" />
              <SocialIcon Icon={Linkedin} href="https://linkedin.com" />
              <SocialIcon Icon={Youtube} href="https://youtube.com" />
            </div>
          </div>
          
          {/* Link Groups (Span 8 columns in total, 4/4/4 split) */}
          {LINK_GROUPS.map((group, index) => (
            <div key={index} className="md:col-span-8 lg:col-span-2 space-y-4">
              <h4 className="text-lg font-bold text-white mb-4 tracking-wider uppercase border-b-2 border-blue-500 w-fit pb-1">
                {group.title}
              </h4>
              <ul className="space-y-2">
                {group.links.map((link, linkIndex) => (
                  <FooterLinkItem key={linkIndex} link={link} />
                ))}
              </ul>
            </div>
          ))}

        </div>

        {/* 2. Copyright and Policy */}
        <div className="pt-6 flex flex-col md:flex-row justify-between items-center text-center md:text-left text-sm text-blue-300/80">
          <p className="order-2 md:order-1 mt-4 md:mt-0">
            &copy; {new Date().getFullYear()} Codemonk Solutions Pvt. Ltd. All rights reserved.
          </p>
          <div className="order-1 md:order-2 flex space-x-4">
            <a href="#privacy" className="hover:text-white transition-colors duration-200">Privacy Policy</a>
            <a href="#terms" className="hover:text-white transition-colors duration-200">Terms of Service</a>
            <a href="#sitemap" className="hover:text-white transition-colors duration-200">Sitemap</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
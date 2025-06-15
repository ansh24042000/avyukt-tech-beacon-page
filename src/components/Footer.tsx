
import { Linkedin, Instagram, Mail, Phone, Home, Globe, Github, Smartphone } from "lucide-react";

const footerLinks = [
  {
    heading: "Services",
    links: [
      { name: "Customizable ERP Software", href: "#" },
      { name: "Restaurant Management", href: "#" },
      { name: "Retail & Billing", href: "#" },
      { name: "E-commerce Platform", href: "#" },
      { name: "Education Suite", href: "#" },
      { name: "HRM Tools", href: "#" },
    ],
  },
  {
    heading: "About us",
    links: [
      { name: "Our company", href: "#" },
      { name: "Contact us", href: "#contact" },
      { name: "Jobs", href: "#" },
      { name: "Events", href: "#" },
      { name: "Blog", href: "#" },
      { name: "Customers", href: "#" },
      { name: "Legal • Privacy", href: "#" },
      { name: "Security", href: "#" },
    ],
  },
];

const Footer = () => (
  <footer className="bg-black text-white py-12 border-t border-gray-800">
    <div className="container px-4 mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
        {/* Group "Services" and "About us" closer together */}
        <div className="flex flex-col sm:flex-row gap-10 sm:gap-16 lg:gap-8">
          {footerLinks.map(section => (
            <div key={section.heading} className="flex flex-col gap-2 min-w-[150px]">
              <div className="font-bold mb-2">{section.heading}</div>
              {section.links.map(link =>
                <a
                  key={link.name}
                  href={link.href}
                  className="text-sm text-gray-300 hover:text-accent transition-colors"
                  target={link.href.startsWith('http') ? "_blank" : undefined}
                  rel={link.href.startsWith('http') ? "noopener noreferrer" : undefined}
                >
                  {link.name}
                </a>
              )}
            </div>
          ))}
        </div>
        {/* Details on the right */}
        <div className="mt-8 lg:mt-0 lg:col-span-1 flex flex-col gap-4 items-start lg:items-end text-xs">
          <div className="flex items-center gap-2 text-xs mb-2">
            <Globe className="w-4 h-4 text-accent" />
            <span>English</span>
          </div>
          <hr className="border-t border-gray-700 my-2 w-full lg:w-5/6" />
          <div className="text-xs opacity-80 leading-relaxed mb-2 max-w-xs text-left lg:text-right">
            Avyukt Core Technology delivers intelligent software solutions for modern businesses. We offer CRM, ERP, eCommerce, Accounting, Inventory & more—integrated and easy to use.
          </div>
          <div className="flex gap-2 text-xs text-gray-400 items-start lg:justify-end">
            <Home className="w-4 h-4 text-accent mt-0.5" />
            <span className="block">
              22nd Floor, Cyber Heights,<br />
              Tech City, Sector 135,<br />
              Noida, Uttar Pradesh 201304, India
            </span>
          </div>
          <div className="flex items-center gap-2 text-xs text-gray-400 lg:justify-end">
            <Phone className="w-4 h-4 text-accent" />
            <a href="tel:+919876543210" className="hover:underline">+91 98765 43210</a>
          </div>
          <div className="flex items-center gap-2 text-xs text-gray-400 lg:justify-end">
            <Mail className="w-4 h-4 text-accent" />
            <a href="mailto:info@avyuktcoretech.com" className="hover:underline">info@avyuktcoretech.com</a>
          </div>
          <div className="flex items-center gap-4 mt-2 lg:justify-end">
            <a href="https://linkedin.com/" aria-label="LinkedIn" target="_blank" rel="noopener noreferrer" className="hover:text-accent">
              <Linkedin className="w-5 h-5" />
            </a>
            <a href="https://instagram.com/" aria-label="Instagram" target="_blank" rel="noopener noreferrer" className="hover:text-accent">
              <Instagram className="w-5 h-5" />
            </a>
            <a href="mailto:info@avyuktcoretech.com" aria-label="Mail" className="hover:text-accent">
              <Mail className="w-5 h-5" />
            </a>
            <a href="https://github.com/" aria-label="Github" target="_blank" rel="noopener noreferrer" className="hover:text-accent">
              <Github className="w-5 h-5" />
            </a>
            <a href="tel:+919876543210" aria-label="Phone" className="hover:text-accent">
              <Smartphone className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
      <div className="mt-10 text-xs text-gray-400 text-center">
        © 2025 Avyukt Core Technology. All Rights Reserved.
      </div>
    </div>
  </footer>
);

export default Footer;

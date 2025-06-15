import { Linkedin, Instagram, Mail, Phone, Home, Globe, Github, Smartphone, MessageCircle } from "lucide-react";

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
    <div className="container px-4 mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
      {/* Desktop: Two link columns (Community and Open Source removed) */}
      {footerLinks.map(section => (
        <div key={section.heading} className="flex flex-col gap-2">
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
      {/* Last column: Language, description, socials */}
      <div className="flex flex-col gap-4 lg:pl-6">
        <div className="flex items-center gap-2 text-xs mb-2">
          <Globe className="w-4 h-4 text-accent" />
          <span>English</span>
        </div>
        <hr className="border-t border-gray-700 my-2" />
        <div className="text-xs opacity-80 leading-relaxed mb-2">
          Avyukt Core Technology delivers intelligent software solutions for modern businesses. We offer CRM, ERP, eCommerce, Accounting, Inventory & more—integrated and easy to use.
        </div>
        <div className="flex gap-2 text-xs text-gray-400">
          <Home className="w-4 h-4 text-accent" />
          22nd Floor, Cyber Heights,<br />
          Tech City, Sector 135,<br />
          Noida, Uttar Pradesh 201304, India
        </div>
        <div className="flex items-center gap-2 text-xs text-gray-400">
          <Phone className="w-4 h-4 text-accent" />
          <a href="tel:+919876543210" className="hover:underline">+91 98765 43210</a>
        </div>
        <div className="flex items-center gap-2 text-xs text-gray-400">
          <Mail className="w-4 h-4 text-accent" />
          <a href="mailto:info@avyuktcoretech.com" className="hover:underline">info@avyuktcoretech.com</a>
        </div>
        <div className="flex items-center gap-4 mt-2">
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
    <div className="container px-4 mx-auto mt-10 text-xs text-gray-400 text-center">
      © 2025 Avyukt Core Technology. All Rights Reserved.
    </div>
  </footer>
);

export default Footer;

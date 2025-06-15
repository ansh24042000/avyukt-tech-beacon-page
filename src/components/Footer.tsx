
import { Linkedin, Instagram, Mail, Phone, Home } from "lucide-react";

const Footer = () => (
  <footer className="bg-black text-white py-10">
    <div className="container px-4 mx-auto flex flex-col md:flex-row justify-between gap-10">
      {/* Contact & Address */}
      <div className="flex-1 flex flex-col gap-3">
        <div className="text-2xl font-bold mb-1">Avyukt Core Technology</div>
        <div className="flex items-start gap-2 text-sm">
          <Home className="w-5 h-5 mt-1 text-accent" />
          <div>
            22nd Floor, Cyber Heights<br />
            Tech City, Sector 135<br />
            Noida, Uttar Pradesh 201304<br />
            India
          </div>
        </div>
        <div className="flex items-center gap-2 text-sm mt-1">
          <Phone className="w-5 h-5 text-accent" />
          <a href="tel:+919876543210" className="hover:underline">+91 98765 43210</a>
        </div>
        <div className="flex items-center gap-2 text-sm">
          <Mail className="w-5 h-5 text-accent" />
          <a href="mailto:info@avyuktcoretech.com" className="hover:underline">info@avyuktcoretech.com</a>
        </div>
      </div>
      {/* Quick Links & Social */}
      <div className="flex-1 flex flex-col items-center md:items-end gap-4">
        <nav className="flex gap-6 font-medium text-lg">
          <a href="#top" className="hover:text-accent transition-colors">Home</a>
          <a href="#services" className="hover:text-accent transition-colors">Services</a>
          <a href="#about" className="hover:text-accent transition-colors">About</a>
          <a href="#contact" className="hover:text-accent transition-colors">Contact</a>
        </nav>
        <div className="flex gap-4 mt-3">
          <a href="https://linkedin.com/" aria-label="LinkedIn" target="_blank" rel="noopener noreferrer" className="hover:text-accent">
            <Linkedin className="w-6 h-6" />
          </a>
          <a href="https://instagram.com/" aria-label="Instagram" target="_blank" rel="noopener noreferrer" className="hover:text-accent">
            <Instagram className="w-6 h-6" />
          </a>
        </div>
        <div className="mt-4 text-xs opacity-70 text-center md:text-right">
          © 2025 Avyukt Core Technology.<br />
          All Rights Reserved.
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;

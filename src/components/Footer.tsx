
import { Linkedin, Instagram, Mail, Phone, Home } from "lucide-react";

const Footer = () => (
  <footer className="bg-primary text-white py-10">
    <div className="container px-4 mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
      <div className="flex flex-col items-center md:items-start gap-2">
        <div className="text-xl font-bold tracking-tight">Avyukt Core Technology</div>
        <div className="text-sm md:text-base">
          <Mail className="inline w-4 h-4 mr-1 opacity-90" /> info@avyuktcoretech.com
        </div>
        <div className="text-sm md:text-base">
          <Phone className="inline w-4 h-4 mr-1 opacity-90" /> +91 98765 43210
        </div>
        <div className="text-sm md:text-base">
          <Home className="inline w-4 h-4 mr-1 opacity-90" /> 22nd Floor, Cyber Heights, Tech City, India
        </div>
      </div>
      <div className="flex flex-col items-center gap-2">
        <nav className="flex gap-6 font-medium text-lg mb-2">
          <a href="#top" className="hover:text-accent transition-all">Home</a>
          <a href="#services" className="hover:text-accent transition-all">Services</a>
          <a href="#about" className="hover:text-accent transition-all">About</a>
          <a href="#contact" className="hover:text-accent transition-all">Contact</a>
        </nav>
        <div className="flex gap-4 mt-2">
          <a href="https://linkedin.com/" aria-label="LinkedIn" target="_blank" rel="noopener noreferrer" className="hover:text-accent">
            <Linkedin className="w-6 h-6" />
          </a>
          <a href="https://instagram.com/" aria-label="Instagram" target="_blank" rel="noopener noreferrer" className="hover:text-accent">
            <Instagram className="w-6 h-6" />
          </a>
        </div>
        <div className="mt-3 text-xs opacity-80">
          © 2025 Avyukt Core Technology. All Rights Reserved.
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;

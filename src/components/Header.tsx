
import React from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="w-full sticky top-0 bg-white z-50 border-b border-gray-100 shadow-sm">
      <nav className="container mx-auto flex items-center justify-between py-3 px-4">
        {/* Logo (left side) */}
        <div className="flex items-center gap-3">
          <Link to="/" className="flex items-center gap-2">
            <img
              src="/lovable-uploads/9a295041-b715-4e21-8400-d0ea69a1e49e.png"
              alt="Avyukt Core Technology Logo"
              className="h-10 w-10 sm:h-12 sm:w-12 rounded-md object-contain"
              loading="lazy"
            />
            <span className="hidden sm:block text-xl font-bold tracking-tight bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent">
              AVYUKT CORE TECHNOLOGIES
            </span>
          </Link>
        </div>
        {/* Nav links (right side) */}
        <div className="flex items-center gap-3">
          <Button
            variant="ghost"
            className="font-semibold"
            asChild
          >
            <Link to="/about">
              About Us
            </Link>
          </Button>
          <Button
            variant="ghost"
            className="font-semibold"
            asChild
          >
            <Link to="/contact">
              Contact Us
            </Link>
          </Button>
        </div>
      </nav>
    </header>
  );
};

export default Header;


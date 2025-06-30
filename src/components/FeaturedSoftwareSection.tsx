
import React from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const softwareList = [
  { name: "School Management", icon: "🎓" },
  { name: "Restaurant Management System", icon: "🍽️" },
  { name: "Digital Marketing", icon: "📱" },
  { name: "E-commerce", icon: "🛒" },
  { name: "Manufacturing", icon: "🏭" },
  { name: "Inventory", icon: "📦" },
  { name: "Sales", icon: "📊" },
  { name: "HR", icon: "👥" },
  { name: "Dashboard", icon: "📈" },
  { name: "Purchase", icon: "💳" },
  { name: "Website", icon: "🌐" },
  { name: "CRM", icon: "🤝" },
  { name: "Field Service", icon: "🛩️" },
  { name: "Planning", icon: "🗓️" },
  { name: "Helpdesk", icon: "🆘" },
  { name: "Timesheets", icon: "⏱️" },
  { name: "Point of Sale", icon: "🏪" },
  { name: "Rental", icon: "🔑" },
  { name: "Accounting", icon: "💹" },
  { name: "Studio", icon: "🛠️" },
  { name: "Project", icon: "✅" },
];

const FeaturedSoftwareSection = () => (
  <section
    className="w-full relative z-10 bg-white py-12 md:py-16"
    aria-label="Featured Services"
  >
    <div className="container mx-auto px-4">
      <h2 className="text-2xl md:text-3xl font-bold text-primary mb-2 text-center">
        Featured Services
      </h2>
      <p className="mx-auto text-center mb-8 text-gray-500 md:w-2/3">
        Discover our most popular solutions, tailored for every need.
      </p>
      <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-5 md:gap-7 xl:gap-8 max-w-5xl mx-auto">
        {softwareList.map((item) => (
          <div
            key={item.name}
            className="
              flex flex-col items-center
              bg-muted rounded-lg shadow-card py-5 px-2
              transition-transform duration-150
              hover:scale-105 hover:shadow-lg
            "
          >
            <div
              className="
                w-14 h-14 md:w-16 md:h-16 flex items-center justify-center
                bg-white rounded-lg shadow
                mb-3 text-3xl md:text-4xl
                border border-gray-200
              "
              aria-label={item.name + " icon"}
            >
              {item.icon}
            </div>
            <span className="text-sm md:text-base font-medium text-gray-700 text-center">
              {item.name}
            </span>
          </div>
        ))}
      </div>
      <div className="mt-10 flex justify-center">
        <Button asChild size="lg" className="px-8 py-4 text-base rounded-lg shadow-md text-black hover:text-black">
          <Link to="/services">Explore me</Link>
        </Button>
      </div>
    </div>
  </section>
);

export default FeaturedSoftwareSection;

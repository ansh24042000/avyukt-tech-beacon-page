
import { Book, Check, List, FileText, ShoppingCart, Image, Home } from "lucide-react";
import { ReactNode } from "react";

type Service = {
  title: string;
  icon: ReactNode;
  description: string;
  link: string;
};

const services: Service[] = [
  {
    title: "Customizable ERP Software",
    icon: <FileText className="w-8 h-8 text-primary" />,
    description:
      "An all-in-one platform to manage and automate business processes with full customization.",
    link: "#",
  },
  {
    title: "Restaurant Management System",
    icon: <Home className="w-8 h-8 text-primary" />,
    description:
      "Smooth operations — from order to inventory—built for modern food businesses and chains.",
    link: "#",
  },
  {
    title: "School & Education Mgmt. Software",
    icon: <Book className="w-8 h-8 text-primary" />,
    description:
      "Manage admissions, attendance, exams, and communication with easy to use tools.",
    link: "#",
  },
  {
    title: "Retail & Billing Solutions",
    icon: <List className="w-8 h-8 text-primary" />,
    description:
      "Fast, reliable sales and billing system—ideal for retail businesses large or small.",
    link: "#",
  },
  {
    title: "E-commerce Platform Integration",
    icon: <ShoppingCart className="w-8 h-8 text-primary" />,   {/* Fixed icon */}
    description:
      "Connect your business to leading online stores and manage your digital presence.",
    link: "#",
  },
  {
    title: "Inventory & HRM Tools",
    icon: <Check className="w-8 h-8 text-primary" />,
    description:
      "Advanced tracking for your inventory and streamlined HR management in a single suite.",
    link: "#",
  },
];

const ServicesSection = () => (
  <section id="services" className="bg-white py-14 md:py-20">
    <div className="container mx-auto px-4">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-primary">
        Our Key Services
      </h2>
      <div className="mx-auto text-center mb-8 text-gray-500 md:w-2/3">
        We provide a suite of digital solutions helping you manage, grow, and innovate your business.
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 xl:gap-10 max-w-5xl mx-auto">
        {services.map((svc) => (
          <div
            key={svc.title}
            className="bg-muted rounded-2xl shadow-card hover:shadow-lg hover:scale-[1.03] transition-transform duration-150 px-6 py-7 flex flex-col gap-3 items-start animate-fade-in"
          >
            <div className="mb-3">{svc.icon}</div>
            <h3 className="font-semibold text-xl mb-1 text-gray-900">
              {svc.title}
            </h3>
            <div className="text-gray-500 mb-2">{svc.description}</div>
            <a
              href={svc.link}
              className="text-primary font-semibold group flex items-center space-x-2 hover:underline"
            >
              <span>Learn More</span>
            </a>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default ServicesSection;


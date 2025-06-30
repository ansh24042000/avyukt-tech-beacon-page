import React from "react";
import { Rocket, ShieldCheck, BarChart3, Settings } from "lucide-react";
import { Button } from "@/components/ui/button";

const features = [
  {
    title: "Scalable Architecture",
    icon: <Rocket className="w-6 h-6 text-primary" />,
    description:
      "Our platform is built to scale with your business, handling increasing loads without compromising performance.",
  },
  {
    title: "Data Security",
    icon: <ShieldCheck className="w-6 h-6 text-primary" />,
    description:
      "We employ advanced security measures to protect your data, ensuring confidentiality and compliance.",
  },
  {
    title: "Real-time Analytics",
    icon: <BarChart3 className="w-6 h-6 text-primary" />,
    description:
      "Gain insights into your business with real-time analytics and customizable reports.",
  },
  {
    title: "Custom Integrations",
    icon: <Settings className="w-6 h-6 text-primary" />,
    description:
      "Seamlessly integrate our solutions with your existing systems for a unified workflow.",
  },
];

const PricingFlexibilitySection = () => (
  <section
    id="pricing"
    className="bg-muted py-16 md:py-20"
    style={{
      borderTopLeftRadius: "8% 10vw",
      borderTopRightRadius: "8% 10vw",
    }}
  >
    <div className="container mx-auto px-4">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-primary">
        Advanced Features
      </h2>
      <p className="mx-auto text-center mb-12 text-gray-500 md:w-2/3">
        Our solutions offer extensive advanced features and we believe in fair, transparent pricing.
      </p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {features.map((feature, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl p-8 shadow-card hover:shadow-lg transition-shadow duration-200 group"
          >
            <div className="flex items-center gap-4 mb-4">
              <div className="bg-primary/10 p-3 rounded-lg">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-900">
                {feature.title}
              </h3>
            </div>
            <p className="text-gray-600 leading-relaxed">
              {feature.description}
            </p>
          </div>
        ))}
      </div>

      <div className="mt-12 text-center">
        <a href="#contact">
          <Button 
            size="lg" 
            className="px-8 py-4 text-base rounded-lg shadow-md text-white font-bold bg-primary hover:bg-primary-dark"
          >
            Discuss My Budget
          </Button>
        </a>
      </div>
    </div>
  </section>
);

export default PricingFlexibilitySection;

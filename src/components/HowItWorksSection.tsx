
import React from "react";
import { Lightbulb, ClipboardList, Code, Rocket } from "lucide-react";

const steps = [
  {
    number: "01",
    title: "You Share Idea & Budget",
    description: "Tell us your vision and budget - we'll listen carefully to understand your needs.",
    icon: <Lightbulb className="w-8 h-8 text-primary" />,
  },
  {
    number: "02", 
    title: "We Propose a Plan",
    description: "Get a detailed roadmap with timeline, features, and transparent pricing.",
    icon: <ClipboardList className="w-8 h-8 text-primary" />,
  },
  {
    number: "03",
    title: "We Develop & Demo",
    description: "Watch your idea come to life with regular updates and live demonstrations.",
    icon: <Code className="w-8 h-8 text-primary" />,
  },
  {
    number: "04",
    title: "You Launch It to the World",
    description: "Go live with full support, training, and ongoing maintenance included.",
    icon: <Rocket className="w-8 h-8 text-primary" />,
  },
];

const HowItWorksSection = () => {
  return (
    <section className="py-14 md:py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-primary">
          How It Works
        </h2>
        <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
          From idea to launch in 4 simple steps
        </p>
        
        <div className="grid gap-8 md:gap-12 grid-cols-1 md:grid-cols-2 lg:grid-cols-4 max-w-6xl mx-auto">
          {steps.map((step, index) => (
            <div 
              key={step.number} 
              className="flex flex-col items-center text-center group animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Icon Circle */}
              <div className="w-16 h-16 bg-primary-light rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                {step.icon}
              </div>
              
              {/* Step Number */}
              <div className="text-primary font-bold text-sm mb-2">
                STEP {step.number}
              </div>
              
              {/* Title */}
              <h3 className="text-xl font-semibold mb-3 text-gray-900">
                {step.title}
              </h3>
              
              {/* Description */}
              <p className="text-gray-600 leading-relaxed">
                {step.description}
              </p>
              
              {/* Connector Line (hidden on last item) */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-8 left-1/2 w-full h-0.5 bg-gradient-to-r from-primary-light to-primary opacity-30 transform translate-x-8" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;

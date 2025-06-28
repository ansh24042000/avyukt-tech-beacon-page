
import { useState } from "react";
import { Slider } from "@/components/ui/slider";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const PricingFlexibilitySection = () => {
  const [budgetValue, setBudgetValue] = useState([50]); // Default to middle value

  // Convert slider value (0-100) to actual budget range
  const getBudgetAmount = (value: number) => {
    // Linear interpolation between 10,000 and 1,000,000 (10 lakhs)
    const minBudget = 10000;
    const maxBudget = 1000000;
    return Math.round(minBudget + (value / 100) * (maxBudget - minBudget));
  };

  const formatBudget = (amount: number) => {
    if (amount >= 100000) {
      return `₹${(amount / 100000).toFixed(1)} Lakhs`;
    }
    return `₹${(amount / 1000).toFixed(0)},000`;
  };

  const getFeatureLevel = (value: number) => {
    if (value <= 33) {
      return {
        title: "Basic Features",
        description: "Core functionality",
        features: ["Essential modules", "Standard UI", "Basic support"]
      };
    } else if (value <= 66) {
      return {
        title: "Advanced Features", 
        description: "Enhanced capabilities",
        features: ["Custom modules", "Premium UI", "Priority support", "Integrations"]
      };
    } else {
      return {
        title: "Enterprise Suite",
        description: "Full-scale solution",
        features: ["Complete customization", "Enterprise UI", "24/7 support", "Full integrations", "Advanced analytics"]
      };
    }
  };

  const currentBudget = getBudgetAmount(budgetValue[0]);
  const currentFeatures = getFeatureLevel(budgetValue[0]);

  return (
    <section className="py-16 md:py-24 bg-muted">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Your Budget. <span className="text-primary">Our Code.</span>
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Whether ₹10,000 or ₹10 lakhs — we shape the product to your money and your mind.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Budget Slider Card */}
          <div className="bg-white rounded-2xl shadow-card p-8 mb-8">
            <div className="flex justify-between items-center mb-6">
              <span className="text-2xl font-bold text-primary">₹10,000</span>
              <span className="text-2xl font-bold text-primary">₹10 Lakhs+</span>
            </div>
            
            <div className="mb-8">
              <Slider
                value={budgetValue}
                onValueChange={setBudgetValue}
                max={100}
                step={1}
                className="w-full"
              />
            </div>

            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">
                {formatBudget(currentBudget)}
              </div>
              <div className="text-gray-600">Your Budget Range</div>
            </div>
          </div>

          {/* Feature Levels */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            {[
              { title: "Basic Features", desc: "Core functionality", value: 16 },
              { title: "Advanced Features", desc: "Enhanced capabilities", value: 50 },
              { title: "Enterprise Suite", desc: "Full-scale solution", value: 83 }
            ].map((level, index) => (
              <div 
                key={level.title}
                className={`bg-white rounded-xl p-6 text-center transition-all duration-300 ${
                  budgetValue[0] >= (index * 33) && budgetValue[0] <= ((index + 1) * 33 + 1)
                    ? 'ring-2 ring-primary shadow-lg scale-105' 
                    : 'shadow-card hover:shadow-lg'
                }`}
              >
                <h3 className="font-semibold text-lg mb-2 text-gray-800">
                  {level.title}
                </h3>
                <p className="text-gray-600 text-sm">
                  {level.desc}
                </p>
              </div>
            ))}
          </div>

          {/* Current Feature Details */}
          <div className="bg-white rounded-2xl shadow-card p-8 text-center">
            <h3 className="text-2xl font-bold text-primary mb-3">
              {currentFeatures.title}
            </h3>
            <p className="text-gray-600 mb-6">
              {currentFeatures.description}
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
              {currentFeatures.features.map((feature, index) => (
                <div key={index} className="flex items-center justify-center space-x-2">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span className="text-gray-700">{feature}</span>
                </div>
              ))}
            </div>
            <Button asChild size="lg" className="px-8">
              <a href="#contact">Discuss My Budget</a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingFlexibilitySection;

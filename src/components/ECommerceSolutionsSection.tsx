
import React from "react";
import { Button } from "@/components/ui/button";

const ECommerceSolutionsSection = () => {
  return (
    <section className="py-14 md:py-20 bg-white">
      <div className="container mx-auto px-4 flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
        {/* Visual (left) */}
        <div className="w-full lg:w-1/2 flex justify-center">
          <img
            src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=600&q=80"
            alt="E-Commerce Store Mockup"
            className="rounded-2xl shadow-card w-full max-w-md object-cover"
            loading="lazy"
          />
        </div>
        {/* Text (right) */}
        <div className="w-full lg:w-1/2 flex flex-col justify-center items-start">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-primary">Launch Your Own Amazon, Flipkart or Swiggy</h2>
          <p className="text-gray-600 text-lg mb-6">
            Whether you run a restaurant, a retail store or a service brand, <span className="font-semibold text-accent">ACT</span> builds your dream online store — complete with custom features, payments, product showcase, tracking, and more.
          </p>
          <Button asChild className="mt-2 px-6 py-3 text-lg font-bold" size="lg">
            <a href="/contact">Get Started</a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ECommerceSolutionsSection;

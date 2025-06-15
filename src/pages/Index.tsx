
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import WhyChooseUsSection from "@/components/WhyChooseUsSection";
import ContactFormSection from "@/components/ContactFormSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import Footer from "@/components/Footer";
import FeaturedSoftwareSection from "@/components/FeaturedSoftwareSection";
import ECommerceSolutionsSection from "@/components/ECommerceSolutionsSection";

const Index = () => {
  return (
    <main id="top" className="min-h-screen bg-muted">
      {/* Header removed: Now handled globally in App.tsx */}
      <HeroSection />
      <FeaturedSoftwareSection />
      <ServicesSection />
      <ECommerceSolutionsSection />
      <WhyChooseUsSection />
      <ContactFormSection />
      <TestimonialsSection />
      <Footer />
    </main>
  );
};

export default Index;


import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import WhyChooseUsSection from "@/components/WhyChooseUsSection";
import ContactFormSection from "@/components/ContactFormSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <main id="top" className="min-h-screen bg-muted">
      <HeroSection />
      <ServicesSection />
      <WhyChooseUsSection />
      <ContactFormSection />
      <TestimonialsSection />
      <Footer />
    </main>
  );
};

export default Index;

import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import VehiclesSection from "@/components/VehiclesSection";
import FeaturesSection from "@/components/FeaturesSection";
import StepsSection from "@/components/StepsSection";
import FAQSection from "@/components/FAQSection";
import NewsSection from "@/components/NewsSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <VehiclesSection />
      <FeaturesSection />
      <StepsSection />
      <FAQSection />
      <NewsSection />
      <Footer />
    </div>
  );
};

export default Index;

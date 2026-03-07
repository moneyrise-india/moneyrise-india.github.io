import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import VehiclesSection from "@/components/VehiclesSection";
import BrandsSection from "@/components/BrandsSection";
import FeaturesSection from "@/components/FeaturesSection";
import StepsSection from "@/components/StepsSection";
import FAQSection from "@/components/FAQSection";
import GallerySection from "@/components/GallerySection";
import NewsSection from "@/components/NewsSection";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <VehiclesSection />
      <BrandsSection />
      <FeaturesSection />
      <StepsSection />
      <GallerySection />
      <NewsSection />
      <FAQSection />
      <Footer />
    </div>
  );
};

export default Index;

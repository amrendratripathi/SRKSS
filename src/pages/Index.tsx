import { Header } from "@/components/Header";
import { HeroSection } from "@/components/HeroSection";
import { FounderSection } from "@/components/FounderSection";
import { EventsSection } from "@/components/EventsSection";
import { GallerySection } from "@/components/GallerySection";
import { YouTubeSection } from "@/components/YouTubeSection";
import { JoinUsSection } from "@/components/JoinUsSection";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <HeroSection />
      <FounderSection />
      <EventsSection />
      <GallerySection />
      <YouTubeSection />
      <JoinUsSection />
      <Footer />
    </div>
  );
};

export default Index;

import { Header } from "@/components/Header";
import { HeroSection } from "@/components/HeroSection";
import { FounderSection } from "@/components/FounderSection";
import { EventsSection } from "@/components/EventsSection";
import { TeamSection } from "@/components/TeamSection";
import { GallerySection } from "@/components/GallerySection";
import { YouTubeSection } from "@/components/YouTubeSection";
import { JoinUsSection } from "@/components/JoinUsSection";
import { FloatingContactButtons } from "@/components/FloatingContactButtons";

import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <HeroSection />
      <FounderSection />
      <EventsSection />
      <TeamSection />
      <GallerySection />
      <YouTubeSection />
      <JoinUsSection />

      <Footer />

      {/* Floating Contact Buttons */}
      <FloatingContactButtons />
    </div>
  );
};

export default Index;

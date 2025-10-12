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
import { useAuth } from "@/contexts/AuthContext";

export default function UserPage() {
  const { user, logout } = useAuth();

  if (!user) {
    return (
      <div className="container mx-auto py-10 px-4">
        <h2 className="text-2xl font-semibold mb-2">User</h2>
        <p className="text-sm text-muted-foreground">No user session found. Please login.</p>
      </div>
    );
  }

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
      <FloatingContactButtons />
    </div>
  );
}





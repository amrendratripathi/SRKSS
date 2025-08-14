import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";

export function Header() {
  return (
    <header className="bg-gradient-hero border-b shadow-soft">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <img
            src="/lovable-uploads/4ab89475-f062-4c93-be31-cde14e30ef1f.png"
            alt="Shri Radhe Krishna Sewa Sansthan Logo"
            className="h-16 w-16 rounded-full shadow-divine"
          />
          <div>
            <h1 className="text-xl md:text-2xl font-bold text-foreground">
              श्री राधे कृष्ण सेवा संस्थान
            </h1>
            <p className="text-sm text-muted-foreground">Shri Radhe Krishna Sewa Sansthan</p>
          </div>
        </div>
        
        <nav className="hidden md:flex items-center space-x-6">
          <a href="#about" className="text-foreground hover:text-primary transition-colors">
            About
          </a>
          <a href="#events" className="text-foreground hover:text-primary transition-colors">
            Events
          </a>
          <a href="#gallery" className="text-foreground hover:text-primary transition-colors">
            Gallery
          </a>
          <a href="#join" className="text-foreground hover:text-primary transition-colors">
            Join Us
          </a>
          <a 
            href="mailto:tiwarimahendra1974@gmail.com" 
            className="text-foreground hover:text-primary transition-colors"
          >
            Contact
          </a>
        </nav>

        <Button variant="ghost" size="icon" className="md:hidden">
          <Menu className="h-6 w-6" />
        </Button>
      </div>
    </header>
  );
}
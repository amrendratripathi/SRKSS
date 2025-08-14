import { Phone, Mail, Youtube, MapPin } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-foreground text-background py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Logo and About */}
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <img
                src="/lovable-uploads/4ab89475-f062-4c93-be31-cde14e30ef1f.png"
                alt="Shri Radhe Krishna Sewa Sansthan Logo"
                className="h-12 w-12 rounded-full"
              />
              <div>
                <h3 className="font-bold text-lg">श्री राधे कृष्ण सेवा संस्थान</h3>
                <p className="text-sm opacity-80">Shri Radhe Krishna Sewa Sansthan</p>
              </div>
            </div>
            <p className="text-sm opacity-80 leading-relaxed">
              धार्मिक और सामाजिक सेवा के लिए समर्पित संस्थान। 
              हमारा उद्देश्य समाज की भलाई और आध्यात्मिक उन्नति है।
            </p>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-bold text-lg mb-4">संपर्क जानकारी</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone className="h-4 w-4 opacity-80" />
                <a 
                  href="tel:9572144482" 
                  className="text-sm hover:text-primary transition-colors"
                >
                  9572144482
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-4 w-4 opacity-80" />
                <a 
                  href="mailto:tiwarimahendra1974@gmail.com" 
                  className="text-sm hover:text-primary transition-colors"
                >
                  tiwarimahendra1974@gmail.com
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Youtube className="h-4 w-4 opacity-80" />
                <a 
                  href="https://www.youtube.com/@shriradhekrishnasewasansth2592" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-sm hover:text-primary transition-colors"
                >
                  YouTube चैनल
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="h-4 w-4 opacity-80" />
                <span className="text-sm">भारत</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-lg mb-4">त्वरित लिंक</h4>
            <div className="space-y-2">
              <a href="#about" className="block text-sm opacity-80 hover:text-primary transition-colors">
                संस्थापक के बारे में
              </a>
              <a href="#events" className="block text-sm opacity-80 hover:text-primary transition-colors">
                भागवत कथा
              </a>
              <a href="#gallery" className="block text-sm opacity-80 hover:text-primary transition-colors">
                फोटो गैलरी
              </a>
              <a href="#join" className="block text-sm opacity-80 hover:text-primary transition-colors">
                संस्थान से जुड़ें
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-background/20 mt-8 pt-8 text-center">
          <p className="text-sm opacity-80">
            © 2024 श्री राधे कृष्ण सेवा संस्थान। सभी अधिकार सुरक्षित।
          </p>
          <p className="text-xs opacity-60 mt-2">
            श्री राधे राधे | हरे कृष्ण हरे कृष्ण कृष्ण कृष्ण हरे हरे
          </p>
        </div>
      </div>
    </footer>
  );
}
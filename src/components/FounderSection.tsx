import { Card, CardContent } from "@/components/ui/card";
import { Phone, Mail } from "lucide-react";
import { useState, useEffect } from "react";

export function FounderSection() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
  const founderImages = [
    "/lovable-uploads/founder.png",
    "/lovable-uploads/m1.png",
    "/lovable-uploads/m2.png",
    "/lovable-uploads/m3.png",
    "/lovable-uploads/m4.png"
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => 
        prevIndex === founderImages.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section id="about" className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            संस्थापक एवं अध्यक्ष
          </h2>
          <p className="text-muted-foreground text-lg">
            आध्यात्मिक मार्गदर्शन एवं सेवा भावना के साथ
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="overflow-hidden shadow-divine">
            <CardContent className="p-0">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
                <div className="h-80 md:h-96 relative flex items-center justify-center">
                  <div className="w-full h-full rounded-full overflow-hidden border-4 border-white shadow-2xl">
                    <img
                      src={founderImages[currentImageIndex]}
                      alt="श्री महेंद्र राम त्रिपाठी जी"
                      className="w-full h-full object-cover transition-opacity duration-1000 ease-in-out"
                    />
                  </div>
                  <div className="absolute bottom-4 left-4 flex space-x-2">
                    {founderImages.map((_, index) => (
                      <div
                        key={index}
                        className={`w-2 h-2 rounded-full transition-all duration-300 ${
                          index === currentImageIndex 
                            ? 'bg-white scale-125' 
                            : 'bg-white/50'
                        }`}
                      />
                    ))}
                  </div>
                </div>
                
                <div className="p-8 flex flex-col justify-center bg-gradient-hero">
                  <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-2">
                    Mr Mahendra Ram Tripathi
                  </h3>
                  <p className="text-primary font-semibold mb-6 text-lg">
                    संस्थापक एवं अध्यक्ष
                  </p>
                  
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    श्री महेंद्र राम त्रिपाठी के नेतृत्व में हमारा संस्थान निरंतर 
                    धार्मिक और सामाजिक सेवा के क्षेत्र में कार्य कर रहा है। उनके 
                    आध्यात्मिक मार्गदर्शन में हमने अनेक सफल कार्यक्रम आयोजित किए हैं।
                  </p>
                  
                  <div className="space-y-3">
                    <div className="flex items-center space-x-3">
                      <Phone className="h-5 w-5 text-primary" />
                      <a 
                        href="tel:+919572144482" 
                        className="text-foreground font-medium hover:text-primary transition-colors duration-200 cursor-pointer"
                      >
                        9572144482
                      </a>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Mail className="h-5 w-5 text-secondary" />
                      <a 
                        href="mailto:tiwarimahendra1974@gmail.com" 
                        className="text-foreground font-medium hover:text-secondary transition-colors duration-200 cursor-pointer"
                      >
                        tiwarimahendra1974@gmail.com
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
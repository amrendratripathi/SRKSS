import { Card, CardContent } from "@/components/ui/card";
import { Phone, Mail, Quote } from "lucide-react";
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

          {/* अध्यक्ष का संदेश */}
          <section id="president-message" className="mt-10">
            <Card className="shadow-divine overflow-hidden">
              <CardContent className="p-0">
                <div className="relative p-6 md:p-10 bg-gradient-to-br from-orange-50 via-amber-50 to-yellow-50">
                  <div className="absolute -top-4 -left-2 md:-top-2 md:left-4 opacity-10">
                    <Quote className="w-24 h-24 md:w-28 md:h-28 text-primary" />
                  </div>

                  <h3 className="text-2xl md:text-3xl font-bold text-foreground text-center">
                    अध्यक्ष का संदेश
                  </h3>
                  <div className="mx-auto mt-3 mb-6 h-1 w-24 bg-gradient-to-r from-primary/70 to-secondary/70 rounded-full" />

                  <div className="space-y-4 text-base leading-relaxed text-foreground/80 max-w-3xl mx-auto">
                    <p>
                      श्री राधाकृष्ण सेवा संस्थान अपने समस्त सेवाभावी परिवार एवं सहयोगियों को हृदय से कोटि-कोटि धन्यवाद प्रकट करता है। संस्था समाज के उत्थान तथा जनजागरण के कार्यों में निरंतर संलग्न है। सेवा और समाज को जोड़ने की इस सतत यात्रा में हमारा उद्देश्य केवल आयोजन भर नहीं, बल्कि समाज को नई दिशा प्रदान करने का है।
                    </p>
                    <p>
                      संस्थान का संकल्प है कि धार्मिक एवं सामाजिक कार्यों में सहयोग और सहभागिता के माध्यम से एक सुंदर, सशक्त एवं संस्कारित समाज का निर्माण किया जाए। संस्थान के प्रयास प्रेरणा, आध्यात्मिकता, भक्ति, जागरूकता और मानवीय मूल्यों को आधार बनाकर संपूर्ण मानवता में चेतना जागृत करने के लिए समर्पित हैं।
                    </p>
                    <p>
                      हमारा आग्रह है कि प्रत्येक सदस्य समाजोत्थान एवं संस्थान की गतिविधियों में निष्ठा और सक्रियता बनाए रखे।
                    </p>
                    <p>
                      हमें पूर्ण विश्वास है कि हम सब मिलकर समाज को जागरूक बनाने, धार्मिक एवं आध्यात्मिक भावनाओं को प्रबल करने तथा सतत विकास की साधना में अवश्य सफल होंगे।
                    </p>
                  </div>

                  <div className="mt-8 max-w-3xl mx-auto">
                    <div className="flex items-end justify-end">
                      <div className="text-right">
                        <p className="font-semibold text-foreground">Mr Mahendra Ram Tripathi</p>
                        <p className="text-sm text-primary font-medium">संस्थापक एवं अध्यक्ष</p>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </section>
        </div>
      </div>
    </section>
  );
}
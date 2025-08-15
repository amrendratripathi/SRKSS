import { Card, CardContent } from "@/components/ui/card";
import { Phone, Mail } from "lucide-react";

export function FounderSection() {
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
                <div className="h-80 md:h-96">
                  <img
                    src="/lovable-uploads/founder.png"
                    alt="श्री महेंद्र राम त्रिपाठी जी"
                    className="w-full h-full object-cover"
                  />
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
                      <span className="text-foreground font-medium">9572144482</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Mail className="h-5 w-5 text-secondary" />
                      <span className="text-foreground font-medium">tiwarimahendra1974@gmail.com</span>
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
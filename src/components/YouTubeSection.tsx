import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Play, Youtube, ExternalLink } from "lucide-react";

export function YouTubeSection() {
  const handleYouTubeRedirect = () => {
    window.open("https://www.youtube.com/@shriradhekrishnasewasansth2592", "_blank");
  };

  return (
    <section className="py-16 bg-gradient-spiritual">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <Card className="bg-background/95 backdrop-blur-sm shadow-divine border-0">
            <CardContent className="p-8 md:p-12">
              <Youtube className="h-16 w-16 text-primary mx-auto mb-6" />
              
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                हमारा YouTube चैनल
              </h2>
              
              <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
                श्री राधे कृष्ण सेवा संस्थान के सभी कार्यक्रम, भागवत कथा, और 
                आध्यात्मिक प्रवचन हमारे YouTube चैनल पर उपलब्ध हैं। 
                चैनल सब्स्क्राइब करके नियमित अपडेट पाएं।
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <div className="flex flex-col items-center">
                  <Play className="h-12 w-12 text-accent mb-3" />
                  <h3 className="font-semibold mb-2">लाइव कथा</h3>
                  <p className="text-sm text-muted-foreground text-center">
                    सभी भागवत कथा लाइव स्ट्रीम
                  </p>
                </div>
                
                <div className="flex flex-col items-center">
                  <Youtube className="h-12 w-12 text-primary mb-3" />
                  <h3 className="font-semibold mb-2">वीडियो लाइब्रेरी</h3>
                  <p className="text-sm text-muted-foreground text-center">
                    पुराने कार्यक्रमों का संग्रह
                  </p>
                </div>
                
                <div className="flex flex-col items-center">
                  <ExternalLink className="h-12 w-12 text-secondary mb-3" />
                  <h3 className="font-semibold mb-2">नियमित अपडेट</h3>
                  <p className="text-sm text-muted-foreground text-center">
                    नए कार्यक्रमों की जानकारी
                  </p>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  variant="spiritual" 
                  size="lg"
                  onClick={handleYouTubeRedirect}
                  className="font-semibold"
                >
                  <Youtube className="h-5 w-5 mr-2" />
                  YouTube चैनल देखें
                </Button>
                
                <Button 
                  variant="divine" 
                  size="lg"
                  onClick={handleYouTubeRedirect}
                >
                  <Play className="h-5 w-5 mr-2" />
                  लेटेस्ट वीडियो
                </Button>
              </div>
              
              <p className="text-sm text-muted-foreground mt-6">
                चैनल सब्स्क्राइब करना न भूलें और बेल आइकन दबाकर नोटिफिकेशन ऑन करें
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
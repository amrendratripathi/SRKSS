import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Heart, Users, HandHeart, Star } from "lucide-react";

export function JoinUsSection() {
  return (
    <section id="join" className="py-16 bg-gradient-hero">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            संस्थान से जुड़ें
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            श्री राधे कृष्ण सेवा संस्थान के साथ जुड़कर धार्मिक और सामाजिक सेवा में 
            अपना योगदान दें। हमारे साथ मिलकर समाज की बेहतरी के लिए काम करें।
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            <Card className="text-center shadow-soft hover:shadow-divine transition-shadow duration-300">
              <CardContent className="p-6">
                <Heart className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="font-bold text-lg mb-2">सेवा भावना</h3>
                <p className="text-sm text-muted-foreground">
                  निस्वार्थ सेवा की भावना के साथ समाज की सेवा करें
                </p>
              </CardContent>
            </Card>

            <Card className="text-center shadow-soft hover:shadow-divine transition-shadow duration-300">
              <CardContent className="p-6">
                <Users className="h-12 w-12 text-secondary mx-auto mb-4" />
                <h3 className="font-bold text-lg mb-2">सामुदायिक एकता</h3>
                <p className="text-sm text-muted-foreground">
                  सभी वर्गों के लोगों के साथ मिलकर काम करने का अवसर
                </p>
              </CardContent>
            </Card>

            <Card className="text-center shadow-soft hover:shadow-divine transition-shadow duration-300">
              <CardContent className="p-6">
                <HandHeart className="h-12 w-12 text-accent mx-auto mb-4" />
                <h3 className="font-bold text-lg mb-2">आध्यात्मिक विकास</h3>
                <p className="text-sm text-muted-foreground">
                  नियमित सत्संग और आध्यात्मिक चर्चा में भाग लें
                </p>
              </CardContent>
            </Card>

            <Card className="text-center shadow-soft hover:shadow-divine transition-shadow duration-300">
              <CardContent className="p-6">
                <Star className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="font-bold text-lg mb-2">सांस्कृतिक संरक्षण</h3>
                <p className="text-sm text-muted-foreground">
                  भारतीय संस्कृति और परंपराओं के संरक्षण में योगदान
                </p>
              </CardContent>
            </Card>
          </div>

          <Card className="bg-gradient-divine/10 border-primary/20 shadow-divine">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl font-bold text-foreground">
                कैसे जुड़ें हमारे साथ?
              </CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                <div>
                  <h4 className="font-semibold text-lg mb-4 text-primary">स्वयंसेवक बनें</h4>
                  <ul className="text-left space-y-2 text-muted-foreground">
                    <li>• कार्यक्रम आयोजन में सहायता</li>
                    <li>• प्रसाद वितरण की व्यवस्था</li>
                    <li>• सफाई और व्यवस्था का काम</li>
                    <li>• तकनीकी सहायता प्रदान करना</li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-semibold text-lg mb-4 text-secondary">दान और सहयोग</h4>
                  <ul className="text-left space-y-2 text-muted-foreground">
                    <li>• कार्यक्रम के लिए आर्थिक सहायता</li>
                    <li>• प्रसाद सामग्री का दान</li>
                    <li>• तकनीकी उपकरण का योगदान</li>
                    <li>• सेवा कार्यों के लिए सामग्री</li>
                  </ul>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/join-trust"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button variant="spiritual" size="lg" className="font-semibold">
                    <Heart className="h-5 w-5 mr-2" />
                    अभी जुड़ें
                  </Button>
                </a>
                <a
                  href="mailto:tiwarimahendra1974@gmail.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button variant="divine" size="lg">
                    <Users className="h-5 w-5 mr-2" />
                    संपर्क करें
                  </Button>
                </a>
              </div>
              
              <p className="text-sm text-muted-foreground mt-6">
                अधिक जानकारी के लिए संपर्क करें: 9572144482
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
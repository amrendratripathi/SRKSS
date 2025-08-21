import { ArrowLeft, X } from "lucide-react";
import { Link } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useState } from "react";

export function HamaraKarya() {
  const [selectedImage, setSelectedImage] = useState<{ src: string; title: string } | null>(null);

  const works = [
    {
      id: 1,
      image: "/lovable-uploads/works/work1.jpg",
      title: "संस्थान हेतु अनुष्ठान करते हुए अध्यक्ष जी",
      description: "आदरणीय अध्यक्ष जी संस्थान के विविध अनुष्ठानों में भाग लेकर न केवल नेतृत्व करते हैं, बल्कि संस्था की गरिमा और प्रेरणा को भी बढ़ाते हैं।"
    },
    {
      id: 2,
      image: "/lovable-uploads/works/work2.jpg",
      title: "श्रीमद्भागवत कथा में अध्यक्ष जी के पुत्र का कृष्ण रूप में अवतरण",
      description: "श्रीमद्भागवत कथा के पावन अवसर पर अध्यक्ष जी के सुपुत्र ने भगवान श्रीकृष्ण का रूप धारण कर सभी भक्तों को आनंद और भक्ति रस से सराबोर कर दिया।"
    },
    {
      id: 3,
      image: "/lovable-uploads/works/work3.jpg",
      title: "संस्थान के विस्तार हेतु विचार-विमर्श",
      description: "संस्थान के उज्ज्वल भविष्य और व्यापक सेवा कार्यों के लिए गंभीरता एवं समर्पण के साथ विचार-विमर्श किया जा रहा है।"
    },
    {
      id: 4,
      image: "/lovable-uploads/works/work4.jpg",
      title: "संस्थान के कार्यकर्ताओं द्वारा अध्यक्ष जी का सम्मान",
      description: "संस्थान के कार्यकर्ताओं ने आदरणीय अध्यक्ष जी का सम्मान कर अपनी श्रद्धा और कृतज्ञता व्यक्त की।"
    },
    {
      id: 5,
      image: "/lovable-uploads/works/work5.jpg",
      title: "संस्थान की ओर से वृक्षारोपण करते हुए अध्यक्ष जी",
      description: "अध्यक्ष जी ने संस्थान की ओर से वृक्षारोपण कर पर्यावरण संरक्षण और हरित भविष्य का संदेश दिया।"
    },
    {
      id: 6,
      image: "/lovable-uploads/works/work6.jpg",
      title: "संस्थान की ओर से नवभारत्री में मां दुर्गा का पंडाल",
      description: "संस्थान की ओर से इस नवभारत्री पर मां दुर्गा का भव्य पंडाल सजाया गया है, जहाँ श्रद्धालु आस्था और भक्ति के साथ दर्शन कर सकते हैं।"
    },
    {
      id: 7,
      image: "/lovable-uploads/works/work7.jpg",
      title: "संस्थान की ओर से सांस्कृतिक कार्यक्रम",
      description: "संस्थान की ओर से आयोजित इस सांस्कृतिक कार्यक्रम में प्रतिभागियों ने अपनी कला और संस्कृति का सुंदर प्रदर्शन किया।"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-hero py-8">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Back Button */}
          <Link to="/" className="inline-flex items-center text-primary hover:text-primary/80 mb-6">
            <ArrowLeft className="h-4 w-4 mr-2" />
            वापस जाएं
          </Link>

          {/* Page Header */}
          <div className="text-center mb-12">
            <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              हमारा कार्य
            </h1>
            <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
              श्री राधे कृष्ण सेवा संस्थान द्वारा किए जा रहे विभिन्न सेवा कार्यों का विवरण। 
              हम समाज के उत्थान और आध्यात्मिक विकास के लिए निरंतर प्रयासरत हैं।
            </p>
          </div>

          {/* Works Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {works.map((work) => (
              <Card key={work.id} className="shadow-soft hover:shadow-divine transition-all duration-300 overflow-hidden">
                <div className="aspect-square overflow-hidden cursor-pointer">
                  <img 
                    src={work.image} 
                    alt={work.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                    onClick={() => setSelectedImage({ src: work.image, title: work.title })}
                  />
                </div>
                <CardHeader className="pb-3">
                  <CardTitle className="text-lg font-semibold text-primary">
                    {work.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="pt-0">
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {work.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Call to Action */}
          <div className="text-center mt-16">
            <Card className="bg-gradient-divine/10 border-primary/20 shadow-divine">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-foreground mb-4">
                  हमारे साथ जुड़ें
                </h3>
                <p className="text-muted-foreground mb-6">
                  इन सेवा कार्यों में अपना योगदान दें और समाज के उत्थान में भागीदार बनें।
                </p>
                <Link to="/join-trust">
                  <button className="bg-primary text-white px-6 py-3 rounded-lg font-semibold hover:bg-primary/90 transition-colors">
                    संस्थान से जुड़ें
                  </button>
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      {/* Image Modal */}
      {selectedImage && (
        <div 
          className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-4xl max-h-[90vh] w-full">
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute -top-12 right-0 text-white hover:text-gray-300 transition-colors z-10"
            >
              <X className="h-8 w-8" />
            </button>
            <div className="bg-white rounded-lg overflow-hidden">
              <img 
                src={selectedImage.src} 
                alt={selectedImage.title}
                className="w-full h-auto max-h-[80vh] object-contain"
              />
              <div className="p-4 bg-white">
                <h3 className="text-xl font-semibold text-primary text-center">
                  {selectedImage.title}
                </h3>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

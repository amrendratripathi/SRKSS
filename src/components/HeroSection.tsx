import { Button } from "@/components/ui/button";
import { Play, Users, Calendar } from "lucide-react";
import { Link } from "react-router-dom";

export function HeroSection() {
  return (
    <section className="bg-gradient-hero py-16 md:py-24">
      <div className="container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto">
                     <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6" style={{ 
             fontFamily: 'Kruti Dev 310 Bold',
             fontWeight: '900',
             color: '#ea580c',
             textShadow: '2px 2px 4px rgba(234,88,12,0.3), 4px 4px 8px rgba(234,88,12,0.2)',
             letterSpacing: '3px',
             transform: 'scale(1.05)',
             filter: 'drop-shadow(0 4px 8px rgba(234,88,12,0.2))',
             WebkitTextStroke: '1px #92400e',
             animation: 'elegantGlow 4s ease-in-out infinite alternate',
             lineHeight: '1.3',
             textTransform: 'uppercase'
           }}>
            श्री राधे कृष्ण सेवा संस्थान
            में
            आपका स्वागत है
          </h2>
          <br></br>
          <p className="text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed">
          श्री राधे कृष्ण सेवा संस्थान की स्थापना, श्री राधा-कृष्ण के चरणों में समर्पण की भावना से की गई है। हमारा ध्येय है कि श्रीमद् भगवद्गीता, यज्ञ एवं विविध धार्मिक-सांस्कृतिक कार्यक्रमों के माध्यम से धर्मप्रसार, सेवा तथा समाजोत्थान को एक सूत्र में पिरोया जा सके।
           <br></br>
संस्थान का उद्देश्य केवल आयोजन एवं प्रचार-प्रसार तक सीमित नहीं है, अपितु प्रत्येक व्यक्ति को जोड़कर एक सशक्त, सुसंस्कृत और सुंदर समाज का निर्माण करना भी है।

संस्थान के कार्यों में प्राचीन मंदिरों का जीर्णोद्धार, नवीन मंदिरों का निर्माण, जरूरतमंदों की सेवा, तथा सांस्कृतिक चेतना का जागरण प्रमुख हैं।<br></br> इन सभी प्रयासों को हम आपके सहयोग एवं सहभागिता से निरंतर आगे बढ़ाते रहेंगे।

हमें दृढ़ विश्वास है कि आपकी भावनात्मक श्रद्धा, आध्यात्मिकता एवं सामाजिक संवेदनशीलता संस्थान के उद्देश्यों को और अधिक प्रभावशाली तथा दिव्य स्वरूप प्रदान करेगी।


          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
            <div className="bg-card rounded-lg p-6 shadow-soft">
              <Users className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">2000+ श्रद्धालु</h3>
              <p className="text-muted-foreground">हमारी भागवत कथा में भाग लेते हैं</p>
            </div>
            
            <div className="bg-card rounded-lg p-6 shadow-soft">
              <Calendar className="h-12 w-12 text-secondary mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">9 दिवसीय कथा</h3>
              <p className="text-muted-foreground">पूर्ण श्रीमद्भागवत कथा का आयोजन</p>
            </div>
            
            <div className="bg-card rounded-lg p-6 shadow-soft">
              <Play className="h-12 w-12 text-accent mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">YouTube चैनल</h3>
              <p className="text-muted-foreground">सभी कार्यक्रम ऑनलाइन उपलब्ध</p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/join-trust">
              <Button variant="spiritual" size="lg">
                संस्थान से जुड़ें
              </Button>
            </Link>
            <a
              href="https://www.youtube.com/@shriradhekrishnasewasansth2592"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button variant="divine" size="lg">
                YouTube देखें
              </Button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
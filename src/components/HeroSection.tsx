import { Button } from "@/components/ui/button";
import { Play, Users, Calendar } from "lucide-react";
import { Link } from "react-router-dom";

export function HeroSection() {
  return (
    <section className="bg-gradient-hero py-16 md:py-24">
      <div className="container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6" style={{ 
            fontFamily: 'Kruti Dev 010 Bold',
            fontWeight: '900',
            textShadow: '3px 3px 0px #92400e, 6px 6px 0px #ea580c, 9px 9px 0px #fb923c, 0 0 30px rgba(251,146,60,0.8), 0 0 60px rgba(255,255,255,0.6)',
            letterSpacing: '4px',
            transform: 'scale(1.1)',
            filter: 'drop-shadow(0 8px 16px rgba(0,0,0,0.4))',
            background: 'linear-gradient(45deg, #92400e, #ea580c, #fb923c, #fed7aa)',
            backgroundClip: 'text',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            WebkitTextStroke: '2px #92400e',
            animation: 'glow 3s ease-in-out infinite alternate',
            lineHeight: '1.4'
          }}>
            श्री राधे कृष्ण सेवा संस्थान<br />
            में<br />
            आपका स्वागत है
          </h2>
          <br></br>
          <p className="text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed">
            हमारा संस्थान धार्मिक और सामाजिक सेवा के लिए समर्पित है। हम नियमित रूप से 
            भागवत कथा, सत्संग और विभिन्न सेवा कार्यों का आयोजन करते हैं।
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
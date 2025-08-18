import { Card, CardContent } from "@/components/ui/card";

type TeamMember = {
  imageSrc: string;
  name?: string;
  role: string;
  alt: string;
};

const teamMembers: TeamMember[] = [
  {
    imageSrc: "/lovable-uploads/founder.png",
    name: "Mr Mahendra Ram Tripathi",
    role: "संस्थापक-अध्यक्ष-सचिव",
    alt: "Founder, अध्यक्ष एवं सचिव",
  },
  {
    imageSrc: "/lovable-uploads/mammi.png",
    name: "Mrs. Upma Tripathi",
    role: "कोषाध्यक्ष",
    alt: "कोषाध्यक्ष",
  },
  {
    imageSrc: "/lovable-uploads/parwes.png",
    name: "Mrs. Parvesh Shukla",
    role: "कार्यकारिणी संयोजक",
    alt: "कार्यकारिणी संयोजक",
  },
  {
    imageSrc: "/lovable-uploads/arun.png",
    name: "Mr. Arun Mishra",
    role: "संयोजक–कार्यकारी सदस्य",
    alt: "संयोजक–कार्यकारी सदस्य",
  },
];

export function TeamSection() {
  return (
    <section id="team" className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-3">
            हमारी टीम
          </h2>
          <p className="text-muted-foreground text-lg">Meet our team</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {teamMembers.map((member, index) => (
            <Card key={index} className="shadow-divine h-full">
              <CardContent className="p-6 flex flex-col items-center text-center">
                <div className="w-full h-48 sm:h-56 md:h-64 rounded-xl overflow-hidden border-4 border-white shadow-xl mb-4 bg-muted">
                  <img
                    src={member.imageSrc}
                    alt={member.alt}
                    className="w-full h-full object-contain"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.style.objectFit = "contain";
                      target.src = "/placeholder.svg";
                    }}
                  />
                </div>
                {member.name && (
                  <h3 className="text-lg font-semibold text-foreground mb-1">
                    {member.name}
                  </h3>
                )}
                <p className="text-primary font-semibold">{member.role}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}



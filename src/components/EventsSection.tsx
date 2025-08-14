import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar, Users, Clock, MapPin } from "lucide-react";

export function EventsSection() {
  return (
    <section id="events" className="py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            समूहिक भागवत कथा
          </h2>
          <p className="text-muted-foreground text-lg">
            9 दिवसीय पूर्ण श्रीमद्भागवत कथा का भव्य आयोजन
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <Card className="bg-gradient-hero shadow-divine border-0">
            <CardHeader className="text-center pb-6">
              <CardTitle className="text-2xl md:text-3xl font-bold text-primary">
                विशेष आयोजन की विशेषताएं
              </CardTitle>
            </CardHeader>
            
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                <div className="text-center p-4 bg-card rounded-lg shadow-soft">
                  <Users className="h-12 w-12 text-primary mx-auto mb-3" />
                  <h3 className="font-bold text-xl mb-2">2000+</h3>
                  <p className="text-muted-foreground">श्रद्धालु उपस्थित</p>
                </div>
                
                <div className="text-center p-4 bg-card rounded-lg shadow-soft">
                  <Calendar className="h-12 w-12 text-secondary mx-auto mb-3" />
                  <h3 className="font-bold text-xl mb-2">9 दिन</h3>
                  <p className="text-muted-foreground">निरंतर कथा</p>
                </div>
                
                <div className="text-center p-4 bg-card rounded-lg shadow-soft">
                  <Clock className="h-12 w-12 text-accent mx-auto mb-3" />
                  <h3 className="font-bold text-xl mb-2">प्रतिदिन</h3>
                  <p className="text-muted-foreground">सुबह-शाम सत्संग</p>
                </div>
                
                <div className="text-center p-4 bg-card rounded-lg shadow-soft">
                  <MapPin className="h-12 w-12 text-primary mx-auto mb-3" />
                  <h3 className="font-bold text-xl mb-2">स्थानीय</h3>
                  <p className="text-muted-foreground">समुदायिक स्थल</p>
                </div>
              </div>

              <div className="bg-card rounded-lg p-6 shadow-soft">
                <h3 className="text-xl font-bold text-foreground mb-4">
                  भागवत कथा की विशेषताएं:
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex items-start space-x-2">
                      <span className="text-primary">•</span>
                      <span>पूर्ण श्रीमद्भागवत पुराण की कथा</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="text-secondary">•</span>
                      <span>प्रतिदिन भजन-कीर्तन का कार्यक्रम</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="text-accent">•</span>
                      <span>निःशुल्क प्रसाद वितरण</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="text-primary">•</span>
                      <span>आध्यात्मिक प्रवचन एवं चर्चा</span>
                    </li>
                  </ul>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex items-start space-x-2">
                      <span className="text-secondary">•</span>
                      <span>सामुदायिक सहभागिता</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="text-accent">•</span>
                      <span>पारंपरिक संस्कृति का संरक्षण</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="text-primary">•</span>
                      <span>युवाओं के लिए विशेष कार्यक्रम</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="text-secondary">•</span>
                      <span>समाज सेवा के कार्य</span>
                    </li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
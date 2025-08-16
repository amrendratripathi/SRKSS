import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Download, Calendar, Phone, MapPin, User } from "lucide-react";
import html2canvas from "html2canvas";

interface TrustMemberCardProps {
  memberData: {
    name: string;
    mobile: string;
    location: string;
    email: string;
    gender: string;
    photo?: string;
    createdAt: string;
    memberId: string;
  };
  onClose: () => void;
}

export function TrustMemberCard({ memberData, onClose }: TrustMemberCardProps) {
  const [isDownloading, setIsDownloading] = useState(false);

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('hi-IN', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const downloadTrustCard = async () => {
    setIsDownloading(true);
    try {
      const element = document.getElementById('trust-card');
      if (!element) return;

                           const canvas = await html2canvas(element, {
          background: '#ffffff',
          width: 400,
          height: 250,
          useCORS: true,
          allowTaint: true
        });

      const link = document.createElement('a');
      link.download = `trust-card-${memberData.name}.png`;
      link.href = canvas.toDataURL();
      link.click();
    } catch (error) {
      console.error('Download failed:', error);
    } finally {
      setIsDownloading(false);
    }
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-lg max-w-md w-full max-h-[90vh] overflow-y-auto">
        <Card className="border-0 shadow-none">
          <CardHeader className="text-center pb-4">
            <h2 className="text-2xl font-bold text-primary">सदस्यता कार्ड</h2>
            <p className="text-muted-foreground">आपका सदस्यता कार्ड तैयार है</p>
          </CardHeader>
          
          <CardContent className="space-y-6">
                         {/* Trust Card Preview */}
                           <div 
                id="trust-card"
                className="relative overflow-hidden shadow-2xl rounded-2xl"
                style={{ width: '400px', height: '250px' }}
              >
                                 {/* Stylish Background with Multiple Layers */}
                 <div className="absolute inset-0 bg-gradient-to-br from-orange-100 via-orange-200 to-yellow-200"></div>
                 <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/20 to-transparent"></div>
                 <div className="absolute inset-0 bg-gradient-to-bl from-transparent via-orange-300/10 to-transparent"></div>
                
                                 {/* Decorative Elements */}
                 <div className="absolute top-0 left-0 w-32 h-32 bg-orange-200/20 rounded-full -translate-x-16 -translate-y-16"></div>
                 <div className="absolute bottom-0 right-0 w-40 h-40 bg-orange-200/20 rounded-full translate-x-20 translate-y-20"></div>
                 <div className="absolute top-1/2 left-1/2 w-24 h-24 bg-orange-200/20 rounded-full -translate-x-12 -translate-y-12"></div>
                
                {/* Subtle Pattern Overlay */}
                <div className="absolute inset-0 opacity-5">
                  <div className="absolute top-4 left-4 text-4xl">🕉️</div>
                  <div className="absolute top-4 right-4 text-4xl">🙏</div>
                  <div className="absolute bottom-4 left-4 text-4xl">🌸</div>
                  <div className="absolute bottom-4 right-4 text-4xl">🕉️</div>
                </div>

                {/* Main Content */}
                <div className="relative z-10 h-full flex">
                                     {/* Left Section - Trust Branding */}
                   <div className="w-2/5 flex flex-col items-center justify-center p-4 border-r border-orange-300/30">
                     <div className="w-16 h-16 bg-orange-500/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mb-3 shadow-lg border border-orange-400/30">
                       <img 
                         src="/lovable-uploads/trust_logo.png" 
                         alt="Trust Logo"
                         className="w-10 h-10 object-contain"
                         onError={(e) => {
                           const target = e.target as HTMLImageElement;
                           target.style.display = 'none';
                           target.nextElementSibling?.classList.remove('hidden');
                         }}
                       />
                       <span className="text-orange-700 text-2xl font-bold hidden">श्री</span>
                     </div>
                     <h1 className="text-sm font-bold text-orange-800 mb-1 leading-tight text-center">
                       श्री राधे कृष्ण<br />सेवा संस्थान
                     </h1>
                     <p className="text-xs text-orange-600 font-medium text-center">Shri Radhe Krishna<br />Seva Sansthan</p>
                   </div>

                  {/* Right Section - Member Info */}
                  <div className="w-3/5 flex flex-col justify-between p-4">
                                         {/* Member Photo and Name */}
                     <div className="flex items-center space-x-3 mb-4">
                       {memberData.photo ? (
                         <div className="relative">
                           <img 
                             src={memberData.photo} 
                             alt={memberData.name}
                             className="w-16 h-16 rounded-2xl border-2 border-orange-400/30 object-cover shadow-lg"
                           />
                           <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-green-500 rounded-full border-2 border-white flex items-center justify-center">
                             <div className="w-2 h-2 bg-white rounded-full"></div>
                           </div>
                         </div>
                       ) : (
                         <div className="w-16 h-16 rounded-2xl border-2 border-orange-400/30 bg-orange-500/20 backdrop-blur-sm flex items-center justify-center shadow-lg">
                           <User className="w-8 h-8 text-orange-700" />
                         </div>
                       )}
                       <div>
                         <h2 className="text-lg font-bold text-gray-800 mb-1 leading-tight">{memberData.name}</h2>
                         <div className="bg-orange-500/20 backdrop-blur-sm text-orange-700 px-3 py-1 rounded-full text-xs font-semibold border border-orange-400/30">
                           सदस्य
                         </div>
                       </div>
                     </div>

                                         {/* Member Details */}
                     <div className="space-y-2">
                       <div className="flex items-center space-x-2">
                         <div className="w-6 h-6 bg-orange-500/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                           <Phone className="w-3 h-3 text-orange-700" />
                         </div>
                         <div>
                           <p className="text-xs text-gray-600 font-medium">मोबाइल</p>
                           <p className="text-sm text-gray-800 font-semibold">{memberData.mobile}</p>
                         </div>
                       </div>
                       
                       <div className="flex items-center space-x-2">
                         <div className="w-6 h-6 bg-orange-500/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                           <MapPin className="w-3 h-3 text-orange-700" />
                         </div>
                         <div>
                           <p className="text-xs text-gray-600 font-medium">स्थान</p>
                           <p className="text-sm text-gray-800 font-semibold">{memberData.location}</p>
                         </div>
                       </div>
                       
                       <div className="flex items-center space-x-2">
                         <div className="w-6 h-6 bg-orange-500/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                           <Calendar className="w-3 h-3 text-orange-700" />
                         </div>
                         <div>
                           <p className="text-xs text-gray-600 font-medium">तिथि</p>
                           <p className="text-sm text-gray-800 font-semibold">{formatDate(memberData.createdAt)}</p>
                         </div>
                       </div>
                     </div>

                                         {/* Footer */}
                     <div className="mt-3">
                       <p className="text-xs text-gray-500 mb-2 font-medium">Member ID: {memberData.memberId}</p>
                       <div className="flex justify-center items-center space-x-2">
                         <span className="text-xl">🕉️</span>
                         <span className="text-sm text-orange-700 font-bold">जय श्री राधे कृष्ण</span>
                         <span className="text-xl">🕉️</span>
                       </div>
                     </div>
                  </div>
                </div>

                {/* Glossy Overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-transparent via-white/5 to-transparent pointer-events-none"></div>
              </div>

            {/* Action Buttons */}
            <div className="flex flex-col space-y-3">
              <Button
                onClick={downloadTrustCard}
                disabled={isDownloading}
                className="w-full bg-orange-600 hover:bg-orange-700"
              >
                {isDownloading ? (
                  <div className="flex items-center">
                    <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                    डाउनलोड हो रहा है...
                  </div>
                ) : (
                  <div className="flex items-center">
                    <Download className="h-5 w-5 mr-2" />
                    सदस्यता कार्ड डाउनलोड करें
                  </div>
                )}
              </Button>
              
              <Button
                onClick={onClose}
                variant="outline"
                className="w-full"
              >
                बंद करें
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

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
  const [imageLoadError, setImageLoadError] = useState(false);
  
  // Debug logging
  console.log('TrustMemberCard - memberData:', memberData);
  console.log('TrustMemberCard - photo URL:', memberData.photo);
  console.log('TrustMemberCard - photo type:', typeof memberData.photo);
  console.log('TrustMemberCard - photo starts with blob:', memberData.photo?.startsWith('blob:'));

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('hi-IN', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const getGenderLabel = (gender: string) => {
    switch (gender) {
      case 'male':
        return 'पुरुष';
      case 'female':
        return 'महिला';
      case 'other':
        return 'अन्य';
      default:
        return gender || '';
    }
  };

  const downloadTrustCard = async () => {
    setIsDownloading(true);
    try {
      const element = document.getElementById('trust-card');
      if (!element) return;

      // Wait longer for images to fully load and stabilize
      await new Promise(resolve => setTimeout(resolve, 500));
      
      // Preload and ensure all images are ready
      const images = element.querySelectorAll('img');
      await Promise.all(
        Array.from(images).map((img) => {
          return new Promise((resolve) => {
            if (img.complete) {
              resolve(true);
            } else {
              img.onload = () => resolve(true);
              img.onerror = () => resolve(false);
            }
          });
        })
      );
      
      // Ensure web fonts are fully loaded before rendering
      try {
        // @ts-ignore
        if (document.fonts?.ready) {
          // @ts-ignore
          await document.fonts.ready;
        }
      } catch {}
      
      // Additional wait to ensure DOM is stable
      await new Promise(resolve => setTimeout(resolve, 200));

      const canvas = await (html2canvas as any)(element, {
        background: '#ffffff',
        useCORS: true,
        allowTaint: true,
        logging: false,
        scale: 2,
        scrollX: 0,
        scrollY: -window.scrollY
      });

      const link = document.createElement('a');
      link.download = `trust-card-${memberData.name}.png`;
      link.href = canvas.toDataURL('image/png', 1.0);
      link.click();
    } catch (error) {
      console.error('Download failed:', error);
      alert('Download failed. Please try again.');
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
              className="relative overflow-hidden shadow-2xl rounded-2xl bg-white"
              style={{ width: '400px', height: '280px' }}
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
                                     <div className="w-20 h-20 bg-orange-500/20 backdrop-blur-sm rounded-full flex items-center justify-center mb-3 shadow-lg border border-orange-400/30">
                     <img 
                       src="/lovable-uploads/trust_logo.png" 
                       alt="Trust Logo"
                       className="w-[72px] h-[72px] object-contain rounded-full"
                       onError={(e) => {
                         console.log('Trust logo failed to load');
                         const target = e.target as HTMLImageElement;
                         target.style.display = 'none';
                         target.nextElementSibling?.classList.remove('hidden');
                       }}
                     />
                     <span className="text-orange-700 text-3xl font-bold hidden">श्री</span>
                   </div>
                  <h1 className="text-sm font-bold text-orange-800 mb-1 leading-tight text-center">
                    श्री राधे कृष्ण<br />सेवा संस्थान
                  </h1>
                  <p className="text-xs text-orange-600 font-medium text-center mb-2">Shri Radhe Krishna<br />Seva Sansthan</p>
                  
                  {/* Member ID - Positioned just below trust name */}
                  <div className="bg-orange-500/20 backdrop-blur-sm border border-orange-400/30 rounded-lg p-2 w-full">
                    <p className="text-xs text-orange-700 font-semibold text-center mb-1">Member ID</p>
                    <p className="text-sm font-bold text-orange-800 text-center tracking-wider">{memberData.memberId}</p>
                  </div>
                </div>

                {/* Right Section - Member Info */}
                <div className="w-3/5 flex flex-col justify-start p-4">
                  {/* Member Photo and Name */}
                  <div className="flex items-center space-x-3 mb-2.5">
                                     {memberData.photo && memberData.photo.startsWith('blob:') ? (
                       <div className="relative">
                         <img 
                           src={memberData.photo} 
                           alt={memberData.name}
                           className="w-16 h-16 rounded-full border-2 border-orange-400/30 object-cover shadow-lg"
                           onLoad={() => {
                             console.log('Photo loaded successfully:', memberData.photo);
                             setImageLoadError(false);
                           }}
                           onError={(e) => {
                             console.log('Photo load error:', e);
                             console.log('Failed photo URL:', memberData.photo);
                             setImageLoadError(true);
                             const target = e.target as HTMLImageElement;
                             target.style.display = 'none';
                           }}
                         />
                         <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-green-500 rounded-full border-2 border-white flex items-center justify-center">
                           <div className="w-2 h-2 bg-white rounded-full"></div>
                         </div>
                       </div>
                     ) : memberData.photo ? (
                       <div className="w-16 h-16 rounded-full border-2 border-orange-400/30 bg-orange-500/20 backdrop-blur-sm flex items-center justify-center shadow-lg">
                         <div className="text-center">
                           <User className="w-8 h-8 text-orange-700 mx-auto mb-1" />
                           <p className="text-xs text-orange-600">Photo URL Invalid</p>
                         </div>
                       </div>
                     ) : (
                       <div className="w-16 h-16 rounded-full border-2 border-orange-400/30 bg-orange-500/20 backdrop-blur-sm flex items-center justify-center shadow-lg">
                         <User className="w-8 h-8 text-orange-700" />
                       </div>
                     )}
                     
                     {/* Fallback for when image fails during download */}
                     {imageLoadError && (
                       <div className="w-16 h-16 rounded-full border-2 border-orange-400/30 bg-orange-500/20 backdrop-blur-sm flex items-center justify-center shadow-lg">
                         <User className="w-8 h-8 text-orange-700" />
                       </div>
                     )}
                                     <div className="flex-1 min-w-0">
                       <h2 className="text-base font-bold text-gray-800 mb-1 leading-tight whitespace-normal break-words">{memberData.name}</h2>
                       <div className="bg-orange-500/20 backdrop-blur-sm text-orange-700 px-2 py-0.5 rounded-full text-xs font-semibold border border-orange-400/30 inline-block">
                         सदस्य
                       </div>
                     </div>
                  </div>

                                     {/* Member Details */}
                   <div className="space-y-2">
                     <div className="flex items-center space-x-2">
                       <div className="w-6 h-6 bg-orange-500/20 backdrop-blur-sm rounded-full flex items-center justify-center flex-shrink-0">
                         <Phone className="w-3 h-3 text-orange-700" />
                       </div>
                       <div className="flex-1 min-w-0">
                         <p className="text-xs text-gray-600 font-medium">मोबाइल</p>
                         <p className="text-xs text-gray-800 font-semibold whitespace-normal break-words">{memberData.mobile}</p>
                       </div>
                     </div>

                     <div className="flex items-center space-x-2">
                       <div className="w-6 h-6 bg-orange-500/20 backdrop-blur-sm rounded-full flex items-center justify-center flex-shrink-0">
                         <User className="w-3 h-3 text-orange-700" />
                       </div>
                       <div className="flex-1 min-w-0">
                         <p className="text-xs text-gray-600 font-medium">लिंग</p>
                         <p className="text-xs text-gray-800 font-semibold whitespace-normal break-words">{getGenderLabel(memberData.gender)}</p>
                       </div>
                     </div>
                     
                     <div className="flex items-center space-x-2">
                       <div className="w-6 h-6 bg-orange-500/20 backdrop-blur-sm rounded-full flex items-center justify-center flex-shrink-0">
                         <MapPin className="w-3 h-3 text-orange-700" />
                       </div>
                       <div className="flex-1 min-w-0">
                         <p className="text-xs text-gray-600 font-medium">स्थान</p>
                         <p className="text-xs text-gray-800 font-semibold whitespace-normal break-words">{memberData.location}</p>
                       </div>
                     </div>
                     
                     <div className="flex items-center space-x-2">
                       <div className="w-6 h-6 bg-orange-500/20 backdrop-blur-sm rounded-full flex items-center justify-center flex-shrink-0">
                         <Calendar className="w-3 h-3 text-orange-700" />
                       </div>
                       <div className="flex-1 min-w-0">
                         <p className="text-xs text-gray-600 font-medium">तिथि</p>
                         <p className="text-xs text-gray-800 font-semibold whitespace-normal break-words">{formatDate(memberData.createdAt)}</p>
                       </div>
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

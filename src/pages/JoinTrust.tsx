import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft, Upload, Send, QrCode, Copy, Download } from "lucide-react";
import QRCode from "qrcode";
import { Link } from "react-router-dom";
import { TrustMemberCard } from "@/components/TrustMemberCard";
// Member IDs are now static per request

export function JoinTrust() {
  const [formData, setFormData] = useState({
    name: "",
    mobile: "",
    location: "",
    email: "",
    mail: "",
    gender: "",
    photo: null as File | null,
    paymentScreenshot: null as File | null
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showTrustCard, setShowTrustCard] = useState(false);
  const [memberData, setMemberData] = useState<any>(null);
  const [upiQr, setUpiQr] = useState<string>("");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const fieldName = e.target.name;
      setFormData(prev => ({
        ...prev,
        [fieldName]: file
      }));
    }
  };

  const buildUpiUrl = () => {
    const payeeVpa = "9572144482@ibl";
    const params = new URLSearchParams({ pa: payeeVpa, cu: "INR" });
    return `upi://pay?${params.toString()}`;
  };

  

  // Pre-generate a QR code for the UPI link so users can scan if deep-link fails
  useEffect(() => {
    const upiUrl = buildUpiUrl();
    QRCode.toDataURL(upiUrl, { margin: 1, scale: 5 })
      .then(setUpiQr)
      .catch(() => setUpiQr(""));
  }, []);

  const copyToClipboard = async (text: string) => {
    try {
      await navigator.clipboard.writeText(text);
      alert("कॉपी हो गया");
    } catch {
      alert(text);
    }
  };
  
  const downloadQrCode = () => {
    if (!upiQr) return;
    const link = document.createElement("a");
    link.href = upiQr;
    link.download = "upi-qr.png";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Create FormData for file upload
      const submitData = new FormData();
      submitData.append("name", formData.name);
      submitData.append("mobile", formData.mobile);
      submitData.append("location", formData.location);
      submitData.append("email", formData.email);
      submitData.append("mail", formData.mail);
      submitData.append("gender", formData.gender);
      if (formData.photo) {
        submitData.append("photo", formData.photo);
      }
      if (formData.paymentScreenshot) {
        submitData.append("paymentScreenshot", formData.paymentScreenshot);
      }

      // Here you would typically send the data to your backend
      // For now, we'll simulate the submission
      console.log("Form data:", formData);
      
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // Create member data for trust card
      const newMemberData = {
        name: formData.name,
        mobile: formData.mobile,
        location: formData.location,
        email: formData.email,
        gender: formData.gender,
        photo: formData.photo ? URL.createObjectURL(formData.photo) : undefined,
        createdAt: new Date().toISOString(),
        memberId: 'SRKSS2025'
      };
      
      console.log('Created member data:', newMemberData);
      console.log('Photo URL:', newMemberData.photo);
      
      setMemberData(newMemberData);
      setShowTrustCard(true);
      
      // Reset form
      setFormData({
        name: "",
        mobile: "",
        location: "",
        email: "",
        mail: "",
        gender: "",
        photo: null,
        paymentScreenshot: null
      });
    } catch (error) {
      alert("कुछ गलत हो गया। कृपया पुनः प्रयास करें।");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-hero py-8">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto">
          {/* Back Button */}
          <Link to="/" className="inline-flex items-center text-primary hover:text-primary/80 mb-6">
            <ArrowLeft className="h-4 w-4 mr-2" />
            वापस जाएं
          </Link>

          {/* Welcome Message */}
          <Card className="mb-8 shadow-divine">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl md:text-3xl font-bold text-foreground">
                🙏 श्री सनातन सेवा फाउंडेशन संघ में आपका स्वागत है 🙏
              </CardTitle>
            </CardHeader>
            <CardContent className="text-center space-y-4">
              <p className="text-lg text-muted-foreground leading-relaxed">
                हमारे साथ जुड़कर सेवा, भक्ति और समाज कल्याण के इस पवित्र अभियान का हिस्सा बनें।
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                कृपया नीचे दिए गए फॉर्म को भरकर सदस्यता प्राप्त करें और अपने अमूल्य सहयोग से मानवता की सेवा में योगदान दें।
              </p>
              <p className="text-xl font-semibold text-primary">
                🌸 जय श्री राम 🌸
              </p>
            </CardContent>
          </Card>

          {/* Membership Form */}
          <Card className="shadow-divine">
            <CardHeader>
              <CardTitle className="text-xl font-bold text-center">
                सदस्यता आवेदन फॉर्म
              </CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name Field */}
                <div className="space-y-2">
                  <Label htmlFor="name" className="text-base font-semibold">
                    पूरा नाम *
                  </Label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="अपना पूरा नाम दर्ज करें"
                    className="h-12 text-base"
                  />
                </div>

                {/* Mobile Field */}
                <div className="space-y-2">
                  <Label htmlFor="mobile" className="text-base font-semibold">
                    मोबाइल नंबर *
                  </Label>
                  <Input
                    id="mobile"
                    name="mobile"
                    type="tel"
                    required
                    value={formData.mobile}
                    onChange={handleInputChange}
                    placeholder="अपना मोबाइल नंबर दर्ज करें"
                    className="h-12 text-base"
                  />
                </div>

                {/* Location Field */}
                <div className="space-y-2">
                  <Label htmlFor="location" className="text-base font-semibold">
                    स्थान *
                  </Label>
                  <Input
                    id="location"
                    name="location"
                    type="text"
                    required
                    value={formData.location}
                    onChange={handleInputChange}
                    placeholder="अपना शहर/गाँव दर्ज करें"
                    className="h-12 text-base"
                  />
                </div>

                {/* Email Field */}
                <div className="space-y-2">
                  <Label htmlFor="email" className="text-base font-semibold">
                    ईमेल आईडी *
                  </Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="अपना ईमेल आईडी दर्ज करें"
                    className="h-12 text-base"
                  />
                </div>

                {/* Gender Field */}
                <div className="space-y-2">
                  <Label htmlFor="gender" className="text-base font-semibold">
                    लिंग *
                  </Label>
                  <select
                    id="gender"
                    name="gender"
                    required
                    value={formData.gender}
                    onChange={handleInputChange}
                    className="w-full h-12 px-3 py-2 border border-input bg-background text-foreground rounded-md text-base focus:outline-none focus:ring-2 focus:ring-ring focus:border-transparent"
                  >
                    <option value="">लिंग चुनें</option>
                    <option value="male">पुरुष</option>
                    <option value="female">महिला</option>
                    <option value="other">अन्य</option>
                  </select>
                </div>

                {/* Photo Upload */}
                <div className="space-y-2">
                  <Label htmlFor="photo" className="text-base font-semibold">
                    फोटो *
                  </Label>
                  <div className="border-2 border-dashed border-muted-foreground/30 rounded-lg p-6 text-center hover:border-primary/50 transition-colors">
                    <input
                      id="photo"
                      name="photo"
                      type="file"
                      accept="image/*"
                      required
                      onChange={handleFileChange}
                      className="hidden"
                    />
                    <label htmlFor="photo" className="cursor-pointer">
                      <Upload className="h-8 w-8 mx-auto mb-2 text-muted-foreground" />
                      <p className="text-muted-foreground">
                        {formData.photo 
                          ? `फोटो चुनी गई: ${formData.photo.name}`
                          : "अपनी फोटो अपलोड करने के लिए क्लिक करें"
                        }
                      </p>
                    </label>
                  </div>
                </div>

                {/* Payment Section */}
                <div className="space-y-4 p-6 bg-muted/30 rounded-lg">
                  <h3 className="text-lg font-semibold text-center text-primary">
                    💰 सदस्यता शुल्क भुगतान
                  </h3>
                  
                  <div className="text-center space-y-2">
                    <div className="text-sm text-muted-foreground space-y-1">
                      <p>UPI ID: 9572144482@ibl
                        <button type="button" className="ml-2 inline-flex items-center px-3 py-2 rounded-md border border-primary text-primary hover:bg-primary/10 text-sm md:text-base font-medium" onClick={() => copyToClipboard("9572144482@ibl")}>
                          <span className="inline-flex items-center"><Copy className="h-5 w-5 mr-2" /> कॉपी करें</span>
                        </button>
                      </p>
                    </div>

                    {upiQr && (
                      <div className="mt-4 inline-flex flex-col items-center">
                        <img src={upiQr} alt="UPI QR" className="h-44 w-44 border rounded-md bg-white p-2" />
                        <div className="mt-2 text-xs text-muted-foreground inline-flex items-center">
                          <QrCode className="h-4 w-4 mr-1" />
                          स्कैन कर के भुगतान करें
                        </div>
                        <Button type="button" variant="outline" size="sm" className="mt-3" onClick={downloadQrCode}>
                          <Download className="h-4 w-4 mr-2" /> QR डाउनलोड करें
                        </Button>
                      </div>
                    )}
                  </div>
                </div>

                {/* Payment Screenshot Upload */}
                <div className="space-y-2">
                  <Label htmlFor="paymentScreenshot" className="text-base font-semibold">
                    भुगतान स्क्रीनशॉट *
                  </Label>
                  <div className="border-2 border-dashed border-muted-foreground/30 rounded-lg p-6 text-center hover:border-primary/50 transition-colors">
                    <input
                      id="paymentScreenshot"
                      name="paymentScreenshot"
                      type="file"
                      accept="image/*"
                      required
                      onChange={handleFileChange}
                      className="hidden"
                    />
                    <label htmlFor="paymentScreenshot" className="cursor-pointer">
                      <Upload className="h-8 w-8 mx-auto mb-2 text-muted-foreground" />
                      <p className="text-muted-foreground">
                        {formData.paymentScreenshot 
                          ? `फाइल चुनी गई: ${formData.paymentScreenshot.name}`
                          : "भुगतान स्क्रीनशॉट अपलोड करने के लिए क्लिक करें"
                        }
                      </p>
                    </label>
                  </div>
                </div>

                {/* Submit Button */}
                <Button
                  type="submit"
                  variant="divine"
                  size="lg"
                  disabled={isSubmitting}
                  className="w-full h-12 text-lg font-semibold"
                >
                  {isSubmitting ? (
                    <div className="flex items-center">
                      <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                      प्रक्रिया हो रही है...
                    </div>
                  ) : (
                    <div className="flex items-center">
                      <Send className="h-5 w-5 mr-2" />
                      आवेदन जमा करें
                    </div>
                  )}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
      
      {/* Trust Member Card Modal */}
      {showTrustCard && memberData && (
        <TrustMemberCard
          memberData={memberData}
          onClose={() => setShowTrustCard(false)}
        />
      )}
    </div>
  );
}

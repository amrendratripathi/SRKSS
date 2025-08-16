import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft, Upload, Send } from "lucide-react";
import { Link } from "react-router-dom";

export function JoinTrust() {
  const [formData, setFormData] = useState({
    name: "",
    mobile: "",
    location: "",
    email: "",
    paymentScreenshot: null as File | null
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setFormData(prev => ({
        ...prev,
        paymentScreenshot: file
      }));
    }
  };

  const handlePayment = () => {
    const upiUrl = "upi://pay?pa=rajjubabu531@okhdfcbank&pn=Rajjubabu&cu=INR";
    window.open(upiUrl, "_blank");
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
      if (formData.paymentScreenshot) {
        submitData.append("paymentScreenshot", formData.paymentScreenshot);
      }

      // Here you would typically send the data to your backend
      // For now, we'll simulate the submission
      console.log("Form data:", formData);
      
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      alert("आपका आवेदन सफलतापूर्वक प्राप्त हो गया है! धन्यवाद 🙏");
      
      // Reset form
      setFormData({
        name: "",
        mobile: "",
        location: "",
        email: "",
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
                🙏 श्री राधे कृष्ण सेवा संस्थान ट्रस्ट में आपका स्वागत है 🙏
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
                🌸 जय श्री राधे कृष्ण 🌸
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

                {/* Payment Section */}
                <div className="space-y-4 p-6 bg-muted/30 rounded-lg">
                  <h3 className="text-lg font-semibold text-center text-primary">
                    💰 सदस्यता शुल्क भुगतान
                  </h3>
                  
                  <div className="text-center space-y-2">
                    <p className="text-muted-foreground">
                      कृपया नीचे दिए गए बटन पर क्लिक करके भुगतान करें
                    </p>
                    <Button
                      type="button"
                      onClick={handlePayment}
                      variant="spiritual"
                      size="lg"
                      className="w-full md:w-auto"
                    >
                      💳 भुगतान करें
                    </Button>
                    <p className="text-sm text-muted-foreground">
                      UPI ID: rajjubabu531@okhdfcbank
                    </p>
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
    </div>
  );
}

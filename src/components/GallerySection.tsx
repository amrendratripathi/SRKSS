import { Slideshow } from "@/components/ui/slideshow";
import { useState } from "react";

export function GallerySection() {
  const galleryImages = [
    "/lovable-uploads/0b1705f2-7b0f-41bc-9362-81989ad13e11.png",
    "/lovable-uploads/3033d3f3-d491-4ac2-98b3-cd98de606810.png",
    "/lovable-uploads/b3ffcfaa-da18-40e2-928f-db022edec5f5.png",
    "/lovable-uploads/a257b6bc-77b0-4af4-a5b5-c1a6f6873e38.png",
    "/lovable-uploads/a9fef47b-eaa8-48c3-98ac-0093468d85b0.png",
    "/lovable-uploads/c3d35e28-6b37-482c-9db5-2692b4d6dbb3.png",
  ];

  const videoUrls = [
    "/lovable-uploads/vid1.mp4",
    "/lovable-uploads/vid2.mp4",
    "/lovable-uploads/vid3.mp4",
    "/lovable-uploads/vid4.mp4",
  ];

  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);

  const handleNextVideo = () => {
    setCurrentVideoIndex((prevIndex) => (prevIndex + 1) % videoUrls.length);
  };

  const handlePrevVideo = () => {
    setCurrentVideoIndex((prevIndex) =>
      prevIndex === 0 ? videoUrls.length - 1 : prevIndex - 1
    );
  };

  return (
    <section id="gallery" className="py-16 bg-muted/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            भागवत कथा  - फोटो गैलरी
          </h2>
          <p className="text-muted-foreground text-lg">
            हमारे पिछले आयोजन की यादगार तस्वीरें
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Slideshow images={galleryImages} className="rounded-xl" />

          <div className="mt-8 text-center">
            <p className="text-muted-foreground mb-4">
              2019 में आयोजित 9 दिवसीय भागवत कथा में हजारों श्रद्धालुओं ने भाग लिया। यह आयोजन धार्मिक एवं
              सामाजिक एकता का प्रतीक था。
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
              <div className="bg-card p-4 rounded-lg shadow-soft">
                <h4 className="font-semibold text-primary mb-2">कथा वाचक</h4>
                <p className="text-sm text-muted-foreground">प्रसिद्ध कथा वाचकों द्वारा प्रवचन</p>
              </div>
              <div className="bg-card p-4 rounded-lg shadow-soft">
                <h4 className="font-semibold text-secondary mb-2">सांस्कृतिक कार्यक्रम</h4>
                <p className="text-sm text-muted-foreground">पारंपरिक नृत्य एवं संगीत</p>
              </div>
              <div className="bg-card p-4 rounded-lg shadow-soft">
                <h4 className="font-semibold text-accent mb-2">सेवा कार्य</h4>
                <p className="text-sm text-muted-foreground">निःशुल्क भोजन</p>
              </div>
            </div>
          </div>

          {/* Video Section */}
          <div className="mt-16">
            <h3 className="text-2xl font-bold text-foreground mb-6 text-center">
              भागवत कथा - वीडियो गैलरी
            </h3>
            <div className="relative max-w-4xl mx-auto">
              <video
                key={currentVideoIndex}
                src={videoUrls[currentVideoIndex]}
                controls
                className="w-full rounded-xl shadow-lg"
              ></video>

              <button
                onClick={handlePrevVideo}
                className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-primary text-white p-2 rounded-full shadow-md"
              >
                &#8592;
              </button>
              <button
                onClick={handleNextVideo}
                className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-primary text-white p-2 rounded-full shadow-md"
              >
                &#8594;
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
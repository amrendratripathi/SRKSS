import { Phone } from "lucide-react";

export function FloatingContactButtons() {
  const phoneNumber = "+919263955825";
  const whatsappUrl = `https://wa.me/${phoneNumber.replace('+', '')}?text=${encodeURIComponent('नमस्ते! श्री राधे कृष्ण सेवा संस्थान से संपर्क करना चाहता हूँ।')}`;

  return (
    <div className="fixed right-3 md:right-5 top-1/2 -translate-y-1/2 z-50 select-none">
      <div className="flex flex-col items-center space-y-3">
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="WhatsApp पर संदेश भेजें"
          className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-green-500 hover:bg-green-600 text-white shadow-xl border border-green-400/40 flex items-center justify-center transition-colors"
          title="WhatsApp"
        >
          {/* WhatsApp SVG */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 32 32"
            className="w-6 h-6 md:w-7 md:h-7 fill-current"
            aria-hidden="true"
          >
            <path d="M19.11 17.43c-.31-.16-1.82-.9-2.1-1-.28-.1-.49-.16-.7.16-.2.31-.8 1-1 1.21-.18.2-.36.23-.67.08-.31-.16-1.3-.48-2.47-1.53-.91-.81-1.52-1.81-1.7-2.12-.18-.31-.02-.48.14-.64.14-.14.31-.36.47-.54.16-.18.21-.31.31-.52.1-.2.05-.39-.03-.54-.08-.16-.7-1.68-.96-2.3-.25-.6-.51-.52-.7-.52-.18 0-.39-.02-.6-.02-.2 0-.52.08-.79.39-.27.31-1.04 1.02-1.04 2.48 0 1.45 1.07 2.86 1.22 3.05.15.2 2.1 3.2 5.09 4.49.71.31 1.26.5 1.69.64.71.23 1.36.2 1.88.12.57-.08 1.82-.74 2.08-1.47.26-.73.26-1.35.18-1.47-.08-.12-.28-.2-.59-.36zM16.03 3C8.83 3 3 8.81 3 15.98c0 2.27.6 4.41 1.66 6.27L3 29l6.92-1.81a13.03 13.03 0 006.11 1.55c7.2 0 13.03-5.81 13.03-12.99C29.06 8.81 23.23 3 16.03 3zm0 23.52c-2.12 0-4.08-.63-5.72-1.7l-.41-.26-4.1 1.08 1.1-4-.27-.42a10.53 10.53 0 01-1.61-5.75c0-5.85 4.78-10.6 10.67-10.6 5.88 0 10.66 4.75 10.66 10.6 0 5.84-4.78 10.6-10.66 10.6z"/>
          </svg>
        </a>

        <a
          href={`tel:${phoneNumber}`}
          aria-label="कॉल करें"
          className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-primary hover:bg-primary/90 text-white shadow-xl border border-primary/40 flex items-center justify-center transition-colors"
          title="Call"
        >
          <Phone className="w-6 h-6 md:w-7 md:h-7" />
        </a>
      </div>
    </div>
  );
}



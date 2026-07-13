import { MessageCircle } from "lucide-react";
import type { MouseEvent } from "react";

const WHATSAPP_PHONE = "919560143549";
const WHATSAPP_APP_URL = `whatsapp://send?phone=${WHATSAPP_PHONE}`;
const WHATSAPP_WEB_URL = `https://web.whatsapp.com/send?phone=${WHATSAPP_PHONE}`;

const isMobileDevice = () =>
  /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
    navigator.userAgent
  );

const WhatsAppButton = () => {
  const handleClick = (event: MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();

    if (isMobileDevice()) {
      window.location.href = WHATSAPP_APP_URL;
      return;
    }

    window.open(WHATSAPP_WEB_URL, "_blank", "noopener,noreferrer");
  };

  return (
    <a
      href={WHATSAPP_WEB_URL}
      target="_blank"
      rel="noopener noreferrer"
      onClick={handleClick}
      className="fixed bottom-6 right-6 z-50 bg-[#25D366] hover:bg-[#1ebe57] text-white rounded-full w-14 h-14 flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110"
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle size={28} fill="white" strokeWidth={0} />
    </a>
  );
};

export default WhatsAppButton;

import { MessageCircle } from "lucide-react";

const WhatsAppButton = () => {
  const phone = "919560143549";

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
      navigator.userAgent
    );

    if (!isMobile) {
      e.preventDefault();
      window.open(
        `https://web.whatsapp.com/send?phone=${phone}`,
        "_blank",
        "noopener,noreferrer"
      );
    }
    // On mobile, let the default wa.me link trigger the WhatsApp app.
  };

  return (
    <a
      href={`https://wa.me/${phone}`}
      onClick={handleClick}
      className="fixed bottom-6 right-6 z-50 bg-[#25D366] hover:bg-[#1ebe57] text-white rounded-full w-14 h-14 flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110"
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle size={28} fill="white" strokeWidth={0} />
    </a>
  );
};

export default WhatsAppButton;

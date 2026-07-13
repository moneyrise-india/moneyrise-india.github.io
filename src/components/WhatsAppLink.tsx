import { ReactNode, MouseEventHandler } from "react";

const WHATSAPP_PHONE = "919560143549";
const WHATSAPP_APP_URL = `whatsapp://send?phone=${WHATSAPP_PHONE}`;
const WHATSAPP_WEB_URL = `https://web.whatsapp.com/send?phone=${WHATSAPP_PHONE}`;

const isMobileDevice = () =>
  /Android|iPhone|iPad|iPod|IEMobile|Opera Mini/i.test(navigator.userAgent);

interface WhatsAppLinkProps {
  children: ReactNode;
  className?: string;
  onClick?: MouseEventHandler<HTMLAnchorElement>;
}

const WhatsAppLink = ({ children, className, onClick }: WhatsAppLinkProps) => {
  const handleClick: MouseEventHandler<HTMLAnchorElement> = (event) => {
    event.preventDefault();
    onClick?.(event);

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
      className={className}
    >
      {children}
    </a>
  );
};

export default WhatsAppLink;

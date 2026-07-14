import { ReactNode, MouseEventHandler } from "react";

const WHATSAPP_URL = "https://wa.me/919560143549";

interface WhatsAppLinkProps {
  children: ReactNode;
  className?: string;
  onClick?: MouseEventHandler<HTMLAnchorElement>;
}

const WhatsAppLink = ({ children, className, onClick }: WhatsAppLinkProps) => {
  const handleClick: MouseEventHandler<HTMLAnchorElement> = (event) => {
    onClick?.(event);
  };

  return (
    <a
      href={WHATSAPP_URL}
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

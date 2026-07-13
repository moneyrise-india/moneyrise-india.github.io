import { ReactNode, MouseEventHandler } from "react";

interface WhatsAppLinkProps {
  children: ReactNode;
  className?: string;
  onClick?: MouseEventHandler<HTMLAnchorElement>;
}

const WhatsAppLink = ({ children, className, onClick }: WhatsAppLinkProps) => {
  return (
    <a
      href="https://wa.me/919560143549"
      target="_blank"
      rel="noopener noreferrer"
      onClick={onClick}
      className={className}
    >
      {children}
    </a>
  );
};

export default WhatsAppLink;

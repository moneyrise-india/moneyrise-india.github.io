import { ReactNode, MouseEventHandler } from "react";

interface WhatsAppLinkProps {
  children: ReactNode;
  className?: string;
  onClick?: MouseEventHandler<HTMLAnchorElement>;
}

const WhatsAppLink = ({ children, className, onClick }: WhatsAppLinkProps) => {
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
      className={className}
    >
      {children}
    </a>
  );
};

export default WhatsAppLink;

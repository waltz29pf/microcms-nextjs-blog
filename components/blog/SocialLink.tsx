import Link from "next/link";
import { Button } from "../ui/button";

interface SocialLinkProps {
  href: string;
  icon: React.ReactNode;
  label: string;
}

export const SocialLink: React.FC<SocialLinkProps> = ({
  href,
  icon,
  label,
}) => (
  <Button variant="outline" size="icon" className="flex-1">
    <Link
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
    >
      {icon}
    </Link>
  </Button>
);

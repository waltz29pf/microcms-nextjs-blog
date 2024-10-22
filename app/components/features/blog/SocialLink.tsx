import { Button } from "@/app/components/ui/button";
import Link from "next/link";

interface SocialLinkProps {
  href: string;
  icon: React.ReactNode;
  label: string;
  variant?:
    | "outline"
    | "default"
    | "destructive"
    | "secondary"
    | "ghost"
    | "link"
    | null
    | undefined;
}

export const SocialLink: React.FC<SocialLinkProps> = ({
  href,
  icon,
  label,
  variant = "outline",
}) => (
  <Button variant={variant} size="icon" className="flex-1">
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

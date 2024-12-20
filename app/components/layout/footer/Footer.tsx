import { SocialLink } from "@/app/components/features/blog/SocialLink";
import { PROFILE } from "@/app/lib/constants/profileInfo";
import { FaGithub, FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="px-4 py-6 sm:px-8 sm:py-10 bg-gray-800">
      <div className="container mx-auto flex flex-col sm:flex-row items-center justify-between text-sm sm:text-base font-bold text-gray-300">
        <div className="flex items-center justify-center gap-4">
          <SocialLink
            href={PROFILE.SOCIAL_LINKS.X}
            icon={<FaXTwitter />}
            label="Xプロフィールへ"
            variant="ghost"
          />
          <SocialLink
            href={PROFILE.SOCIAL_LINKS.GITHUB}
            icon={<FaGithub />}
            label="GitHubプロフィールへ"
            variant="ghost"
          />
        </div>
        <p>&copy; {new Date().getFullYear()} WaltzTech. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;

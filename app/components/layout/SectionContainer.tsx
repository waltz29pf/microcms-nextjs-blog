import { FaLaptopCode, FaPencilAlt, FaUser } from "react-icons/fa";
interface SectionContainerProps {
  children?: React.ReactNode;
  title: string;
  variant: string;
  description: string;
  isTransparent?: boolean;
}

const SectionContainer: React.FC<SectionContainerProps> = ({
  children,
  title,
  description,
  variant,
  isTransparent = false,
}: SectionContainerProps) => {
  const getIcon = () => {
    switch (title) {
      case "Blog Posts":
        return <FaPencilAlt />;
      case "Portfolio Highlights":
        return <FaLaptopCode />;
      case "About Me":
        return <FaUser />;
      default:
        return null;
    }
  };

  const textColorClass =
    title === "About Me" ? "text-gray-300" : "text-gray-700 dark:text-gray-400";

  return (
    <div
      className={`flex flex-col items-center min-h-full py-12 md:py-24 lg:py-32 ${
        isTransparent
          ? "bg-transparent"
          : variant === "secondary"
          ? "bg-background"
          : "bg-secondary"
      }`}
    >
      <div className="w-full max-w-6xl mx-auto px-4">
        <h2
          className={`p-6 ${textColorClass} flex items-center gap-2 w-full max-w-6xl mx-auto justify-center text-3xl font-bold  sm:text-5xl`}
        >
          {getIcon()}
          {title}
        </h2>
        <p
          className={`mb-8 ${textColorClass} text-center text-sm md:text-base lg:text-xl !leading-loose`}
        >
          {description}
        </p>
      </div>
      {children}
    </div>
  );
};

export default SectionContainer;

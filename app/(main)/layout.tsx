import NavBar from "@/app/components/layout/header/Header";
import Footer from "../components/layout/footer/Footer";
interface MainLayoutProps {
  children: React.ReactNode;
}
const MainLayout = ({ children }: MainLayoutProps) => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-100 to-red-100 dark:from-gray-800 dark:via-gray-850 dark:to-gray-900">
      <NavBar />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default MainLayout;

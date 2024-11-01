import NavBar from "@/app/components/layout/header/Header";
import Footer from "../components/layout/footer/Footer";
interface MainLayoutProps {
  children: React.ReactNode;
}
const MainLayout = ({ children }: MainLayoutProps) => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-100 to-gray-300 dark:from-gray-800 dark:to-gray-900">
      <NavBar />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default MainLayout;

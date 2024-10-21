import Footer from "@/components/layout/footer/Footer";
import Navigation from "@/components/Navigation";

interface MainLayoutProps {
  children: React.ReactNode;
}
const MainLayout = ({ children }: MainLayoutProps) => {
  return (
    <div className="flex min-h-screen flex-col">
      <Navigation />
      <main className="flex-grow bg-gray-100">{children}</main>
      <Footer />
    </div>
  );
};

export default MainLayout;

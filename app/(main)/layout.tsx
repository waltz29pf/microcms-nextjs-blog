import Navigation from "@/components/Navigation";

interface MainLayoutProps {
  children: React.ReactNode;
}
const MainLayout = ({ children }: MainLayoutProps) => {
  return (
    <div className="flex min-h-screen flex-col">
      <Navigation />
      <main className="flex-1">{children}</main>
      <footer className="border-t px-8 py-2">
        <div className="flex flex-col items-center justify-center text-sm space-y-5">
          <div>©WaltzTech. ALL Rights Reserved.</div>
        </div>
      </footer>
    </div>
  );
};

export default MainLayout;

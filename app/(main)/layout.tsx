import TransitionProvider from "@/components/layout/TransitionProvider";

interface MainLayoutProps {
  children: React.ReactNode;
}
const MainLayout = ({ children }: MainLayoutProps) => {
  return <TransitionProvider>{children}</TransitionProvider>;
};

export default MainLayout;

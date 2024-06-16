import { Navbar } from "./_components/navbar";

interface dashboardLayoutProps {
  children: React.ReactNode;
}

const dashboardLayout = ({ children }: dashboardLayoutProps) => {
  return (
    <div className="h-full flex flex-col">
      <Navbar />

      {children}
    </div>
  );
};

export default dashboardLayout;

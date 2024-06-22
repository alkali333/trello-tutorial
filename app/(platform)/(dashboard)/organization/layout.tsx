import { SideBar } from "../_components/sidebar";

interface organizationProps {
  children: React.ReactNode;
}

const organizationLayout = ({ children }: organizationProps) => {
  return (
    <main className="pt-20 md:pt-24 px-4 max-w-6xl 2xl:max-w-screen-xl mr-auto">
      <div className="flex gap-x-7">
        <div className="w-64 shrink-0 hidden md:block">
          <SideBar />
        </div>
        {children}
      </div>
    </main>
  );
};

export default organizationLayout;

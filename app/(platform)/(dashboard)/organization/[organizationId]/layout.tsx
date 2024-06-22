import { OrgControl } from "./_components/org-control";

interface organizationProps {
  children: React.ReactNode;
}

const organizationIdLayout = ({ children }: organizationProps) => {
  return (
    <>
      <OrgControl />
      {children}
    </>
  );
};

export default organizationIdLayout;

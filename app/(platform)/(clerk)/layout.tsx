interface clerkLayoutProps {
  children: React.ReactNode;
}
const clerkLayout = ({ children }: clerkLayoutProps) => {
  return (
    <div className="h-full flex items-center justify-center">{children}</div>
  );
};

export default clerkLayout;

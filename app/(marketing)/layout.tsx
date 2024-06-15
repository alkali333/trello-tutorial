import React from "react";

interface MarketingLayoutProps {
  children: React.ReactNode;
}

const MarketingLayout = ({ children }: MarketingLayoutProps) => {
  return (
    <div className="h-full bg-slate-100">
      {/* Header */}
      <main className="pt-40 pb-20 bg-slate-100">{children}</main>
      {/* Footer */}
    </div>
  );
};

export default MarketingLayout;

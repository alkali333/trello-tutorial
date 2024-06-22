"use client";

import { useMobileSideBar } from "@/app/hooks/use-mobile-sidebar";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

import { Sheet, SheetContent } from "@/components/ui/sheet";
import { SideBar } from "./sidebar";

export const MobileSidebar = () => {
  const pathname = usePathname();
  const [isMounted, setIsMounted] = useState(false);

  const onOpen = useMobileSideBar((state) => state.onOpen);
  const onClose = useMobileSideBar((state) => state.onClose);
  const isOpen = useMobileSideBar((state) => state.isOpen);

  // stop hydration errors from useClient components
  // components are server side rendered initially, client
  // changes the state, this causes hydration error.
  // FIX: to guarentee it is only rendered on the client we use
  // useEffect - this means it is only rendered on the client because
  // that's where IsMounted is set to true

  useEffect(() => {
    setIsMounted(true);
  }, []);

  //close sidebar when URL changes
  useEffect(() => {
    onClose();
  }, [pathname, onClose]);

  if (!isMounted) {
    return null;
  }

  return (
    <>
      <Button onClick={onOpen} className="block" variant="ghost" size="sm">
        <Menu className="h-4 w-4" />
      </Button>
      <Sheet open={isOpen} onOpenChange={onClose}>
        <SheetContent side="left" className="p-2 pt-10">
          <SideBar storageKey="t-sidebar-mobile-state" />
        </SheetContent>
      </Sheet>
    </>
  );
};

import Image from "next/image";
import Link from "next/link";
import React from "react";

import { cn } from "@/lib/utils";
import localFont from "next/font/local";
import { GiBrainstorm } from "react-icons/gi";

const headingFont = localFont({
  src: "../public/fonts/CalSans-SemiBold.woff2",
});

export const Logo = () => {
  return (
    <Link href="/">
      <div className="hover:opacity-75 transition items-center gap-x-2 hidden md:flex">
        <GiBrainstorm className="text-2xl text-orange-600" />
        <p
          className={cn(
            "text-l text-neutral-700 pb-1 mt-1",
            headingFont.className
          )}
        >
          Taskify
        </p>
      </div>
    </Link>
  );
};

"use client";
import { Button } from "@/components/ui/button";
import { LayoutDashboard } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

export default function DashboardBtn() {
  const currentPath = usePathname();

  return (
    <Button
      asChild
      className={`w-full h-11 group bg-transparent rounded-xl hover:bg-main hover:text-white duration-300 text-[#696F79] ${
        currentPath === "/dashboard" && "bg-main text-white "
      } `}
    >
      <Link
        href="/dashboard"
        className="font-semibold  text-xl flex gap-8 justify-around"
      >
        {/* icon */}
        <LayoutDashboard
          className={`!size-6 text-main group-hover:text-white hover:text-white ${
            currentPath === "/dashboard" && "text-white "
          } `}
          strokeWidth={3}
        />
        {/* title */}
        Dashboard
      </Link>
    </Button>
  );
}

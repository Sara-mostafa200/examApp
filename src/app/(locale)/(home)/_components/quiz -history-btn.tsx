"use client";
import { Button } from "@/components/ui/button";
import { History } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

export default function QuizHistoryBtn() {
  const currentPath = usePathname();
  
  return (
    <Button
      asChild
      className={`w-full h-11 group bg-transparent rounded-xl hover:bg-main hover:text-white duration-300 text-[#696F79] ${
        currentPath === "/quiz-history" && "bg-main text-white "
      } `}
    >
      <Link
        href="/quiz-history"
        className="font-semibold text-xl flex gap-8 justify-around"
      >
        {/* icon */}
        <History
          className={`!size-6 text-main group-hover:text-white hover:text-white ${
            currentPath === "/quiz-history" && "text-white "
          } `}
        />
        {/* title */}
        Quiz History
      </Link>
    </Button>
  );
}

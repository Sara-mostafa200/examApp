import { buttonVariants } from "@/components/ui/button";
import Link from "next/link";
import React from "react";

export default function Page() {
  return (
    <html lang="en">
      <body>
        <main className="flex flex-col justify-center items-center gap-8 h-screen">
          {/* Headline */}
          <h1 className="text-main font-bold text-9xl">Error 404</h1>

          {/* Description */}
          <span className="text-2xl">Page not found.</span>

          {/* Navigating to homepage */}
          <Link href="/dashboard" className={`${buttonVariants({ variant: "link" })} hover:text-main duration-500`}>
          Go to homepage
          </Link>
        </main>
      </body>
    </html>
  );
}

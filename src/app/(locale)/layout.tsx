import { Metadata } from "next";
import React from "react";
import { Poppins } from "next/font/google";
import { Inter } from "next/font/google";
import Providers from "@/components/providers";
import { Toaster } from "@/components/ui/sonner";


// fonts
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--poppins",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--inter",
});

export async function generateMetadata(): Promise<Metadata> {
  // Variables
  const title = "application-title";

  return {
    title,
  };
}
export default function LocaleLayout({ children }: LayoutProps) {
  return (
    <html lang="en" className={`${poppins.variable} ${inter.variable} `}>
      <body>
        <Providers>
        {children}
        <Toaster />
        </Providers>
      </body>
    </html>
  );
}

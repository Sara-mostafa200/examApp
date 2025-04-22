import React from "react";
import SideBar from "./_components/sidebar";
import Header from "./_components/header";

export default function DashboardLayout({ children }: LayoutProps) {
  return (
    <main className="bg-[#F5F5F5] w-screen px-5 lg:px-0">
      <div className="flex flex-col lg:flex-row gap-16 container mx-auto mt-10 w-full">
        <SideBar />
        <section className="w-full  lg:w-4/5 flex flex-col">
          <Header />
          {children}
        </section>
      </div>
    </main>
  );
}
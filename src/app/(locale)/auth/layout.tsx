import React from "react";
import AuthNav from "./_components/auth-nav";
import Welcome from "./_components/welcome";

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return(
    <main className="flex flex-col w-full md:flex-row min-h-screen">
      <Welcome/>
      <section className="w-full md:w-1/2">
        <AuthNav/>
        {children}
      </section>
    </main>
  );
}

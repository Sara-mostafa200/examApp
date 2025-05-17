import Link from "next/link";
import React from "react";

export default function AuthNav() {
  const NavLinks = [
    {
      title: "Sign in",
      href: "/auth/login",
    },
    {
      title: "Register",
      href: "/auth/register",
    },
  ];

  return (
    <div className="flex gap-3 p-5 lg:p-0 lg:gap-10 items-center justify-end mt-20 lg:mr-20 font-inter text-[1.25rem] ">
      {/* Button */}
      <span>English</span>

      {/* Navigate */}
      <ul className="flex gap-5 lg:gap-10 ">
        {NavLinks.map((link) => (
          <li
            key={link.title}
            className={`font-bold text-custom-main border-white border hover:border-[#E0E0E9] hover:font-normal duration-300 py-2 px-6 rounded-2xl `}
          >
            <Link href={link.href}>{link.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

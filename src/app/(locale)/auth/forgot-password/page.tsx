import React from "react";
import ForgotPasswordForm from "./_components/forgot-password-form";

export default function Page() {
  return (
    <div className="flex flex-col gap-8 p-5 lg:pt-40 lg:pb-64 lg:pr-[10.5rem] lg:pl-[8.25rem]">
      {/* Title */}
      <h3 className="font-inter font-bold text-2xl">Forgot your password?</h3>
      <ForgotPasswordForm />
    </div>
  );
}

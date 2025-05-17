import React from "react";
import VerifyCodeForm from "./_components/verify-code-form";

export default function Page() {
  return (
    <div className="flex flex-col gap-8 p-5 lg:pt-40 lg:pb-64 lg:pr-40 lg:pl-32">
      {/* Title */}
      <h3 className="font-inter font-bold text-2xl">Verify code</h3>
      <VerifyCodeForm />
    </div>
  );
}

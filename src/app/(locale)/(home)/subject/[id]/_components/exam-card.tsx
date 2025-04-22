import { Button } from "@/components/ui/button";
import Image from "next/image";
import React from "react";
import html from "@/../../public/assets/images/html.png";
import StartQuizBtn from "./start-quiz-btn";

export default function ExamCard() {
  return (
    <div className="bg-white w-full font-inter py-4 px-6 flex items-center justify-between">
      {/* right content */}
      <div className="right flex gap-6 items-center">
        {/* image */}
        <Image src={html} alt="exam-icon" />

        {/* exam info */}
        <div className="examInfo">
          <p className="font-medium text-base  ">HTML</p>
          <span className="text-xs text-[#535353]">20 Question</span>
        </div>
      </div>

      {/* left content */}
      <div className="left flex flex-col gap-2  ">
        <span className="text-sm ">15 Minutes</span>
        <StartQuizBtn/>
      </div>
            
      

    </div>
  );
}

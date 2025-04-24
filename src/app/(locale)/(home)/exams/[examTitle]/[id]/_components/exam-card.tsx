import { Button } from "@/components/ui/button";
import Image from "next/image";
import React from "react";
import html from "@/../../public/assets/images/html.png";
import StartQuizBtn from "./start-quiz-btn";

export default function ExamCards({exams}: {exams : Exam[]}) {
  return (
    <>
    {
    exams.map((exam) => <div className="bg-white w-full font-inter py-4 px-6 flex items-center justify-between">
      {/* right content */}
      <div className="right flex gap-6 items-center">
        {/* image */}
        <Image src={html} alt="exam-icon" />

        {/* exam info */}
        <div className="examInfo">
          <p className="font-medium text-base  ">{exam.title}</p>
          <span className="text-xs text-[#535353]">{exam.numberOfQuestions} <span className="pl-1"> Question</span></span>
        </div>
      </div>

      {/* left content */}
      <div className="left flex flex-col gap-2  ">
        <span className="text-sm ">{exam.duration} <span className="pl-1">Minutes </span></span>
        <StartQuizBtn examId={exam._id} />
      </div>
            
      

    </div>)
    }
    
    </>
    
  );
}

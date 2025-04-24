"use client";
import { Button } from "@/components/ui/button";
import React, { SetStateAction, useState } from "react";
import Instructions from "./Instructions";
import QuestionCard from "./question-card";
import ScoreCard from "./score-card";
import useQuestion from "../_hooks/use-question";

export default function StartQuizOverlay({setshowLayout , examId } : {setshowLayout :React.Dispatch<SetStateAction<boolean>> , examId :string} ) {
  // hooks
  const [closeLayout, setcloseLayout] = useState(true);
  
  
  // functions
  const closeLayoutFn = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.currentTarget === e.target) setshowLayout(false);

  };

   const {payload , isError ,isPending} = useQuestion(examId)
   
  return (
    <>
      {closeLayout && (
        <div
          onClick={(e) => closeLayoutFn(e)}
          className="fixed inset-0 bg-black bg-opacity-50 p-3 font-inter flex items-center justify-center"
        >
         {/* <Instructions/> */}
          {payload?.questions && <QuestionCard questions={payload.questions}/>} 
         {/* <ScoreCard/> */}
        </div>
      )}
    </>
  );
}

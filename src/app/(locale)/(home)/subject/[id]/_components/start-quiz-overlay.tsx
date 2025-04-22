"use client";
import { Button } from "@/components/ui/button";
import React, { SetStateAction, useState } from "react";
import Instructions from "./Instructions";
import QuestionCard from "./question-card";
import ScoreCard from "./score-card";

export default function StartQuizOverlay({setshowLayout } : {setshowLayout :React.Dispatch<SetStateAction<boolean>>} ) {
  // hooks
  const [closeLayout, setcloseLayout] = useState(true);
  
  // functions
  const closeLayoutFn = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.currentTarget === e.target) setshowLayout(false);

  };
  return (
    <>
      {closeLayout && (
        <div
          onClick={(e) => closeLayoutFn(e)}
          className="fixed inset-0 bg-black bg-opacity-50 p-3 font-inter flex items-center justify-center"
        >
         {/* <Instructions/> */}
         {/* <QuestionCard ans={["sara" , "mostafa" , "elhadad"]}/> */}
         <ScoreCard/>
        </div>
      )}
    </>
  );
}

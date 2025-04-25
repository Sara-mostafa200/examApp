"use client";
import React, { SetStateAction, useState } from "react";
import Instructions from "./Instructions";
import QuestionCard from "./question-card";
import ScoreCard from "./score-card";
import useQuestion from "../_hooks/use-question";

export default function StartQuizOverlay({setshowLayout , examId } : {setshowLayout :React.Dispatch<SetStateAction<boolean>> , examId :string} ) {
  // hooks
  const [closeLayout, setcloseLayout] = useState(true);
  const [showQuestionCard, setshowQuestionCard] = useState(false);
  const [showScoreCard, setshowScoreCard] = useState(false);
  const [ExamResults, setExamResults] = useState<"" | CheckResponse>("");


  
  
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
         <Instructions setshowQuestionCard = {setshowQuestionCard}/>
          {payload?.questions && showQuestionCard ? <QuestionCard questions={payload.questions} setcloseLayout={setcloseLayout} setshowScoreCard={setshowScoreCard}  setshowQuestionCard={setshowQuestionCard} setExamResults={setExamResults} /> : null } 
          { showScoreCard && ExamResults ? <ScoreCard ExamResults={ExamResults}  /> : null} 
        </div>
      )}
    </>
  );
}

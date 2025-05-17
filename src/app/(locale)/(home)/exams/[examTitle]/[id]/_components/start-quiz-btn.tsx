"use client";
import { Button } from "@/components/ui/button";
import React, { useState } from "react";
import StartQuizOverlay from "./start-quiz-overlay";

export default function StartQuizBtn({examId}:{examId :string}) {
  // hooks
  const [showLayout, setshowLayout] = useState(false);

  return (
    <>
      <Button
        onClick={() => {
          setshowLayout(true);
        }}
        className="rounded-xl text-xs font-medium h-6 "
      >
        Start
      </Button>
      {showLayout && <StartQuizOverlay setshowLayout={setshowLayout} examId={examId} />}
    </>
  );
}

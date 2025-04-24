import Image from "next/image";
import React, { useState } from "react";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import { ExamSchema, TExamSchema } from "@/lib/schemes/exam.schema";
import { cn } from "@/lib/utils/cn";
import ExamTimer from "./exam-timer";

export default function QuestionCard({ questions }: { questions: Question[] }) {
  // hooks
  const [step, setstep] = useState(0);
  const [answer, setanswer] = useState("");

  //  const variable
  const currentQuestion = questions[step];


  // hooks
  const form = useForm<TExamSchema>({
    resolver: zodResolver(ExamSchema),
  });

  // function
  const onSubmit = (values: TExamSchema) => {
    console.log(values);
  };

  
  
  return (
    <div className="custom-scrollbar bg-white rounded-3xl flex flex-col gap-12 font-inter p-6 max-h-[600px]  overflow-y-scroll">
      {/* card header */}
      <header className=" flex flex-col gap-7">
        {/* questionNum and timer */}
        <div className="head flex items-center justify-between">
          {/* Q-numbers */}
          <span className="text-sm font-medium text-main">
            Question {step + 1} of {questions.length}
          </span>

          {/* timer */}
          <ExamTimer time={questions[0].exam.duration} onTimerChange={(date) => {form.setValue("time", date.getMinutes())}} />
        </div>

        {/* dots */}
        <div className="flex gap-6 justify-between">
          {questions.map((num , i) => (
            <div
              key={num._id}
              className={cn("bg-[#D9D9D9] size-3 rounded-full", step >= i && "bg-main" ) }
            ></div>
          ))}
        </div>
      </header>

      {/* cardContent */}
      <div className="content flex flex-col gap-6">
        {/* question */}
        <h4 className="text-2xl font-medium max-w-[39rem]">
          {currentQuestion.question}
        </h4>

        {/* Qanswers */}
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)}>
            <FormField
              control={form.control}
              name={`answers.${step}`}
              render={({ field }) => (
                <FormItem>
                  {/* label */}
                  <FormLabel className="sr-only"> </FormLabel>

                  {/* control */}
                  <FormControl>
                    <RadioGroup
                      onValueChange={(value) => {
                        setanswer(value);
                        field.onChange(
                        {
                          questionId:currentQuestion._id,
                          correct : value
                        }
                      )}}
                      value={answer}
                      name={currentQuestion._id}
                      className=" flex flex-col gap-4"
                    >
                      {currentQuestion.answers.map((answer) => (
                        <FormItem
                          key={answer.key}
                          className="peer-checked:bg-black bg-[#EDEFF3] h-20 flex gap-4 items-center rounded-xl checked:bg-black   "
                        >

                          {/* Radio */}
                          <FormControl>
                            <RadioGroupItem
                              className="peer text-[#02369C] size-5 ml-5 border-[#02369C] border-2"
                              value={answer.key}
                            />
                          </FormControl>
                          <FormLabel className="text-xl w-full !m-0">
                            {answer.answer}
                          </FormLabel>
                        </FormItem>
                      ))}
                    </RadioGroup>
                  </FormControl>

                  {/* Feedback */}
                  <FormMessage className="py-4 font-medium text-xl" />
                </FormItem>
              )}
            />

            {/* action */}
            <div className=" flex flex-col lg:flex-row gap-5 lg:gap-0 justify-between mt-12">
              {/* Prev */}
              <Button
                variant={"secondary"}
                className="h-14 rounded-full text-2xl font-medium px-28 "
                type="button"
                disabled={step === 0}
                onClick={() =>  {
                  const prevAnswer =  form.getValues(`answers.${step - 1}`);
                  
                  if (prevAnswer?.correct){
                    setanswer(prevAnswer.correct)
                    
                  }else {
                    setanswer("")
                  }

                  setstep(prev => prev - 1)
                }}
              >
                Back
              </Button>

              {/* next */}
              <Button
                className="h-14 rounded-full text-2xl font-medium px-28  "
                type={ step < questions.length - 1 ? "button" : "submit"}
                disabled={(() => {
                  const currentAnswer = form.getValues(`answers.${step}`);

                  if (currentAnswer?.correct) return false;
  
                  return true;
                })()
                  

                }
                onClick={() => {
                  if(step === questions.length-1) return ;

                  const nextAnswer =  form.getValues(`answers.${step + 1}`);
                  
                  if (nextAnswer?.correct){
                    setanswer(nextAnswer.correct)
                    
                  }else {
                    setanswer("")
                  }

                  setstep(prev => prev + 1)
                }}
              >
                next
              </Button>
            </div>
          </form>
        </Form>
      </div>
    </div>
  );
}

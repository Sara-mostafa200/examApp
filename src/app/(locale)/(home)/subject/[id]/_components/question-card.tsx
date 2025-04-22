import Image from "next/image";
import React from "react";
import timer from "@/../../public/assets/images/timer.svg";
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

export default function QuestionCard({ ans }: { ans: string[] }) {
  //  const variable
  const dynamicInputs = ans;

  //   zod schema
  const questionSchema = dynamicInputs.length > 0 ? z.object({
      question: z.enum(dynamicInputs as [string ,...string[]], {
      required_error: "You need to select a notification type.",
    }) 
  }) : z.object({
    question: z.enum(["Sorry Something went wrong"], {
    required_error: "Sorry Something went wrong",
  }) 
})

  // hooks
  const form = useForm<z.infer<typeof questionSchema>>({
    resolver: zodResolver(questionSchema),
  });

  // function
  const onSubmit = (values: z.infer<typeof questionSchema>) => {
    
  };
  return (
    <div className="custom-scrollbar bg-white rounded-3xl flex flex-col gap-12 font-inter p-6 max-h-[600px]  overflow-y-scroll">
      {/* card header */}
      <header className=" flex flex-col gap-7">
        {/* questionNum and timer */}
        <div className="head flex items-center justify-between">
          {/* Q-numbers */}
          <span className="text-sm font-medium text-main">
            Question 1 of 20
          </span>

          {/* timer */}
          <div className="flex gap-2 items-center">
            <Image src={timer} alt="timer" />
            <span className="text-[#11CE19] text-xl">14.59</span>
          </div>
        </div>

        {/* dots */}
        <div className="flex gap-6">
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18].map(
            (num) => (
              <div className="bg-[#D9D9D9] size-3 rounded-full"></div>
            )
          )}
        </div>
      </header>

      {/* cardContent */}
      <div className="content flex flex-col gap-6">
        {/* question */}
        <h4 className="text-2xl font-medium max-w-[39rem]">
          Exercitationem pariatur quae facere vel id est illo velit aut.
        </h4>

        {/* Qanswers */}
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)}>
            <FormField
              control={form.control}
              name="question"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="sr-only"> </FormLabel>
                  <FormControl>
                    <RadioGroup
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                      className=" flex flex-col gap-4"
                    >
                      {dynamicInputs.map((input) => (

                        <FormItem className="peer-checked:bg-black bg-[#EDEFF3] h-20 flex gap-4 items-center rounded-xl checked:bg-black  ">
                          <FormControl >
                            <RadioGroupItem className="peer text-[#02369C] size-5 ml-5 border-[#02369C] border-2" value={input} />
                          </FormControl>
                          <FormLabel className="text-xl  !m-0">{input}</FormLabel>
                        </FormItem>
                      ))}
                    </RadioGroup>
                  </FormControl>
                  <FormMessage className="py-4 font-medium text-xl" />
                </FormItem>
              )}
            />
             <div className=" flex flex-col lg:flex-row gap-5 lg:gap-0 justify-between mt-12">
              <Button variant={"secondary"} type="button" className="h-14 rounded-full text-2xl font-medium px-28 " >Back</Button>
              <Button  type="submit" className="h-14 rounded-full text-2xl font-medium px-28  ">next</Button>
             </div>
            
          </form>
        </Form>
      </div>
    </div>
  );
}

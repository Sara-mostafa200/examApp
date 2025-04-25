import { useMutation } from "@tanstack/react-query"
import { CheckQuestion } from "../_actions/check-question.actions"
import { TExamSchema } from "@/lib/schemes/exam.schema"

export default function useCheckQuestions() {
   const {isPending , isError , mutate , data} = useMutation({
    mutationKey : ["checkQuestion"] ,
    mutationFn : async (ExamAnswers : TExamSchema) => await CheckQuestion(ExamAnswers),
  
   })
  return { isPending , isError , CheckQuestion:mutate , payload:data }
}

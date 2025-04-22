import {  useMutation } from "@tanstack/react-query";
import { ForgotPassword } from "../_actions/forgot-password.action";
import { TforgetPasswordSchema } from "@/lib/schemes/auth.schema";
import { toast } from "sonner";
import { error } from "console";

export default function useForgotPassword() {
  const {isPending , mutate} =useMutation({
    mutationFn : async (values:TforgetPasswordSchema) => await ForgotPassword(values) , 
    onSuccess: (data) => {
        toast.success(data.info , {
            className:"!text-green-600 !text-lg !font-medium"
        })

        setTimeout(()=> {
          window.location.href = "/auth/verify-code"
        } , 1000)
    },
    onError: (error) => {
        toast.error(error.message,{
            className:"!text-error !text-lg !font-medium"
        })
    }
  })

  return {isPending , ForgotPassword : mutate}


}
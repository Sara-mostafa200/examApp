import { TsetPasswordSchema } from "@/lib/schemes/auth.schema";
import { useMutation } from "@tanstack/react-query";
import { SetPassword } from "../_actions/set-password.action";
import { toast } from "sonner";

export default function useSetPassword() {
  const {isPending , mutate} = useMutation({
   mutationFn:async (values:TsetPasswordSchema) => await SetPassword(values),
   onSuccess: () => {
    toast.success("Reset Password Successfully", {
        className:"!text-green-600 !text-lg !font-medium"
    })
    
    setTimeout(() => {
    window.location.href = "/auth/login"
    }, 1000)

   },

   onError: (error) => {
    toast.error(error.message,{
        className:"!text-error !text-lg !font-medium"
    })
   }
  })

  return {isPending , setPassword:mutate}
}

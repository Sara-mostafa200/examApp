import { TregisterInputs } from "@/lib/schemes/auth.schema";
import { useMutation } from "@tanstack/react-query";
import { registerFn } from "../_actions/register.action";
import { toast } from "sonner";



export default function useRegister() {
    const {isPending , mutate}=useMutation({
        mutationFn : async (values : TregisterInputs) => await registerFn(values),
        onSuccess : () => {
          toast.success("account has been created successfully",{
            className:"!text-green-600 !text-lg !font-medium"
          })
  
          setTimeout(() => {
           window.location.href = "/auth/login"
          } , 1000)
        },
        onError : (error) =>{
          toast.error(error.message,{
            className:"!text-error !text-lg !font-medium"
          })
        }
    })

    return {isPending , register:mutate }
}
import { useMutation } from "@tanstack/react-query";
import { verifyCode } from "../_actions/verify-code.action";
import { TverifySchema } from "@/lib/schemes/auth.schema";
import { toast } from "sonner";

export default function useVerifyCode() {
    const { isPending , mutate } = useMutation({
        mutationFn: async(values: TverifySchema) => await verifyCode(values),
        onSuccess:() => {
            window.location.href = "/auth/set-password"
        },
        onError:(error) => {
            toast.error(error.message , {
                className:"!text-error !text-lg !font-medium"
            })
        }

    })

    return {isPending , verifyCode: mutate}
}

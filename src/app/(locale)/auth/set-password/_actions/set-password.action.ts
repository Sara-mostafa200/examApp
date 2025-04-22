"use server"

import { JSON_HEADERS } from "@/lib/constants/api.constant"
import { TsetPasswordSchema } from "@/lib/schemes/auth.schema"

export async function SetPassword(setPasswordInputs:TsetPasswordSchema) {
 const response = await fetch(`${process.env.API}/auth/resetPassword`,{
    method:"PUT",
    body:JSON.stringify(setPasswordInputs),
    headers:{
        ...JSON_HEADERS
    }
 })

 const payload:ApiResponse<SetPasswordResponse> = await response.json();

 if("code" in payload) throw new Error(payload.message);

 return payload;

}
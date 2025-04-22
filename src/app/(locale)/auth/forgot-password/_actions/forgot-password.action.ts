"use server"

import { JSON_HEADERS } from "@/lib/constants/api.constant"
import { TforgetPasswordSchema } from "@/lib/schemes/auth.schema"

export async function ForgotPassword (forgotPasswordInputs:TforgetPasswordSchema) {
 const response = await fetch(`${process.env.API}/auth/forgotPassword`,{
    method:"POST",
    body: JSON.stringify(forgotPasswordInputs),
    headers:{
        ...JSON_HEADERS
    }
 })

 const payload:ApiResponse<ForgotPasswordResponse> = await response.json();
 
 if ("code" in payload) throw new Error(payload.message)

 return payload;
} 
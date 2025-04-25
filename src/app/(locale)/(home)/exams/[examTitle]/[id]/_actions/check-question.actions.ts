"use server"

import { JSON_HEADERS } from "@/lib/constants/api.constant"
import { TExamSchema } from "@/lib/schemes/exam.schema"
import getAuthToken from "@/lib/utils/auth-headers"

export async function CheckQuestion(ExamAnswers:TExamSchema ) {
    const response = await fetch(`${process.env.API}/questions/check`,{
        method:"POST",
        headers:{
            token: await getAuthToken(),
            ...JSON_HEADERS
        },
        body:JSON.stringify(ExamAnswers)
    })

    const payload:ApiResponse<CheckResponse> = await response.json();

    if ("code" in payload) throw new Error(payload.message);
    
    return payload;
 }
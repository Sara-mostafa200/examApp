import getAuthToken from "@/lib/utils/auth-headers";
import { getToken } from "next-auth/jwt";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req:NextRequest){
    const headerToken = await getToken({req}) 
    const response = await fetch(`${process.env.API}/subjects`,{
        method:"GET",
        headers: {
            token: headerToken?.token || ""
        }
        
    })

    const payload:ApiResponse<Pagination<{subjects : Subject[]}>> = await response.json();

    if ("code" in payload) throw new Error(payload.message)
    
    return NextResponse.json(payload);
}
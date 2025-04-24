import { getToken } from "next-auth/jwt";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req:NextRequest ){
    const searchParams = req.nextUrl.searchParams;
    const headerToken = await getToken({req}) 
    const response = await fetch(`${process.env.API}/questions?${searchParams.toString()}`,{
        method:"GET",
        headers: {
            token: headerToken?.token || ""
        }
        
    })

    const payload:ApiResponse<{questions : Question[]}> = await response.json();

    if ("code" in payload) throw new Error(payload.message)
    
    return NextResponse.json(payload);
}
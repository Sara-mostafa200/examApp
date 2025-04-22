"use server";

import { JSON_HEADERS } from "@/lib/constants/api.constant";
import { TregisterInputs } from "@/lib/schemes/auth.schema";

export const registerFn = async (registerInputs: TregisterInputs) => {
   
    const response = await fetch(`${process.env.API}/auth/signup`, {
      method: "POST",
      body: JSON.stringify(registerInputs),
      headers: {
        ...JSON_HEADERS,
      },
    });

    const payload: ApiResponse<RegisterResponse> = await response.json();

    if("code" in payload )  {throw new Error(payload.message);}

    return payload;
   
    
  
};

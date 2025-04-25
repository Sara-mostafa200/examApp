"use server";

import { JSON_HEADERS } from "@/lib/constants/api.constant";
import { TverifySchema } from "@/lib/schemes/auth.schema";

export async function verifyCode(verifyCodeInputs: TverifySchema) {
  const response = await fetch(`${process.env.API}/auth/verifyResetCode`, {
    method: "POST",
    body: JSON.stringify(verifyCodeInputs),
    headers: {
      ...JSON_HEADERS,
    },
  });

  const payload: ApiResponse<object> = await response.json();

  if ("code" in payload) throw new Error(payload.message);

  return payload;
}

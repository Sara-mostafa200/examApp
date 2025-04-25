import "server-only"
import { decode, JWT } from "next-auth/jwt";
import { cookies } from "next/headers";
import { AUTH_TOKEN } from "../constants/api.constant";

export default async function getAuthToken() {
    const jwtToken = cookies().get(AUTH_TOKEN)?.value;
    let token :JWT | null = null;
try{
    token = await decode({
    secret:process.env.NEXTAUTH_SECRET!,
    token: jwtToken

 })

 
}
// eslint-disable-next-line @typescript-eslint/no-unused-vars
catch(error){

}
return token?.token || "";
}
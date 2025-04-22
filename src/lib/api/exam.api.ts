import getAuthToken from "../utils/auth-headers";

export async function getAllExam(){
    const headerToken = await getAuthToken();
    const response = await fetch(`${process.env.API}/exams`,{
        method:"GET",
        headers: {
            token: headerToken
        }
        
    })

    const payload:ApiResponse<Pagination<{exams : Exam[]}>> = await response.json();

    if ("code" in payload) throw new Error(payload.message)
    
    return payload;
}
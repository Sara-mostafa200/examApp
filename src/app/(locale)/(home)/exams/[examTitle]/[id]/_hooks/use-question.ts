import { useQuery } from "@tanstack/react-query";

export default function useQuestion(examId: string) {
  const { data, isError, isPending } = useQuery({
    queryKey: ["question"],
    queryFn: async () => {
      const response = await fetch(
        `http://localhost:3000/api/question?exam=${examId}`
      );

      const payload: ApiResponse<{ questions: Question[] }> =
        await response.json();

      if ("code" in payload) throw new Error(payload.message);

      return payload;
    },
  });
  return {isPending , isError , payload:data};
}

import { baseApi } from "@/shared/api/baseApi";
import type QuestionResponse from "@/entities/questions/model/types";

interface GetPublicQuestionsResponse {
  data: QuestionResponse[];
  total: number;
  limit: number;
  page: number;
}

interface GetPublicQuestionsParams {
  page?: number;
  limit?: number;
  [key: string]: unknown;
}

export const questionsApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getPublicQuestions: builder.query<GetPublicQuestionsResponse, GetPublicQuestionsParams>({
      query: (params) => {
        return {
          url: "/questions/public-questions",
          params: { page: 1, limit: 10, ...params, ignoreCase: true },
        };
      },
    }),
  }),
  overrideExisting: false,
});

export const { useGetPublicQuestionsQuery } = questionsApi;


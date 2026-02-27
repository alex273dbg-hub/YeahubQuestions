import { baseApi } from '@/shared/api/baseApi';
import type { GetQuestionByIdResponse } from '../model/type';

export const getQuestionsById = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getQuestionsById: builder.query<GetQuestionByIdResponse, string>({
      query: (id) => {
        return {
          url: `questions/public-questions/${id}`,
        };
      },
    }),
  }),
  overrideExisting: false,
});

export const { useGetQuestionsByIdQuery } = getQuestionsById;

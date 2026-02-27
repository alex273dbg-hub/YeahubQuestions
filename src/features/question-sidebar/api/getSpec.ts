import { baseApi } from "@/shared/api/baseApi";
import type {
  SkillsResponse,
  SpecializationsResponse,
} from "../model/type";

interface GetSkillsParams {
  page?: number;
  limit?: number;
  [key: string]: unknown;
}

interface GetSpecializationsParams {
  page?: number;
  limit?: number;
  [key: string]: unknown;
}

export const specApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getSkills: builder.query<SkillsResponse, GetSkillsParams | void>({
      query: (params) => {
        return {
          url: "/skills",
          params: { page: 1, limit: 10, ...params, ignoreCase: true },
        };
      },
    }),
    getSpecializations: builder.query<
      SpecializationsResponse,
      GetSpecializationsParams | void
    >({
      query: (params) => {
        return {
          url: "/specializations",
          params: { page: 1, limit: 10, ...params, ignoreCase: true },
        };
      },
    }),
  }),
  overrideExisting: false,
});

export const { useGetSkillsQuery, useGetSpecializationsQuery } = specApi;

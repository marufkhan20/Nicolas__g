import { apiSlice } from "../api/apiSlice";

export const dashboardApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getDashboardInfo: builder.query({
      query: () => `/api/dashboard`,
      providesTags: ["getDashboardInfo"],
    }),
  }),
});

export const { useGetDashboardInfoQuery } = dashboardApi;

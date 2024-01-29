import { apiSlice } from "../api/apiSlice";

export const serviceApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getCases: builder.query({
      query: () => `/api/cases`,
      providesTags: ["getCases"],
    }),
    getCase: builder.query({
      query: (id) => `/api/cases/${id}`,
      providesTags: ["getCase"],
    }),
    createCase: builder.mutation({
      query: (data) => ({
        url: `/api/cases`,
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["getCases", "getDashboardInfo"],
    }),
    updateCase: builder.mutation({
      query: ({ id, data }) => ({
        url: `/api/cases/${id}`,
        method: "PUT",
        body: data,
      }),
      invalidatesTags: ["getCases", "getCase"],
    }),
    deleteCase: builder.mutation({
      query: (id) => ({
        url: `/api/cases/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["getCases", "getDashboardInfo"],
    }),
  }),
});

export const {
  useGetCasesQuery,
  useGetCaseQuery,
  useCreateCaseMutation,
  useUpdateCaseMutation,
  useDeleteCaseMutation,
} = serviceApi;

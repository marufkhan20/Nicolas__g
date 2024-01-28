import { apiSlice } from "../api/apiSlice";

export const serviceApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getCases: builder.query({
      query: () => `/api/cases`,
      providesTags: ["getCases"],
    }),
    getService: builder.query({
      query: (id) => `/api//${id}`,
      providesTags: ["getCreditCard"],
    }),
    createCase: builder.mutation({
      query: (data) => ({
        url: `/api/cases`,
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["getCases"],
    }),
    uploadCreditCardInfo: builder.mutation({
      query: (data) => ({
        url: `/api/credit-cards/upload-credit-card-info`,
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["getCreditCards", "getCampaigns", "getDashboardInfo"],
    }),
    updateCreditCard: builder.mutation({
      query: ({ id, data }) => ({
        url: `/api/credit-cards/${id}`,
        method: "PUT",
        body: data,
      }),
      invalidatesTags: ["getCreditCards", "getCreditCard", "getDashboardInfo"],
    }),
    deleteCreditCard: builder.mutation({
      query: (id) => ({
        url: `/api/credit-cards/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["getCreditCards", "getDashboardInfo"],
    }),
  }),
});

export const {
  useGetCasesQuery,
  useCreateCaseMutation,
  useUploadCreditCardInfoMutation,
  useUpdateCreditCardMutation,
  useDeleteCreditCardMutation,
} = serviceApi;

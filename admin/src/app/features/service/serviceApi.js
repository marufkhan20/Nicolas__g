import { apiSlice } from "../api/apiSlice";

export const serviceApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getServices: builder.query({
      query: () => `/api/services`,
      providesTags: ["getServices"],
    }),
    getService: builder.query({
      query: (id) => `/api//${id}`,
      providesTags: ["getCreditCard"],
    }),
    createService: builder.mutation({
      query: (data) => ({
        url: `/api/services`,
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["getServices"],
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
  useGetServicesQuery,
  useCreateServiceMutation,
  useUploadCreditCardInfoMutation,
  useUpdateCreditCardMutation,
  useDeleteCreditCardMutation,
} = serviceApi;

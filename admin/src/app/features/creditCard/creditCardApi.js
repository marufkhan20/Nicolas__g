import { apiSlice } from "../api/apiSlice";

export const creditCardApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getCreditCards: builder.query({
      query: () => `/api/credit-cards/by-user-id`,
      providesTags: ["getCreditCards"],
    }),
    getCreditCard: builder.query({
      query: (id) => `/api/credit-cards/${id}`,
      providesTags: ["getCreditCard"],
    }),
    createCreditCard: builder.mutation({
      query: (data) => ({
        url: `/api/credit-cards`,
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["getCreditCards", "getCampaigns", "getDashboardInfo"],
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
  useGetCreditCardsQuery,
  useGetCreditCardQuery,
  useCreateCreditCardMutation,
  useUploadCreditCardInfoMutation,
  useUpdateCreditCardMutation,
  useDeleteCreditCardMutation,
} = creditCardApi;

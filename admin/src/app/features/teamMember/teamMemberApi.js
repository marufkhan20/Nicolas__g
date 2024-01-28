import { apiSlice } from "../api/apiSlice";

export const teamMemberApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getTeamMembers: builder.query({
      query: () => `/api/team-members`,
      providesTags: ["getTeamMembers"],
    }),
    getTeamMember: builder.query({
      query: (id) => `/api//${id}`,
      providesTags: ["getCreditCard"],
    }),
    createTeamMember: builder.mutation({
      query: (data) => ({
        url: `/api/team-members`,
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
  useGetTeamMembersQuery,
  useCreateTeamMemberMutation,
  useUploadCreditCardInfoMutation,
  useUpdateCreditCardMutation,
  useDeleteCreditCardMutation,
} = teamMemberApi;

import { apiSlice } from "../api/apiSlice";

export const campaignApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getCampaigns: builder.query({
      query: (type) => `/api/campaigns/${type}`,
      providesTags: ["getCampaigns"],
    }),
    getCampaign: builder.query({
      query: (id) => `/api/campaigns/single-campaign/${id}`,
    }),
    sendMail: builder.mutation({
      query: (data) => ({
        url: `/api/campaigns/send-mail`,
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["getDashboardInfo"],
    }),
  }),
});

export const {
  useGetCampaignsQuery,
  useGetCampaignQuery,
  useSendMailMutation,
} = campaignApi;

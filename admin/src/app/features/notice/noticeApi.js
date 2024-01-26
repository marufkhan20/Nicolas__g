import { apiSlice } from "../api/apiSlice";

export const noticeApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getNotices: builder.query({
      query: () => `/api/notices/by-user-id`,
      providesTags: ["getNotices"],
    }),
    getNotice: builder.query({
      query: (id) => `/api/notices/${id}`,
      providesTags: ["getNotice"],
    }),
    createNotice: builder.mutation({
      query: (data) => ({
        url: `/api/notices`,
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["getNotices", "getCampaigns", "getDashboardInfo"],
    }),
    uploadNoticeInfo: builder.mutation({
      query: (data) => ({
        url: `/api/notices/upload-notice-info`,
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["getNotices", "getCampaigns", "getDashboardInfo"],
    }),
    updateNotice: builder.mutation({
      query: ({ id, data }) => ({
        url: `/api/notices/${id}`,
        method: "PUT",
        body: data,
      }),
      invalidatesTags: ["getNotices", "getNotice", "getDashboardInfo"],
    }),
    deleteNotice: builder.mutation({
      query: (id) => ({
        url: `/api/notices/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["getNotices", "getDashboardInfo"],
    }),
  }),
});

export const {
  useGetNoticesQuery,
  useGetNoticeQuery,
  useCreateNoticeMutation,
  useUploadNoticeInfoMutation,
  useUpdateNoticeMutation,
  useDeleteNoticeMutation,
} = noticeApi;

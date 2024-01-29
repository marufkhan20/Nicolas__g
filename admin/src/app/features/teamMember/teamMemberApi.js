import { apiSlice } from "../api/apiSlice";

export const teamMemberApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getTeamMembers: builder.query({
      query: () => `/api/team-members`,
      providesTags: ["getTeamMembers"],
    }),
    getTeamMember: builder.query({
      query: (id) => `/api/team-members/${id}`,
      providesTags: ["getTeamMember"],
    }),
    createTeamMember: builder.mutation({
      query: (data) => ({
        url: `/api/team-members`,
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["getTeamMembers", "getDashboardInfo"],
    }),
    updateTeamMember: builder.mutation({
      query: ({ id, data }) => ({
        url: `/api/team-members/${id}`,
        method: "PUT",
        body: data,
      }),
      invalidatesTags: ["getTeamMembers", "getTeamMember"],
    }),
    deleteTeamMember: builder.mutation({
      query: (id) => ({
        url: `/api/team-members/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["getTeamMembers", "getDashboardInfo"],
    }),
  }),
});

export const {
  useGetTeamMembersQuery,
  useGetTeamMemberQuery,
  useCreateTeamMemberMutation,
  useUpdateTeamMemberMutation,
  useDeleteTeamMemberMutation,
} = teamMemberApi;

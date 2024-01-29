import { apiSlice } from "../api/apiSlice";

export const serviceApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getServices: builder.query({
      query: () => `/api/services`,
      providesTags: ["getServices"],
    }),
    getService: builder.query({
      query: (id) => `/api/services/${id}`,
      providesTags: ["getService"],
    }),
    createService: builder.mutation({
      query: (data) => ({
        url: `/api/services`,
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["getServices", "getDashboardInfo"],
    }),
    updateService: builder.mutation({
      query: ({ id, data }) => ({
        url: `/api/services/${id}`,
        method: "PUT",
        body: data,
      }),
      invalidatesTags: ["getServices", "getService"],
    }),
    deleteService: builder.mutation({
      query: (id) => ({
        url: `/api/services/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["getServices", "getDashboardInfo"],
    }),
  }),
});

export const {
  useGetServicesQuery,
  useGetServiceQuery,
  useCreateServiceMutation,
  useUpdateServiceMutation,
  useDeleteServiceMutation,
} = serviceApi;

import { apiSlice } from "../api/apiSlice";
import { userLoggedIn } from "./authSlice";

export const authApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    register: builder.mutation({
      query: (data) => ({
        url: "/api/auth/register",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["getUsersManagers"],
    }),
    login: builder.mutation({
      query: (data) => ({
        url: "/api/auth/login",
        method: "POST",
        body: data,
      }),
      onQueryStarted: async (args, { queryFulfilled, dispatch }) => {
        try {
          const result = await queryFulfilled;

          // set data in localstorage
          localStorage.setItem(
            "auth",
            JSON.stringify({
              accessToken: result.data.token,
              user: result.data.user,
            })
          );

          // dispatch userLoggedIn action
          dispatch(
            userLoggedIn({
              accessToken: result.data.token,
              user: result.data.user,
            })
          );
        } catch (err) {
          // do nothing
          console.log(err);
        }
      },
    }),
    updateUser: builder.mutation({
      query: (data) => ({
        url: `/api/auth/update-user`,
        method: "PUT",
        body: data,
      }),
      onQueryStarted: async (args, { queryFulfilled, dispatch }) => {
        try {
          const result = await queryFulfilled;

          // get item
          let auth = localStorage.getItem("auth");
          auth = JSON.parse(auth);

          // // set data in localstorage
          localStorage.setItem(
            "auth",
            JSON.stringify({
              accessToken: auth?.accessToken,
              user: result?.data,
            })
          );

          // // dispatch userLoggedIn action
          dispatch(
            userLoggedIn({
              accessToken: auth?.accessToken,
              user: result?.data,
            })
          );
        } catch (err) {
          // do nothing
          console.log(err);
        }
      },
    }),
    forgotPassword: builder.mutation({
      query: (email) => ({
        url: "/api/auth/forgot-password",
        method: "POST",
        body: { email },
      }),
    }),
    resetPassword: builder.mutation({
      query: ({ token, password }) => ({
        url: `/api/auth/reset-password/${token}`,
        method: "PUT",
        body: {
          password,
        },
      }),
    }),
    updatePassword: builder.mutation({
      query: (password) => ({
        url: `/api/auth/update-password`,
        method: "PUT",
        body: {
          password,
        },
      }),
    }),
  }),
});

export const {
  useLoginMutation,
  useRegisterMutation,
  useUpdateUserMutation,
  useForgotPasswordMutation,
  useResetPasswordMutation,
  useUpdatePasswordMutation,
} = authApi;

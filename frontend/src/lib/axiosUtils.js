// axiosUtils.js

import axios from "axios";

// const baseURL = process.env.NEXT_APP_SERVER_URL; // replace with your API base URL
const baseURL = "https://nicolas-g-backend.vercel.app"; // replace with your API base URL

const axiosInstance = axios.create({
  baseURL,
  headers: {
    "Content-Type": "application/json",
    // Add any other headers you need
  },
});

const axiosRequest = async (url, data = null, params = null) => {
  try {
    const response = await axiosInstance({
      method: "get",
      url,
      data,
      params,
    });

    return response.data;
  } catch (error) {
    // Handle errors here
    console.error("Axios request error:", error);
    throw error; // Re-throw the error to handle it in the component
  }
};

export default axiosRequest;

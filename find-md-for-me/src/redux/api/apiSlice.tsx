import { GetLocalStorage } from "@/util/LocalStorage";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
const token = GetLocalStorage("findMdToken");
export const api = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://server.findamd4me.com/api",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }),
  endpoints: () => ({}),
});
export const baseUrl = "https://server.findamd4me.com";

// 159.65.14.5
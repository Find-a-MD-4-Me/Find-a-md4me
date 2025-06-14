import { api } from "../api/apiSlice";

const pagesApi = api.injectEndpoints({
  endpoints: (builder) => ({
    // about
    getAbout: builder.query({
      query: () => "/about",
    }),

    // terms
    getTerms: builder.query({
      query: () => "/terems",
    }),

    // privacy
    getPrivacy: builder.query({
      query: () => "/privacy",
    }),

    // Faq
    getFAQ: builder.query({
      query: () => "/faq",
    }),

    //  states covered
    getState: builder.query({
      query: () => "/show-covered",
    }),

    // pricing
    getPrice: builder.query({
      query: () => ({
        url: '/pricing',
      }),
    }),

    // custom tier btn (pricing page)
    PostCustomTier: builder.mutation({
      query: (value) => {
        return {
          url: "/trial",
          method: "POST",
          body: value,
        };
      },
    }),

    // contact
    postContact: builder.mutation({
      query: (value) => {
        return {
          url: "/contact",
          method: "POST",
          body: value,
        };
      },
    }),

    // Intake information (personal info)

    postPersonalInfo: builder.mutation({
      query: (value) => ({
        url: "/parsonal-info",
        method: "POST",
        body: value,
      }),
    }),

    // Intake information (business info)
    postBussinessInfo: builder.mutation({
      query: (value) => { 
      
        return {
          url: "/buisness-info", 
          method: "POST",
          body: value,
        };
      },
    }),

    // get tier
    getTier: builder.query({
      query: () => "/show-tiear-price",
    }),

    // IntakeSchedule
    postAppointmentSchedule: builder.mutation({
      query: (value) => {
        return {
          url: "/appoinment-info",
          method: "POST",
          body: value,
        };
      },
    }),
  }),
});
export const {
  useGetAboutQuery,
  useGetFAQQuery,
  useGetPrivacyQuery,
  useGetTermsQuery,
  useGetStateQuery,
  useGetPriceQuery,
  usePostCustomTierMutation,
  usePostContactMutation,
  usePostPersonalInfoMutation,
  usePostBussinessInfoMutation,
  useGetTierQuery,
  usePostAppointmentScheduleMutation,
} = pagesApi;

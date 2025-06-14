import { api } from "../api/apiSlice";

const dashboardApi = api.injectEndpoints({
  endpoints: (builder) => ({
    // document
    postDocument: builder.mutation({
      query: (value) => {
        return {
          url: "/upload-document",
          method: "POST",
          body: value,
        };
      },
    }), 

    getDocument:builder.query({
      query:()=>"/auth-user-document"
    }) ,

    // agreement
    postAgreement: builder.mutation({
      query: (value) => {
        return {
          url: "/update-aggriment",
          method: "POST",
          body: value,
        };
      },
    }), 

    // waiting For approval  
    getApproval: builder.query({
    query:()=>"/check-document-status"
    }) ,

    // appointment
    postAppointment: builder.mutation({
      query: (value) => ({
        url: "/update-document-appoinment",
        method: "POST",
        body: value,
      }),
    }),  

    // business resources  
   businessResources: builder.query({
    query:()=>"/client-tiear"
   }) ,

    // good faith exam
    getFaith: builder.query({
      query: () => "/faith",
    }),
    // EHR
    getEHR: builder.query({
      query: () => "/ehr",
    }),

    // get vendor in dropdown
    vendorData: builder.query({
      query: () => "/vendor",
    }),

    // post vendor confirm form
    postVendorForm: builder.mutation({
      query: (values) => {
        return {
          url: "/confirm-order",
          method: "POST",
          body: values,
        };
      },
    }),
    //  MY team

    // get team table data
    getTeam: builder.query({
      query: () => "/my-teame",
    }),

    // add team member
    createTeam: builder.mutation({
      query: (values) => {
        return {
          url: "/store-teme",
          method: "POST",
          body: values,
        };
      },
    }),

    // delete team member
    deleteTeam: builder.mutation({
      query: (id) => ({
        url: `/delete-teame/${id}`,
        method: "DELETE",
      }),
    }), 

    // QA  
    getQA:builder.query({
      query:()=>"/qa-client"
    }) ,

    // Billing 

 getBilling:builder.query({
  query:()=>"/get-billing"
 }) , 

    postBilling: builder.mutation({
      query: (value) => {
        return {
          url: "/billing-send-mail",
          method: "POST",
          body: value,
        };
      },
    }),
  }),
});

export const {
  usePostDocumentMutation,
  usePostAgreementMutation, 
  useGetApprovalQuery ,
  usePostAppointmentMutation,  
  useBusinessResourcesQuery ,
  useGetFaithQuery,
  useGetEHRQuery,
  useVendorDataQuery,
  usePostVendorFormMutation,
  useGetTeamQuery,
  useCreateTeamMutation,
  useDeleteTeamMutation,
  usePostBillingMutation,  
  useGetQAQuery , 
  useGetDocumentQuery , 
  useGetBillingQuery
} = dashboardApi;

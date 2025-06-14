"use client";
import { Button, ConfigProvider, DatePicker, Form, Input, Upload } from "antd";
import React, { useEffect, useState } from "react";
import { UploadOutlined } from "@ant-design/icons";

import DashboardTitle from "../shared/DashboardTitle";
import moment from "moment";
import { useGetBillingQuery, usePostBillingMutation } from "@/redux/apiSlices/ClientDashboardSlices";
import { useGetProfileQuery } from "@/redux/apiSlices/AuthSlices";
import Swal from "sweetalert2";  
import  "@/components/ClientDashboard/style.css"
import { useRouter } from "next/navigation";

const Billing = () => {
  const documents = [
    {
      title: "Onboarding Fee",
      value: "onoarding_fee",
    },
    {
      title: "Monthly/Annual ACH payments",
      value: "ach_payment",
    },
    {
      title: "Vendor Ordering",
      value: "vendor_ordering",
    },
  ];

  const [postBilling, { isSuccess, isError, error  , isLoading}] = usePostBillingMutation(); 
  const {data:documentData , isLoading:loading} = useGetBillingQuery(undefined)
  const [document, setDocument] = useState<{ [key: string]: File }>({});  

//  console.log(documentData);

  
//   useEffect(() => {
//     if (documentData?.status === 200 && documentData.billings) {
//       const initialDocuments: { [key: string]: File | null } = {};
      
//       documents.forEach((doc) => {
//         const billingItem = documentData.billings.find((billing:any) => billing[doc.value]); 
//   console.log(billingItem[doc.value]);
//         if (billingItem) {
//           const filePath = billingItem[doc.value];
//           const fileName = filePath?.split("/").pop(); // Extract file name from the path
  
//           if (fileName) {

//             initialDocuments[doc.value] = new File([], fileName);
//           }
//         }
//       });
  
//       // @ts-ignore
//       setDocument(initialDocuments);
//     }
//   }, [documentData]);


  const onFinish = async (values: any) => {
    const formData = new FormData();


    Object.entries(document).forEach(([key, value]) => {
      formData.append(key, value);
    });          

    await postBilling(formData).then((response) => { 
    // console.log(response);
     if (response?.data?.status === 200) {
        Swal.fire({
          text: response?.data?.message || "Your file uploaded successfully",
          icon: "success",
     
        })
      } else {
        Swal.fire({ 
          // @ts-ignore
          text: response?.error?.data?.message || "An error occurred",
          icon: "error",
          timer: 1500,
        });
      }
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setDocument((prev: any) => ({
        ...prev, 
        //@ts-ignore
        [e.target.name]: e?.target?.files[0],
      }));
    }
  }; 

  if(loading){
    return  <p>Loading...</p>
  }

  return (
    <div>
      {/* todo : date add hobe  */}
      <div className=" w-full ">
        <div className=" grid lg:grid-cols-12  gap-5 h-screen">
          <div className=" lg:col-span-8 lg:p-10 p-6">
            <div className=" flex items-center justify-between">
              <DashboardTitle> Upload Your Receipts </DashboardTitle>
            </div>

            <div className="mt-4">
  <Form className="w-full mt-4" onFinish={onFinish} layout="vertical">
    <div className="w-full gap-20">
      <div>
        {documents?.map((data: any, index: number) => (
          <div key={index} className=" mb-6">
            {/* Moved the label outside Form.Item */}
            <p className="text-[16px] text-[#737373] font-semibold flex items-center gap-1">
              <span>{index + 1}</span>. <span>{data?.title}</span>
            </p>

            <Form.Item
              name={data?.value}
              className=""
            >

<Input
             name={data?.value}
                type="file"
                id={data?.value}
                onChange={handleChange}
                style={{ display: "none" ,  }}
              />

            </Form.Item>

            <label
              htmlFor={data?.value}
              className="flex items-center w-full gap-2 bg-[#E8F6FE] py-3 px-2 rounded-lg"
            >
              <span className="h-[30px] w-[30px] bg-white rounded-full text-center text-xl text-[#737373]">
                <UploadOutlined />
              </span>
              <span className="text-[16px] font-medium text-[#737373]">
                {document[data.value]?.name ? (
                  <p className="text-[#1d75f2]">{document[data.value].name}</p>
                ) : (
                  <p>Click to upload</p>
                )}
              </span>
            </label>
          </div>
        ))}
      </div>
    </div>

{/* dghkfdgj */}

    <div className="text-end">
      <button
        type="submit"
        style={{
          height: 45,
          width: 150,
          backgroundColor: "#c738bd",
          borderRadius: 8,
          color: "white",
          fontWeight: 500,
        }}
      >
        {isLoading ? <p style={{ cursor: "wait" }}>loading..</p> : "Submit"}
      </button>
    </div>
  </Form>
</div>
          </div>
        </div>
      </div>

    </div>
  );
};

export default Billing;

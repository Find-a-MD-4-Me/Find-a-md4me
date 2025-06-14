"use client";
import { Button, Form, Input, Upload } from "antd";
import React, { useEffect, useMemo, useState } from "react";
import {  UploadOutlined } from "@ant-design/icons";
import DashboardTitle from "../shared/DashboardTitle";
import {
  useGetDocumentQuery,
  usePostAgreementMutation,
} from "@/redux/apiSlices/ClientDashboardSlices";
import Swal from "sweetalert2"; 
import  "@/components/ClientDashboard/style.css"

const AgreeMents = ({current ,setCurrent}:any) => {
  const documents = useMemo(() => [
    {
      title:
        "MANAGEMENT SERVICE AGREEMENT/collaborative practice agreement + Joint Protocol",
      value: "management_service_aggriment",
    },
    {
      title: "None disclosure agreement",
      value: "nda",
    },
    {
      title: "DELEGATION AGREEMENT",
      value: "deligation_aggriment",
    },
    {
      title: "ACH AUTHORIZATION AGREEMENT",
      value: "ach_fomr",
    },
    {
      title: "MEMBERSHIP CONTRACT",
      value: "member_ship_contact",
    },
  ], []);

  const [document, setDocument] = useState<{ [key: string]: File }>({});
  const [postAgreement] = usePostAgreementMutation(); 
  const {data:documentData , isLoading} =  useGetDocumentQuery(undefined) 
  // console.log(documentData); 
  const uploadId = localStorage.getItem("upload_id") 
  // console.log(uploadId); 
  // console.log(document); 

  useEffect(() => {
    if (documentData?.status === 200 && documentData.data) {
      const initialDocuments: { [key: string]: File | null } = {};
      documents.forEach((doc) => {
        const fileName = documentData.data[doc.value]?.split("/").pop();
        if (fileName) {
          initialDocuments[doc.value] = new File([], fileName);
        }
      }); 
      // @ts-ignore
      setDocument(initialDocuments);
    }
  }, [documentData , documents]); 

  const onFinish = async (values: any) => {
    const formdata = new FormData();
    // @ts-ignore
    formdata.append("id", uploadId);
    Object.entries(document).forEach(([key, value]) => {
      formdata.append(key, value);
    }); 
 
    try {
      const response = await postAgreement(formdata); 
  // console.log(response); 
      if (response?.data?.status === 200) {
        const nextStep = current + 1;
        setCurrent(nextStep);
  
        const params = new URLSearchParams(window.location.search);
        params.set("step", nextStep.toString());
        window.history.pushState(null, "", `?${params.toString()}`);
      } else {
        Swal.fire({ 
          // @ts-ignore
          text: response?.error?.data?.message || "An error occurred",
          icon: "error",
          timer: 1500,
        });
      }
    } catch (error) {
      Swal.fire({
        text: "An unexpected error occurred",
        icon: "error",
        timer: 1500,
      });
    }
 
 };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setDocument((prev: any) => ({
        ...prev,
        // @ts-ignore
        [e.target.name]: e?.target?.files[0],
      }));
    }
  }; 

  if(isLoading){
    return <p> Loading..</p>
  } 

  return (
    <div className=" w-full ">
      <div className="">
        <div className=" lg:p-10 lg:pt-0 p-6 ">
          <DashboardTitle>Upload Agreements</DashboardTitle>

          <div className="mt-4">
  <Form className="w-full lg:w-[60%] mt-4" onFinish={onFinish} layout="vertical">
    {documents?.map((data: any, index: number) => (
      <div key={index} className=" mb-6">
        {/* Label moved outside Form.Item */}
        <p className="text-[16px] text-[#737373] font-semibold flex items-center gap-1">
          <span>{index + 1}</span>.<span className="uppercase">{data?.title}</span>
        </p>

        <Form.Item
          name={data?.value}
          valuePropName="file"
          className=""
  
        >
        
          <Input
            name={data?.value}
            type="file"
            id={data?.value}
            onChange={handleChange}
            style={{ display: "none" }}
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

    <Form.Item className="text-end">
      <Button type="primary" htmlType="submit" style={{ height: "45px", width: "120px", fontSize: "20px" }}>
        Next
      </Button>
    </Form.Item>
  </Form>
</div>

        </div>
      </div>
    </div>
  );
};

export default AgreeMents;

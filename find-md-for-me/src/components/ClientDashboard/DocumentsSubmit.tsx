"use client"
import React, { useEffect } from "react";
import Title from "../shared/Title";
import SubTitle from "../shared/SubTitle";
import { Button } from "antd";
import { useGetApprovalQuery } from "@/redux/apiSlices/ClientDashboardSlices";

const DocumentsSubmit = ({current ,setCurrent , setIsNextDisabled}:any) => {  
  const {data , isLoading} = useGetApprovalQuery(null) 
  // console.log(data); 

  useEffect(() => {
    if (data === undefined) {
      setIsNextDisabled(true);
    } else {
      setIsNextDisabled(false);
    }
  }, [data, setIsNextDisabled]);


  const handleSubmit =()=>{
if (data === undefined) {
   return alert("Waiting for admin approval")
}else{
  const nextStep = current + 1;
        setCurrent(nextStep);
  
        const params = new URLSearchParams(window.location.search);
        params.set("step", nextStep.toString());
        window.history.pushState(null, "", `?${params.toString()}`);

}
  } 

  if(isLoading){
    return <p>Loading..</p>
  }
  return (
    <div className="lg:mb-32">
      <div className=" lg:w-[740px]  mx-auto mt-24 tracking-wide "> 
        <div className=" lg:w-[600px] flex items-center justify-center mx-auto">
        <Title> Thank you for submitting your documents.</Title>
        </div>
      

        <SubTitle className="tracking-wider  flex items-center justify-center ">
          {" "}
          Please allow 5-7 Business days for our team to review and verify the
          documents submitted. If, any additional questions or information is
          needed during this time we will email you. Once we have verified your
          documents you will receive a welcome email where you can log into your
          client portal and schedule your Introduction meeting.{" "}
        </SubTitle>  

        <div className="text-center lg:mt-16 mt-4" onClick={()=>handleSubmit()}> 
        <Button type="primary" htmlType="submit" style={{height:"45px" , width:"120px" , fontSize:"20px"}}>
                  {" "}
                  Next
                </Button>
        </div>

      </div>
    </div>
  );
};

export default DocumentsSubmit;

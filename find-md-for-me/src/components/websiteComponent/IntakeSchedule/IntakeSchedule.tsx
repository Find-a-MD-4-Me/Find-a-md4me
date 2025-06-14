"use client";
import SubTitle from "@/components/shared/SubTitle";
import Title from "@/components/shared/Title";
import { Button } from "@/components/ui/button";
import { useRouter } from 'next/navigation'
import React, { useEffect, useState } from "react";

const IntakeSchedule = () => {
  const router = useRouter(); 
  const handleSubmit = async () => {
        router.push("/intake-submitting");
  }; 

  useEffect(() => {
    // Load the Acuity embed script
    const script = document.createElement('script');
    script.src = "https://embed.acuityscheduling.com/js/embed.js";
    script.async = true;
    script.type = "text/javascript";
    document.body.appendChild(script);

    // Cleanup script on component unmount
    return () => {
      document.body.removeChild(script);
    };
  }, []); 


  return (
    <div className="container">
      <div>
        <Title>Schedule Your Appointment </Title>
        <p className="text-[#737373] text-[19px]  text-center mx-auto mb-5 ">
          {" "}
          Thank you for visiting{" "}
          <span className="text-[#1D75F2]"> Find a MD 4 Me </span> . We look
          forward to connecting with you for your business!
        </p>

        <SubTitle className=" ">
          {" "}
          Please select the best date + time to schedule your introduction
          meeting!
        </SubTitle>
        <p className=" text-[#C738BD]  text-[16px] text-center ">
          {" "}
          Please Provide Your Business Information.{" "}
        </p>
      </div>

      <div className="lg:flex w-full flex-col lg:flex-row pt-4">
  <div className="h-[100%] w-[97%] ">
    <iframe
      src="https://app.acuityscheduling.com/schedule.php?owner=32379568&calendarID=10185676&ref=embedded_csp"
      title="Schedule Appointment"
      height="100%"
      width="100%"
      frameBorder="0"
    ></iframe>
  </div>

  <div className="lg:flex lg:items-center lg:justify-center text-center mt-8  lg:mt-8 mb-5 lg:mb-0  ">
    <button  className=" w-[120px] h-[43px] px-2 rounded-lg text-white bg-[#C738BD]" onClick={handleSubmit}>
      Submit
    </button>
  </div>
</div>
    </div>
  );
};

export default IntakeSchedule;

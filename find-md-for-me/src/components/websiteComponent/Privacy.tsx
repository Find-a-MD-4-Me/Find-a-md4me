"use client";
import { useGetPrivacyQuery } from "@/redux/apiSlices/WebPagesSlices";
import React, { useEffect } from "react"; 
import AOS from "aos" ;
import "aos/dist/aos.css";

const Privacy = () => {
  const { data } = useGetPrivacyQuery(undefined); 

  useEffect(()=>{
    AOS.init({})
  },[])

  return (
    <div className=" container  lg:my-12 my-6"  data-aos="fade-down"
    data-aos-easing="linear"  data-aos-duration="500">
      <h1 className=" text-[#C738BD] text-2xl mb-3">Privacy & Policy</h1>

      <div>
        <div
          className=" text-[16px] text-black pb-3  tracking-wide "
          dangerouslySetInnerHTML={{ __html: data?.data?.description }}
        ></div>
      </div>
    </div>
  );
};

export default Privacy;

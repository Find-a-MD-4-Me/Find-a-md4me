"use client";
import React, { useEffect } from "react";
// import mapImg from "@/assests/map.png"; 
// import Image from "next/image";  
import AOS from "aos" ;
import "aos/dist/aos.css";
import Title from "@/components/shared/Title";
import { useGetStateQuery } from "@/redux/apiSlices/WebPagesSlices";

const Counties = () => {
  const { data } = useGetStateQuery(undefined);   


  useEffect(()=>{
    AOS.init({})
  },[])

  return (
    <div className="lg:container">
      <div className=" text-center" data-aos="fade-down"
    data-aos-easing="linear"  data-aos-duration="500">
        <Title> States We Cover </Title>

        <div className=" flex justify-center items-center mb-10">
          <p className=" text-[#737373] lg:text-[20px] text-[16px] lg:w-[700px]">
            {" "}
            Below you will find the states where we are able to provide MD
            oversight. New states will be provided, continue to come and check
            here.
          </p>
        </div>
      </div>

      <div className="  " data-aos="fade-up"
    data-aos-easing="linear"  data-aos-duration="500">
        <div className="flex  flex-wrap  lg:gap-9 gap-2 mb-10 ">
          {data?.map((value: any, index: number) => (
            <div key={index} className="lg:mx-auto">
              <p className=" text-[#737373] lg:text-[20px] text-[16px] text-center ">
                {value?.state_name}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* <div className=" flex justify-center items-center my-16" >
        <Image
          src={mapImg}
          width={800}
          height={300}
          alt=" "
          style={{ width: "100%", height: "auto" }}
        />
      </div> */}
    </div>
  );
};

export default Counties;

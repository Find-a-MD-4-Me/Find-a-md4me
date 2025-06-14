"use client"
import React, { useEffect } from "react"; 
import AOS from "aos" ;
import "aos/dist/aos.css";

const OversightPricing = () => { 
  useEffect(()=>{
    AOS.init()
  },[])
  return (
    <div data-aos="fade-down"
    data-aos-easing="linear"  data-aos-duration="500">
      <h1 className=" text-[#C738BD]  text-[32px]  py-4">
        {" "}
        Oversight Pricing For Individuals and Businesses
      </h1>

      <p className="text-[20px]">
        {" "}
        I- <span className="font-semibold"> Individuals: </span> One person/One Med
        Spa
      </p>
      <p className="text-[20px] pt-1 pb-3">
        {" "}
        B- <span className="font-semibold"> Business: </span> Owner (Business) &
        up to two staff members (within scope at the same location)
      </p>

      <p className=" text-[20px] pb-3">
        {" "}
        There is a one time onboarding fee of{" "}
        <span className=" text-[#C738BD]"> $2,000 </span> for individuals or{" "}
        <span className=" text-[#C738BD]"> $3,500 </span> for businesses.{" "}
      </p>
    </div>
  );
};

export default OversightPricing;

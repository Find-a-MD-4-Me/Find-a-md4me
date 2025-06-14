"use client";
import { useGetStateQuery } from "@/redux/apiSlices/WebPagesSlices"; 
import CountUp from 'react-countup';
import React from "react";

const TotalCustomer = () => {
  const { data } = useGetStateQuery(undefined);
  const stateData = data;
  const stateDataLength = stateData?.length; 


  const values = [
    {
      total: "853",
      title: "Happy Customers",
    },
    {
      total: "150000",
      title: "Monthly Visitors",
    },
    {
      total: stateDataLength,
      title: "States",
    },
    {
      total: 6,
      title: "Top Partners",
    },
  ];
  return (
    <div className="lg:container my-16">
      <div className="lg:flex justify-between items-center ">
        {values?.map((value, index) => (
          <div key={index} className="text-center  mb-6 lg:mb-1">
            <p className=" lg:text-5xl text-3xl font-bold text-[#C738BD] mb-3">
              {" "} 
              <CountUp start={0} end={value?.total} delay={0}  duration={4}
                formattingFn={(value) => {
    if (value >= 1000) {
      const formattedValue = (value / 1000).toFixed(1);
      return formattedValue.endsWith('.0') ? formattedValue.slice(0, -2) + 'k' : formattedValue + 'k';
    }
    return value.toString();
  }}/>
              
            </p>
            <p className="text-black  font-semibold"> {value?.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TotalCustomer;

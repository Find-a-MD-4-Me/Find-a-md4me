"use client";
import React from "react";
import DashboardTitle from "../shared/DashboardTitle";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../ui/accordion";
import { useGetEHRQuery } from "@/redux/apiSlices/ClientDashboardSlices";

const EHR = () => {
  const { data , isLoading  } = useGetEHRQuery(undefined); 

   if(isLoading){
    return <p>Loading..</p>
   } 
   
  return (
    <div className=" lg:p-10 p-4">
      <DashboardTitle> EHR</DashboardTitle>

      <div className="lg:mx-10 mx-3 lg:my-10 my-5">
        <div className="  lg:mx-auto  lg:px-10 px-5 bg-[#FDFDFD] py-5">
          <div>
            {data?.data?.map((value: any, index: number) => (
              <Accordion
                key={index}
                type="single"
                collapsible
                className="lg:mb-10 mb-5"
              >
                <AccordionItem
                  value={`item-${index}`}
                  className="bg-[#F9F9F9] text-[#818181]"
                >
                  <AccordionTrigger>{value?.question}</AccordionTrigger>

                  <AccordionContent>{value?.answare}</AccordionContent>
                </AccordionItem>
              </Accordion>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default EHR;

"use client";
import Title from "@/components/shared/Title";
import Link from "next/link";
import React, { useEffect } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useGetFAQQuery } from "@/redux/apiSlices/WebPagesSlices"; 
import AOS from "aos" ;
import "aos/dist/aos.css";

const FAQ = () => {
  const { data } = useGetFAQQuery(undefined); 

    useEffect(()=>{ 
AOS.init()
    },[])


  return (
    <div className="mb-10   "> 
    <div  data-aos="fade-down"
    data-aos-easing="linear"  data-aos-duration="500">
      <Title>FREQUENTLY ASKED QUESTIONS</Title>
      <div className=" mb-10">
        <p className=" text-[#737373] text-[20px] lg:w-[700px] text-center mx-auto">
          Please reach us{" "}
          <Link
            href="/contact"
            className=" underline font-semibold text-[#1D75F2]"
          >
            {" "}
            here
          </Link>{" "}
          if you cannot find an answer
        </p>
      </div>
    </div>

      <div className=" lg:w-[900px] mx-auto  " data-aos="fade-up"
    data-aos-easing="linear"  data-aos-duration="500">
        <div>
          {data?.data?.map((value: any, index: number) => (
            <Accordion key={index} type="single" collapsible className="mb-10">
              <AccordionItem
                value={`item-${index}`}
                className="data-[state=open]:border-2 data-[state=open]:border-[#1D75F2]"
              >
                <AccordionTrigger>{value?.question}</AccordionTrigger>
                <AccordionContent>{value?.answare}</AccordionContent>
              </AccordionItem>
            </Accordion>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQ;

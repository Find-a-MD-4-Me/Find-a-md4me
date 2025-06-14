"use client";
import Image from "next/image";
import React, { useEffect } from "react"; 
import AOS from "aos" ;
import "aos/dist/aos.css";
import person1 from "@/assests/person1.png";
import person2 from "@/assests/person2.png";
import { useGetAboutQuery } from "@/redux/apiSlices/WebPagesSlices";

const About = () => {
  const { data } = useGetAboutQuery(undefined);  

  useEffect(()=>{
    AOS.init()
  },[])
  // console.log(data);  
  // fghdsghlkdfgh
  const personInfo = [
    {
      image: <Image src={person1} width={250} height={100} alt="" />,
      title: " CEO and Healthcare Administrator",
      name: " Lamesha Davis BSN, MHA",
    },
    {
      image: <Image src={person2} width={250} height={100} alt="" />,
      title: " Office Manager",
      name: " Venessa L.",
    },
  ];
  return (
    <div className=" container  lg:my-12 my-6"     data-aos="fade-down"
    data-aos-easing="linear"  data-aos-duration="500"
  >
      <h1 className=" text-[#C738BD] text-2xl mb-3">
        {" "}
        <span className=" font-semibold "> Our Journey: </span> Empowering
        Aesthetic and Healthcare Providers for Success
      </h1>

      <div
          className=" text-[16px] text-black pb-2  tracking-wide "
          dangerouslySetInnerHTML={{ __html: data?.data?.description }}
      
        />

      <div className="">
        <h1 className=" text-[#C738BD] text-3xl font-bold tracking-wide text-center py-3">
          {" "}
          Meet the Team
        </h1> 
        
        <div className=" lg:flex flex-wrap items-center justify-center  mx-auto  gap-12 ">
          {personInfo?.map((data, index) => (
            <div key={index} className="">
              <p> {data.image}</p>
              <p className="font-semibold text-lg pt-2"> {data?.title}</p>
              <p> {data?.name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;

"use client";
import Image from "next/image";
import React, { useEffect } from "react";  
import AOS from "aos" ;
import "aos/dist/aos.css";
import img1 from "../../../assests/circle1.png";
import img2 from "@/assests/circle2.png";
import img3 from "@/assests/circle3.png";

const BannerCard = () => { 

  useEffect(()=>{
    AOS.init({})
  },[])
  const values = [
    {
      title: "Collaboration",
      detail:
        "Are you a Nurse, Nurse Practitioner, Physician Assistant, Esthetician or Entrepreneur looking to open your own business and need to connect with a Medical Director?",
      image: <Image src={img1} width={60} height={30} alt="" />,
    },
    {
      title: "Clearance",
      detail:
        "Do you have a upcoming cosmetic surgery and need to connect with healthcare providers in your area to obtain a clearance?",
      image: <Image src={img2} width={60} height={30} alt="" />,
    },
    {
      title: "Good Faith Exams",
      detail:"Are you looking for a mid-level provider who is knowledgable and can assist you with providing GFE to your existing clients?" ,
      image: <Image src={img3} width={60} height={30} alt="" />,
    },
  ];
  return (
    <div className="lg:container">
      <div className=" flex lg:flex-row flex-col justify-between items-center gap-8 " data-aos="fade-up" data-aos-duration="1000">
        {values?.map((value, index) => (
          <div
            key={index}
            className=" p-5 px-8 rounded-lg lg:leading-loose shadow-xl lg:w-[420px] lg:h-[370px]  h-full  bg-white  lg:mb-1 mb-8 "
          >
            <p className=" mb-3"> {value?.image}</p>
            <p className=" text-[#C738BD] text-[16px] font-semibold mb-3">
              {" "}
              {value?.title}
            </p>
            <p className="border w-14 border-[#1D75F2] mb-3"></p>
            <p className=" text-[#737373] text-[16px]"> {value?.detail}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BannerCard;

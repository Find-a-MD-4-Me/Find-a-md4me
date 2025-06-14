"use client";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import React, { useEffect } from "react"; 
import AOS from "aos" ;
import "aos/dist/aos.css";
import bannerImg from "@/assests/bannerImg.png";
import Link from "next/link";

const Banner = () => { 
  useEffect(()=>{
    AOS.init({}) 
    AOS.refreshHard()
  },[])
  return (
    <div className="bg-[#FAFAFA]">
      <div className=" pt-4 lg:pt-0 mb-5  lg:container" >
        <div className=" lg:h-[100%] ">
          <div className=" grid lg:grid-cols-2 grid-cols-1 items-center ">
            <div className="ps-5 lg:mb-28" data-aos="fade-down"
    data-aos-easing="linear" data-aos-duration="1000">
              <h1 className=" text-[#1D75F2] lg:text-[56px] text-[28px]  font-bold mb-5 ">
                {" "}   
                Find a MD 4 Me
              </h1>
              <p className="text-[#737373] lg:text-[32px] text-[18px]  mb-5 lg:w-[80%] tracking-wide">
                {" "}
                Start today with connecting with MDs in your area
              </p>

              <div className=" flex gap-4 " >
                <Link href="/intake">
                  {" "}
                  <button className=" h-[48px]  px-3 rounded border  border-[#1D75F2] bg-[#1D75F2] text-white hover:text-[#1D75F2] hover:bg-transparent ">Get Started Now</button>{" "}
                </Link>
                <Link href="/about">
                  <Button variant="default">Learn More</Button>
                </Link>
              </div>
            </div>

            <div className="mt-8 lg:mt-0 p-2 lg:pt-1">
              <Image
                src={bannerImg}
                width={1000}
                height={200}
                alt=""
                style={{ width: "100%" }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;

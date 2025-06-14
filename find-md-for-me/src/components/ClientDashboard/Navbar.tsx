"use client"
import Image from "next/image";
import Link from "next/link";
import React from "react";
import person from "@/assests/person.png";
import { useGetProfileImageQuery, useGetProfileQuery } from "@/redux/apiSlices/AuthSlices";
import { baseUrl } from "@/redux/api/apiSlice";

const Navbar = () => { 
  const { data } = useGetProfileQuery(undefined); 
  const user = data?.user 
  const {data:profileImage} = useGetProfileImageQuery(undefined) 
  // console.log(user); 
  return (
    <div
      className=" "
      style={{
        padding: 0,
        display: "flex",
        justifyContent: "space-between",
        paddingRight: "60px",
        paddingLeft: "270px",
        alignItems: "center",
      }}
    >
      <div></div>
      <Link href="/profile">
        <div className=" flex items-center  ">
          <Image
            src={profileImage? 
  profileImage?.profile_image.startsWith('http')
  ? profileImage?.profile_image
  : `${baseUrl}/${profileImage?.profile_image}`
              :person} 
              alt=""
              height={60}
              width={50}
            style={{
              borderRadius: "100%", 
              border:"2px solid  #1D75F2" , 
              height:"50px" ,
              width:"50px"
            }}
          
          />
          <div>
            <p className="p-3 h-3 font-bold text-[#1D75F2]">{`${user?.first_name} ${user?.last_name}`} </p>
            <p className="p-3 text-[14px] font-semibold"> {user?.user_type} </p>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default Navbar;

"use client";
import React, { useEffect, useState } from "react";
import ChangePassword from "./ChangePassword";
import UserProfile from "./UserProfile";  
import { AiFillEdit } from "react-icons/ai";

import { Tabs } from "antd";
import { useGetProfileQuery } from "@/redux/apiSlices/AuthSlices";
import { FaUserEdit } from "react-icons/fa";
import { useRouter } from "next/navigation";

const Profile = () => { 
  const { data , refetch } = useGetProfileQuery(undefined);
  const router = useRouter()
  const onChange = (key: any) => {
    // console.log(key); 
  };  

  const handleEdit =()=>{
   
    router.push("/edit-profile") 
    // setIsEdit(true)  
  }

  useEffect(()=>{
    refetch()
  },[data , refetch])

  const items = [
    {
      key: "1",
      label: "Edit Profile",
      children: <UserProfile />,
    },
    {
      key: "2",
      label: "Change Password ",
      children: <ChangePassword    />,
    },
  ];
  return (
    <div className=" lg:p-10 p-4">
     
     <p className=" text-[#718EBF]  lg:text-[17px] text-[13px] pb-1 "> IT IS CRITICAL THAT YOU NOTIFY FIND A MD 4 ME IF  ANY OF THE FOLLOWING:</p> 
          <p className=" text-[#718EBF]  lg:text-[17px] text-[13px] pb-1 ">- CHANGE YOUR PERSONAL OR BUSINESS ADDRESS </p>
           <p className=" text-[#718EBF]  lg:text-[17px] text-[13px] pb-1 "> - CHANGE YOUR BUSINESS NAME</p> 
          <p className=" text-[#718EBF]  lg:text-[17px] text-[13px] pb-1 ">- CHANGE YOUR EMAIL ADDRESS</p>
          <p className=" text-[#718EBF]  lg:text-[17px] text-[13px] pb-1 ">- CHANGE YOUR PHONE NUMBER</p>
          <p className=" text-[#718EBF]  lg:text-[17px] text-[13px] pb-1 ">- CHANGE YOUR NAME</p> 
          <p className=" text-[#718EBF]  lg:text-[17px] text-[13px] pb-1 ">- CHANGE YOUR BANK ACCOUNT / CREDIT CARD KEPT ON FILE</p>  
        <p className=" text-[#718EBF]  lg:text-[17px] text-[13px] pb-1 "> - CHANGE IN STAFF IF YOU HAVE A BUSINESS ACCOUNT</p>
        <p className=" text-[#718EBF]  lg:text-[17px] text-[13px] pb-1 ">IN SOME CASES (IE: BUSINESS NAME CHANGE), WE WILL NEED TO SEND YOU AN AGREEMENT ADDENDUM TO REVIEW, SIGN + SUBMIT. THESE UPDATED DOCUMENTS WILL BE ADDED TO YOUR CLIENT PORTAL. </p>
        <p className=" text-[#718EBF]  lg:text-[17px] text-[13px] pb-1 ">NOTE: WHEN REVIEWING YOUR AGREEMENTS, EHR PLATFORM DASHBOARD + DOCUMENTS, PLEASE REVIEW YOUR SERVICES AND ALL CONTACT INFORMATION TO MAKE SURE THEY ARE CORRECT</p>

      <div>
        <div
          style={{ marginBottom: "16px" }}
          className=" mt-5 bg-white rounded-xl "
        > 
        <div className=" flex w-full gap-3">
          <Tabs defaultActiveKey="1" items={items} onChange={onChange} className="w-4/5"/> 
          <div className="border-2 h-[45px] mt-4 rounded-full border-[#C738BD]  " onClick={handleEdit}>
       <p className="text-[#C738BD]  p-2  text-2xl font-bold text-end "> <FaUserEdit /></p>
          </div>
        </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
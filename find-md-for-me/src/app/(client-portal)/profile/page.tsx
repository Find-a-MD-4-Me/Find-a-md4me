
import dynamic from "next/dynamic";
import React from "react";

const  Profile = dynamic(()=>import("@/components/ClientDashboard/Profile/Profile"),{ssr:false , loading:()=><h2>loading....</h2>})
const page = () => {
  return (
    <div>
      <Profile />
    </div>
  );
};

export default page;

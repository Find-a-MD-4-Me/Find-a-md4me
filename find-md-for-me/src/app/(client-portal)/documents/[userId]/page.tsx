
import dynamic from "next/dynamic";
import React from "react";

const  Documents = dynamic(()=>import("@/components/ClientDashboard/Documents"),{ssr:false , loading:()=><h2>loading....</h2>})
const page = () => { 

  return (
    <div>
      <Documents />
    </div>
  );
};

export default page;

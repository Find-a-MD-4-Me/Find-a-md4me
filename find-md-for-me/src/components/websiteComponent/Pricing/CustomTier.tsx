"use client";
import React, { useState } from "react";
import { Button } from "antd";
import CutomTierModal from "./CutomTierModal";

const CustomTier = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  // const DynamicCustomModel = dynamic(() => import("./CutomTierModal"), {
  //   ssr: false,
  // });
  return (
    <div className=" text-center  my-10">
      <p className=" mx-auto text-[#737373] text-[20px] pb-2">
        {" "}
        Don't see the services you want to provide listed?{" "}
      </p>
      <p className=" mx-auto text-[#737373] text-[20px] pb-2"> No worries.</p>
      <p className=" mx-auto text-[#737373] text-[20px] pb-3">
        {" "}
        Let's discuss building your custom tier here{" "}
      </p>
      <div>
        <Button type="primary" onClick={() => setIsModalOpen(true)} style={{height:"42px" , fontWeight:500 }}>
          {" "}
          Custom Tier
        </Button>
      </div>
      <CutomTierModal
        isModalOpen={isModalOpen}
        setIsModalOpen={setIsModalOpen}
      />
    </div>
  );
};

export default CustomTier;

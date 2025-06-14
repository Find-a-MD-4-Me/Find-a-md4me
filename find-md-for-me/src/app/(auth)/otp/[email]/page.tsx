import dynamic from "next/dynamic";
import React from "react";

const page = () => {
  const OTP = dynamic(() => import("@/components/loginComponents/OTP"), {
    ssr: false,
  });
  return (
    <div>
      <OTP />
    </div>
  );
};

export default page;

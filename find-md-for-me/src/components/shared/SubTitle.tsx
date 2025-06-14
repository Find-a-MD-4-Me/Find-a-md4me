import React from "react";

interface valueType {
  children: React.ReactNode;
  className: string;
}

const SubTitle: React.FC<valueType> = ({ children, className }) => {
  return (
    <div
      className={` text-[#737373] lg:text-[19px] text-[16px] lg:w-[700px] text-center mx-auto mb-5  ${className}`}
    >
      {" "}
      {children}{" "}
    </div>
  );
};

export default SubTitle;

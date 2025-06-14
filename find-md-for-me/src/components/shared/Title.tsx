import React from "react";

interface title {
  children: React.ReactNode;
}

const Title: React.FC<title> = ({ children }) => {
  return (
    <div className="lg:text-[40px]  text-[25px] font-extrabold text-[#C738BD] mt-10 mb-4 text-center ">
      {children}{" "}
    </div>
  );
};

export default Title;

import React from "react";

interface title {
  children: React.ReactNode;
}

const DashboardTitle: React.FC<title> = ({ children }) => {
  return <h1 className=" lg:text-3xl text-xl font-medium p-2 ">{children}</h1>;
};

export default DashboardTitle;

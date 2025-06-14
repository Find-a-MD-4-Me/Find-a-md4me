import React from "react";
import Title from "../shared/Title";
import SubTitle from "../shared/SubTitle";

const AcceptClient = () => {
  return (
    <div className="lg:mb-32">
      <div className=" lg:w-[700px]  mx-auto mt-40 tracking-wide ">
        <Title>
          Thank you for scheduling your introduction/Start up meeting.
        </Title>

        <SubTitle className="tracking-wide ">
          {" "}
          We look forward to the meeting you at your scheduled introduction
          meeting.{" "}
        </SubTitle>
      </div>
    </div>
  );
};

export default AcceptClient;

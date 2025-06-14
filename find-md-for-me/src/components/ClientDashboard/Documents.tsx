"use client";
import {  Steps } from "antd";
import React, { useEffect, useState } from "react";
import AgreeMents from "./AgreeMents";
import DocumentsSubmit from "./DocumentsSubmit";
import MeetingSchedule from "./MeetingSchedule";
import AcceptClient from "./AcceptClient";
import dynamic from "next/dynamic";
import DocumentsComponent from "./DocumentsComponent";
  

const Documents = () => {
  const [current, setCurrent] = useState(0); 
  const [isNextDisabled, setIsNextDisabled] = useState(true); 

  const steps = [
    {
      title: "Uploaded Documents",
      content: <DocumentsComponent current={current} setCurrent={setCurrent}  />,
    },
    {
      title: "Signed/Uploaded Agreements",
      content: <AgreeMents current={current} setCurrent={setCurrent} />,
    },
    {
      title: "Waiting for Approval",
      content: <DocumentsSubmit current={current} setCurrent={setCurrent}  setIsNextDisabled={setIsNextDisabled}   />,
    },
    {
      title: "Scheduled Start Up Call",
      content: <MeetingSchedule current={current} setCurrent={setCurrent} />,
    },
    {
      title: "Ready to Accept Clients",
      content: <AcceptClient />,
    },
  ];  

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const initialStep = parseInt(params.get("step") || "0", 10);
    if (!isNaN(initialStep) && initialStep !== current) {
      setCurrent(initialStep);
    }
  }, [current]);


  const handleStepChange = (step: any) => {
    if (step < current || !isNextDisabled) {
      setCurrent(step);

      const params = new URLSearchParams(window.location.search);
      params.set("step", step.toString());
      window.history.pushState(null, "", `?${params.toString()}`);
    }
  };

  const items = steps.map((item , index) => ({
    key: item.title,
    title: item.title, 
    disabled: index > current && isNextDisabled,
  }));

  const contentStyle = {
    width: "100%",
    marginTop: 16,
  };

  return (
    <div>
      <div className="mx-auto w-3/4 my-10">
        <Steps
          current={current}
          items={items}
          onChange={handleStepChange}
          labelPlacement="vertical"
        />
      </div>

      <div style={contentStyle}>{steps[current].content}</div>
    </div>
  );
};

export default Documents;

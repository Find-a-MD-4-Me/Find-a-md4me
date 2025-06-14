"use client";
import SubTitle from "@/components/shared/SubTitle";
import Title from "@/components/shared/Title";
import { Button } from "@/components/ui/button";
import React, { useEffect} from "react";


const MeetingSchedule = ({ current, setCurrent }: any) => {

  useEffect(() => {
    const script = document.createElement('script');
    script.src = "https://embed.acuityscheduling.com/js/embed.js";
    script.async = true;
    script.type = "text/javascript";
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, []); 

  const handleSubmit = async () => {
        const nextStep = current + 1;
        setCurrent(nextStep);     
    }

  return (
    <div>
      <div className="p-5">
        <Title>Schedule Your Appointment</Title>
        <SubTitle className="">
          Please select the best date + time to schedule your appointment for meeting with our staff.
        </SubTitle>
      </div>

      <div>
        <div className="lg:flex gap-4 mt-16 items-center px-8">
          <iframe
        src="https://app.acuityscheduling.com/schedule.php?owner=32379568&calendarID=10601466&ref=embedded_csp"
        title="Schedule Appointment"
        width="100%"
        height="700"
      ></iframe> 

        </div>
        <div className="text-center my-10">
          <Button variant="getStarted" onClick={handleSubmit}>
            Submit
          </Button>
        </div>
      </div>
    </div>
  );
};

export default MeetingSchedule;

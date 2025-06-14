"use client";
import { useParams, useRouter } from "next/navigation";
import React, { useState } from "react";
import Swal from "sweetalert2";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSeparator,
  InputOTPSlot,
} from "@/components/ui/input-otp";
import { Button } from "../ui/button";
import {
  useForgetpassMutation,
  usePostOTPMutation,
} from "@/redux/apiSlices/AuthSlices";
import { REGEXP_ONLY_DIGITS_AND_CHARS } from "input-otp";

const OTP = () => {
  const [forgetpass, { error }] = useForgetpassMutation();
  const [postOTP, { error: error1 }] = usePostOTPMutation();
  const router = useRouter();

  const param = useParams<{ email: string | string[] }>();
  const encodedEmail = param.email as string;
  const decodedEmail = decodeURIComponent(encodedEmail);

  const [otp, setOtp] = useState(null);

  const handleResendEmail = async () => {
    await forgetpass({ email: decodedEmail }).then((res) => {
      if (res?.data?.status === 200) {
        Swal.fire({
          text: res?.data?.message,
          icon: "success",
  
        });
      } else {
        Swal.fire({
          title: "Failed to Login",
          // @ts-ignore
          text: error?.data?.message,
          icon: "error",
        });
      }
    });
  };

  const handleVerifyOtp = async () => {
    await postOTP({ otp: otp }).then((res) => { 
      // console.log(res); 
      if (res?.data?.status === 200) {
        Swal.fire({
          title: "Password Reset",
          text: res?.data?.message,
          icon: "success",
          showConfirmButton: false,
         
        }).then(() => {
          router.push(`/resetPassword/${decodedEmail}`);
        });
      } else {
        Swal.fire({
          title: "Oops",
          // @ts-ignore
          text: res?.error?.data?.message,
          icon: "error",
          timer: 1500,
          showConfirmButton: false,
        });
      }
    });
  };
  const handleOnchange = (value: any) => {
    setOtp(value);
  };
  //   const handleResendEmail = () => {
  //     const email = JSON.parse(localStorage.getItem("email"));
  //   };
  return (
    <div>
      <div
        className=" lg:w-[550px] w-[400px] lg:px-[70px] px-[20px] lg:py-[57px] py-[30px] "
        style={{
          background: "white",
          borderRadius: "12px",
        }}
      >
        <h1
          className="text-center lg:text-[32px] text-[25px]"
          style={{
            fontSize: "32px",
            color: "#6A6D7C",
            marginBottom: "13px",
            textAlign: "center",
          }}
        >
          Check your email
        </h1>
        <p
          style={{  color: "#B8B8B8", margin: "0 auto 0 auto" }}
        >
          We sent a reset link to  <span style={{ color: "#6A6D7C" }}> {decodedEmail} </span>
          enter 6 digit code that mentioned in the email
        </p>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            marginTop: "30px",
          }}
        >
          <InputOTP
            maxLength={12}
            onChange={handleOnchange}
            pattern={REGEXP_ONLY_DIGITS_AND_CHARS}
          >
            <InputOTPGroup>
              <InputOTPSlot index={0} />
              <InputOTPSlot index={1} />
              <InputOTPSlot index={2} />
            </InputOTPGroup>
            <InputOTPSeparator />
            <InputOTPGroup>
              <InputOTPSlot index={3} />
              <InputOTPSlot index={4} />
              <InputOTPSlot index={5} />
            </InputOTPGroup>
          </InputOTP>
        </div>
        <div className="text-center  mt-8 mb-2">
          <Button
            onClick={handleVerifyOtp}
            variant="getStarted"
            type="submit"
            className=" text-center"
          >
            Verify
          </Button>
        </div>

        <p
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          Didn’t receive code?
          <p
            onClick={handleResendEmail}
            style={{
              color: "#A05C56",
              textDecoration: "underline",
              cursor: "pointer",
            }}
          >
            Resend{" "}
          </p>
        </p>
      </div>
    </div>
  );
};

export default OTP;

"use client";
import { useParams, useRouter } from "next/navigation";
import React, { useState } from "react";
import Swal from "sweetalert2";
import { Button, Form, Input } from "antd";
import { useResetPassMutation } from "@/redux/apiSlices/AuthSlices";

const ResetPassword = () => {
  const router = useRouter();
  const [resetPass, { error }] = useResetPassMutation();
  const param = useParams<{ email: string | string[] }>();
  const encodedEmail = param.email as string;
  const decodedEmail = decodeURIComponent(encodedEmail);


  const onFinish = async (values: any) => {
    const data = {
      email: decodedEmail,
      password: values?.password,
      password_confirmation: values?.password_confirmation,
    };
    await resetPass(data).then((res) => {
    
      if (res?.data?.status === 200) {
        Swal.fire({
          title: "Login Successful",
          text: res?.data?.message,
          icon: "success",
          showConfirmButton: false,
 
        }).then(() => {
          router.push(`/profile`);
        });
      } else {
        Swal.fire({
          title: "Oops",
          // @ts-ignore
          text: error?.data?.message,
          icon: "error",
          timer: 1500,
          showConfirmButton: false,
        });
      }
    });
  };

  return (
    <div>
      <div
        className=" lg:w-[630px] w-[400px] lg:px-[90px] px-[20px] lg:py-[57px] py-[30px] "
        style={{
          background: "white",
          borderRadius: "12px",
        }}
      >
        <h1
          className="lg:text-[32px] text-[25px]"
          style={{
            color: "black",
            marginBottom: "13px",
            textAlign: "center",
          }}
        >
          Set a new password
        </h1>
        <p
          style={{
            color: "#6A6D7C",
            fontSize: "18px",
            fontWeight: 400,
            margin: "0 auto 0 auto",
            width: "80%",
            textAlign: "center",
          }}
        >
          Create a new password. Ensure it differs from previous ones for
          security
        </p>

        <Form onFinish={onFinish} layout="vertical">
          <Form.Item
            name="password"
            rules={[
              {
                required: true,
                message: "Please input your password!",
              },
            ]}
            hasFeedback
            style={{ marginBottom: "15px", marginTop: "10px" }}
            label={
              <p style={{ display: "block", color: "#6A6D7C" }}>
                {" "}
                New Password
              </p>
            }
          >
            <Input.Password
              type="password"
              placeholder="Enter New password"
              style={{
                border: "1px solid #E0E4EC",
                height: "52px",
                background: "white",
                borderRadius: "8px",
                outline: "none",
                width: "100%",
                padding: "8px",
              }}
            />
          </Form.Item>
          <Form.Item
            name="password_confirmation"
            dependencies={["password"]}
            hasFeedback
            rules={[
              {
                required: true,
                message: "Please confirm your password!",
              },
              ({ getFieldValue }) => ({
                validator(_, value) {
                  if (!value || getFieldValue("password") === value) {
                    return Promise.resolve();
                  }
                  return Promise.reject(
                    new Error("The new password that you entered do not match!")
                  );
                },
              }),
            ]}
            style={{ marginBottom: "15px" }}
            label={
              <p style={{ display: "block", color: "#6A6D7C" }}>
                {" "}
                Confirm Password
              </p>
            }
          >
            <Input.Password
              type="password"
              placeholder="Enter Confirm password"
              style={{
                border: "1px solid #E0E4EC",
                height: "52px",
                background: "white",
                borderRadius: "8px",
                outline: "none",
                width: "100%",
                padding: "8px",
              }}
            />
          </Form.Item>

          <Form.Item className="text-center">
            <Button htmlType="submit" type="primary">
              UPDATE
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};

export default ResetPassword;

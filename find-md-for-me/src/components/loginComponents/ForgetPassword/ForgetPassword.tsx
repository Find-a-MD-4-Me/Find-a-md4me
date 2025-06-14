"use client";
import { useRouter } from "next/navigation";
import React from "react";
import { Button, Form, Input } from "antd";
import { useForgetpassMutation } from "@/redux/apiSlices/AuthSlices";
import Swal from "sweetalert2";

const ForgetPassword = () => {
  const router = useRouter();
  const [forgetpass, { error }] = useForgetpassMutation();
  const onFinish = async (values: any) => {
    await forgetpass({ email: values?.email }).then((res) => { 
    
      if (res?.data?.status === 200) {
        Swal.fire({
          text: res?.data?.message,
          icon: "success",
 
        }).then(() => {
          router.push(`/otp/${values?.email}`);
        });
      } else {
        Swal.fire({
       
          // @ts-ignore
          text: res?.error?.data?.error,
          icon: "error",
        });
      }
    });
    // router.push("/otp");
  };
  return (
    <div>
      <div
        className=" lg:w-[550px] w-[400px] lg:px-[90px] px-[20px] lg:py-[57px] py-[30px] "
        style={{
          background: "white",
          borderRadius: "12px",
          // padding: "90px 57px",
        }}
      >
        <h1
          className=" lg:text-center"
          style={{
            fontSize: "32px",
            marginBottom: "54px",
            color: "#494949",
          }}
        >
          Forgot Password
        </h1>

        <Form
          style={{ marginBottom: "24px", width: "100%" }}
          onFinish={onFinish}
          layout="vertical"
        >
          <Form.Item
            name="email"
            style={{ marginBottom: 0 }}
            label={
              <p style={{ display: "block", fontSize: "18px" }}>
                {" "}
                Email Address{" "}
              </p>
            }
            rules={[
              {
                required: true,
                message: "Please input your Email!",
              },
            ]}
          >
            <Input
              placeholder="Enter your email address"
              type="email"
              style={{
                border: "1px solid #E0E4EC",
                height: "52px",
                background: "white",
                borderRadius: "8px",
                outline: "none",
                width: "100%",
                padding: "8px",
                marginBottom: "15px",
              }}
            />
          </Form.Item>

          <Form.Item className="text-center my-4" style={{ marginBottom: 0 }}>
            <Button htmlType="submit" type="primary">
              Send a Code
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};

export default ForgetPassword;

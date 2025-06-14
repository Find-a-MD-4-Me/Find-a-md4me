"use client";

import { useGetProfileQuery, useLoginMutation } from "@/redux/apiSlices/AuthSlices";
import { SetLocalStorage } from "@/util/LocalStorage";
import { Button, Form, Input } from "antd";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

import Swal from "sweetalert2";

const Login = () => {
  const [login, { error , }] = useLoginMutation(); 
  const { data:profile , refetch } = useGetProfileQuery(undefined);
  const router = useRouter();

  const onFinish = async (values: any) => {

    const data = {
      email: values.email,
      password: values.password,
    };
    await login(data).then((res) => {

      if (res?.data?.status === 200) {
        Swal.fire({
          title: "Login Successful",
          text: "Welcome to Find a MD 4 Me",
          icon: "success",
        timer:1500
        }).then(async () => {
          SetLocalStorage("findMdToken", res?.data?.token); 
          localStorage.setItem('hasReloaded', 'true');
          router.push("/profile"); 
        
        });
      }  else {
        Swal.fire({
          title: "Failed to Login",
          // @ts-ignore
          text: res?.error?.data?.message,
          icon: "error",
        });
      }
    });
  }; 



  return (
    <div>
      <>
        <div className=" lg:w-[550px] w-[100%] lg:px-[60px] px-[30px] lg:py-[47px] py-[30px]  rounded-[12px] bg-white ">
          <h1
            className=" font-semibold"
            style={{ fontSize: "28px", textAlign: "center" }}
          >
            Login to Account
          </h1>
          <p className="text-center text-sm py-3">
            Please enter your email and password to continue
          </p>

          <Form onFinish={onFinish} layout="vertical">
            <Form.Item
              name="email"
              style={{ marginBottom: "24px" }}
              label={
                <p style={{ display: "block", marginBottom: "5px" }}> Email</p>
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
                }}
              />
            </Form.Item>

            <Form.Item
              name="password"
              style={{ marginBottom: "24px" }}
              label={
                <p style={{ display: "block", marginBottom: "5px" }}>
                  {" "}
                  Password{" "}
                </p>
              }
              rules={[
                {
                  required: true,
                  message: "Please input your password!",
                },
              ]}
            >
              <Input.Password
                type="password"
                placeholder="Enter your password"
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

            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <p></p>

              <Link
                className="login-form-forgot"
                style={{
                  color: "#6A6D7C",
                  fontWeight: 400,
                  fontSize: "18px",
                  marginBottom: "10px",
                }}
                href="/forgetPassword"
              >
                Forgot password?
              </Link>
            </div>

            <Form.Item
              className="text-center mt-10"
              style={{ marginBottom: 0 }}
            >
              <Button htmlType="submit" type="primary" className="">
                Sign In
              </Button>
            </Form.Item>
          </Form>
        </div>
      </>
    </div>
  );
};

export default Login;

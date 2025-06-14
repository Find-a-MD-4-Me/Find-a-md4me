"use client";
import React, { useState } from "react";

import { Button, Form, Input } from "antd";
import { useChangePassMutation } from "@/redux/apiSlices/AuthSlices";
import Swal from "sweetalert2";
import { useRouter } from "next/navigation";

const ChangePassword = () => {
  const [changePass, { error }] = useChangePassMutation();
  const [form] = Form.useForm()
  const router = useRouter()
  const handleChangePassword = async (values: any) => {
    await changePass(values).then((res) => {
      if (res?.data?.status === 200) {
        Swal.fire({
          position: "center",
          title: res?.data?.message,
          showConfirmButton: true,
          confirmButtonColor: "#C738BD",


        }).then(() => {

          form.resetFields()
          router.push("/login")
        })

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

  return (
    <div>
      {" "}
      <div className="">
        <div>
          <Form
            form={form}

            className="login-form lg:ms-[50px] pe-[30px] mt-[30px] "
            initialValues={{
              remember: true,
            }}
            style={{
              width: "100%",
              height: "fit-content",
            }}
            onFinish={handleChangePassword}
          >
            <div className=" mb-[20px]  lg:w-[50%] w-[100%]">
              <label style={{ display: "block", marginBottom: "5px" }}>
                Current Password
              </label>
              <Form.Item
                style={{ marginBottom: 0 }}
                name="current_password"
                rules={[
                  {
                    required: true,
                    message: "Please input your current password!",
                  },
                ]}
              >
                <Input.Password
                  placeholder="Enter Password"
                  type="password"
                  style={{
                    border: "1px solid #E0E4EC",
                    height: "52px",
                    background: "white",
                    borderRadius: "8px",
                    outline: "none",
                  }}
                />
              </Form.Item>
            </div>

            <div className=" mb-[20px]  lg:w-[50%] w-[100%]">
              <label
                style={{ display: "block", marginBottom: "5px" }}
                htmlFor=""
              >
                New Password
              </label>
              <Form.Item
                name="new_password"
                dependencies={["current_password"]}
                hasFeedback
                rules={[
                  {
                    required: true,
                    message: "Please confirm your password!",
                  },
                  ({ getFieldValue }) => ({
                    validator(_, value) {
                      if (!value || getFieldValue("current_password") === value) {
                        return Promise.reject(
                          new Error(
                            "The new password and current password do not match!"
                          )
                        );
                      }
                      return Promise.resolve();
                    },
                  }),
                ]}

                style={{ marginBottom: 0 }}
              >
                <Input.Password
                  type="password"
                  placeholder="Enter password"
                  style={{
                    border: "1px solid #E0E4EC",
                    height: "52px",
                    background: "white",
                    borderRadius: "8px",
                    outline: "none",
                  }}
                />
              </Form.Item>
            </div>

            <div className=" mb-[40px]  lg:w-[50%] w-[100%]">
              <label
                style={{ display: "block", marginBottom: "5px" }}
                htmlFor="email"
              >
                Re-Type Password
              </label>
              <Form.Item
                style={{ marginBottom: 0 }}
                name="confirm_password"
                dependencies={["new_password"]}
                hasFeedback
                rules={[
                  {
                    required: true,
                    message: "Please confirm your password!",
                  },
                  ({ getFieldValue }) => ({
                    validator(_, value) {
                      if (!value || getFieldValue("new_password") === value) {
                        return Promise.resolve();
                      }
                      return Promise.reject(
                        new Error(
                          "The new password that you entered do not match!"
                        )
                      );
                    },
                  }),
                ]}
              >
                <Input.Password
                  type="password"
                  placeholder="Enter password"
                  style={{
                    border: "1px solid #E0E4EC",
                    height: "52px",
                    background: "white",
                    borderRadius: "8px",
                    outline: "none",
                  }}
                />
              </Form.Item>
            </div>

            <div
              style={{
                width: "50%",
                display: "flex",
                gap: "16px",
                alignItems: "center",
                marginBottom: "20px",
              }}
            >
              <div style={{ width: "100%", position: "relative" }}>
                <Form.Item>
                  <Button
                    type="primary"
                    htmlType="submit"
                    block
                    style={{
                      border: "none",
                      height: "41px",
                      background: "#1D75F2",
                      color: "white",
                      borderRadius: "8px",
                      outline: "none",
                      width: "150px",
                      position: "absolute",
                      right: "20px",
                      bottom: "0px",
                    }}
                  >
                    Submit
                  </Button>
                </Form.Item>
              </div>
            </div>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default ChangePassword;

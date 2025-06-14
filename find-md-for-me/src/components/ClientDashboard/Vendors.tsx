"use client";
import React from "react";
import DashboardTitle from "../shared/DashboardTitle";

import { Button, Form, Input, Select } from "antd";

import {
  usePostVendorFormMutation,
  useVendorDataQuery,
} from "@/redux/apiSlices/ClientDashboardSlices";
import Swal from "sweetalert2";
import { useRouter } from "next/navigation";

const Vendors = () => {
  const { data } = useVendorDataQuery(undefined); 
  const [postVendorForm, { error }] =
    usePostVendorFormMutation();  
    const router = useRouter()

  const shipping = ["Overnight", "Expedited", "Standard"];
  const onFinish = async (values: any) => {
    await postVendorForm(values).then((res)=>{ 
      // console.log(res); 
      if(res?.data?.status === "200"){
        router.push("/vendor-confirmation")
       } else{
        Swal.fire({
          // @ts-ignore
          text: error?.data?.message,
          icon: "error",
        });
       }
      
    })
  };

  return (
    <div>
      <div className="lg:p-10 p-4">
        {" "}
        <DashboardTitle>Order Form</DashboardTitle>
        <div className="  flex justify-center items-center mb-4">
          <p className=" border border-[#C738BD] text-[#C738BD]   w-[200px] h-[50px]  flex justify-center items-center rounded-lg">
            Order Form Here
          </p>
        </div>
      </div>

      <div className="flex justify-center items-center mb-10  ">
        <Form
          className="w-3/4 bg-[#E8F6FE] rounded-lg  "
          layout="vertical"
          onFinish={onFinish}
        >
          <div className="py-10 px-10 ">
            <div className=" lg:flex gap-5  w-full">
              <Form.Item
                className=" w-full"
                label={
                  <p className="text-lg  text-[#737373] font-semibold ">
                    First Name
                  </p>
                }
                name="first_name"
                rules={[{ required: true, message: "This field is required" }]}
              >
                <Input  className="h-[45px] mt-2" />
              </Form.Item>

              <Form.Item
                className=" w-full"
                label={
                  <p className="text-lg  text-[#737373] font-semibold ">
                    {" "}
                    Last Name
                  </p>
                }
                name="last_name"
                rules={[{ required: true, message: "This field is required" }]}
              >
                <Input  className="h-[45px] mt-2" />
              </Form.Item>
            </div>

            <div className="  lg:flex gap-5 w-full ">
              <Form.Item
                className=" lg:w-1/2"
                label={
                  <p className="text-lg  text-[#737373] font-semibold ">
                    Email
                  </p>
                }
                name="email"
                rules={[{ required: true, message: "This field is required" }]}
              >
                <Input
                  type="email"
                 
                  className="h-[45px] mt-2"
                />
              </Form.Item>

              <Form.Item
                className=" lg:w-1/2"
                label={
                  <p className="text-lg  text-[#737373] font-semibold ">
                    Phone Number{" "}
                  </p>
                }
                name="phone"
                rules={[{ required: true, message: "This field is required" }]}
              >
                <Input
                  type="number"
                  placeholder="(###)-###-####"
                  className="h-[45px] mt-2"
                />
              </Form.Item>
            </div>

            <div className="  lg:flex gap-5 w-full ">
              <div className=" lg:w-1/2">
                <Form.Item
                  label={
                    <p className="text-lg  text-[#737373] font-semibold ">
                      Shipping Address
                    </p>
                  }
                  name="shiping_address"
                  rules={[
                    { required: true, message: "This field is required" },
                  ]}
                >
                  <Input
                    type="text"
                    placeholder="Street Address"
                    className="h-[45px] mt-2"
                  />
                </Form.Item>

                <Form.Item
                  name="shiping_address1"
                  rules={[
                    { required: true, message: "This field is required" },
                  ]}
                >
                  <Input
                    type="text"
                    placeholder="City, State, Zip Code, Unit/Suite/Apt number"
                    className="h-[45px] "
                  />
                </Form.Item>
              </div>

              <Form.Item
                className=" lg:w-1/2"
                label={
                  <p className="text-lg  text-[#737373] font-semibold ">
                    Items Description{" "}
                  </p>
                }
                name="item_description"
                rules={[{ required: true, message: "This field is required" }]}
              >
                <Input.TextArea
                  rows={4}
             
                  className=" mt-2"
                />
              </Form.Item>
            </div>

            <div className="  lg:flex gap-5 w-full ">
              <Form.Item
                className=" lg:w-1/2"
                label={
                  <p className="text-lg  text-[#737373] font-semibold ">
                    Item Number (If available)
                  </p>
                }
                name="item_number"
                rules={[{ required: true, message: "This field is required" }]}
              >
                <Input
                  type="number"
             
                  className="h-[45px] mt-2"
                />
              </Form.Item>

              <Form.Item
                className=" lg:w-1/2"
                name="price"
                label={
                  <p className="text-lg  text-[#737373] font-semibold ">
                    Price{" "}
                  </p>
                }
                rules={[{ required: true, message: "This field is required" }]}
              >
                <Input
                  type="number"
               
                  className="h-[45px] mt-2"
                />
              </Form.Item>
            </div>

            <div className="  lg:flex gap-5 w-full ">
              <Form.Item
                className=" lg:w-1/2"
                label={
                  <p className="text-lg  text-[#737373] font-semibold ">
                    Quantity
                  </p>
                }
                name="quantity"
                rules={[{ required: true, message: "This field is required" }]}
              >
                <Input
                  type="number"
              
                  className="h-[45px] mt-2"
                />
              </Form.Item>

              <Form.Item
                className="lg:w-1/2"
                name="vendor"
                label={
                  <p className="text-lg  text-[#737373] font-semibold  ">
                    Select Vendor
                  </p>
                }
                rules={[{ required: true, message: "This field is required" }]}
              >
                <Select
                  style={{
                    height: "45px",
                  }}
                >
                  {data?.data.map((value: any, index: number) => (
                    <Select.Option key={index} value={value?.vendor_name}>
                      {value?.vendor_name}
                    </Select.Option>
                  ))}
                </Select>
              </Form.Item>
            </div>

            <div className="  lg:flex gap-5 w-full ">
              <Form.Item
                className=" lg:w-1/2"
                name="comments"
                label={
                  <p className="text-lg  text-[#737373] font-semibold ">
                    Comments/Questions{" "}
                  </p>
                }
                rules={[{ required: true, message: "This field is required" }]}
              >
                <Input.TextArea
                  rows={5}
              
                  className=" mt-2"
                />
              </Form.Item>

              <div className="lg:w-1/2">
                <Form.Item
                  label={
                    <p className="text-lg  text-[#737373] font-semibold  ">
                      Shipping
                    </p>
                  }
                  name="shiping"
                  rules={[
                    { required: true, message: "This field is required" },
                  ]}
                >
                  <Select
                    style={{
                      height: "45px",
                    }}
                  >
                    {shipping?.map((value, index) => (
                      <Select.Option key={index} value={value}>
                        {value}
                      </Select.Option>
                    ))}
                  </Select>
                </Form.Item>

                <Form.Item
                  className=" "
                  name="print_name"
                  label={
                    <p className="text-lg  text-[#737373] font-semibold ">
                      Print Name{" "}
                      <span className="text-[#C738BD]"> (Required)</span>
                    </p>
                  }
                  rules={[
                    { required: true, message: "This field is required" },
                  ]}
                >
                  <Input
                    type="text"
                   
                    className="h-[45px] "
                  />
                </Form.Item>
              </div>
            </div>

            <div className="lg:flex gap-5 w-full">
              <div className="lg:w-1/2">
                <p className="">
                  Please Note: orders received by 12:00 pm CST will be processed
                  the same day + shipped out the following business day. Orders
                  received after 12:00 pm CST will be processed the next
                  business day. Orders are shipped on Monday-Thursday. Orders
                  placed after 12:00 pm CST on Thursday or on Friday, Saturday,
                  or Sunday will not be processed until the following business
                  day. Additional charges for expedited + guaranteed shipping
                  apply.
                </p>
              </div>
              <div className="lg:w-1/2 lg:mt-[1px] mt-3">
                <p>
                  By printing your name, you are acknowledging + consenting to
                  your credit card on file to be charged for the order submitted
                  on this form. For new purchasers, completion of the credit
                  card authorization is required to confirm and reserve order.
                </p>
              </div>
            </div>

            <Form.Item className="flex justify-center items-center mt-4">
              <Button htmlType="submit" type="primary" style={{ height: "45px" }}>
                Confirm Order
              </Button>
            </Form.Item>
          </div>
        </Form>
      </div>
    </div>
  );
};

export default Vendors;

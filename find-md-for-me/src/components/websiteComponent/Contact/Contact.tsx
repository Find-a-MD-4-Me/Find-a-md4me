"use client";
import Title from "@/components/shared/Title";
import styles from "./Contact.module.css";

import React, { useEffect } from "react";
import { MdPhoneInTalk } from "react-icons/md";
import { IoMdMail } from "react-icons/io";
import { FaLocationDot } from "react-icons/fa6";
import { FaFacebook, FaGoogle } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import SubTitle from "@/components/shared/SubTitle";
import { Button, Form, Input, Radio } from "antd";
import { usePostContactMutation } from "@/redux/apiSlices/WebPagesSlices"; 
import AOS from "aos" ;
import "aos/dist/aos.css";
import Swal from "sweetalert2";

const Contact = () => {
  const [postContact] = usePostContactMutation();
  const [form] = Form.useForm(); 

useEffect(()=>{ 
AOS.init()
},[])

  const values = [

    {
      icon: <IoMdMail size={24} />,
      data: "info@FindaMD4Me.com",
    },
    {
      icon: <FaLocationDot size={24} />,
      data: "7075 FM 1960 RD W STE 1010G Houston, Texas 77069",
    },
  ];

  const onFinish = async (values: any) => {
    await postContact(values).then((res) => {
      if (res?.data?.status === "200") {
        Swal.fire({
          icon: "success",
          title: res?.data?.message,
          showConfirmButton: false,
          timer: 1600,
        });
        form.resetFields();
      }
    });
  };
  return (
    <div >
      <div  data-aos="fade-down"
    data-aos-easing="linear"  data-aos-duration="500">
        <Title> Contact Us</Title>
        <SubTitle className="">
          {" "}
          Any questions or remarks? Just write us a message!{" "}
        </SubTitle>
        <p className=" text-[#737373] text-[20px] lg:w-[700px] text-center mx-auto mb-10"></p>
      </div>

      <div data-aos="fade-up"
    data-aos-easing="linear"  data-aos-duration="500">
        <div className="grid lg:grid-cols-12  mb-10 items-center gap-12  bg-[#FAFAFA] lg:p-10 p-5 rounded-lg z-0">
          <div className={` lg:col-span-4 ${styles.bgImg} `}>
            <div>
              <h1 className=" text-white font-semibold lg:text-3xl text-2xl text-center  my-10">
                {" "}
                Contact Information{" "}
              </h1>

              <div className="lg:px-10 px-6 lg:py-24 py-14 ">
                {values?.map((data, index) => (
                  <p key={index} className="flex gap-4 items-center lg:mb-10 mb-8 ">
                    {" "}
                    <span className="text-[#C738BD]">{data?.icon} </span>{" "}
                    <span className="text-white">{data?.data} </span>{" "}
                  </p>
                ))}
              </div>

              <p className=" flex items-center gap-4  text-[#C738BD] px-10 pb-9 ">
              <a href="https://www.facebook.com/FindaMD4Me"  target="_blank">
              {" "}
              <FaFacebook size={28} />{" "}
            </a>
            <a href="https://www.instagram.com/findamd4me/" target="_blank">
              {" "}
              <RiInstagramFill size={28} />{" "}
            </a>
            <a href="https://g.page/r/CVsHB42KIGz5EAE/review" target="_blank">
              <FaGoogle size={28} />{" "}
            </a>
              </p>
            </div>
          </div>
          <div className="lg:col-span-8">
            <Form onFinish={onFinish} layout="vertical" form={form}>
              <div className="lg:flex gap-5 w-full">
                <Form.Item
                  className="w-full"
                  name="first_name"
                  label={
                    <p className="text-lg text-[#737373] font-semibold">
                      First Name
                    </p>
                  }
                  rules={[
                    {
                      required: true,
                      message: "Please input your first name!",
                    },
                  ]}
                >
                  <Input
                
                    className="h-[45px] mt-2"
                  />
                </Form.Item>

                <Form.Item
                  className="w-full"
                  name="last_name"
                  label={
                    <p className="text-lg  text-[#737373] font-semibold">
                      Last Name
                    </p>
                  }
                  rules={[
                    {
                      required: true,
                      message: "Please input your last name!",
                    },
                  ]}
                >
                  <Input className="h-[45px] mt-2" />
                </Form.Item>
              </div>

              <div className="lg:flex gap-5 w-full">
                <Form.Item
                  className="lg:w-1/2"
                  name="email"
                  label={
                    <p className="text-lg  text-[#737373] font-semibold">
                      Email
                    </p>
                  }
                  rules={[
                    {
                      type: "email",
                      message: "The input is not valid E-mail!",
                    },
                    {
                      required: true,
                      message: "Please input your E-mail!",
                    },
                  ]}
                >
                  <Input
                    type="email"
             
                    className="h-[45px] mt-2"
                  />
                </Form.Item>

                <Form.Item
                  className="lg:w-1/2"
                  name="phone"
                  label={
                    <p className="text-lg  text-[#737373] font-semibold">
                      Phone Number
                    </p>
                  }
                  rules={[
                    {
                      required: true,
                      message: "Please input your Phone Number!",
                    },
                  ]}
                >
                  <Input
                  
                    placeholder="(###)-###-#### "
                    className="h-[45px] mt-2"
                  />
                </Form.Item>
              </div>

              <Form.Item
                name="subject"
                label={
                  <p className="text-lg  text-[#737373] font-semibold">
                    Subject
                  </p>
                }
                rules={[
                  {
                    required: true,
                    message: "Please input your Subject!",
                  },
                ]}
              >
                <div className="flex-col">
                  <Radio.Group>
                    <Radio value="generalInquiry" className="text-xl my-2">
                      <span className="text-lg font-medium text-[#737373]">
                        General Inquiry
                      </span>
                    </Radio>
                    <Radio value="jobs" className="text-xl my-2">
                      <span className="text-lg font-medium text-[#737373]">
                        Jobs
                      </span>
                    </Radio>
                    <Radio value="partnership" className="text-xl my-2">
                      <span className="text-lg font-medium text-[#737373]">
                        Partnership
                      </span>
                    </Radio>
                  </Radio.Group>
                </div>
              </Form.Item>

              <Form.Item
                className="w-full"
                name="message"
                label={
                  <p className="text-lg  text-[#737373] font-semibold">
                    Message
                  </p>
                }
                rules={[
                  {
                    required: true,
                    message: "Please input your Message!",
                  },
                ]}
              >
                <Input.TextArea
                  rows={3}
                  className="mt-2"
                />
              </Form.Item>
 <div className="flex items-center justify-center  mt-3">

           <button type="submit" style={{ height:45 , width:120 , backgroundColor:"#c738bd" , borderRadius:8 , color:"white" , fontWeight:500 }}>Submit</button>
 </div>
            </Form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;

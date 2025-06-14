"use client";
import SubTitle from "@/components/shared/SubTitle";
import Title from "@/components/shared/Title";
import React, { useEffect, useState } from "react";
import { Button, DatePicker, Form, Input, Radio, Select } from "antd";
import { useRouter } from 'next/navigation'
import {

  usePostPersonalInfoMutation,
} from "@/redux/apiSlices/WebPagesSlices";
import moment from "moment";
import Swal from "sweetalert2";
import { GetLocalStorage, SetLocalStorage } from "@/util/LocalStorage";

const IntakeInfoFirstPage: React.FC = () => {
 const [form] = Form.useForm()
  const [postPersonalInfo, { error, data: postData , isLoading}] = usePostPersonalInfoMutation(); 
 
  const stateData = [  
    "Alabama" ,
    "Alaska" ,
    "Arizona" ,
    "Arkansas" ,
    "California" ,
    "Colorado" ,
    "Connecticut" ,
    "Delaware",
    "Florida",
    "Georgia" ,
    "Hawaii",
    "Idaho" ,
    "Illinois" ,
    "Indiana" ,
    "Iowa" ,
    "Kansas" ,
    "Kentucky" ,
    "Louisiana" ,
    "Maine" ,
    "Maryland" ,
    "Massachusetts" ,
    "Michigan" ,
    "Minnesota" ,
    "Mississippi" ,
    "Missouri" ,
    "Montana" ,
    "Nebraska" ,
    "Nevada" ,
    "New Hampshire" ,
    "New Jersey" ,
    "New Mexico" ,
    "New York" ,
    "North Carolina",
    "North Dakota",
    "Ohio",
    "Oklahoma",
    "Oregon" ,
    "Pennsylvania",
    "Rhode Island" ,
    "South Carolina",
    "South Dakota",
    "Tennessee",
    "Texas",
    "Utah",
    "Vermont",
    "Virginia",
    "Washington",
    "West Virginia" ,
    "Wisconsin" ,
    "Wyoming" ]

  const counties = stateData.map((state: any) => ({
    label: state,
    value: state,
  }));

  const router = useRouter(); 

  const onFinish = async (values: any) => {  
    // console.log(values); 
    const { birthDate , state_license_certificate , ...otherValues } = values;
    const formattedDate = moment(birthDate).format("YYYY-MM-d"); 
    const state = JSON.stringify(state_license_certificate)  
    const data = {
      dob: formattedDate, 
      state_license_certificate:state ,   
      ...otherValues,
    }; 
 


    await postPersonalInfo(data).then((res: any) => { 

      if (res?.data?.status === 200) {
        const newIntakeId = res?.data?.data?.id;
        SetLocalStorage("intakeId", newIntakeId); 
        router.push(`/intake-info-second/${newIntakeId}`);   
        window.scrollTo({ top: 0, behavior: "smooth" });
      } else {
        Swal.fire({ 
          // @ts-ignore
          text: res?.error?.data?.message || "An error occurred",
          icon: "error",
        });
      }
    });
  };

  return (
    <div className="container">
      <div>
        <Title> Intake Information </Title>
        <SubTitle className=" ">
          {" "}
          If you are looking to connect with a MD in your area, fill out the
          below form.
        </SubTitle>
        <p className=" text-[#C738BD]  text-[16px] text-center ">
          {" "}
          Please Provide Your Personal Information.{" "}
        </p>
      </div>

      <div className=" lg:w-[80%] mx-auto mt-10 bg-[#E8F6FE] rounded-lg lg:p-10 p-5 lg:px-20  mb-20 z-0">
        <Form
          name="basic"
          onFinish={onFinish}
          className=" w-[100%]   "
          layout="vertical" 
          form={form}  
        >
          <Form.Item
            name="first_name"
            rules={[
              {
                required: true,
                message: "Please enter your first name!",
              },
            ]}
            label={
              <p className="text-lg  text-[#737373] font-semibold ">
                First Name :
              </p>
            }
          >
            <Input
              className=" w-full h-[40px] "
            
            />
          </Form.Item>

          <Form.Item
            name="last_name"
            rules={[
              {
                required: true,
                message: "Please enter your last name!",
              },
            ]}
            label={
              <p className="text-lg  text-[#737373] font-semibold ">
                Last Name :
              </p>
            }
          >
            <Input className=" w-full h-[40px] "  />
          </Form.Item>

          <Form.Item
            name="birthDate"
            className=""
            rules={[
              {
                required: true,
                message: "Please enter your birth of date!",
              },
            ]}
            label={
              <p className="text-lg  text-[#737373] font-semibold ">
                Date of Birth:
              </p>
            }
          >
            <DatePicker className=" w-full h-[40px]"  format={{
        format: 'MMM DD YYYY',
        type: 'mask',
      }} />
          </Form.Item>

          <Form.Item
            name="email"
            label={
              <p className="text-lg  text-[#737373] font-semibold ">Email:</p>
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
              className=" w-full h-[40px] "
             
            />
          </Form.Item>

          <Form.Item
            name="phone"
            rules={[
              {
                required: true,
                message: "Please enter your phone!",
              },
            ]}
            label={
              <p className="text-lg  text-[#737373] font-semibold ">
                Phone Number :
              </p>
            }
          >
            <Input
              className=" w-full h-[40px] "
              placeholder="(###)-###-####"

            />
          </Form.Item>

          <Form.Item
            name="occupation"
            rules={[
              {
                required: true,
                message: "Please enter your occupation!",
              },
            ]}
            label={
              <p className="text-lg  text-[#737373] font-semibold ">
                Occupation :
              </p>
            }
          >
            <Input
              className=" w-full h-[40px] "
        
              type="text"
            />
          </Form.Item>

          <Form.Item
            name="state_license_certificate"
            rules={[
              {
                required: true,
                message: "Please enter your state!",
              },
            ]}
            label={
              <p className="text-lg  text-[#737373] font-semibold ">
                What state(s) are you licensed/certified in?
              </p>
            }
          >
            {/* <div className=" flex gap-5 items-center w-full ">   */}
            <Select 
             mode="multiple"
              className="h-[40px] w-[80%]"
              options={counties}
              // onChange={handleChange} 
            />
          </Form.Item>
 

          <Form.Item
           name="license_certificate_no"
            rules={[
              {
                required: true,
                message: "Please enter your license(s)/certificate(s) number(s)!",
              },
            ]}
            label={
              <p className="text-lg  text-[#737373] font-semibold ">
                Please provide your license(s)/certificate(s) number(s)
              </p>
            }
          >
            <Input
              className=" w-full h-[40px] "
        
              type="text"
            />
          </Form.Item> 

    

          <Form.Item
            name="mailing_address"
            rules={[
              {
                required: true,
                message: "Please enter your Address!",
              },
            ]}
            label={
              <p className="text-lg  text-[#737373] font-semibold ">
                Home Mailing Address
              </p>
            }
          >
            <Input
              className=" w-full h-[40px] "
       placeholder="Street Address, City, State, Zip Code, Unit/Suite/Apt number"
            />
          </Form.Item>

          <Form.Item
  name="completed_training_certificate_service"
  rules={[
    {
      required: true,
      message: "Please enter your opinion!",
    },
  ]}
  label={
    <p className="text-lg text-[#737373] font-semibold">
      Have you completed training/certification for the service(s) you would like to offer?
    </p>
  }
 
>
  <Radio.Group>
                                    <Radio value="yes" className='text-lg'>Yes</Radio>
                                    <Radio value="no" className='text-lg'>No</Radio>
                                </Radio.Group>

</Form.Item>
 
          <div className="text-end ">

      <button type="submit" style={{ height:45 , width:100 , backgroundColor:"#c738bd" , borderRadius:8 , color:"white" , fontWeight:500 }}> {isLoading ? <p style={{cursor:"wait"}}>loading..</p> : "Next"} </button>
</div> 

        </Form>
      </div>
  
    </div>
  );
};

export default IntakeInfoFirstPage;

import React, { Dispatch, SetStateAction } from "react";
import { Button, Form, Input, Modal } from "antd";
import { usePostCustomTierMutation } from "@/redux/apiSlices/WebPagesSlices";
import Swal from "sweetalert2";

const CutomTierModal = ({
  isModalOpen,
  setIsModalOpen,
}: {
  isModalOpen: boolean;
  setIsModalOpen: Dispatch<SetStateAction<boolean>>;
}) => {
  const [PostCustomTier] = usePostCustomTierMutation();
  const [form] = Form.useForm();
  const onFinish = async (values: any) => {

    await PostCustomTier(values).then((res) => {

      if (res?.data?.status === "200") {
        Swal.fire({
          icon: "success",
          title: res?.data?.message,
          showConfirmButton: false,
          timer: 1800,
        });
        setIsModalOpen(false);
        form.resetFields();
      }
    });
  };
  return (
    <div className=" z-40">
      <Modal
        open={isModalOpen}
        onCancel={() => setIsModalOpen(false)}
        footer={false}
      >
        <Form
          form={form}
          onFinish={onFinish}
          layout="vertical"
          className=" my-5"
        >
          <Form.Item
            name="email"
            label={<p className="text-[18px] text-gray-500 "> Your Email</p>}
         
          >
            <Input className=" h-[40px]" />
          </Form.Item>
          <Form.Item
            name="trial"
            label={<p className="text-[18px] text-gray-500 ">List the type of business you are opening and services you are requesting MD oversight for </p>}
           
          >
            <Input.TextArea rows={5} />
          </Form.Item>

          <Form.Item className=" mt-5 text-end">
            <Button type="primary" htmlType="submit">
              {" "}
              Submit
            </Button>
          </Form.Item>
        </Form>
      </Modal>
    </div>
  );
};

export default CutomTierModal;

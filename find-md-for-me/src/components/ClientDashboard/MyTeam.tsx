"use client";
import { Dropdown, Form, Menu, Space, Table } from "antd";
import React, { useEffect, useState } from "react";
import { FaEye } from "react-icons/fa6";
import { Button } from "../ui/button";
import { MdDelete } from "react-icons/md";
import { BsThreeDotsVertical } from "react-icons/bs";
import MyTeamModal from "./MyTeamModal";
import DashboardTitle from "../shared/DashboardTitle";
import {
  useDeleteTeamMutation,
  useGetTeamQuery,
} from "@/redux/apiSlices/ClientDashboardSlices";
import SingleUserDetails from "./SingleUserDetails";
import Swal from "sweetalert2";

const MyTeam = () => {
  const [form] = Form.useForm();
  const { data: teamData, refetch } = useGetTeamQuery(undefined); 
  // console.log(teamData); 
  const [deleteTeam, { error }] = useDeleteTeamMutation(undefined);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [viewModal, setViewModal] = useState(false);
  const [value, setValue] = useState(null);

  const data = teamData?.data?.data.map((value: any, index: number) => ({
    key: index + 1,
    name: value?.first_name,
    lastName: value?.last_name,
    email: value?.email,
    role: value?.Role, 
    status:value?.status ,
    license_certificate_number: value?.license_certificate_number,
    addisional_certificate: value?.addisional_certificate,
    phone: value?.phone,
    userId: value?.id,
    dob: value?.dob,
  }));

  useEffect(() => {
    if (isModalOpen) {
      form.setFieldsValue(isModalOpen);
    }
  }, [form, isModalOpen]);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const columns: any = [
    {
      title: "User ID",
      dataIndex: "key",
      key: "key",
      responsive: ["lg"],
    },
    {
      title: "User Name",
      dataIndex: "name",
      key: "username",
      render: (dataIndexValue: any, record: any) => (
        <div className="flex items-center gap-2">
          <h1>{dataIndexValue}</h1>
          <div>{record?.lastName} </div>
        </div>
      ),
    },
    {
      title: "User Email",
      dataIndex: "email",
      key: "email",
    },
    {
      title: "Role",
      dataIndex: "role",
      key: "role",
    },
    {
      title: "Status",
      dataIndex: "status",
      key: "status", 
      render:(status:any)=><p className={`${status==="approved" ? "text-green-600" : status==="pending" ? "text-blue-600" : status==="rejected" ? "text-red-600" :"text-black"}`}>{status}</p>
    },

    {
      title: "ACTION",
      dataIndex: "printView",
      key: "printView",

      render: (_: any, record: any) => (
        <div className="flex items-center gap-2">
          <button
            className=" text-xl text-[#1d75f2] "
            onClick={() => handleViewModal(record)}
          >
            <FaEye />
          </button>

          <button
            className=" text-xl text-[#f5523c] "
            onClick={() => handleDelete(record?.userId)}
          >
            <MdDelete />
          </button>
        </div>
      ),
    },
  ];

  const handleViewModal = (value: any) => {
    setValue(value);
    setViewModal(true);
  };

  const handleDelete = async (id: any) => {
    Swal.fire({
      title: "Are you sure?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes",
      cancelButtonText: "No",
    }).then(async (result) => {
      if (result.isConfirmed) {
        await deleteTeam(id).then((res) => {
          if (res?.data?.status === 200) {
            Swal.fire({
              title: "Deleted!",
              text: "Team Record Delete Successfully ",
              icon: "success",
              showConfirmButton: false,
            
            }).then(() => {
              refetch();
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
      }
    });
  };

  return (
    <div>
      {" "}
      <div
        className=" lg:p-10 p-4"
        style={{
          background: "white",

          borderRadius: "12px",
        }}
      >
        <div className=" flex items-center justify-between my-5">
          <DashboardTitle> My Team</DashboardTitle>

          <Button variant="default" onClick={showModal}>
            + Add Member
          </Button>
        </div>

        <div>
          <Table
            columns={columns}
            dataSource={data}
            className="lg:text-center lg:w-[100%] w-[100%]" 
            scroll={{
              x: 800,
            }}
            pagination={{
              pageSize: 10,
            }}
          />
        </div>
      </div>
      <MyTeamModal
        isModalOpen={isModalOpen}
        setIsModalOpen={setIsModalOpen}
        form={form} 
        refetch={refetch}
      />
      <SingleUserDetails
        viewModal={viewModal}
        setViewModal={setViewModal}
        singleValue={value}
      />
    </div>
  );
};

export default MyTeam;

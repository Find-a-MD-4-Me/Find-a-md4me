import { baseUrl } from "@/redux/api/apiSlice";
import { Modal } from "antd";
import React from "react";
import { FiLink2 } from "react-icons/fi";
interface IMyTeam {
  viewModal: boolean;
  setViewModal: React.Dispatch<React.SetStateAction<boolean>>;
  singleValue: any;
}
const SingleUserDetails: React.FC<IMyTeam> = ({
  viewModal,
  setViewModal,
  singleValue,
}) => {

  const handleCancel = () => {
    setViewModal(false);
  };
  return (
    <div>
      <Modal
        open={viewModal}
        onCancel={handleCancel}
        footer={false}
        className="lg:w-[800px] w-[100%]"
      >
        <div className=" py-4 px-3">
          <div className="w-full flex items-center text-[16px] mb-3 font-medium text-[#737373]">
            <p className="w-1/2">Name:</p>

            <p className="w-1/2">
              {`${singleValue?.name}  ${singleValue?.lastName}`}
            </p>
          </div>

          <div className="w-full flex items-center  text-[16px] mb-3 font-medium text-[#737373]">
            <p className="w-1/2">Date of Birth:</p>

            <p className="w-1/2">{singleValue?.dob}</p>
          </div>

          <div className="w-full flex items-center text-[16px] mb-3 font-medium text-[#737373]">
            <p className="w-1/2">Email:</p>

            <p className="w-1/2">{singleValue?.email}</p>
          </div>

          <div className="w-full flex items-center text-[16px] mb-3 font-medium text-[#737373]">
            <p className="w-1/2">Phone Number:</p>

            <p className="w-1/2">{singleValue?.phone}</p>
          </div>

          <div className="w-full flex items-center text-[16px] mb-3 font-medium text-[#737373]">
            <p className="w-1/2">Role:</p>

            <p className="w-1/2">{singleValue?.role}</p>
          </div>

          <div className="w-full flex items-center text-[16px] mb-3 font-medium text-[#737373]">
            <p className="w-1/2">license(s)/certificate(s) :</p>

            <a
              className="w-1/2 flex gap-1 items-center"
              href={`${baseUrl}/storage/${singleValue?.license_certificate_number}`}
              target="_blank"
            >
              <span>
                {" "}
                <FiLink2 />{" "}
              </span>{" "}
              <span>View Certificate </span>{" "}
            </a>
          </div>

          <div className="w-full flex items-center text-[16px] mb-3 font-medium text-[#737373]">
            <p className="w-1/2">Upload additional certificates:</p>

            <a
              className="w-1/2 flex gap-1 items-center"
              href={`${baseUrl}/storage/${singleValue?.addisional_certificate}`}
              target="_blank"
            >
              <span>
                {" "}
                <FiLink2 />{" "}
              </span>{" "}
              <span>View Certificate </span>{" "}
            </a>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default SingleUserDetails;

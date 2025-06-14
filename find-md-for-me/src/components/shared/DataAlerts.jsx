import { useRouter } from "next/navigation";
import React, { useEffect } from "react";
import Swal from "sweetalert2";

const DataAlerts = ({ isShow, path, showMSG, isError }) => {
  const router = useRouter();
  useEffect(() => {
    if (isShow) {
      Swal.fire({
        title: "",
        text: "Intake form submited succesfully!",
        icon: "success",
        timer: 1500,
      }).then(()=> {router.push(path)})
     
    }
  }, [isShow, path, router]);

  useEffect(() => {
    if (isError) {
      Swal.fire({
        title: "",
        //@ts-ignore
        text: showMSG?.data?.message,
        icon: "error",
        timer: 1500,
      });
    }
  }, [isShow, showMSG, isError]);

  return null;
};

export default DataAlerts;

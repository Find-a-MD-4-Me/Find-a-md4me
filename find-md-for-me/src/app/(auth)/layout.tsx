import "@/app/globals.css";
import Link from "next/link";

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="  ">
      <div className="loginBgImg">
        <div className="  lg:h-[100vh] h-screen flex justify-center items-center ">
          {" "}
          {children}
        </div>
      </div>
    </div>
  );
};

export default layout;

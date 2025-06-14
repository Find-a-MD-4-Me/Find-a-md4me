import Navbar from "@/components/ClientDashboard/Navbar";
import Sidebar from "@/components/ClientDashboard/Sidebar";

const ClientLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <div className="grid grid-cols-12 lg:h-screen ">
        <div className="lg:col-span-2 col-span-12 lg:bg-[#E8F6FE]">
          <Sidebar />
        </div>
        <div className="lg:col-span-10 col-span-12 ">
          <div className="h-[80px] bg-[#E8F6FE] hidden lg:block  ">
            {" "}
            <Navbar />
          </div>
          <div>{children}</div>
        </div>
      </div>
    </div>
  );
};

export default ClientLayout;

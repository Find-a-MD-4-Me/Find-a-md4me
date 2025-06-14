import Banner from "@/components/websiteComponent/Home/Banner";
import BannerCard from "@/components/websiteComponent/Home/BannerCard";
import TotalCustomer from "@/components/websiteComponent/Home/TotalCustomer";

export default function Home() {
  return (
    <main>
      <div>
        <div className="">
          <Banner />
        </div>

        <div className="lg:-mt-[9%] lg:px-0 px-6">
          <BannerCard />
        </div>
        <TotalCustomer />
      </div>
    </main>
  );
}

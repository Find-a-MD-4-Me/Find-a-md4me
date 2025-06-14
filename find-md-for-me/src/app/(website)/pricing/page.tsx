
import dynamic from "next/dynamic";

const CustomTier = dynamic(() => import('@/components/websiteComponent/Pricing/CustomTier'), { ssr: false })
const OversightPricing = dynamic(() => import('@/components/websiteComponent/Pricing/OversightPricing'), { ssr: false })
const PricingTabs = dynamic(() => import('@/components/websiteComponent/Pricing/PricingTabs'), { ssr: false })

const PricingPage = () => {
  return (
    <div className="container">
      <OversightPricing />
      <PricingTabs />
      <CustomTier />
    </div>
  );
};

export default PricingPage;

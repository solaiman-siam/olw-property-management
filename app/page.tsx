import GettingStart from "@/components/homepage/GettingStart";
import GettingStar from "@/components/homepage/GettingStart";
import Hero from "@/components/homepage/Hero";
import Navbar from "@/components/homepage/Navbar";
import OurServices from "@/components/homepage/Ourservices";
import OurTools from "@/components/homepage/OurTools";
import PricingPlan from "@/components/homepage/PricingPlan";
import TrustedBy from "@/components/homepage/TrustedBy";


export default function Home() {
  return (
    <div className="flex flex-col flex-1 font-dm-sans   bg-[#fcfcfc] ">
      <Navbar/>
     <Hero/>
     <TrustedBy/>
     <OurServices/>
     <PricingPlan/>
     <OurTools/>
     <GettingStart/>
    </div>
  );
}

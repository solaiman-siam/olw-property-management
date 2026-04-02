import Hero from "@/components/homepage/Hero";
import Navbar from "@/components/homepage/Navbar";
import TrustedBy from "@/components/homepage/TrustedBy";


export default function Home() {
  return (
    <div className="flex flex-col flex-1 font-dm-sans   bg-zinc-50 ">
      <Navbar/>
     <Hero/>
     <TrustedBy/>
    </div>
  );
}

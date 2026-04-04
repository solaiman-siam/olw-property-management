import { images } from "@/lib/imageProvider";
import Image from "next/image";
import ScheduleMeetingBtn from "../shared/ScheduleMeetingBtn";

const Hero = () => {
  return (
    <div className=" w-full  h-100 md:h-200 bg-white flex justify-center items-center relative">
      <div className="bg-linear-0 to-primary01/10 absolute w-full h-20 top-0 left-0 right-0 from-transparent to-100%"></div>
      <Image
        className="pt-0 z-1 md:opacity-50 md:w-full h-100 md:h-full right-0"
        src={images.HeroBg}
        alt="hero-image"
        width={2000}
        height={2000}
      />
      <Image
        className=" absolute hidden md:flex md:p-40 z-2 md:top-0 left-0 right-0"
        src={images.HeroBalls}
        alt="balls-image"
        width={2000}
        height={2000}
      />
      <Image
        className=" absolute md:top-20 md:flex hidden z-3 w-100  md:w-300 md:p-20 "
        src={images.HeroLogo}
        alt="icons-image"
        width={2000}
        height={2000}
      />
      <div className="absolute z-4 top-10 md:top-1/2 left-1/2 -translate-x-1/2 md:-translate-y-1/2 flex flex-col items-center ">
        <h1 className="font-bold  text-3xl md:text-5xl text-nowrap">Airbnb Assistants For</h1>
        <h2 className="font-bold text-2xl md:text-4xl pt-2"> Property Management</h2>
        <p className="text-black pt-4 md:w-11/12 text-center md:text-base text-sm pb-4 font-medium">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>
        <ScheduleMeetingBtn/>
        <span className="underline font-medium mt-3 text-sm hover:cursor-pointer">
          See Pricing
        </span>
      </div>
    </div>
  );
};

export default Hero;

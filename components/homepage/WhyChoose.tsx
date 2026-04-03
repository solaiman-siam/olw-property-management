import { images } from "@/lib/imageProvider";
import { CheckIcon } from "lucide-react";
import Image from "next/image";
import ScheduleMeetingBtn from "../shared/ScheduleMeetingBtn";

const WhyChoose = () => {
  const features = [
    "Brilliant Client Service",
    "Flexibility & Adaptibility",
    "We make it Personal",
    "We have expart in our team",
  ];

  return (
    <div className="py-16">
      <div className="max-w-7xl relative p-20 mx-auto min-h-150 bg-[#fdebf0] rounded-4xl border border-primary01/20">
        {/* left part */}
        <h3 className="text-4xl w-5/12 pb-3 font-bold">
          Few Reasons Why you Choose us?
        </h3>
        <p className="font-semibold pt-4 w-[47%]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation{" "}
        </p>

        <div className="pt-6 pb-10 space-y-3">
          {features.map((feature) => (
            <li key={feature} className="flex items-center gap-3">
              <div className="rounded-full p-2 bg-[#fac4d2]">
                <CheckIcon className="size-4 text-primary01" />
              </div>
              <h4 className="font-semibold">{feature}</h4>
            </li>
          ))}
        </div>

        <ScheduleMeetingBtn/>
        {/* right part */}
        <div className="absolute top-1/2 -translate-y-1/2 right-10">
          <Image
            className="w-150"
            src={images.WhyChooseUs}
            alt="choose_us_image"
            width={2000}
            height={200}
          />
        </div>
      </div>
    </div>
  );
};

export default WhyChoose;

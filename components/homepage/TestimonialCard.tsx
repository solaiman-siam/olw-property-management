import { Star } from "lucide-react";
import Image, { StaticImageData } from "next/image";

const TestimonialCard = ({
  name,
  review,
  avatar,
}: {
  name: string;
  review: string;
  avatar: StaticImageData | string;
}) => {
  return (
    <div
      className={`
    mx-3 md:w-120 w-80 rounded-2xl flex items-center my-6 gap-4 md:gap-7 md:p-10 p-5 transition-all duration-200
    hover:bg-white bg-gray-100 hover:shadow-soft   
  `}
    >
      <div className="">
        <Image
          className="rounded-full object-cover md:size-20 size-15"
          src={avatar}
          alt=""
          width={56}
          height={56}
        />
      </div>

      <div className="flex flex-1 flex-col ">
        <h4 className={`font-bold pb-2 text-base text-black md:text-lg`}>{name}</h4>
        <p className="text-[13px] font-medium text-black leading-relaxed">
          {review}
        </p>

        <div className="flex items-center gap-1 mt-2">
            <Star className="size-5" fill="#ff9d00" stroke="0"/>
            <Star className="size-5" fill="#ff9d00" stroke="0"/>
            <Star className="size-5" fill="#ff9d00" stroke="0"/>
            <Star className="size-5" fill="#ff9d00" stroke="0"/>
            <Star className="size-5" fill="#ff9d00" stroke="0"/>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;

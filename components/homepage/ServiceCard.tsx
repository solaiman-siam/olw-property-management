import Image, { StaticImageData } from "next/image";
import Link from "next/link";

const ServiceCard = ({
  icon,
  title,
  description,
}: {
  icon: StaticImageData;
  title: string;
  description: string;
}) => {
  return (
    <div className="flex flex-col hover:-translate-y-1 bg-[#fcfcfc] hover:bg-white  border border-primary01/10 rounded-2xl p-7 shadow-sm hover:shadow-md transition-all duration-300">
      {/* Icon */}
      <div className="pb-6">
        <Image
          className="w-20"
          src={icon}
          width={400}
          height={400}
          alt={title}
        />
      </div>

      {/* Title */}
      <h3 className="text-[22px] w-9/12 font-bold text-gray-900 mb-3 leading-snug">
        {title}
      </h3>

      {/* Description */}
      <p className="text-sm font-medium text-black leading-relaxed flex-1">
        {description}
      </p>

      {/* Read More */}
      <div className="mt-6">
        <Link
          href={""}
          className="inline-flex items-center px-5 py-2 rounded-full border border-gray-300 text-sm font-medium text-gray-600 hover:border-[#E8385A] hover:text-[#E8385A] transition-all duration-200"
        >
          Read More
        </Link>
      </div>
    </div>
  );
};

export default ServiceCard;

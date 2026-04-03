import { images } from "@/lib/imageProvider";
import Image from "next/image";
import Marquee from "react-fast-marquee";

// Brand logos 
const brands = [
  { name: "Airbnb", src: images.Arbnb_Logo },
  { name: "Booking.com", src: images.BookingCom_Logo },
  { name: "Vrbo", src: images.Vrbo_Logo },
  { name: "Tripadvisor", src: images.TripAdvisor_Logo },
  { name: "Agoda", src: images.Agoda_Logo },
  { name: "HomeToGo", src: images.HomeGo_Logo },
  { name: "Expedia", src: images.Expedia_Logo }
];

export default function TrustedBy() {
  return (
    <section className="w-full bg-white py-10">
      {/* Heading */}
      <p className="text-center text-[16px] font-semibold text-gray-700 tracking-wide mb-8">
        Trusted by leaders in 50+ industries
      </p>

      {/* Marquee strip */}
      <div className="relative bg-[#F6F6F6] py-5">
        {/* Left fade */}
        <div className="pointer-events-none absolute left-0 top-0 h-full w-24 z-10 bg-linear-to-r from-white to-transparent" />

        <Marquee
          speed={45}
          gradient={false}
          pauseOnHover={true}
          autoFill
          className="overflow-hidden"
        >
          {brands.map((brand) => (
            <div key={brand.name} className="mx-8">
              <Image className="w-26" src={brand.src} width={400} height={400} alt="company_logo"/>
            </div>
          ))}
        </Marquee>

        {/* Right fade */}
        <div className="pointer-events-none absolute right-0 top-0 h-full w-24 z-10 bg-linear-to-l from-white to-transparent" />
      </div>
    </section>
  );
}
import { logos } from "@/public/data/homeData";
import Image from "next/image";

const OurTools = () => {

  return (
    <div>
      {/* ── Heading ── */}
      <div className="text-center mb-4">
        <h2 className="text-4xl font-bold">
          Our <span className="text-primary01">Tools</span>
        </h2>
      </div>

      {/* ── Subtext ── */}
      <p className="text-sm text-black font-medium text-center max-w-3xl mx-auto leading-relaxed mb-12">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
      </p>

       <section className="w-full bg-[#F7F7F8] py-14 px-4">
      <div className="max-w-5xl mx-auto">
        <div className="grid grid-cols-3 gap-4">
          {logos.map((logo) => {
            return (
              <button
                key={logo.id}
                className={`
                  group relative bg-white hover:-translate-y-1 hover:shadow-lg rounded-xl h-34 flex items-center justify-center
                  transition-all duration-200 cursor-pointer outline-none
                `}
              >
                {
                  <Image
                    src={logo.src}
                    alt={logo.name}
                    
                    className="object-contain "
                  />
                }
               
              </button>
            );
          })}
        </div>
      </div>
    </section>
    </div>
  );
};

export default OurTools;

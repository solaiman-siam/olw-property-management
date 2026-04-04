import { images } from "@/lib/imageProvider";
import { steps } from "@/public/data/homeData";
import Image from "next/image";

const GettingStart = () => {
  return (
    <div className="py-14 ">
      {/* ── Heading ── */}
      <div className="text-center mb-4">
        <h2 className="md:text-4xl text-3xl font-bold">
          Getting Started is <span className="text-primary01">Easy</span>
        </h2>
      </div>

      {/* ── Subtext ── */}
      <p className="text-sm md:px-0 px-4 text-black font-medium text-center max-w-3xl mx-auto leading-relaxed mb-12">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat.
      </p>

      <section className="w-full pt-6 px-10 md:px-4">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-10">
            {steps.map((step, index) => (
              <div
                key={step.id}
                className="flex  flex-col items-center text-center gap-6"
              >
                {/* Card with numbered badge */}
                <div className="relative hover:ring-1 ring-primary01/30 transition-all duration-300 rounded-xl w-full">
                  {/* Step number badge */}
                  <div className="absolute -top-6 -left-4 z-10  flex items-center justify-center">
                    <span className="text-xl absolute font-medium text-gray-800 tracking-wide">
                      {step.id}
                    </span>
                    <Image
                      className="md:w-16 w-14"
                      src={images.Number_Elips}
                      alt="number_icon"
                      width={200}
                      height={200}
                    />
                  </div>

                  {/* Icon card */}
                  <div className="w-full bg-gray-50 border border-gray-100 rounded-2xl pt-10 pb-8 px-6 flex items-center justify-center h-30 md:h-50">
                    <Image
                      className={`${index === 1 ? 'md:w-20 w-17' : 'md:w-14 w-13'}`}
                      src={step.icon}
                      alt="step_icon"
                      width={400}
                      height={400}
                    />
                  </div>
                </div>

                {/* Label */}
                <p className="md:text-base text-sm font-medium text-gray-800 leading-snug max-w-45">
                  {step.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default GettingStart;

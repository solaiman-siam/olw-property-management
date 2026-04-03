"use client";

import { images } from "@/lib/imageProvider";
import { plans } from "@/public/data/homeData";
import { CheckIcon, XIcon } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

const PricingPlan = () => {
  const [isYearly, setIsYearly] = useState(false);

  return (
    <div className="py-16">
      {/* heading section */}
      <section className="w-full bg-white pt-16 pb-10 px-4">
        <div className="max-w-3xl mx-auto text-center">
          {/* ── Heading ── */}
          <h2 className="text-4xl font-bold text-black  mb-4">
            Airnbn Assistent <span className="text-[#E8385A]">pricing</span>
          </h2>

          {/* ── Subheading ── */}
          <p className="text-base text-black font-medium mb-10">
            Choose a plan that’s right for you
          </p>

          {/* ── Toggle Row ── */}
          <div className="inline-flex items-center gap-4 relative">
            {/* Pay Monthly label */}
            <span
              className={`text-sm font-medium transition-colors duration-200 ${
                !isYearly ? "text-gray-900" : "text-gray-400"
              }`}
            >
              Pay Monthly
            </span>

            {/* Toggle Switch */}
            <button
              role="switch"
              aria-checked={isYearly}
              onClick={() => setIsYearly(!isYearly)}
              className={`relative w-12 h-6 rounded-full transition-colors duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#E8385A] focus-visible:ring-offset-2 ${
                isYearly ? "bg-[#E8385A]" : "bg-gray-300"
              }`}
            >
              <span
                className={`absolute top-0.5 left-0.5 w-5 h-5 bg-white rounded-full shadow-sm transition-transform duration-300 ${
                  isYearly ? "translate-x-6" : "translate-x-0"
                }`}
              />
            </button>

            {/* Pay Yearly label */}
            <span
              className={`text-sm font-medium transition-colors duration-200 ${
                isYearly ? "text-gray-900" : "text-gray-400"
              }`}
            >
              Pay Yearly
            </span>

            {/* ── Save badge with arrow ── */}
            <div className="absolute -right-48 -bottom-9 flex items-end gap-1 pointer-events-none">
              <Image
                className="w-24"
                src={images.DiscountArrow}
                width={400}
                height={400}
                alt="arrow"
              />
              <h4 className="text-primary01 font-medium pb-3">Save 25%</h4>
            </div>
          </div>
        </div>
      </section>
      {/* pricing section */}

      <section className="bg-white py-10 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-3 gap-4 rounded-2xl  ">
            {plans.map((plan, index) => (
              <div
                key={plan.name}
                className={`relative overflow-hidden hover:-translate-y-1.5 transition-all duration-300  flex border border-primary01/30 rounded-xl flex-col p-6 ${
                  plan.featured
                    ? "bg-primary01  text-white  shadow-2xl  z-10 "
                    : "bg-white  text-gray-800"
                }`}
              >
                {/* Plan Name */}
                <h3
                  className={`text-xl font-bold mb-2 ${
                    plan.featured ? "text-white" : "text-gray-900"
                  }`}
                >
                  {plan.name}
                </h3>

                {/* Description */}
                <p
                  className={`text-sm mb-6 leading-relaxed ${
                    plan.featured ? "text-pink-100" : "text-black"
                  }`}
                >
                  {plan.description}
                </p>

                {/* Price */}
                <div className="flex items-end gap-1 mb-6">
                  <span
                    className={`text-5xl font-medium leading-none ${
                      plan.featured ? "text-white" : "text-gray-900"
                    }`}
                  >
                    ${isYearly ? plan.yearlyPrice : plan.monthlyPrice}
                  </span>
                  <span
                    className={`text-sm mb-1 ${
                      plan.featured ? "text-pink-100" : "text-gray-400"
                    }`}
                  >
                    / {isYearly ? "Yearly" : "Monthly"}
                  </span>
                </div>

                {/*Button */}
                <button
                  className={`w-full py-3 px-6 rounded-md font-semibold text-sm transition-all duration-200 mb-8 cursor-pointer ${
                    plan.featured
                      ? "bg-white text-primary01 border-2 border-white hover:bg-pink-50 shadow-md"
                      : "bg-white text-primary01 border-2 border-primary01/90 hover:bg-pink-50"
                  }`}
                >
                  Get Started Now
                </button>

                {/* Features */}
                <ul className="space-y-3 flex-1">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-center  gap-3">
                      {feature.included ? (
                        <div className="rounded-full  p-2 bg-[#fac4d2]">
                          <CheckIcon className="size-4 text-primary01" />
                        </div>
                      ) : (
                        <div className="rounded-full p-2 bg-[#F7F8F9]">
                          <XIcon
                            className={`size-4 ${index === 1 ? "text-black" : ""}`}
                          />
                        </div>
                      )}
                      <span
                        className={`text-sm ${
                          plan.featured
                            ? feature.included
                              ? "text-white"
                              : "text-pink-200"
                            : feature.included
                              ? "text-black"
                              : "text-gray-400"
                        }`}
                      >
                        {feature.text}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default PricingPlan;

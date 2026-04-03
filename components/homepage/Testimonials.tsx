import React from "react";
import Marquee from "react-fast-marquee";
import TestimonialCard from "./TestimonialCard";
import { testimonials } from "@/public/data/homeData";

const Testimonials = () => {
  return (
    <div className="py-16">
      {/* ── Heading ── */}
      <div className="text-center mb-4">
        <h2 className="text-4xl font-bold">
          Check Our Clients <span className="text-primary01">Review</span>
        </h2>
      </div>

      {/* ── Subtext ── */}
      <p className="text-sm text-black font-medium text-center max-w-3xl mx-auto leading-relaxed mb-12">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat.
      </p>

      <section className="w-full  overflow-hidden">
        {/* Marquee */}
        <div className="relative">
          {/* Left fade */}
          <div className="pointer-events-none absolute left-0 top-0 h-full w-32 z-10 bg-linear-to-r from-gray-50 to-transparent" />

          <Marquee speed={40} gradient={false}  pauseOnHover={true}>
            {testimonials.map((t) => (
              <TestimonialCard
                key={t.id}
                name={t.name}
                avatar={t.avatar}
                review={t.review}
                rating={t.rating}
                featured={t.featured}
              />
            ))}
          </Marquee>

          {/* Right fade */}
          <div className="pointer-events-none absolute right-0 top-0 h-full w-32 z-10 bg-linear-to-l from-gray-50 to-transparent" />
        </div>
      </section>
    </div>
  );
};

export default Testimonials;

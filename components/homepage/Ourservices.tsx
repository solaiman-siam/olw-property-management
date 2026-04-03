import { services } from "@/public/data/homeData";
import ServiceCard from "./ServiceCard";

export default function OurServices() {
  return (
    <section className="w-full bg-white py-16 px-4">
      <div className="max-w-6xl mx-auto">
        {/* ── Heading ── */}
        <div className="text-center mb-4">
          <h2 className="text-4xl font-bold">
            Our <span className="text-primary01">Service</span>
          </h2>
        </div>

        {/* ── Subtext ── */}
        <p className="text-sm text-black font-medium text-center max-w-2xl mx-auto leading-relaxed mb-12">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>

        {/* ── Cards Grid ── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((service) => (
            <ServiceCard
              key={service.id}
              icon={service.icon}
              title={service.title}
              description={service.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

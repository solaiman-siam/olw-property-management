import { images } from "@/lib/imageProvider";
import Image from "next/image";
import Link from "next/link";

const avatars = [
  { id: 1, src: images.Avater2, alt: "Team member 1" },
  { id: 2, src: images.Avater1, alt: "Team member 2" },
  { id: 3, src: images.Avater3, alt: "Team member 3" },
];

export default function StillHaveQn() {
  return (
    <section className="w-full bg-gray-50 rounded-xl py-16 mt-16 px-4">
      <div className="max-w-lg mx-auto flex flex-col items-center text-center gap-5">
        {/* Overlapping Avatars */}
        <div className="flex items-center">
          {avatars.map((avatar, index) => (
            <div
              key={avatar.id}
              className={`relative ${index !== 0 ? "-ml-3" : ""} ${index !== 1 ? "z-10" : "z-20 scale-110 -translate-y-2"} `}
            >
              <Image
                src={avatar.src}
                alt={avatar.alt}
                width={44}
                height={44}
                className="w-14 h-14 rounded-full object-cover border-2 border-white"
              />
            </div>
          ))}
        </div>

        {/* Heading */}
        <h3 className="text-xl font-bold text-gray-900">
          Still have Questions?
        </h3>

        {/* Subtext */}
        <p className="text-sm text-gray-700 leading-relaxed">
          Cant find the answer youre looking for? Please chat to our friendly team.
        </p>

        <Link
          href={""}
          className="px-8 py-3 bg-[#E8385A] text-white text-sm font-semibold rounded-lg hover:bg-[#cc2d4e]  duration-200 shadow-[0_2px_8px_rgba(232,56,90,0.3)] hover:shadow-[0_4px_16px_rgba(232,56,90,0.4)] hover:-translate-y-px active:translate-y-0 transition-all"
        >
          Get in touch
        </Link>
      </div>
    </section>
  );
}

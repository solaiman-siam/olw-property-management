"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { images } from "@/lib/imageProvider";
import ScheduleMeetingBtn from "../shared/ScheduleMeetingBtn";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Pricing", href: "/pricing" },
  { label: "Blog", href: "/blog" },
  { label: "Resources", href: "/resources" },
];

export default function Navbar() {
  const [active, setActive] = useState("Home");

  return (
    <nav className="w-full bg-white border-b border-gray-100 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-8 h-17 flex items-center justify-between gap-8">
        {/* Logo */}
        <Link
          href="/"
          aria-label="Google Home"
          className="flex w-28 items-center shrink-0"
        >
          <Image src={images.GoogleLogo} width={400} height={400} alt="logo" />
        </Link>

        {/* Desktop Nav Links */}
        <ul className="hidden md:flex items-center gap-1 flex-1 justify-center list-none m-0 p-0">
          {navLinks.map((link) => (
            <li key={link.label}>
              <Link
                href={link.href}
                onClick={() => setActive(link.label)}
                className={`
                  relative px-4 py-2 text-[15px] font-medium rounded-md transition-all duration-200
                  ${
                    active === link.label
                      ? "text-primary01 font-semibold"
                      : "text-gray-800 hover:text-gray-900 hover:bg-gray-50"
                  }
                `}
              >
                {link.label}
                {active === link.label && (
                  <span className="absolute -bottom-0.5 left-4 right-4 h-[2.5px] bg-primary01 rounded-full" />
                )}
              </Link>
            </li>
          ))}
        </ul>

        {/* button */}
        <ScheduleMeetingBtn/>
      </div>
    </nav>
  );
}

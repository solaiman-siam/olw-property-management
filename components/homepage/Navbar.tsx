"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { images } from "@/lib/imageProvider";

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
  const [menuOpen, setMenuOpen] = useState(false);

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

        {/* CTA Button */}
        <Link
          href="/schedule"
          className="hidden group md:inline-flex items-center gap-2 px-5 py-2.75 bg-primary01 text-white text-sm font-semibold rounded-lg shrink-0 transition-all duration-200 hover:bg-[#dd2c4f] hover:-translate-y-px shadow-primary01/10 hover:shadow-primary01/10 active:translate-y-0"
        >
          Schedule A Meeting
          <span className="text-base group-hover:translate-x-1 transition-transform duration-200">→</span>
        </Link>

        {/* Hamburger Button */}
        <button
          className="md:hidden flex flex-col gap-1.25 p-1.5 bg-transparent border-none cursor-pointer"
          aria-label="Toggle menu"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span
            className={`block w-5.5 h-0.5 bg-gray-600 rounded transition-all duration-300 ${menuOpen ? "rotate-45 translate-y-1.75" : ""}`}
          />
          <span
            className={`block w-5.5 h-0.5 bg-gray-600 rounded transition-all duration-300 ${menuOpen ? "opacity-0" : ""}`}
          />
          <span
            className={`block w-5.5 h-0.5 bg-gray-600 rounded transition-all duration-300 ${menuOpen ? "-rotate-45 -translate-y-1.75" : ""}`}
          />
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden flex flex-col gap-1 px-6 pt-3 pb-5 bg-white border-t border-gray-100">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              onClick={() => {
                setActive(link.label);
                setMenuOpen(false);
              }}
              className={`
                px-3 py-2.5 text-[15px] font-medium rounded-md transition-all duration-200
                ${
                  active === link.label
                    ? "text-primary01 font-semibold"
                    : "text-gray-600 hover:bg-gray-50 hover:text-gray-900"
                }
              `}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/schedule"
            className="mt-3 inline-flex items-center gap-2 px-5 py-2.75 bg-primary01 text-white text-sm font-semibold rounded-lg w-fit shadow-primary01/10"
          >
            Schedule A Meeting →
          </Link>
        </div>
      )}
    </nav>
  );
}

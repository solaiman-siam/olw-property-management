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
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      {/* ── Backdrop overlay ── */}
      <div
        onClick={() => setMenuOpen(false)}
        className={`
          fixed inset-0 z-40 bg-black/40 backdrop-blur-sm transition-opacity duration-300 md:hidden
          ${menuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}
        `}
      />

      {/* ── Left Sidebar ── */}
      <aside
        className={`
          fixed top-0 left-0 h-full w-72 bg-white z-50 shadow-2xl
          flex flex-col px-6 py-8 gap-2
          transition-transform duration-300 ease-in-out md:hidden
          ${menuOpen ? "translate-x-0" : "-translate-x-full"}
        `}
      >
        {/* Sidebar Logo + Close button */}
        <div className="flex items-center justify-between mb-6">
          <Link
            href="/"
            className="flex w-24 items-center"
            onClick={() => setMenuOpen(false)}
          >
            <Image
              src={images.GoogleLogo}
              width={400}
              height={400}
              alt="logo"
            />
          </Link>
          <button
            onClick={() => setMenuOpen(false)}
            aria-label="Close menu"
            className="p-1.5 rounded-md hover:bg-gray-100 transition-colors duration-200"
          >
            <svg
              viewBox="0 0 24 24"
              className="w-5 h-5 text-gray-600"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              strokeLinecap="round"
            >
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>
        </div>

        {/* Sidebar Nav Links with staggered animation */}
        <nav className="flex flex-col gap-1 flex-1">
          {navLinks.map((link, index) => (
            <Link
              key={link.label}
              href={link.href}
              onClick={() => {
                setActive(link.label);
                setMenuOpen(false);
              }}
              style={{ transitionDelay: menuOpen ? `${index * 55}ms` : "0ms" }}
              className={`
                flex items-center gap-2 px-4 py-3 rounded-lg text-[15px] font-medium
                transition-all duration-300
                ${menuOpen ? "translate-x-0 opacity-100" : "-translate-x-6 opacity-0"}
                ${
                  active === link.label
                    ? "text-primary01 bg-pink-50 font-semibold"
                    : "text-gray-700 hover:bg-gray-50 hover:text-gray-900"
                }
              `}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Sidebar CTA with slide-up animation */}
        <div
          style={{ transitionDelay: menuOpen ? "360ms" : "0ms" }}
          className={`mt-4 transition-all duration-300 ${menuOpen ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"}`}
        >
          <ScheduleMeetingBtn />
        </div>
      </aside>

      {/* ── Main Navbar ── */}
      <nav className="w-full bg-white border-b border-gray-100 sticky top-0 z-30">
        <div className="max-w-7xl mx-auto px-4 md:px-8 h-17 flex items-center justify-between gap-4 md:gap-8">
          {/* Logo */}
          <Link
            href="/"
            aria-label="Logo"
            className="flex w-24 md:w-28 items-center shrink-0"
          >
            <Image
              src={images.GoogleLogo}
              width={400}
              height={400}
              alt="logo"
            />
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

          {/* Right side */}
          <div className="flex items-center gap-3">
            {/* Desktop CTA */}
            <div className="hidden md:block">
              <ScheduleMeetingBtn />
            </div>

            {/* Hamburger — mobile only */}
            <button
              className="md:hidden flex flex-col gap-1.25 p-1.5 cursor-pointer bg-transparent border-none"
              aria-label="Open menu"
              onClick={() => setMenuOpen(true)}
            >
              <span className="block w-5.5 h-0.5 bg-gray-700 rounded transition-all duration-300" />
              <span className="block w-3.5 h-0.5 bg-gray-700 rounded transition-all duration-300" />
              <span className="block w-5.5 h-0.5 bg-gray-700 rounded transition-all duration-300" />
            </button>
          </div>
        </div>
      </nav>
    </>
  );
}

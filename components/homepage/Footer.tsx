import { images } from "@/lib/imageProvider";
import { footerLinks, socialLinks } from "@/public/data/homeData";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className="w-full bg-white border-t border-gray-100">
      {/* ── Main Footer ── */}
      <div className="max-w-6xl mx-auto px-6 py-14 gap-10 grid  md:grid-cols-5 ">
        {/* Brand Column */}
        <div className="flex flex-col col-span-2 gap-5">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image
              className="object-contain w-28"
              src={images.GoogleLogo}
              alt="logo"
              width={200}
              height={200}
            />
          </Link>

          {/* Description */}
          <p className="text-sm text-gray-700 w-10/12 leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
            dictum aliquet accumsan porta lectus ridiculus in mattis. Netus
            sodales in volutpat ullamcorper amet adipiscing fermentum.
          </p>

          {/* Social Icons */}
          <div className="flex items-center gap-5 mt-1">
            {socialLinks.map((social) => (
              <Link
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                className="text-gray-500 hover:text-gray-900 transition-colors duration-200"
              >
                <Image
                  className="size-5 object-contain"
                  src={social.icon}
                  alt="social.label"
                  width={100}
                  height={100}
                />
              </Link>
            ))}
          </div>
        </div>

        {/* Link Columns */}
        <div className="col-span-3 grid-cols-3 gap-8 grid">
            {footerLinks.map((col) => (
          <div key={col.heading} className="flex flex-col gap-4">
            <h5 className="text-base font-bold text-gray-900">{col.heading}</h5>
            <ul className="flex flex-col gap-3">
              {col.links.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm font-medium text-gray-700 hover:text-primary01 transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
        </div>
      </div>

      {/* ── Bottom Bar ── */}
      <div className="w-full bg-[#230b41] py-4 px-6">
        <p className="text-center text-xs text-white">
          © Copyright 2024, All Rights Reserved by XYz
        </p>
      </div>
    </footer>
  );
};

export default Footer;

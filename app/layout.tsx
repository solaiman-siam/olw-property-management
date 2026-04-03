import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import "./globals.css";

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  weight: ["400","500","600","700"],
  subsets: ["latin"]
})

export const metadata: Metadata = {
  title: "Airbnb Assistant",
  description: "This is a modern SaaS landing page built for an Airbnb/short-term rental (STR) management assistant platform. It helps property hosts automate and streamline their rental operations.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={` h-full antialiased`}
    >
      <body className={`min-h-full font-dm-sans flex flex-col ${dmSans.variable}`}>{children}</body>
    </html>
  );
}

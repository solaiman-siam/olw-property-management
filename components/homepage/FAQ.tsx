"use client";

import { faqs } from "@/public/data/homeData";
import { MinusIcon, PlusIcon } from "lucide-react";
import { useState } from "react";

const FAQ = () => {
  const [openId, setOpenId] = useState<number | null>(1); 

  const toggle = (id: number) => setOpenId(openId === id ? null : id);

  return (
    <div className=" bg-gray-50 md:px-32 px-4 py-10 md:py-16 rounded-2xl max-w-5xl mx-auto">
      {/* ── Heading ── */}
      <div className="text-center mb-4">
        <h2 className="md:text-4xl text-3xl font-bold">
          Frequently asked <span className="text-primary01">questions</span>
        </h2>
      </div>

      {/* ── Subtext ── */}
      <p className="text-base md:px-0 px-6 text-black font-medium text-center max-w-2xl mx-auto leading-relaxed mb-12">
        Everything you need to know about the product and billing.
      </p>

      <section className="w-full   px-4">
        <div className="max-w-2xl mx-auto divide-y divide-primary01/20">
          {faqs.map((faq) => {
            const isOpen = openId === faq.id;
            return (
              <div key={faq.id} className="py-5">
                {/* Question row */}
                <button
                  onClick={() => toggle(faq.id)}
                  className="w-full flex items-center justify-between gap-4 text-left group outline-none"
                >
                  <span
                    className={`md:text-lg text-base font-bold transition-colors duration-200 ${
                      isOpen
                        ? "text-gray-900"
                        : "text-gray-700 group-hover:text-gray-900"
                    }`}
                  >
                    {faq.question}
                  </span>
                  {isOpen ? (
                    <div className="rounded-full size-6 border-primary01 text-primary01 flex justify-center items-center border">
                      <MinusIcon className="size-4.5" />
                    </div>
                  ) : (
                    <div className="rounded-full border-primary01 text-primary01 size-6 flex justify-center items-center border">
                      <PlusIcon className="size-4.5" />
                    </div>
                  )}
                </button>

                {/* Answer */}
                <div
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${
                    isOpen ? "max-h-40 opacity-100 mt-3" : "max-h-0 opacity-0"
                  }`}
                >
                  <p className="text-sm text-gray-600 leading-relaxed pr-10">
                    {faq.answer}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
};

export default FAQ;

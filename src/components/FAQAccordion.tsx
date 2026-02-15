"use client";

import { useState } from "react";
import type { FAQ } from "@/lib/data";

interface FAQAccordionProps {
  faqs: FAQ[];
}

export default function FAQAccordion({ faqs }: FAQAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="my-8">
      <h2 className="text-2xl font-bold text-gray-900 mb-4">
        Frequently Asked Questions
      </h2>
      <div
        className="space-y-3"
        itemScope
        itemType="https://schema.org/FAQPage"
      >
        {faqs.map((faq, index) => (
          <div
            key={index}
            itemScope
            itemProp="mainEntity"
            itemType="https://schema.org/Question"
            className="border border-gray-200 rounded-lg overflow-hidden"
          >
            <button
              onClick={() =>
                setOpenIndex(openIndex === index ? null : index)
              }
              className="w-full flex items-center justify-between px-5 py-4 text-left bg-gray-50 hover:bg-gray-100 transition-colors"
              aria-expanded={openIndex === index}
            >
              <span
                itemProp="name"
                className="text-base font-medium text-gray-900 pr-4"
              >
                {faq.question}
              </span>
              <svg
                className={`h-5 w-5 text-gray-500 shrink-0 transition-transform duration-200 ${
                  openIndex === index ? "rotate-180" : ""
                }`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>
            {openIndex === index && (
              <div
                itemScope
                itemProp="acceptedAnswer"
                itemType="https://schema.org/Answer"
                className="px-5 py-4 bg-white"
              >
                <p itemProp="text" className="text-gray-600 leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}

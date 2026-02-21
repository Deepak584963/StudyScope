"use client";

import { useState } from "react";
import type { FAQ } from "@/lib/data";

interface FAQAccordionProps {
  faqs: FAQ[];
}

export default function FAQAccordion({ faqs }: FAQAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="my-8 sm:my-10">
      <div className="flex items-center gap-3 mb-5">
        <div className="w-10 h-10 rounded-xl bg-maroon-50 flex items-center justify-center">
          <svg className="w-5 h-5 text-maroon-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
        </div>
        <h2 className="text-xl font-bold text-gray-900">
          Frequently Asked Questions
        </h2>
      </div>
      <div
        className="space-y-3"
        itemScope
        itemType="https://schema.org/FAQPage"
      >
        {faqs.map((faq, index) => {
          const isOpen = openIndex === index;
          return (
            <div
              key={index}
              itemScope
              itemProp="mainEntity"
              itemType="https://schema.org/Question"
              className={`rounded-2xl overflow-hidden transition-all duration-200 ${
                isOpen
                  ? "border-2 border-maroon-200 shadow-sm"
                  : "border border-border hover:border-gold-300"
              }`}
            >
              <button
                onClick={() => setOpenIndex(isOpen ? null : index)}
                className={`w-full flex items-center justify-between px-5 py-4 text-left transition-colors ${
                  isOpen ? "bg-maroon-50/50" : "bg-paper-warm hover:bg-paper-dark/50"
                }`}
                aria-expanded={isOpen}
              >
                <span
                  itemProp="name"
                  className={`text-base font-semibold pr-4 leading-snug ${
                    isOpen ? "text-maroon-800" : "text-gray-900"
                  }`}
                >
                  {faq.question}
                </span>
                <span className={`shrink-0 w-7 h-7 rounded-full flex items-center justify-center transition-all duration-300 ${
                  isOpen ? "bg-maroon-600 text-white rotate-180" : "bg-gray-100 text-gray-500"
                }`}>
                  <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
                  </svg>
                </span>
              </button>
              <div className={`transition-all duration-300 ease-in-out ${isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"} overflow-hidden`}>
                <div
                  itemScope
                  itemProp="acceptedAnswer"
                  itemType="https://schema.org/Answer"
                  className="px-5 py-4 bg-white border-t border-border/40"
                >
                  <p itemProp="text" className="text-gray-600 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

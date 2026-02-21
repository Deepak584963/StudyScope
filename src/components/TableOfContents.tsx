"use client";

import { useState } from "react";

interface TOCItem {
  id: string;
  text: string;
}

interface TableOfContentsProps {
  htmlContent: string;
}

function extractHeadings(html: string): TOCItem[] {
  const headings: TOCItem[] = [];
  const regex = /<h2[^>]*>(.*?)<\/h2>/gi;
  let match;
  while ((match = regex.exec(html)) !== null) {
    const text = match[1].replace(/<[^>]*>/g, "").trim();
    const id = text
      .toLowerCase()
      .replace(/[^a-z0-9\s-]/g, "")
      .replace(/\s+/g, "-")
      .replace(/-+/g, "-")
      .substring(0, 60);
    headings.push({ id, text });
  }
  return headings;
}

export default function TableOfContents({ htmlContent }: TableOfContentsProps) {
  const [isOpen, setIsOpen] = useState(true);
  const headings = extractHeadings(htmlContent);

  if (headings.length < 3) return null;

  return (
    <nav
      aria-label="Table of Contents"
      className="my-7 rounded-2xl border border-border/60 bg-gradient-to-br from-paper-warm to-paper overflow-hidden shadow-sm"
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between px-5 py-4 text-left hover:bg-paper-dark/30 transition-colors"
        aria-expanded={isOpen}
      >
        <span className="flex items-center gap-2.5 text-base font-bold text-gray-900">
          <svg className="w-5 h-5 text-maroon-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 10h16M4 14h16M4 18h16" /></svg>
          Table of Contents
          <span className="text-xs font-medium text-gray-400 bg-gray-100 px-2 py-0.5 rounded-full">{headings.length}</span>
        </span>
        <svg
          className={`h-5 w-5 text-gray-400 shrink-0 transition-transform duration-300 ${
            isOpen ? "rotate-180" : ""
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
      <div className={`transition-all duration-300 ease-in-out ${isOpen ? "max-h-[60rem] opacity-100" : "max-h-0 opacity-0"} overflow-hidden`}>
        <ol className="px-5 pb-5 space-y-0.5">
          {headings.map((heading, i) => (
            <li key={heading.id}>
              <a
                href={`#${heading.id}`}
                className="flex items-center gap-3 py-2 px-3 -mx-3 text-sm text-gray-600 hover:text-maroon-700 hover:bg-maroon-50/50 rounded-lg transition-all group"
              >
                <span className="shrink-0 w-6 h-6 rounded-lg bg-gray-100 group-hover:bg-maroon-100 text-[11px] font-bold text-gray-400 group-hover:text-maroon-600 flex items-center justify-center transition-colors">
                  {i + 1}
                </span>
                <span className="leading-snug">{heading.text}</span>
              </a>
            </li>
          ))}
        </ol>
      </div>
    </nav>
  );
}

export { extractHeadings };

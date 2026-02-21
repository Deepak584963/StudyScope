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
      className="my-6 rounded-xl border border-border bg-paper-warm"
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between px-5 py-3.5 text-left"
        aria-expanded={isOpen}
      >
        <span className="text-base font-bold text-gray-900">
          📑 Table of Contents
        </span>
        <svg
          className={`h-5 w-5 text-gray-500 shrink-0 transition-transform duration-200 ${
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
      {isOpen && (
        <ol className="px-5 pb-4 space-y-1.5 list-decimal list-inside">
          {headings.map((heading) => (
            <li key={heading.id}>
              <a
                href={`#${heading.id}`}
                className="text-sm text-maroon-700 hover:text-maroon-500 hover:underline transition-colors"
              >
                {heading.text}
              </a>
            </li>
          ))}
        </ol>
      )}
    </nav>
  );
}

export { extractHeadings };

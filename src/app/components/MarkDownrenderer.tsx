/* eslint-disable @next/next/no-img-element */
"use client";

import "highlight.js/styles/an-old-hope.css";
import ReactMarkdown from "react-markdown";
import rehypeHighlight from "rehype-highlight";
import rehypeSlug from "rehype-slug";
import rehypeRaw from "rehype-raw";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import Link from "next/link";

export default function MarkdownRenderer({ content }: { content: string }) {
  return (
    <ReactMarkdown
      rehypePlugins={[
        rehypeRaw,
        rehypeHighlight,
        rehypeSlug,
        rehypeAutolinkHeadings,
      ]}
      components={{
        h1: ({ children }) => (
          <h1 className="mt-8 mb-4 text-3xl font-bold">{children}</h1>
        ),
        h2: ({ children }) => (
          <h2 className="mt-6 mb-3 text-2xl font-semibold">{children}</h2>
        ),
        h3: ({ children }) => (
          <h3 className="mt-4 mb-2 text-xl font-semibold">{children}</h3>
        ),
        pre: ({ children }) => (
          <div className="my-3 relative w-full no-scroll-bar">
            <pre className="rounded-lg bg-[#1C1D21] p-2">
              {children}
            </pre>
          </div>
        ),
        a: ({ href, children }) => (
          <Link
            href={(href as string) || "https://neo-wifi.vercel.app"}
            target="_blank"
            className="underline text-blue-500"
          >
            {children}
          </Link>
        ),
        img: ({ src, alt }) => (
          <img src={src as string} alt={alt as string} width="100%" height="auto" className="mx-auto" fetchPriority="high" />
        )
      }}
    >
      {content}
    </ReactMarkdown>
  );
}

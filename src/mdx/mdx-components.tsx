import type React from "react";
import type { MDXComponents } from "mdx/types";
import { Callout } from "@/components/mdx/Callout";
import { Code } from "@/components/mdx/Code";
import { Figure } from "@/components/mdx/Figure";
import { Footnote } from "@/components/mdx/Footnote";
import { Image } from "@/components/mdx/Image";

function headingId(children: React.ReactNode): string {
  const text = typeof children === "string" ? children : "";
  return text
    .toLowerCase()
    .replace(/[^\w\s-]/g, "")
    .replace(/\s+/g, "-");
}

export const mdxComponents: MDXComponents = {
  // Default markdown elements → your typography
  p: (props) => <p className="leading-relaxed text-foreground/85" {...props} />,
  h2: ({ children, ...props }) => (
    <h2 id={headingId(children)} className="scroll-mt-24 text-xl font-semibold pt-4" {...props}>
      {children}
    </h2>
  ),
  h3: ({ children, ...props }) => (
    <h3 id={headingId(children)} className="scroll-mt-24 text-lg font-semibold pt-3" {...props}>
      {children}
    </h3>
  ),
  h4: ({ children, ...props }) => (
    <h4 id={headingId(children)} className="scroll-mt-24 text-base font-semibold pt-2" {...props}>
      {children}
    </h4>
  ),
  ul: (props) => <ul className="list-disc pl-6 space-y-1.5 text-foreground/85" {...props} />,
  ol: (props) => <ol className="list-decimal pl-6 space-y-1.5 text-foreground/85" {...props} />,
  blockquote: (props) => <Callout {...props} />,

  // Explicit templates (preferred for code/images)
  Callout,
  Code,
  Figure,
  Footnote,
  Image,
};

export function useMDXComponents(overrides?: MDXComponents): MDXComponents {
  return { ...mdxComponents, ...overrides };
}

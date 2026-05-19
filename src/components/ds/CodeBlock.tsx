import { cn } from "@/lib/utils";
import { Card } from "./Card";

interface Props {
  code: string;
  language?: string;
  filename?: string;
  className?: string;
}

function escapeHtml(s: string) {
  return s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}

function highlight(code: string) {
  let c = escapeHtml(code);
  c = c.replace(/(\/\/[^\n]*|\/\*[\s\S]*?\*\/)/g, '<span style="color:#7d8590">$1</span>');
  c = c.replace(/\b(interface|function|const|let|var|return|if|else|for|import|from|export|type|async|await|new)\b/g, '<span style="color:#ff7b72">$1</span>');
  c = c.replace(/\b(number|string|boolean|Task|EngineerSystem|Array|Promise)\b/g, '<span style="color:#79c0ff">$1</span>');
  c = c.replace(/('[^']*'|"[^"]*"|`[^`]*`)/g, '<span style="color:#a5d6ff">$1</span>');
  return c;
}

export function CodeBlock({ code, filename, language = "ts", className }: Props) {
  return (
    <Card variant="terminal" padding="p-0" title={filename ?? language} className={cn(className)}>
      <pre className="overflow-x-auto p-4 text-[13px] leading-relaxed">
        <code dangerouslySetInnerHTML={{ __html: highlight(code) }} />
      </pre>
    </Card>
  );
}

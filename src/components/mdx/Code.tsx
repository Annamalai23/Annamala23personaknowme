import { CodeBlock } from "@/components/ds/CodeBlock";

type Props = {
  language?: string;
  filename?: string;
  children: string;
};

export function Code({ language = "ts", filename, children }: Props) {
  return <CodeBlock code={String(children).trim()} language={language} filename={filename} />;
}

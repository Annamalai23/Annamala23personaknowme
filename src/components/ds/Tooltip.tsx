import * as RT from "@radix-ui/react-tooltip";
import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

export function Tooltip({ content, side = "top", children }: { content: ReactNode; side?: "top" | "bottom" | "left" | "right"; children: ReactNode }) {
  return (
    <RT.Provider delayDuration={150}>
      <RT.Root>
        <RT.Trigger asChild>{children}</RT.Trigger>
        <RT.Portal>
          <RT.Content side={side} className={cn("z-50 rounded-md border border-border bg-card px-2 py-1 font-mono text-xs text-foreground shadow-md")}>{content}</RT.Content>
        </RT.Portal>
      </RT.Root>
    </RT.Provider>
  );
}

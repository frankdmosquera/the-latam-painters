"use client";

import { useState } from "react";
import { Check, Copy } from "lucide-react";

export function CopySwatchButton({ hex }: { hex: string }) {
  const [copied, setCopied] = useState(false);

  async function handleCopy() {
    try {
      await navigator.clipboard.writeText(hex);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1500);
    } catch {
      // Clipboard API unavailable (e.g. insecure context) — hex is still visible to copy by hand.
    }
  }

  return (
    <button
      type="button"
      onClick={handleCopy}
      className="group/copy inline-flex items-center gap-1.5 font-mono text-xs text-foreground transition-colors hover:text-primary"
    >
      <span
        aria-hidden
        className="size-2.5 shrink-0 rounded-full ring-1 ring-foreground/10"
        style={{ backgroundColor: hex }}
      />
      {copied ? "Copied" : hex.toUpperCase()}
      {copied ? (
        <Check className="size-3 text-primary" />
      ) : (
        <Copy className="size-3 opacity-0 transition-opacity group-hover/copy:opacity-100" />
      )}
    </button>
  );
}

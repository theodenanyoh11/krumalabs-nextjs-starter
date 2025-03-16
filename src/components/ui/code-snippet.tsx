"use client";

import { Button } from "@/components/ui/button";
import { Copy } from "lucide-react";
import { useState } from "react";

interface CodeSnippetProps {
  code: string;
}

export function CodeSnippet({ code }: CodeSnippetProps) {
  const [isCopied, setIsCopied] = useState(false);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(code);
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 2000);
  };

  return (
    <div className="bg-zinc-950 text-zinc-50 p-4 rounded-lg font-mono text-sm relative">
      {code.split('\n').map((line, i) => (
        <div key={i} className="text-zinc-200">{line}</div>
      ))}
      <Button
        size="icon"
        variant="ghost"
        className="absolute right-2 top-2 hover:bg-zinc-800 text-zinc-400 hover:text-zinc-50"
        onClick={copyToClipboard}
      >
        <Copy className="h-4 w-4" />
        <span className="sr-only">Copy code</span>
      </Button>
      {isCopied && (
        <span className="absolute right-2 top-2 text-sm text-green-400 font-sans">
          Copied!
        </span>
      )}
    </div>
  );
}
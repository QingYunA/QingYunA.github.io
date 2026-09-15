"use client";

import { useLanguage } from "@/components/language-provider";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function LanguageToggle({ className }: { className?: string }) {
  const { language, toggleLanguage } = useLanguage();

  return (
    <Button
      variant="ghost"
      type="button"
      size="icon"
      className={cn("p-0 font-sans text-xs font-bold tracking-wider flex items-center justify-center rounded-3xl", className)}
      onClick={toggleLanguage}
      aria-label="Toggle language"
    >
      <span className="text-[12px] font-semibold text-foreground">
        {language === "zh" ? "EN" : "中"}
      </span>
    </Button>
  );
}

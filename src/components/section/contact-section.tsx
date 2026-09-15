"use client";

import { useState } from "react";
import Link from "next/link";
import { FlickeringGrid } from "@/components/magicui/flickering-grid";
import { DATA } from "@/data/resume";
import { useLanguage } from "@/components/language-provider";
import { Mail, Copy, Check, Send } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function ContactSection() {
  const { language } = useLanguage();
  const data = DATA[language];
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText("serein7z@163.com");
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (e) {}
  };

  return (
    <div className="border rounded-2xl p-8 sm:p-10 relative bg-card/40 backdrop-blur-sm">
      <div className="absolute -top-4 border bg-primary z-10 rounded-xl px-4 py-1 left-1/2 -translate-x-1/2 shadow-xs">
        <span className="text-background text-sm font-semibold tracking-wide">
          {data.sections.contactBadge}
        </span>
      </div>
      <div className="absolute inset-0 top-0 left-0 right-0 h-1/2 rounded-2xl overflow-hidden pointer-events-none">
        <FlickeringGrid
          className="h-full w-full"
          squareSize={2}
          gridGap={2}
          style={{
            maskImage: "linear-gradient(to bottom, black, transparent)",
            WebkitMaskImage: "linear-gradient(to bottom, black, transparent)",
          }}
        />
      </div>
      <div className="relative flex flex-col items-center gap-5 text-center">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
          {data.sections.contactTitle}
        </h2>
        <p className="mx-auto max-w-lg text-muted-foreground text-sm sm:text-base leading-relaxed text-balance">
          {data.sections.contactSubtitle}
        </p>

        {/* 重点突出的邮箱交互卡片 */}
        <div className="flex flex-col sm:flex-row items-center gap-3 p-2 px-3 border bg-background/80 rounded-xl shadow-xs">
          <div className="flex items-center gap-2 px-2 text-foreground font-mono text-sm font-medium">
            <Mail className="size-4 text-muted-foreground" />
            <span>serein7z@163.com</span>
          </div>
          <div className="flex items-center gap-2">
            <Button
              type="button"
              size="sm"
              variant="outline"
              className="h-8 px-3 text-xs gap-1.5 cursor-pointer"
              onClick={handleCopyEmail}
            >
              {copied ? (
                <>
                  <Check className="size-3.5 text-emerald-500" />
                  <span className="text-emerald-600 dark:text-emerald-400 font-medium">
                    {data.sections.emailCopied}
                  </span>
                </>
              ) : (
                <>
                  <Copy className="size-3.5 text-muted-foreground" />
                  <span>{data.sections.copyEmail}</span>
                </>
              )}
            </Button>
            <Button
              asChild
              type="button"
              size="sm"
              className="h-8 px-3 text-xs gap-1.5 bg-primary text-primary-foreground hover:opacity-90"
            >
              <a href="mailto:serein7z@163.com">
                <Send className="size-3.5" />
                <span>{language === "zh" ? "写信" : "Send Mail"}</span>
              </a>
            </Button>
          </div>
        </div>

        <p className="text-xs text-muted-foreground mt-1">
          {language === "zh" ? "亦可通过 " : "Or connect via "}
          <Link
            href={data.contact.social.X.url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary underline underline-offset-4 hover:opacity-80 font-medium"
          >
            X (@smk7z)
          </Link>
          {language === "zh" ? " 给我发送私信。" : " for direct messaging."}
        </p>
      </div>
    </div>
  );
}

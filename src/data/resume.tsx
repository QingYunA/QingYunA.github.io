import { Icons } from "@/components/icons";
import { HomeIcon } from "lucide-react";
import { NextjsIconDark } from "@/components/ui/svgs/nextjsIconDark";
import { Typescript } from "@/components/ui/svgs/typescript";
import { Python } from "@/components/ui/svgs/python";
import { Postgresql } from "@/components/ui/svgs/postgresql";
import { Docker } from "@/components/ui/svgs/docker";

const EMAIL = "sorlia7z@gmail.com";

export const DATA = {
  url: "https://qingyuna.github.io",
  avatarUrl: "/me.png",
  name: "Cyan",
  greetingName: "Cyan",
  initials: "CY",
  description: "Building agent skills and developer tooling for LLMs.",
  summary:
    "I build open-source tools that make LLM output easier to read and use.\n\n- 💻 **Creator of Answer me with HTML, agent-html and Pagepod**\n- 📄 **Answer me with HTML** is an agent skill that answers hard questions with a one-page HTML instead of a wall of text.",
  contact: {
    email: EMAIL,
    tel: "",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/QingYunA",
        icon: Icons.github,
        navbar: true,
      },
      X: {
        name: "X",
        url: "https://x.com/smk7z",
        icon: Icons.x,
        navbar: true,
      },
      Email: {
        name: EMAIL,
        url: `mailto:${EMAIL}`,
        icon: Icons.email,
        navbar: true,
      },
    },
  },
  skills: [
    { name: "Python", icon: Python },
    { name: "PyTorch", icon: Python },
    { name: "LLM & Agents", icon: Icons.openai },
    { name: "Next.js", icon: NextjsIconDark },
    { name: "TypeScript", icon: Typescript },
    { name: "Tailwind CSS", icon: Icons.tailwindcss },
    { name: "PostgreSQL", icon: Postgresql },
    { name: "Docker", icon: Docker },
  ],
  navbar: [{ href: "/", icon: HomeIcon, label: "Home" }],
  sections: {
    about: "About",
    skills: "Skills",
    projectsBadge: "Projects",
    projectsTitle: "Featured Projects",
    projectsSubtitle: "Open-source tools for working with LLM agents.",
    contactBadge: "Contact",
    contactTitle: "Get in Touch",
    contactSubtitle:
      "Open to discussions about AI agents and developer tooling. Feel free to reach out via X or email:",
    copyEmail: "Copy Email",
    emailCopied: "Copied to clipboard!",
  },
  projects: [
    {
      title: "Answer me with HTML",
      href: "https://github.com/QingYunA/answer-me-with-html",
      dates: "⭐ 899 Stars · 2026",
      active: true,
      description:
        "Agent skill that answers hard questions with a one-page HTML instead of a wall of text. The model writes a short Markdown draft; a bundled CLI handles layout, auto-laid-out diagrams and a controlled-English writing check. Measured: 7.4× fewer output tokens and 3.6× faster than asking for HTML directly.",
      technologies: ["Agent Skill", "CLI", "Markdown to HTML", "ASD-STE100 check"],
      links: [
        {
          type: "Source",
          href: "https://github.com/QingYunA/answer-me-with-html",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/answer-me-logo.svg",
      video: "",
    },
    {
      title: "agent-html",
      href: "https://github.com/QingYunA/agent-html",
      dates: "⭐ 43 Stars · 2026",
      active: true,
      description:
        "A zero-dependency standalone HTML design system & component spec built for AI Agents. No CDN risks, native dark mode, and 19 quality gates.",
      technologies: ["Single-file HTML", "AI Agent Skill", "shadcn/ui Spec", "Native SVG"],
      links: [
        {
          type: "Source",
          href: "https://github.com/QingYunA/agent-html",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/agent-html-logo.svg",
      video: "",
    },
    {
      title: "Pagepod",
      href: "https://github.com/QingYunA/Pagepod",
      dates: "⭐ 2 Stars · 2026",
      active: true,
      description:
        "Modern lightweight hosting platform for standalone HTML apps. Features instant zero-build deployments, hardened CSP sandbox, and custom domains.",
      technologies: ["Next.js", "Cloudflare R2", "PostgreSQL", "Tailwind CSS"],
      links: [
        {
          type: "Source",
          href: "https://github.com/QingYunA/Pagepod",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/pagepod-logo.png",
      video: "",
    },
  ],
  work: [] as {
    company: string;
    href: string;
    badges: string[];
    location: string;
    title: string;
    logoUrl: string;
    start: string;
    end: string;
    description: string;
  }[],
  education: [] as {
    school: string;
    href: string;
    degree: string;
    logoUrl: string;
    start: string;
    end: string;
  }[],
  hackathons: [] as {
    title: string;
    dates: string;
    location: string;
    description: string;
    image: string;
    mlh?: string;
    links: { title: string; icon: React.ReactNode; href: string }[];
  }[],
};

import { Icons } from "@/components/icons";
import { HomeIcon } from "lucide-react";
import { NextjsIconDark } from "@/components/ui/svgs/nextjsIconDark";
import { Typescript } from "@/components/ui/svgs/typescript";
import { Python } from "@/components/ui/svgs/python";
import { Postgresql } from "@/components/ui/svgs/postgresql";
import { Docker } from "@/components/ui/svgs/docker";

export const DATA = {
  name: "Cyan 云辰",
  initials: "CY",
  url: "https://qingyuna.github.io",
  location: "Remote",
  locationLink: "https://github.com/QingYunA",
  description:
    "算法工程师 · 独立开发者 · 出海中 🚢",
  summary:
    "专注 AI Agent、全栈架构与出海产品构建。追求极致工程美感，用算法放大生产力杠杆。\n\n- 👨‍💻 **算法工程师 | 独立开发者 | 出海中 🚢**\n- ✍️ **梦想是改变世界**\n- 💻 **agent html | Pagepod 开发者**\n- 🍚 **me + ai = meal**",
  avatarUrl: "/me.png",
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
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
  ],
  contact: {
    email: "serein7z@163.com",
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
        name: "Email",
        url: "mailto:serein7z@163.com",
        icon: Icons.email,
        navbar: true,
      },
    },
  },
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
  projects: [
    {
      title: "agent-html",
      href: "https://github.com/QingYunA/agent-html",
      dates: "⭐ 29 Stars · 2026",
      active: true,
      description:
        "专为 AI Agent 深度设计的纯原生单文件 HTML 设计系统与母版库。零外部依赖、零 CDN 风险、内置暗黑模式与 19 道自动化质量门禁。",
      technologies: [
        "Single-file HTML",
        "AI Agent Skill",
        "shadcn/ui Spec",
        "Native SVG",
      ],
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
      dates: "⭐ 1 Star · 2026",
      active: true,
      description:
        "轻量现代化 HTML 原生应用托管与分发平台。支持单文件与 ZIP 多版本瞬时部署、硬核 CSP 沙箱物理隔离与自定义独立域名绑定。",
      technologies: [
        "Next.js",
        "Cloudflare R2",
        "PostgreSQL",
        "Tailwind CSS",
      ],
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
};

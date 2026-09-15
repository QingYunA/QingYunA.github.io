import { Icons } from "@/components/icons";
import { HomeIcon } from "lucide-react";
import { NextjsIconDark } from "@/components/ui/svgs/nextjsIconDark";
import { Typescript } from "@/components/ui/svgs/typescript";
import { Python } from "@/components/ui/svgs/python";
import { Postgresql } from "@/components/ui/svgs/postgresql";
import { Docker } from "@/components/ui/svgs/docker";

export const COMMON_DATA = {
  url: "https://qingyuna.github.io",
  avatarUrl: "/me.png",
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
        name: "serein7z@163.com",
        url: "mailto:serein7z@163.com",
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
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
  ],
};

export const DATA = {
  zh: {
    ...COMMON_DATA,
    name: "Cyan 云辰",
    greetingName: "Cyan",
    initials: "CY",
    location: "远程 / Remote",
    locationLink: "https://github.com/QingYunA",
    description: "算法工程师 · 独立开发者 · 出海中 🚢",
    summary:
      "专注 AI Agent、全栈架构与出海产品构建。追求极致工程美感，用算法放大生产力杠杆。\n\n- 👨‍💻 **算法工程师 | 独立开发者 | 出海中 🚢**\n- ✍️ **梦想是改变世界**\n- 💻 **agent-html | Pagepod 开发者**",
    sections: {
      about: "关于我",
      skills: "技能栈",
      projectsBadge: "我的作品",
      projectsTitle: "精选开源与出海项目",
      projectsSubtitle: "专注高杠杆算法落地与极简工程交付。以下为我的代表性开源与出海作品。",
      contactBadge: "联系方式",
      contactTitle: "保持联系",
      contactSubtitle: "欢迎交流出海、AI Agent 或技术合作。可通过 X 私信或直接发送邮件至：",
      copyEmail: "复制邮箱",
      emailCopied: "已复制到剪贴板！",
    },
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
            type: "GitHub 源码",
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
            type: "GitHub 源码",
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
  },
  en: {
    ...COMMON_DATA,
    name: "Cyan",
    greetingName: "Cyan",
    initials: "CY",
    location: "Remote",
    locationLink: "https://github.com/QingYunA",
    description: "Algorithm Engineer · Indie Hacker · Going Global 🚢",
    summary:
      "Focused on AI Agents, full-stack architecture, and global indie hacking. Committed to pragmatic engineering and high-leverage software.\n\n- 👨‍💻 **Algorithm Engineer | Indie Hacker | Going Global 🚢**\n- ✍️ **Dream: Make a dent in the universe**\n- 💻 **Creator of agent-html & Pagepod**",
    sections: {
      about: "About",
      skills: "Skills",
      projectsBadge: "My Projects",
      projectsTitle: "Featured Projects & Open Source",
      projectsSubtitle: "Focused on high-leverage software and pragmatic craftsmanship. Here are some of my favorite works.",
      contactBadge: "Contact",
      contactTitle: "Get in Touch",
      contactSubtitle: "Open for discussions on AI Agents, global expansion, or tech collaboration. Feel free to reach out via X or email directly to:",
      copyEmail: "Copy Email",
      emailCopied: "Copied to clipboard!",
    },
    projects: [
      {
        title: "agent-html",
        href: "https://github.com/QingYunA/agent-html",
        dates: "⭐ 29 Stars · 2026",
        active: true,
        description:
          "A zero-dependency standalone HTML design system & component spec built for AI Agents. No CDN risks, native dark mode, and 19 quality gates.",
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
          "Modern lightweight hosting platform for standalone HTML apps. Features instant zero-build deployments, hardened CSP sandbox, and custom domains.",
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
  },
};

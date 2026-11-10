
import type { ComponentType } from "react";
import {
  FaCss3Alt,
  FaGitAlt,
  FaGithub,
  FaHtml5,
  FaJs,
  FaNodeJs,
  FaNpm,
  FaReact,
} from "react-icons/fa6";
import {
  SiExpress,
  SiMongodb,
  SiNextdotjs,
  SiPostgresql,
  SiTailwindcss,
  SiTypescript,
  SiVercel,
} from "react-icons/si";
import { Code, KeyRound, Palette, Webhook } from "lucide-react";

export type SkillIcon = ComponentType<{ className?: string }>;

export interface SkillCategory {
  title: string;
  blurb: string;
  skills: {
    name: string;
    Icon: SkillIcon;
    level: number;
  }[];
}

export const skillCategories: SkillCategory[] = [
  {
    title: "Frontend",
    blurb: "Interfaces that stay clear on every screen size.",
    skills: [
      { name: "HTML5", Icon: FaHtml5, level: 85 },
      { name: "CSS3", Icon: FaCss3Alt, level: 80 },
      { name: "JavaScript", Icon: FaJs, level: 70 },
      { name: "TypeScript", Icon: SiTypescript, level: 65 },
      { name: "React.js", Icon: FaReact, level: 75 },
      { name: "Next.js", Icon: SiNextdotjs, level: 70 },
      { name: "Tailwind CSS", Icon: SiTailwindcss, level: 80 },
      { name: "DaisyUI", Icon: Palette, level: 75 },
    ],
  },
  {
    title: "Backend",
    blurb: "Servers, APIs and sign-in flows.",
    skills: [
      { name: "Node.js", Icon: FaNodeJs, level: 60 },
      { name: "Express.js", Icon: SiExpress, level: 55 },
      { name: "REST APIs", Icon: Webhook, level: 65 },
      { name: "Authentication", Icon: KeyRound, level: 55 },
    ],
  },
  {
    title: "Database",
    blurb: "Storing and querying application data.",
    skills: [
      { name: "MongoDB", Icon: SiMongodb, level: 65 },
      { name: "PostgreSQL", Icon: SiPostgresql, level: 45 },
    ],
  },
  {
    title: "Tools",
    blurb: "Everyday workflow and deployment.",
    skills: [
      { name: "Git", Icon: FaGitAlt, level: 70 },
      { name: "GitHub", Icon: FaGithub, level: 75 },
      { name: "VS Code", Icon: Code, level: 85 },
      { name: "npm", Icon: FaNpm, level: 70 },
      { name: "Vercel", Icon: SiVercel, level: 65 },
    ],
  },
];

import React from "react";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import justlinkImg from '@/public/justlink.png'

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Graduated university",
    location: "Dnipro, Ukraine",
    description:
      "I studied at UMSF with a degree in Computer Science. Studied C++, C, C#, SQL, JavaScript. Started in game development",
    icon: React.createElement(LuGraduationCap),
    date: "2017-2022",
  },
  {
    title: "Front-End Developer",
    location: "Ukraine",
    description:
      "After graduating from university, I wanted to become a front-end developer, and in the future a full-stack developer.",
    icon: React.createElement(FaReact),
    date: "2022 - present",
  },
] as const;

export const projectsData = [
  {
    title: "CorpComment",
    description:
      "I created this project while learning Next.js. User can share links in one place.",
    tags: ["React", "Next.js", "MongoDB", "Tailwind", "Prisma", "NextAuth"],
    imageUrl: justlinkImg,
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Git",
  "Tailwind",
  "Prisma",
  "MongoDB",
  "Redux Toolkit",
  "Framer Motion",
  "SASS",
] as const;
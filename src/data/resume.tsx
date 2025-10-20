import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "Janith Pamuditha Madarasinghe",
  initials: "JPM",
  url: "https://janithpm.github.io",
  location: "Matara, Sri Lanka",
  locationLink: "https://www.google.com/maps/place/matara",
  description:
    "Software Engineer specializing in full-stack web and mobile development. Focused on crafting scalable systems and intuitive user experiences.",
  summary:
    "I’m a Software Engineer passionate about building meaningful digital products that blend technology, creativity, and usability. My work spans web apps, mobile apps, and intelligent systems — always driven by clean architecture, performance, and design clarity. I enjoy taking complex ideas and turning them into elegant, impactful experiences.",
  avatarUrl: "/me.png",

  skills: [
    "React",
    "Next.js",
    "TypeScript",
    "Node.js",
    "Python",
    "Java",
    "Spring Boot",
    "Express.js",
    "MySQL",
    "PostgreSQL",
    "MongoDB",
    "Flutter",
    "Docker",
    "Firebase",
    "TailwindCSS",
    "AWS",
    "Git",
    "Figma",
  ],

  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/blog", icon: NotebookIcon, label: "Blog" },
  ],

  contact: {
    email: "janithpm0@gmail.com",
    tel: "+94704685081",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/Janithpm",
        icon: Icons.github,
        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/janithpm",
        icon: Icons.linkedin,
        navbar: true,
      },
      X: {
        name: "X",
        url: "https://x.com/",
        icon: Icons.x,
        navbar: true,
      },
      email: {
        name: "Send Email",
        url: "mailto:janithpm0@gmail.com",
        icon: Icons.email,
        navbar: false,
      },
    },
  },

  work: [
    {
      company: "Ideaboost (Pvt) Ltd",
      href: "https://ideaboost.lk",
      badges: [],
      location: "Colombo, Sri Lanka",
      title: "Software Engineer",
      logoUrl: "/ideaboost.png",
      start: "August 2022",
      end: "August 2024",
      description:
        "Designed and developed full-stack web applications and internal tools using React, Node.js, and Spring Boot. Collaborated with cross-functional teams to build scalable systems, enhance performance, and improve UI/UX consistency across multiple projects.",
    },
  ],

  education: [
    {
      school: "University of Colombo School of Computing",
      href: "https://ucsc.cmb.ac.lk",
      degree: "BSc (Hons) in Software Engineering",
      logoUrl: "/ucsc.png",
      start: "2019",
      end: "2023",
    },
  ],

  projects: [
    {
      title: "Govithena",
      href: "https://github.com/Govithena/govithena.git",
      dates: "2023",
      active: true,
      description:
        "A web-based investment and support platform that connects Sri Lankan farmers with investors and agricultural consultants to promote efficient and sustainable farming.",
      technologies: ["HTML", "CSS", "JavaScript", "PHP", "MySQL"],
      links: [
        {
          type: "Source",
          href: "https://github.com/Govithena/govithena.git",
          icon: <Icons.github className='size-3' />,
        },
      ],
      image: "/projects/govithena.png",
    },
    {
      title: "Stylioo",
      href: "https://github.com/Stylioo",
      dates: "2023–2024",
      active: true,
      description:
        "An online reservation and management system for beauty salons — streamlining appointments, staff management, payroll, and customer experience.",
      technologies: [
        "Next.js",
        "TailwindCSS",
        "Redux",
        "Express",
        "Prisma",
        "MySQL",
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/Stylioo",
          icon: <Icons.github className='size-3' />,
        },
      ],
      image: "/projects/stylioo.png",
    },
    {
      title: "Result Sheet",
      href: "https://github.com/Resultsheet",
      dates: "2023",
      active: true,
      description:
        "A result management and publishing platform that simplifies academic result tracking, analysis, and performance reporting for schools and universities.",
      technologies: ["React", "Redux", "MUI", "Spring Boot", "MySQL"],
      links: [
        {
          type: "Source",
          href: "https://github.com/Resultsheet",
          icon: <Icons.github className='size-3' />,
        },
      ],
      image: "/projects/resultsheet.png",
    },
    {
      title: "World of Sentients",
      href: "https://www.worldofsentients.com/",
      dates: "2022",
      active: true,
      description:
        "A storytelling NFT website built with Webflow and Three.js, blending art and technology to create an immersive web 3.0 experience.",
      technologies: ["Webflow", "Three.js"],
      links: [
        {
          type: "Website",
          href: "https://www.worldofsentients.com/",
          icon: <Icons.globe className='size-3' />,
        },
      ],
      image: "/projects/worldofsentients.png",
    },
  ],

  hackathons: [], // optional — can add later if you have hackathon experience
} as const;

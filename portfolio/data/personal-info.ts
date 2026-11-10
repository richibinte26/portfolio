/**
 * EDIT THIS FILE FIRST.
 * Anything written like "[EDIT: ...]" or "[MY ...]" is a placeholder and shows on the site
 * in italics until you replace it. Empty social URLs show as disabled buttons.
 */
export type SocialId = "github" | "linkedin" | "x" | "facebook";

export interface Social {
  id: SocialId;
  label: string;
  url: string; // leave "" until you have a real URL
}

export interface ExperienceEntry {
  role: string;
  company: string;
  period: string;
  description: string;
}

export const personalInfo = {
  name: "Richi Binte Forhad",
  designation: "Aspiring Full-Stack Web Developer",
  university: "Bangladesh University of Business and Technology (BUBT)",
  department: "Computer Science & Engineering (CSE)",
  degree: "Bachelor of Science in Engineering (BSc Engg)",

  email: "richibinteforhad@gmail.com",

  siteUrl: process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000",
  siteDescription:
    "Portfolio of an aspiring full-stack web developer and CSE student at BUBT, featuring projects built with Next.js, React, TypeScript and Tailwind CSS.",

  intro:
    "I'm a Computer Science & Engineering student at BUBT who enjoys building responsive, useful web applications. I'm learning the full stack, from React and Next.js interfaces to Node.js, Express and databases, and I grow by shipping real projects.",

  photo: { src: "/images/profile.jpg", alt: "Profile photo of the portfolio owner" },

  resume: {
    href: "/resume.pdf",
    fileName: "Resume.pdf",
    ready: true,
  },

  socials: [
    { id: "github", label: "GitHub", url: "https://github.com/richibinte26" },
    { id: "linkedin", label: "LinkedIn", url: "https://www.linkedin.com/in/richi-binte/" },
    { id: "x", label: "Twitter / X", url: "" },
    { id: "facebook", label: "Facebook", url: "" },
  ] as Social[],



about: [
  "I'm a Computer Science and Engineering student at Bangladesh University of Business and Technology (BUBT), passionate about web development and building practical applications. My journey started with programming fundamentals and gradually grew into an interest in creating real-world digital solutions.",

  "I enjoy working with HTML, CSS, JavaScript, TypeScript, React, Next.js and Tailwind CSS to build modern, responsive user interfaces. I'm also exploring backend development with Node.js, Express.js, MongoDB and REST APIs.",

  "Through projects like FitLog, BazarDor and DevStack, I practice my skills, solve development challenges and continuously learn new technologies. My goal is to become a skilled Full-Stack Developer who builds useful and user-friendly applications."
],

hobbies: [
  "Exploring new technologies",
  "Learning new programming skills",
  "Building creative projects",
  "Reading tech-related articles"
],

education: {
  startYear: "2023",
  graduationYear: "2027",
  details:
    "Currently pursuing a BSc in Computer Science and Engineering (CSE) at Bangladesh University of Business and Technology (BUBT). Focusing on programming, data structures, database management, software engineering, and web development.",
},

  /**
   * Add real jobs/internships here when you have them. While this array is empty,
   * the Experience section shows an honest "building experience" message instead.
   */
  experience: [] as ExperienceEntry[],
};

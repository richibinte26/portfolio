
/**
 * Portfolio project content
 */

export interface Project {
  slug: string;
  name: string;
  category: string;
  summary: string;
  description: string[];
  stack: string[];
  features: string[];
  challenges: string[];
  lessons: string[];
  improvements: string[];
  future: string[];
  image: string;
  live?: string;
  github?: string;
}

export const projects: Project[] = [
  {
    slug: "fitlog",
    name: "FitLog",
    category: "Fitness and Workout Tracking Application",
    summary:
      "A web application for managing workout plans and tracking fitness activities.",
    description: [
      "FitLog is a fitness-focused web application designed to help users manage workout plans and keep track of their fitness activities.",
      "I developed this project to practise building a full-stack application with Next.js, TypeScript and API integration.",
    ],
    stack: ["Next.js", "TypeScript", "Tailwind CSS"],
    features: [
      "Workout tracking",
      "Workout plan management",
      "Fitness activity management",
    ],
    challenges: [
      "Handling API responses and displaying workout-related data correctly.",
      "Troubleshooting route and data-fetching issues during deployment.",
    ],
    lessons: [
      "Improved my understanding of API integration and asynchronous data fetching.",
      "Learned to debug routing and deployment-related issues in Next.js.",
    ],
    improvements: [
      "Improve loading, error and empty states.",
      "Enhance the user experience on smaller screens.",
    ],
    future: [
      "Add more fitness tracking and progress visualization features.",
      "Improve workout management and personalization.",
    ],
    image: "/images/projects/fitlog.PNG",
    live: "https://fit-log-six-pied.vercel.app/",
    github: "https://github.com/richibinte26/fit-log",
  },
  {
    slug: "bazardor",
    name: "BazarDor",
    category: "Daily Essentials Price Comparison Platform",
    summary:
      "A platform for exploring and comparing everyday essential product prices in Bangladesh.",
    description: [
      "BazarDor is a web platform designed to help users explore the prices of everyday essential products in Bangladesh.",
      "The platform presents product information and market prices through category-based browsing and price comparison.",
    ],
    stack: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "DaisyUI",
      "MongoDB",
      "Better Auth",
    ],
    features: [
      "Browse everyday essential products",
      "Explore product prices by category",
      "Compare market prices",
      "User authentication",
    ],
    challenges: [
      "Handling dynamic product routes and product-related data.",
      "Managing data fetching and displaying updated product information.",
    ],
    lessons: [
      "Improved my understanding of MongoDB data handling and dynamic routing.",
      "Practised authentication and API-based data fetching.",
    ],
    improvements: [
      "Improve product search and filtering.",
      "Enhance the presentation of price trends and comparisons.",
    ],
    future: [
      "Add more product categories and market information.",
      "Improve price history and comparison features.",
    ],
    image: "/images/projects/bazardor.PNG",
    live: "https://b14-a7-bazar-dor-orpin.vercel.app/",
    github: "https://github.com/richibinte26/b14-a7-bazar-dor",
  },
  {
    slug: "devstack",
    name: "B14-A05-DevStack",
    category: "Frontend Development Project",
    summary:
      "A React and TypeScript project developed as part of my web development learning journey.",
    description: [
      "B14-A05-DevStack is a frontend project built with React, TypeScript and Vite.",
      "I worked on component-based UI development, responsive layouts and styling with Tailwind CSS and DaisyUI.",
    ],
    stack: [
      "React",
      "TypeScript",
      "Vite",
      "Tailwind CSS",
      "DaisyUI",
    ],
    features: [
      "Component-based React interface",
      "TypeScript-based development",
      "Responsive styling with Tailwind CSS",
      "UI components styled with DaisyUI",
    ],
    challenges: [
      "Troubleshooting development server and module-loading issues.",
      "Working with component structure and responsive styling.",
    ],
    lessons: [
      "Improved my understanding of React components and TypeScript.",
      "Learned to troubleshoot Vite configuration and frontend development issues.",
    ],
    improvements: [
      "Further improve responsive layouts and accessibility.",
      "Refine visual consistency across the interface.",
    ],
    future: [
      "Add more interactive frontend features.",
      "Continue improving the UI and component structure.",
    ],
    image: "/images/projects/devstack.PNG",
    live: "https://b14-devstack-a05.vercel.app/",
    github: "https://github.com/richibinte26/b14-devstack-a05",
  },
];

export function getProject(slug: string): Project | undefined {
  return projects.find((project) => project.slug === slug);
}

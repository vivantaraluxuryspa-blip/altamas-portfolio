import { FaYoutube, FaFacebook } from "react-icons/fa";
import {
  RxDiscordLogo,
  RxGithubLogo,
  RxInstagramLogo,
  RxTwitterLogo,
  RxLinkedinLogo,
} from "react-icons/rx";

export const SKILL_DATA = [
  {
    skill_name: "Custom Web Development",
    image: "html.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "E-commerce Solutions",
    image: "react.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Shopify Development",
    image: "next.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "UI/UX Design",
    image: "figma.png",
    width: 50,
    height: 50,
  },
  {
    skill_name: "Mobile-First Design",
    image: "tailwind.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Performance Optimization",
    image: "js.png",
    width: 65,
    height: 65,
  },
  {
    skill_name: "Database Solutions",
    image: "mysql.png",
    width: 70,
    height: 70,
  },
  {
    skill_name: "API Integration",
    image: "node.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Cloud Deployment",
    image: "docker.png",
    width: 70,
    height: 70,
  },
  {
    skill_name: "SEO Optimization",
    image: "css.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Modern Frameworks",
    image: "express.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Scalable Architecture",
    image: "mongodb.png",
    width: 40,
    height: 40,
  },
] as const;

export const SOCIALS = [
  {
    name: "GitHub",
    icon: RxGithubLogo,
    link: "https://github.com/Altamashshk",
  },
  {
    name: "LinkedIn",
    icon: RxLinkedinLogo,
    link: "https://linkedin.com/in/husain-altamash",
  },
  {
    name: "Instagram",
    icon: RxInstagramLogo,
    link: "https://www.instagram.com/altamash__65/",
  },
] as const;

export const FRONTEND_SKILL = [
  {
    skill_name: "Custom Web Design",
    image: "html.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Responsive Development",
    image: "css.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Interactive Experiences",
    image: "js.png",
    width: 65,
    height: 65,
  },
  {
    skill_name: "Modern Frameworks",
    image: "react.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Fast Loading Sites",
    image: "next.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Beautiful UI/UX",
    image: "tailwind.png",
    width: 80,
    height: 80,
  },
] as const;

export const BACKEND_SKILL = [
  {
    skill_name: "Server Solutions",
    image: "node.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "API Development",
    image: "express.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Database Design",
    image: "mysql.png",
    width: 70,
    height: 70,
  },
  {
    skill_name: "Cloud Integration",
    image: "mongodb.png",
    width: 40,
    height: 40,
  },
] as const;

export const FULLSTACK_SKILL = [
  {
    skill_name: "DevOps & Deployment",
    image: "docker.png",
    width: 70,
    height: 70,
  },
  {
    skill_name: "Design Consulting",
    image: "figma.png",
    width: 50,
    height: 50,
  },
] as const;

export const OTHER_SKILL = [
  {
    skill_name: "Go",
    image: "go.png",
    width: 60,
    height: 60,
  },
] as const;

export const PROJECTS = [
  {
    title: "LuxuryJewels E-commerce Platform",
    description:
      'Complete e-commerce solution built for a premium jewelry retailer with 500+ products, advanced filtering, and custom engraving features. Implemented secure payment gateway, inventory management, and multi-currency support. Achieved 40% increase in online sales and 60% improvement in user engagement within 6 months.',
    image: "/projects/project-1.png",
    link: "https://locketgarage.com",
  },
  {
    title: "Corporate Construction Website",
    description:
      'Professional corporate website for leading construction company featuring project showcases, service portfolios, and client testimonials. Built with SEO optimization, mobile responsiveness, and dynamic content management. Improved online visibility by 300% and generated 25+ new business inquiries monthly.',
    image: "/projects/project-2.png",
    link: "https://maqgce.com",
  },
  {
    title: "Fashion Brand Digital Store",
    description:
      'Modern Shopify store for racing-themed fashion brand featuring seasonal collections, size guides, and promotional campaigns. Optimized checkout process reduced cart abandonment by 35% and achieved 2.5x conversion rate improvement. Integrated social media marketing and email automation systems.',
    image: "/projects/project-3.png",
    link: "https://zenzweave.com",
  },
] as const;

export const FOOTER_DATA = [
  {
    title: "Services",
    data: [
      {
        name: "Web Development",
        icon: null,
        link: "#services",
      },
      {
        name: "E-commerce Solutions",
        icon: null,
        link: "#services",
      },
      {
        name: "Shopify Development",
        icon: null,
        link: "#services",
      },
    ],
  },
  {
    title: "Company",
    data: [
      {
        name: "About Us",
        icon: null,
        link: "#about-me",
      },
      {
        name: "Our Portfolio",
        icon: null,
        link: "#projects",
      },
      {
        name: "Get Quote",
        icon: null,
        link: "https://github.com/Altamashshk",
      },
    ],
  },
  {
    title: "Connect",
    data: [
      {
        name: "GitHub",
        icon: RxGithubLogo,
        link: "https://github.com/Altamashshk",
      },
      {
        name: "LinkedIn",
        icon: RxLinkedinLogo,
        link: "https://linkedin.com/in/husain-altamash",
      },
      {
        name: "Instagram",
        icon: RxInstagramLogo,
        link: "https://www.instagram.com/altamash__65/",
      },
    ],
  },
] as const;

export const NAV_LINKS = [
  {
    title: "About",
    link: "#about-me",
  },
  {
    title: "Services",
    link: "#services",
  },
  {
    title: "Work",
    link: "#projects",
  },
  {
    title: "Contact",
    link: "#contact",
  },
] as const;

export const LINKS = {
  sourceCode: "mailto:husain.altamashh@gmail.com?subject=Project Quote Request&body=Hello Alex, I would like to discuss a project with you...",
};

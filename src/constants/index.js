import { meta, kartonmedya, verisoft, okttrailer } from "../assets/images";
import {
  car,
  contact,
  css,
  estate,
  express,
  git,
  github,
  html,
  javascript,
  linkedin,
  mongodb,
  motion,
  mui,
  nextjs,
  nodejs,
  pricewise,
  react,
  redux,
  sass,
  snapgram,
  summiz,
  tailwindcss,
  threads,
  typescript,
} from "../assets/icons";

export const skills = [
  {
    imageUrl: css,
    name: "CSS",
    type: "Frontend",
  },
  {
    imageUrl: express,
    name: "Express",
    type: "Backend",
  },
  {
    imageUrl: git,
    name: "Git",
    type: "Version Control",
  },
  {
    imageUrl: github,
    name: "GitHub",
    type: "Version Control",
  },
  {
    imageUrl: html,
    name: "HTML",
    type: "Frontend",
  },
  {
    imageUrl: javascript,
    name: "JavaScript",
    type: "Frontend",
  },
  {
    imageUrl: mongodb,
    name: "MongoDB",
    type: "Database",
  },
  {
    imageUrl: motion,
    name: "Motion",
    type: "Animation",
  },
  {
    imageUrl: mui,
    name: "Material-UI",
    type: "Frontend",
  },
  {
    imageUrl: nextjs,
    name: "Next.js",
    type: "Frontend",
  },
  {
    imageUrl: nodejs,
    name: "Node.js",
    type: "Backend",
  },
  {
    imageUrl: react,
    name: "React",
    type: "Frontend",
  },
  {
    imageUrl: redux,
    name: "Redux",
    type: "State Management",
  },
  {
    imageUrl: sass,
    name: "Sass",
    type: "Frontend",
  },
  {
    imageUrl: tailwindcss,
    name: "Tailwind CSS",
    type: "Frontend",
  },
  {
    imageUrl: typescript,
    name: "TypeScript",
    type: "Frontend",
  },
];

export const experiences = [
  {
    title: "Full-Stack Developer",
    company_name: "Verisoft",
    icon: verisoft,
    iconBg: "#accbe1",
    date: "May 2019 - December 2023",
    points: [
      "Building Fintech businesses at Verisoft as part of a global team. More specifically, developing loyalty, payment system and card products to deliver delightful experiences to Verisoft's customers around the world.",
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Full-Stack Developer",
    company_name: "OKT Trailer",
    icon: okttrailer,
    iconBg: "#c0c0c0",
    date: "Agu 2017 - Sep 2018",
    points: [
      "Taking an important role in the ERP transformation project by being responsible for the finance, sales, vehicle tracking and delivery modules of the Enterprise Resource Planning (ERP) structure.",
      "Demonstrating effective communication and project management skills during the analysis, testing and development process to ensure the successful outcome of the ERP transformation project.",
      "Actively working with business teams throughout this process."
    ],
  },
  {
    title: "Junior Front-End Developer",
    company_name: "Karton Medya",
    icon: kartonmedya,
    iconBg: "#c8a2c8",
    date: "Feb 2016 - Jun 2017",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility."
    ],
  }
];

export const socialLinks = [
  {
    name: "Contact",
    iconUrl: contact,
    link: "/contact",
  },
  {
    name: "GitHub",
    iconUrl: github,
    link: "https://github.com/emredkyc",
  },
  {
    name: "LinkedIn",
    iconUrl: linkedin,
    link: "https://www.linkedin.com/in/burak-emre-dokuyucu",
  },
];

export const projects = [
  {
    iconUrl: summiz,
    theme: "btn-back-yellow",
    name: "Event Platform Web Application",
    description: "An event organization web app like Eventbrite or Meetup with authentication, event management, search, filtering, categories, checkout and payments using Next JS 14, Tailwind CSS, Shadcn, React Hook Form, Zod, Uploadthing, React-Datepicker, Mongoose, Clerk and Stripe.",
    link: "https://github.com/emredkyc/event_platform",
  },
  {
    iconUrl: snapgram,
    theme: "btn-back-pink",
    name: "3D Portfolio",
    description: "Let's create a cool 3D website together! You will learn how to make a portfolio with fun interactive pieces like a floating island and a fox that moves when you type. This way you can show off your skills.",
    link: "https://github.com/emredkyc/3d_portfolio",
  },
  {
    iconUrl: pricewise,
    theme: "btn-back-red",
    name: "Anime World",
    description: "Curious about Server Actions in Next.js 14? How about infinite scrolling and Framer Motion animations with Next 14? This application will explain these concepts when building a server-side Next 14 Application",
    link: "https://github.com/emredkyc/anime_world",
  },
  {
    iconUrl: car,
    theme: "btn-back-blue",
    name: "ClubTotal Card - Loyalty Card Application",
    description: "Customer loyalty card developed for Total Energies Türkiye fuel stations is the application. Customers included in the application can make fuel purchases you can earn points, benefit from various campaigns and you can spend the points you earn at gas stations.",
    link: "https://www.linkedin.com/in/burak-emre-dokuyucu/details/projects/",
  },
  {
    iconUrl: threads,
    theme: "btn-back-green",
    name: "JetEMV - Card Personalization Application",
    description:
      "Debit Card, Prepaid Card and Credit used in payment systems It is the personalization application of cards. The application can make Magnetic and EMV (Chip) personalization, It can work integrated with banks.",
    link: "https://www.linkedin.com/in/burak-emre-dokuyucu/details/projects/",
  },
  {
    iconUrl: pricewise,
    theme: "btn-back-black",
    name: "Passport Card - Loyalty Card Application",
    description:
      "TAV Operations, one of the subsidiaries of TAV Airports Holding Services Inc. TAV Passport Card, which is a brand, is available to passengers at the airport. It is a membership program that offers privileges. Included in the membership program. Customers can choose the category of membership at airports operated by TAV. You can benefit from different services depending on your needs.",
    link: "https://www.linkedin.com/in/burak-emre-dokuyucu/details/projects/",
  },
  {
    iconUrl: estate,
    theme: "btn-back-black",
    name: "MyGini - Loyalty and Offers Management",
    description:
      "Create, personalize and communicate your offers in minutes and push them to your mobile app in real time.",
    link: "https://www.linkedin.com/in/burak-emre-dokuyucu/details/projects/",
  },
];

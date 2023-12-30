<div align="center">
  <br />
    <a href="https://3d-portfolio-emredkyc.vercel.app/" target="_blank">
      <img src="https://i.ibb.co/n6mWktP/3d-Website.png" alt="Project Banner">
    </a>
  <br />

  <div>
    <img src="https://img.shields.io/badge/-React_JS-black?style=for-the-badge&logoColor=white&logo=react&color=61DAFB" alt="react.js" />
    <img src="https://img.shields.io/badge/-Three_JS-black?style=for-the-badge&logoColor=white&logo=threedotjs&color=000000" alt="three.js" />
    <img src="https://img.shields.io/badge/-Tailwind_CSS-black?style=for-the-badge&logoColor=white&logo=tailwindcss&color=06B6D4" alt="tailwindcss" />
  </div>

  <h3 align="center">A 3D Portfolio</h3>

   <div align="center">
    Build this project step by step with our detailed.
    </div>
</div>

## 📋 <a name="table">Table of Contents</a>

1. 🤖 [Introduction](#introduction)
2. ⚙️ [Tech Stack](#tech-stack)
3. 🔋 [Features](#features)
4. 🤸 [Quick Start](#quick-start)
5. 🕸️ [Snippets](#snippets)
6. 🔗 [Links](#links)

## 🚨 Tutorial

This repository contains the code that corresponds to building an app from scratch.

If you prefer to learn from the doc, this is the perfect resource for you. Follow along to learn how to create projects like these step by step in a beginner-friendly way!

## <a name="introduction">🤖 Introduction</a>

By developing this project, you will gain hands-on experience in crafting immersive web experiences, mastering 3D libraries, and implementing engaging animations. The combination of creativity and technical skills showcased in this project serves as an excellent learning opportunity for developers seeking to enhance their portfolio and captivate users with cutting-edge web design.

If you are just starting out and need help, or if you encounter any bugs, you can ask. This is a place where people help each other.

## <a name="tech-stack">⚙️ Tech Stack</a>

- React.js
- Three.js
- React Three Fiber
- React Three Drei
- Email JS
- Vite
- Tailwind CSS

## <a name="features">🔋 Features</a>

👉 **Customizable 3D Hero Section**: Includes a 3D desktop model easily customizable to suit specific needs.

👉 **Interactive Experience and Work Sections**: Utilizes animations powered by framer motion for engaging user experience.

👉 **3D Skills Section**: Showcases skills using 3D geometries through three.js and React Three fiber

👉 **Animated Projects and Testimonials**: Features animated sections using framer motion for projects and client testimonials.

👉 **Contact Section with 3D Earth Model**:Integrates a 3D earth model with email functionality powered by emailjs.

👉 **3D Clouds**: Generate clouds progressively at random positions using Three.js for background display.

👉 **Consistent Animations**: Implements cohesive animations throughout the website using framer motion.

👉 **Responsive Design**: Ensures optimal display and functionality across all devices.

and many more, including code architecture and reusability 

## <a name="quick-start">🤸 Quick Start</a>

Follow these steps to set up the project locally on your machine.

**Prerequisites**

Make sure you have the following installed on your machine:

- [Git](https://git-scm.com/)
- [Node.js](https://nodejs.org/en)
- [npm](https://www.npmjs.com/) (Node Package Manager)

**Cloning the Repository**

```bash
git clone git@github.com:emredkyc/3d_portfolio.git
cd 3d_portfolio
```

**Installation**

Install the project dependencies using npm:

```bash
npm install
```

**Set Up Environment Variables**

Create a new file named `.env` in the root of your project and add the following content:

```env
REACT_APP_EMAILJS_USERID=your_emailjs_user_id
REACT_APP_EMAILJS_TEMPLATEID=your_emailjs_template_id
REACT_APP_EMAILJS_RECEIVERID=your_emailjs_receiver_id
```

Replace the placeholder values with your actual EmailJS credentials. You can obtain these credentials by signing up on the [EmailJS website](https://www.emailjs.com/).

**Running the Project**

```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser to view the project.

## <a name="snippets">🕸️ Snippets</a>

<details>
<summary><code>constants/index.js</code></summary>

```javascript
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
    name: "3D Portfolio",
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

```
</details>

<details>
<summary><code>index.css</code></summary>

```css
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;600;700;800;900&family=Work+Sans:wght@100;200;300;400;500;600;700;800;900&display=swap");

@tailwind base;
@tailwind components;
@tailwind utilities;

:root {
  --blue-rgb: 237 245 255;
  --green-rgb: 125 161 35;
}

body {
  font-family: "Work Sans", sans-serif;
}

body:has(.card[data-color="blue"]:hover) {
  background-color: rgb(var(--blue-rgb) / 25%);
}

body:has(.card[data-color="green"]:hover) {
  background-color: rgb(var(--green-rgb) / 25%);
}

@layer utilities {
  .max-container {
    @apply max-w-5xl mx-auto sm:p-16 pb-12 !pt-[126px] px-8 min-h-[calc(100vh-80px)];
  }

  .head-text {
    @apply sm:text-5xl text-3xl font-semibold sm:leading-snug font-poppins;
  }

  .subhead-text {
    @apply font-semibold sm:text-3xl text-xl relative font-poppins;
  }

  .blue-gradient_text {
    @apply bg-gradient-to-r from-[#00c6ff] to-[#0072ff] bg-clip-text text-transparent;
  }

  .input {
    @apply bg-white border border-gray-200 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 mt-2.5 font-normal shadow-card;
  }

  .textarea {
    @apply block p-2.5 w-full text-sm text-gray-900 bg-white rounded-lg border border-gray-200 focus:ring-blue-500 focus:border-blue-500 mt-2.5 font-normal shadow-card;
  }

  .btn {
    @apply text-white bg-gradient-to-r from-[#00c6ff] to-[#0072ff] focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center;
  }

  .header {
    @apply flex justify-between items-center sm:px-16 px-8 py-4 max-w-5xl mx-auto absolute top-0 bg-transparent z-10 right-0 left-0;
  }

  .footer {
    @apply max-w-5xl mx-auto sm:px-16 pb-6 px-8 flex flex-col gap-7;
  }

  .footer-container {
    @apply flex flex-wrap gap-7 items-center justify-between;
  }

  .info-box {
    @apply mx-5 relative flex text-white flex-col gap-3 max-w-2xl neo-brutalism-blue pt-4 pb-12 px-8;
  }

  .neo-btn {
    @apply py-3 px-6 rounded-lg text-blue-500 text-center font-semibold sm:w-1/2 w-[90%] -bottom-5 absolute mx-auto right-0 left-0 flex justify-center items-center gap-3;
  }

  .cta {
    @apply w-full flex items-center md:flex-row flex-col sm:mt-16 mt-8 gap-7;
  }

  .cta-text {
    @apply text-black-500 font-extrabold flex-1 text-3xl max-md:text-center;
  }
}

.glassmorphism {
  background: rgba(8, 116, 239, 0.07);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  border-radius: 10px;
  border: 1px solid rgba(255, 255, 255, 0.18);
}

.logo {
  border-radius: 8.889px;
  background: #fff;
  box-shadow: 0px 10px 35px -4px rgba(67, 83, 255, 0.15),
    0px 1.5px 4px -1px rgba(67, 83, 255, 0.2);
}

.block-container {
  position: relative;
  transition: 250ms;
  perspective: 500px;
}

.block-container .btn-back {
  position: absolute;
  inset: 0;
  z-index: -1;
  width: inherit;
  height: inherit;
  transition: 250ms;
  transform-style: preserve-3d;
  transform-origin: bottom right;
  transform: rotateZ(15deg);
  will-change: transform;
  box-shadow: 16px 0 40px #e4e4e4;
}

.block-container .btn-back-red {
  background: linear-gradient(135deg, #ff4b1f -20%, #ff9068 120%);
}

.block-container .btn-back-green {
  background: linear-gradient(135deg, #adfda2 -20%, #11d3f3 120%);
}

.block-container .btn-back-yellow {
  background: linear-gradient(135deg, #f7971e -20%, #ffd200 120%);
}

.block-container .btn-back-blue {
  background: linear-gradient(135deg, #0061ff -20%, #60efff 120%);
}

.block-container .btn-back-orange {
  background: linear-gradient(135deg, #ff0f7b -20%, #f89b29 120%);
}

.block-container .btn-back-pink {
  background: linear-gradient(135deg, #e81cff -20%, #40c9ff 120%);
}

.block-container .btn-back-black {
  background: linear-gradient(135deg, #0a1647 -20%, #e4e7e4 120%);
}

.block-container .btn-front {
  position: absolute;
  inset: 0;
  z-index: 1;
  width: inherit;
  height: inherit;
  background-color: #ffffff33;
  -webkit-backdrop-filter: blur(20px);
  backdrop-filter: blur(20px);
  transition: 250ms;
  transform-style: preserve-3d;
  transform-origin: top left;
  overflow: hidden;
}

.block-container:hover > .btn-back {
  transform: translateZ(20px) rotateZ(15deg) rotateX(-20deg) rotateY(-20deg);
}

.block-container:hover > .btn-front {
  transform: translateZ(80px) translateY(-5px) rotateX(15deg) rotateY(15deg);
}

/* Neo Brutalism */
.neo-brutalism-blue {
  background: #2b77e7;
  position: relative;
  border-radius: 10px;
  border: #2b77e7;
  box-shadow: 0.6vmin 0.6vmin #336cc1, 1vmin 1vmin #0092db, 1vmin 1vmin #0092db,
    0.65vmin 1vmin #0092db, 1vmin 0.65vmin #0092db;
}

.neo-brutalism-white {
  background: #fff;
  border: #fff;
  box-shadow: 0.6vmin 0.6vmin #fff, 1vmin 1vmin #d2e4ff, 1vmin 1vmin #d2e4ff,
    0.65vmin 1vmin #d2e4ff, 1vmin 0.65vmin #d2e4ff;
}
```
</details>

<details>
<summary><code>vite.config.js</code></summary>

```javascript
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  assetsInclude: ['**/*.glb']
})

```
</details>

<details>
<summary><code>styles.js</code></summary>

```javascript
const styles = {
    paddingX: "sm:px-16 px-6",
    paddingY: "sm:py-16 py-6",
    padding: "sm:px-16 px-6 sm:py-16 py-10",
  
    heroHeadText:
      "font-black text-white lg:text-[80px] sm:text-[60px] xs:text-[50px] text-[40px] lg:leading-[98px] mt-2",
    heroSubText:
      "text-[#dfd9ff] font-medium lg:text-[30px] sm:text-[26px] xs:text-[20px] text-[16px] lg:leading-[40px]",
  
    sectionHeadText:
      "text-white font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px]",
    sectionSubText:
      "sm:text-[18px] text-[14px] text-secondary uppercase tracking-wider",
  };
  
  export { styles };
```

</details>

<details>
<summary><code>tailwind.config.js</code></summary>

```javascript
/** /** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        gray: {
          200: "#D5DAE1"
        },
        black: {
          DEFAULT: "#000",
          500: "#1D2235"
        },
        blue: {
          500: "#2b77e7"
        }
      },
      fontFamily: {
        worksans: ["Work Sans", "sans-serif"],
        poppins: ['Poppins', "sans-serif"]
      },
      boxShadow: {
        card: '0px 1px 2px 0px rgba(0, 0, 0, 0.05)'
      }
    },
  },
  plugins: [],
}
```

</details>

## <a name="links">🔗 Links</a>

Models and Assets used in the project can be found [here](https://drive.google.com/file/d/1hY1c8FVuBTTa6U8TkTVGVEN6xj5SNRjH/view?usp=sharing)


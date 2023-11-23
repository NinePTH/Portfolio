import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    meta,
    starbucks,
    tesla,
    shopify,
    carrent,
    jobit,
    tripguide,
    threejs,
    csharp,
    c,
    Python,
    Nextjs,
    Vercel,
    Unity,
    GitHubDesktop,
    computerIcon,
    NUD,
    HamsterHub,
    daydev,
    CPE,

  } from "../assets";
  import { github } from '../assets';
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Edu & Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Web Developer",
      icon: computerIcon,
    },
    {
      title: "IOT Developer",
      icon: computerIcon,
    },
    {
      title: "Game Developer",
      icon: computerIcon,
    },
    {
      title: "Game Designer",
      icon: computerIcon,
    },
    {
      title: "Basic Data Science",
      icon: computerIcon,
    },
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Nextjs",
      icon: Nextjs,
    },
    {
      name: "Vercel",
      icon: Vercel,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "figma",
      icon: figma,
    },
    {
      name: "cSharp",
      icon: csharp,
    },
    {
      name: "C",
      icon: c,
    },
    {
      name: "Python",
      icon: Python,
    },
    {
      name: "Unity",
      icon: Unity,
    },
    {
      name: "GitHubDesktop",
      icon: GitHubDesktop,
    },
  ];
  
  const experiences = [
    {
      title: "Naresuan University Secondary Demonstration School",
      company_name: "Mathematics-Science Program",
      icon: NUD,
      iconBg: "#232631",
      date: "May 2017 - Mar 2023",
      points: [
        "The Internet of Things for an Automatic Landslide Prediction System via Artificial Intelligence Prototype, made with c/c++(on Arduino) and Python on Raspberry pi and ESP8266",
        "Smart Plant Pot via Raspberry pi, Arudino",
        "IOT Health Web Application with ESP32",
        "Full-Stack Raspberry Pi (TKinter for UI and CRUD data with Python and Excel)",
      ],
    },
    {
      title: "Python teaching and TA, Beginner Data Science, and Game Developer",
      company_name: "Hamster Hub",
      icon: HamsterHub,
      iconBg: "#E6DEDD",
      date: "Mar 2022 - Jan 2023",
      points: [
        "Python Programming and Basic Data Science (3 month) have a little project 'Alarm bot for Discord' and some of Data Science project.",
        "Teaching Python and Being TA.",
        "3D Isometric Game Project (3 month) with C#, Figma and Unity",
        "MMORPG Game Startup Project (3 month) with C#, Figma, Canva white board and Unity",
      ],
    },
    {
      title: "Intern Game Developer",
      company_name: "DayDev",
      icon: daydev,
      iconBg: "#232631",
      date: "Feb 2022 - Mar 2023",
      points: [
        "Game coding with C# and Unity",
        "UX/UI Designing with Figma and Adobe Illustrator",
        "Game Designing",
        "Map Designing",
        "Learn OOP with JAVA",
        "Broadcast on TV and Youtube Channel",
      ],
    },
    {
      title: "Computer Engineering Student",
      company_name: "King Mongkut's University of Technology Thonburi",
      icon: CPE,
      iconBg: "#E6DEDD",
      date: "Aug 2023 - Present",
      points: [
        "POPSLOTH application via Nextjs, Tailwind CSS, Typescript, Vercel deployment.",
        "Portfolio Website via React vite, Tailwind CSS, FireBase, React Three Fiber, Three.js.",
        "House keeper robot via microbit, huskylens, some servo, 3D print and laser cut.",
        "Inventory Management System for Owner and cashier of a shop via c.",
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "No Feedback yet.",
      name: "name",
      designation: "designation",
      company: "company",
      image: "/logocolor.svg",
    },
    {
      testimonial:
        "No Feedback yet.",
      name: "name",
      designation: "designation",
      company: "company",
      image: "/logocolor.svg",
    },
    {
      testimonial:
        "No Feedback yet.",
      name: "name",
      designation: "designation",
      company: "company",
      image: "/logocolor.svg",
    },
  ];
  
  const projects = [
    {
      name: "Car Rent",
      description:
        "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "mongodb",
          color: "green-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: carrent,
      source_code_link: "https://github.com/",
    },
    {
      name: "Job IT",
      description:
        "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "restapi",
          color: "green-text-gradient",
        },
        {
          name: "scss",
          color: "pink-text-gradient",
        },
      ],
      image: jobit,
      source_code_link: "https://github.com/",
    },
    {
      name: "Trip Guide",
      description:
        "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
      tags: [
        {
          name: "nextjs",
          color: "blue-text-gradient",
        },
        {
          name: "supabase",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: tripguide,
      source_code_link: "https://github.com/",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };
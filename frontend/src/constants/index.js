export const myProjects = [
    {
      id: 1,
      title: "FRUGALSOT",
      description:
        "Developed an LLM system using Ollama and experimented with Raspberry Pi 5, featuring device capabilitydetection, dynamic model selection with fallback, and adaptive thresholding, reducing latency by 70% and optimizingefficiency.",
      subDescription: [
        "When our laptops tapped out trying to run ML models, we wondered—if not here, how the heck are they doing it on tiny edge devices? ",
        "That spark of disbelief turned into a mission: to tame LLMs for the Raspberry Pi 5 with brains that adapt, models that juggle, and latency that practically sprints.",
      ],
      href: "https://github.com/HARISH20205/FrugalSOT/",
      logo: "",
      image: "/img/logos/frugalsot.pngw",
      tags: [
        {
          id: 1,
          name: "Ollama",
          path: "img/logos/ollama.svg",
        },
        {
          id: 2,
          name: "Raspberry Pi 5",
          path: "/img/logos/raspberry.svg",
        },
        {
          id: 3,
          name: "Python",
          path: "/img/logos/python.svg",
        },
        {
          id: 4,
          name: "Shell Scripting",
          path: "/img/logos/bash.svg",
        },
      ],
    },
    {
      id: 2,
      title: "Authentication & Authorization System",
      description:
        "A secure authentication and authorization system using Auth0 for seamless user management.",
      subDescription: [
        "Integrated Auth0 for authentication, supporting OAuth, JWT, and multi-factor authentication.",
        "Implemented role-based access control (RBAC) for fine-grained user permissions.",
        "Developed a React-based frontend with Tailwind CSS for a sleek user experience.",
        "Connected to a secure SQLite database for user data storage.",
      ],
      href: "",
      logo: "",
      image: "/assets/projects/auth-system.jpg",
      tags: [
        {
          id: 1,
          name: "Auth0",
          path: "/assets/logos/auth0.svg",
        },
        {
          id: 2,
          name: "React",
          path: "/assets/logos/react.svg",
        },
        {
          id: 3,
          name: "SQLite",
          path: "/assets/logos/sqlite.svg",
        },
        {
          id: 4,
          name: "TailwindCSS",
          path: "/assets/logos/tailwindcss.svg",
        },
      ],
    },
    {
      id: 3,
      title: "Blazor Web App",
      description:
        "A modern, interactive web application built with Blazor WebAssembly and .NET Core.",
      subDescription: [
        "Developed a fully interactive Single Page Application (SPA) using Blazor WebAssembly.",
        "Implemented API interactions using .NET Core for a robust backend.",
        "Designed responsive UI components with Tailwind CSS for an enhanced UX.",
        "Integrated SQLite for efficient client-side database storage.",
      ],
      href: "",
      logo: "",
      image: "/assets/projects/blazor-app.jpg",
      tags: [
        {
          id: 1,
          name: "Blazor",
          path: "/assets/logos/blazor.svg",
        },
        {
          id: 2,
          name: ".NET Core",
          path: "/assets/logos/dotnetcore.svg",
        },
        {
          id: 3,
          name: "SQLite",
          path: "/assets/logos/sqlite.svg",
        },
        {
          id: 4,
          name: "TailwindCSS",
          path: "/assets/logos/tailwindcss.svg",
        },
      ],
    },
    {
      id: 4,
      title: "C++ Game Engine",
      description:
        "A lightweight C++ game engine designed for 2D and 3D game development.",
      subDescription: [
        "Built a powerful rendering engine using OpenGL and C++.",
        "Developed a physics engine with collision detection and particle effects.",
        "Implemented a scripting system for easy game customization.",
        "Optimized performance with multi-threading and efficient memory management.",
      ],
      href: "",
      logo: "",
      image: "/assets/projects/game-engine.jpg",
      tags: [
        {
          id: 1,
          name: "C++",
          path: "/assets/logos/cplusplus.svg",
        },
        {
          id: 2,
          name: "C#",
          path: "/assets/logos/csharp.svg",
        },
        {
          id: 3,
          name: "Git",
          path: "/assets/logos/git.svg",
        },
        {
          id: 4,
          name: "Microsoft",
          path: "/assets/logos/microsoft.svg",
        },
      ],
    },
    {
      id: 5,
      title: "WordPress Custom Theme",
      description:
        "A fully customizable WordPress theme optimized for performance and SEO.",
      subDescription: [
        "Developed a responsive WordPress theme using HTML5, CSS3, and JavaScript.",
        "Integrated Tailwind CSS for modern styling and UI enhancements.",
        "Optimized SEO and page speed using Vite.js for fast builds.",
        "Implemented custom widgets and plugin compatibility for extended functionality.",
      ],
      href: "",
      logo: "",
      image: "/assets/projects/wordpress-theme.jpg",
      tags: [
        {
          id: 1,
          name: "WordPress",
          path: "/assets/logos/wordpress.svg",
        },
        {
          id: 2,
          name: "HTML5",
          path: "/assets/logos/html5.svg",
        },
        {
          id: 3,
          name: "CSS3",
          path: "/assets/logos/css3.svg",
        },
        {
          id: 4,
          name: "Vite.js",
          path: "/assets/logos/vitejs.svg",
        },
      ],
    },
    {
      id: 6,
      title: "Online Learning Platform",
      description:
        "A web application that allows users to enroll in courses, watch video lectures, and take quizzes.",
      subDescription: [
        "Built using Blazor WebAssembly for a seamless SPA experience.",
        "Implemented video streaming with Azure Media Services.",
        "Added a quiz system with dynamic question generation and real-time grading.",
        "Integrated Stripe API for secure payment processing.",
      ],
      href: "",
      logo: "",
      image: "/assets/projects/elearning.jpg",
      tags: [
        {
          id: 1,
          name: "Blazor",
          path: "/assets/logos/blazor.svg",
        },
        {
          id: 2,
          name: "Azure",
          path: "/assets/logos/azure.svg",
        },
        {
          id: 3,
          name: "Stripe",
          path: "/assets/logos/stripe.svg",
        },
        {
          id: 4,
          name: "TailwindCSS",
          path: "/assets/logos/tailwindcss.svg",
        },
      ],
    },
  ];
  


export const experiences = [
    {
      title: " L&T Technology Services (LTTS)",
      job: "AI & Embedded Systems Intern",
      date: "May 2025–Jun 2025",
      contents: [
        "Deployed a PyTorch-based DNN model on a Renesas RX24U microcontroller for real-time motor imbalance detection and enabled intelligent control shutdown via embedded AI inference.",
        "Built a real-time embedded control system for a smart milk foaming device (Dometic), integrating sensors, valve logic, and temperature-based state transitions with scalable fault-tolerant architecture.",
      ],
    },
    {
      title: " JOL Energy",
      job: " Chief Strategy Officer (CSO)",
      date: " Jul 2023–Jan 2025",
      contents: [
        "Led 6+ market researchers to drive strategic decisions, increasing campaign success by 25% and contributing to 15% YoY growth.",
        "Integrated AI/ML into automation systems, saving 124 hours/month, cutting errors by 27%, and reducing development cycle from 18 to 12 days.",
      ],
    },
    {
      title: " Collab Junction",
      job: " Marketing & AI SEO Engineer",
      date: " Jun 2024–Dec 2024",
      contents: [
        "Developed an AI-powered SEO engine using LLMs and keyword analytics to optimize content structure, boosting visibility and engagement.",
        "Automated event management tools using ML and generative AI, boosting user engagement by 22% and saving 35hours/month.",
      ],
    },
  ];
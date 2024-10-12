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
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Web Developer",
      icon: web,
    },
    {
      title: "React Native Developer",
      icon: mobile,
    },
    {
      title: "Backend Developer",
      icon: backend,
    },
    {
      title: "Content Creator",
      icon: creator,
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
      name: "TypeScript",
      icon: typescript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Redux Toolkit",
      icon: redux,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "figma",
      icon: figma,
    },
    {
      name: "docker",
      icon: docker,
    },
  ];
  
  const experiences = [
    {
      title: "Community Development Volunteer",
      company_name: "Encourage Child Foundation",
      icon: starbucks,
      iconBg: "#383E56",
      date: "June 2023 - July 2023",
      points: [
        "Led a digital literacy program aimed at empowering underprivileged communities.",
        "Developed training materials focused on basic computer skills, internet usage, and online safety.",
        "Conducted workshops with over 50 participants to improve their digital skills and job prospects.",
        "Collaborated with local authorities and NGO volunteers to expand outreach and ensure project success.",
      ],
    },
    {
      title: "Full Stack MERN AI Integration Summer Training",
      company_name: "W3Elites Angaar",
      icon: tesla,
      iconBg: "#E6DEDD",
      date: "June 2024 - July 2024",
      points: [
       "Completed Full Stack MERN AI Integration training, gaining expertise in front-end and back-end technologies.",
      "Developed a fitness app with React and integrated it with RapidAPI's ExerciseDB to provide personalized workout plans.",
      "Collaborated in team-based projects to apply learned skills in real-world scenarios.",
      ],
    },
    {
      title: "Full Stack Development Intern",
      company_name: "Unified Mentor",
      icon: shopify,
      iconBg: "#383E56",
      date: "October 2024 - Present",
      points: [
       "Working on full stack web development projects, leveraging technologies like React, Node.js, and MongoDB.",
      "Collaborating with senior developers to design and implement scalable web applications.",
      "Gaining hands-on experience with front-end and back-end development, API integration, and database management.",
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "Senim made a significant impact through the digital literacy program at our NGO. Their dedication and ability to connect with participants made learning accessible and enjoyable for everyone involved.",
      name: "Shivam Singh",
      designation: "Program President",
      company: "Encourage Child Foundation",
      image: "https://randomuser.me/api/portraits/men/24.jpg",
    },
    
    {
      testimonial:
        "His work on the fitness app was impressive. The app is intuitive, fast, and well-designed, making it easier for our users to find and follow workout plans. Highly recommended.",
      name: "Naman Sharma",
      designation: "Professor",
      company: "W3Elites",
      image: "https://randomuser.me/api/portraits/men/15.jpg",
    },
    {
      testimonial:
        "The quiz application developed by Senim has been a game-changer for our training sessions. It's intuitive, engaging, and provides immediate feedback, making learning fun and effective.",
      name: "Brijesh Pandey",
      designation: "Backend Teacher",
      company: "Lovely Professional University",
      image: "https://randomuser.me/api/portraits/men/10.jpg",
    }
  ];
  
  const projects = [
    {
      name: " Quiz Application",
      description:
        "The Quiz Application is a dynamic platform designed to test users' knowledge on various topics through engaging quizzes. It provides real-time feedback and score tracking, making learning fun and interactive",
      tags: [
        {
          name: "HTML/CSS",
          color: "blue-text-gradient",
        },
        {
          name: "JAVASCRIPT",
          color: "green-text-gradient",
        },
        {
          name: "NODE.JS",
          color: "pink-text-gradient",
        },
      ],
      image: carrent,
      source_code_link: "https://github.com/Senimkesharwani/Quiz-App",
    },
    {
      name: "Fitness App",
      description:
        "The Fitness App is a web-based application, focusing on providing personalized workout plans and tracking user progress. It integrates data from RapidAPI’s ExerciseDB to offer a wide variety of exercises.",
      tags: [
        {
          name: "REACT",
          color: "blue-text-gradient",
        },
        {
          name: "RapidAPI",
          color: "green-text-gradient",
        },
        {
          name: "HTML/CSS",
          color: "pink-text-gradient",
        },
      ],
      image: jobit,
      source_code_link: "https://github.com/Senimkesharwani/fitness-app",
    },
    {
      name: "Ecommerce Website",
      description:
        "To develop a fully functional e-commerce platform that enables users to browse, search, and purchase products online, providing an intuitive and secure shopping experience.",
      tags: [
        {
          name: "React.js",
          color: "blue-text-gradient",
        },
        {
          name: "HTML/CSS",
          color: "green-text-gradient",
        },
        {
          name: "MongoDB",
          color: "pink-text-gradient",
        },
      ],
      image: tripguide,
      source_code_link: "https://github.com/Senimkesharwani/",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };
  
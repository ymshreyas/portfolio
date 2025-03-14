export const navItems = [
  { name: "About", link: "#about" },
  { name: "Projects", link: "#projects" },
  { name: "Experience", link: "#experience" },
  { name: "Contact", link: "#contact" },
];

export const gridItems = [
  {
    id: 1,
    title: "I prioritize client collaboration, fostering open communication ",
    description: "",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh] z-10",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end",
    img: "/b1.svg",
    spareImg: "",
  },
  {
    id: 2,
    title: "I'm flexible with time zone communications",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2 z-10",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
  },
  {
    id: 3,
    title: "My tech stack",
    description: "I constantly try to improve",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2 z-10",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
  },
  {
    id: 4,
    title: "Tech enthusiast with a passion for development.",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/grid.svg",
    spareImg: "/b4.svg",
  },

  {
    id: 5,
    title: "Bridging Innovation with Code in Web Development",
    description: "The Inside Scoop",
    className: "md:col-span-3 md:row-span-2",
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    img: "/b5.svg",
    spareImg: "/grid.svg",
  },
  {
    id: 6,
    title: "Download my resume and let's connect!",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-center  md:max-w-full max-w-60 text-center",
    img: "",
    spareImg: "",
  },
];

export const projects = [
  {
    id: 1,
    title: "Code Craft - Online Code Editor",
    pin_title: "Code Craft",
    des: "Code Craft is a powerful online IDE built with Next.js 15, Convex, and Clerk, offering a seamless, interactive, and customizable coding experience with multi-language support and advanced collaboration features.",
    img: "/code_craft.png",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/c.svg", "/convex.svg"],
    link: "https://github.com/ymshreyas/code_craft.git",
  },
  {
    id: 2,
    title: "Connectify - Realtime chat application",
    pin_title: "Connectify",
    des: "Connectify is a real-time chat application built with the MERN stack and Socket.io, offering instant messaging, a modern responsive UI, and a seamless interactive experience.",
    img: "/chat_app.png",
    iconLists: [
      "/mongo.svg",
      "/express.png",
      "/re.svg",
      "/nodejs.svg",
      "tail.svg",
    ],
    link: "https://github.com/ymshreyas/chat_app.git",
  },
  {
    id: 3,
    title: "Socially",
    pin_title: "Socially",
    des: "Socially is a modern social media platform built with Next.js, PostgreSQL, Prisma, and TypeScript, offering secure authentication, dynamic routing, API integration, file uploads, and optimized performance with caching, Server Components, and Server Actions for a seamless user experience.",
    img: "/socially.png",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/postgres.png", "/c.svg"],
    link: "https://github.com/ymshreyas/socially.git",
  },
  {
    id: 4,
    title: "Edu Pro - Student Management System",
    pin_title: "Edu Pro",
    des: "Edu Pro is a cutting-edge student management portal that streamlines student and faculty interactions by enabling attendance tracking, performance monitoring, anonymous complaints, and real-time notifications, ensuring a seamless and efficient academic experience.",
    img: "/edu_pro.png",
    iconLists: ["/django.svg", "/postgres.png", "/bootstrap.png", "/js.png"],
    link: "https://github.com/ymshreyas/edu_pro.git",
  },
];

export const workExperience = [
  {
    id: 1,
    title: "IoT Intern - Subhanu Technologies",
    desc: "Designed and developed an IoT-enabled heart rate monitoring system using Raspberry Pi, integrating advanced biometric sensors and IoT communication protocols for seamless data acquisition and transmission. Implemented real-time data collection and visualization by leveraging MongoDB, ensuring efficient storage, retrieval, and analysis of heart rate metrics. The system enhances remote health monitoring by providing secure, scalable, and real-time insights, making it suitable for applications in telemedicine and healthcare analytics.",
    className: "md:col-span-2",
    thumbnail: "/subhanu.jpeg",
  },
  {
    id: 2,
    title: "Software Developer Intern - Amiti Software Technologies",
    desc: "Developed various front-end projects, including a news website, weather application, and eCommerce platform using React.js. Built full-stack applications such as a real-time chat application utilizing the MERN stack with Socket.io for seamless communication and a social media platform powered by Next.js for enhanced performance and scalability. Experienced in designing, developing, and testing APIs using tools like Postman and Thunder Client to ensure functionality, performance, and reliability.",
    className: "md:col-span-2",
    thumbnail: "amiti.jpeg",
  },
];

export const socialMedia = [
  {
    id: 1,
    img: "/git.svg",
    url: "https://github.com/ymshreyas",
  },
  {
    id: 2,
    img: "/insta.svg",
    url: "https://www.instagram.com/ym.shreyas/",
  },
  {
    id: 3,
    img: "/link.svg",
    url: "https://www.linkedin.com/in/shreyas-ym-a2a44024a/",
  },
];

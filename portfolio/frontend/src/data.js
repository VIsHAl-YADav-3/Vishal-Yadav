// ─────────────────────────────────────────────────────────────
// All portfolio content lives here. Edit this file to update
// your site — you shouldn't need to touch any component code.
// ─────────────────────────────────────────────────────────────

export const profile = {
  name: "Vishal",
  role: "Full Stack Developer",
  tagline: "Building fast, functional web apps with the MERN stack.",
  phone: "9068353258",
  email: "vishalyadavvky3@gmail.com",
  linkedin: "https://www.linkedin.com/in/vishal-80090cc",
  github: "https://github.com/VIsHAl-YADav-3",
  resumeFile: "/Vishal_Resume.pdf",
  photo: "/profile.jpeg",
  about: `Driven and enthusiastic Full Stack Developer with practical experience designing,
developing and deploying web applications using the MERN stack. Comfortable across
React.js, Node.js, Express.js and MongoDB, with hands-on experience implementing
authentication, payment integration and AI-powered features. Eager to keep growing
as a software developer in a collaborative, product-focused team.`,
};

export const education = {
  degree: "B.Tech — Computer Science & Engineering (Artificial Intelligence)",
  school: "Mangalmay Group of Institutions and Engineering Technology, Greater Noida",
  years: "2023 – 2027",
  score: "SGPA: 7.2",
};

export const skills = {
  Languages: ["Java", "JavaScript (ES6+)", "Python"],
  Frontend: ["React.js", "HTML5", "CSS3", "Bootstrap", "Responsive Web Design"],
  Backend: ["Node.js", "Express.js", "RESTful APIs", "CRUD Operations"],
  Databases: ["MongoDB", "MySQL"],
  Concepts: [
    "JWT Authentication",
    "Authorization",
    "MVC Architecture",
    "Form Validation",
    "Error Handling",
  ],
  "Tools & Deployment": ["Git", "GitHub", "VS Code", "Postman", "Vercel", "Render"],
};

export const projects = [
  {
    fileName: "ai-nexus.jsx",
    name: "AI Nexus",
    subtitle: "Full Stack AI SaaS Platform",
    description:
      "A full-stack AI SaaS application with a responsive interface and AI-powered features designed for a seamless user experience.",
    points: [
      "Secure JWT-based authentication with a credit-based usage model to control access to platform features.",
      "Razorpay payment gateway integration for secure credit purchases and billing.",
      "Dashboard and analytics functionality with API-driven communication for managing user activity.",
    ],
    tech: ["React", "Node.js", "Express", "MongoDB", "JWT", "Razorpay"],
    demoUrl: "https://nexus-ai-full-stack-ai-saa-s-platfo.vercel.app/",
    githubUrl: "https://github.com/VIsHAl-YADav-3/Nexus-AI-Full-Stack-AI-SaaS-Platform-with-Credit-Based-Billing",
  },
  {
    fileName: "in-minutes.jsx",
    name: "In Minutes",
    subtitle: "Multi-Restaurant Food Delivery Platform",
    description:
      "A multi-restaurant food delivery platform enabling customers to discover restaurants, browse menus and place orders.",
    points: [
      "Dedicated Customer, Seller and Admin workflows for onboarding, menu management, order handling and approvals.",
      "Razorpay and Cash on Delivery with server-side payment verification for secure order processing.",
      "Real-time updates with Socket.io, image management via Cloudinary, JWT auth and an AI-powered support chatbot.",
    ],
    tech: ["React", "Node.js", "Express", "MongoDB", "Socket.io", "Cloudinary", "Razorpay"],
    demoUrl: "https://in-minutes.vercel.app",
    githubUrl: "https://github.com/VIsHAl-YADav-3/In-Minutes.git",
  },
];

export const experience = [
  {
    company: "Cognifyz IT Solutions Pvt. Ltd.",
    role: "Full Stack Development Intern",
    period: "Jun 2026 – Aug 2026",
    points: [
      "Contributed to full-stack development assignments, gaining practical exposure to modern web application development.",
      "Developed responsive application components across frontend and backend technologies.",
      "Worked with REST APIs and database operations to support structured client-server communication.",
      "Strengthened problem-solving, communication, coordination and attention-to-detail skills.",
    ],
  },
];

export const achievements = [
  {
    title: "Startup Idea Hackathon — 3rd Place Winner",
    period: "Oct 2025",
    detail: "Secured 3rd place among 50+ teams by pitching Event Hive, a location-based event discovery platform.",
  },
  {
    title: "LeetCode — 100+ Problems Solved",
    period: "Ongoing",
    detail: "Strengthened data structures, algorithms and time/space complexity analysis through consistent practice.",
  },
];

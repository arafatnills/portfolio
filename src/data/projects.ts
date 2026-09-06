export const projects = [
  {
    slug: "life-lesson",
    title: "LifeLesson",
    url: "https://lifelessons-client.vercel.app/",
    client: "https://github.com/arafatnills/LifeLessons-client",
    backend: "https://github.com/arafatnills/LifeLessons-server",
    image: "/images/lifeLesson.png",
    description:
      "A scalable knowledge-sharing platform where users can create, categorize, and monetize life insights. Features secure payment integration and role-based access control to manage free and premium content seamlessly.",
    fullDescription: `Knowledge-sharing platform allowing users to create, categorize, and monetize life insights. Implemented secure payment gateways and role-based access control to distinguish between free and premium content, ensuring a scalable and sustainable ecosystem.
Freemium Ecosystem: Integrated Stripe for secure subscription payments and implemented role-based access control (RBAC) to dynamically blur premium content for free users, ensuring a seamless upgrade transition.
Interactive Dashboards: Designed role-specific dashboards featuring data visualization for user activity tracking and administrative tools for content moderation, enabling efficient platform management.
Advanced Discovery: Improved browsing performance with server-side pagination, multi-criteria filtering (Category/Tone), and real-time social features (reactions/favorites) using TanStack Query.
`,
    features: [
      "Content creation, categorization, and monetization platform",
      "Stripe integration with RBAC to dynamically blur premium content",
      "Role-specific dashboards with data visualization and moderation tools",
      "Server-side pagination and multi-criteria filtering (Category/Tone)",
      "Real-time social interactions (reactions/favorites) using TanStack Query",
    ],
    tech: [
      "React",
      "Tailwind CSS",
      "Firebase",
      "TanStack Query (React Query)",
      "React Hook Form",
      "Radix UI",
      "Recharts",
      "Axios",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Stripe",
    ],
    date: "December 2025",
  },

  {
    slug: "gadget-galaxy",
    title: "GadgetGalaxy",
    url: "https://gadget-galaxy-client.vercel.app/",
    repo: "https://github.com/CodeWithArafat1/GadgetGalaxy-client",
    image: "/images/p1.png",
    description:
      "Developed a quick, user-friendly interface with infinite scrolling, optimizing data handling for a smooth shopping experience. Solved role-based visualization and authentication issues.",
    fullDescription:
      "GadgetGalaxy is a comprehensive e-commerce platform designed for tech enthusiasts. It features a responsive design, real-time data updates, and a secure authentication system. The project focuses on delivering a seamless shopping experience through optimized performance and intuitive UI.",
    features: [
      "Real-time cart and wishlist with TanStack Query",
      "Optimistic updates and background refetching",
      "Advanced product filtering with infinite scroll",
      "Role-based dashboard for administrators",
      "Secure CRUD operations for inventory management",
    ],
    tech: ["React", "TanStack Query", "Tailwind CSS", "Node.js", "MongoDB"],
    date: "November 2025",
  },
  {
    slug: "travelease",
    title: "TravelEase",
    url: "https://travelease-live.netlify.app/",
    repo: "https://github.com/CodeWithArafat1/TravelEase-client",
    image: "/images/p2.png",
    description:
      "Built a vehicle rental platform with wishlist functionality, theme persistence, and smooth UI/UX. Implemented dynamic filtering, real-time sorting, and state management.",
    fullDescription:
      "TravelEase is a modern vehicle rental platform that simplifies the booking process. It offers dynamic filtering options, real-time availability checks, and a persistent theme preference for users. The application leverages Redux Toolkit for efficient state management across the client and server.",
    features: [
      "Dynamic filtering by category and location",
      "Real-time price sorting",
      "Wishlist functionality",
      "Theme persistence",
      "Real-time booking updates with Redux",
    ],
    tech: ["React", "Redux Toolkit", "Axios", "Tailwind CSS", "Node.js"],
    date: "November 2025",
  },
];

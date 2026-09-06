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
    slug: "NeelNir",
    title: "NeelNir",
    url: "https://my-shop-v2-eight.vercel.app",
    client: "https://github.com/arafatnills/neelNir-client",
    backend: "https://github.com/arafatnills/neelNir-server",
    image: "/images/neelNir.png",
    description: `A full-featured e-commerce platform built with Next.js and TypeScript for a fashion brand, featuring a bilingual (Bangla/English) storefront, real-time order tracking, and an admin panel for product and order management.
`,
    fullDescription: `A full-featured e-commerce platform built with Next.js and TypeScript for a fashion brand, featuring a bilingual (Bangla/English) storefront, real-time order tracking, and an admin panel for product and order management.
Order Tracking System: Built a real-time shipment tracking flow where customers enter an order ID to view a live progress timeline (Placed, Processing, Shipped, In Transit, Delivered) alongside order details and total amount.
Admin Panel: Developed an admin dashboard for managing products, categories, and orders with secure CRUD operations, powering the storefront's collections and inventory.
Product Discovery: Implemented live search with instant autocomplete suggestions, advanced shop filtering (category, price range, color), and a curated collections page across 10+ categories.
`,
    features: [
      "Bilingual (Bangla/English) e-commerce storefront built with Next.js and TypeScript",
      "Real-time order tracking system with live progress timeline via Order ID",
      "Secure admin dashboard for managing products, categories, and orders (CRUD)",
      "Live search functionality with instant autocomplete suggestions",
      "Advanced product filtering system (category, price range, and color)",
    ],
    tech: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "NextAuth.js",
      "shadcn/ui",
      "Framer Motion",
      "Lenis",
      "Nodemailer",
    ],
    date: "April 2026",
  },
  {
    slug: "travelease",
    title: "TravelEase",
    url: "https://travelease-live.netlify.app/",
    client: "http://github.com/arafatnills/TravelEase-client",
    backend: "https://github.com/arafatnills/TravelEase-server",
    image: "/images/TravelEase.png",
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
    tech: [
      "React",
      "Tailwind CSS",
      "DaisyUI",
      "React Router",
      "Redux Toolkit",
      "Axios",
      "Firebase",
    ],
    date: "November 2025",
  },
];

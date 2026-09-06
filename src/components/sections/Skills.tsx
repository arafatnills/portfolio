"use client";

import React from "react";
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";

const skillsData = [
  {
    category: "Frontend",
    skills: [
      "HTML5",
      "CSS3",
      "Tailwind CSS",
      "JavaScript",
      "TypeScript",
      "React.js",
      "Next.js (App Router)",
      "shadcn/ui",
      "Redux Toolkit",
      "TanStack Query",
      "React Hook Form",
      "Axios",
      "Shopify",
    ],
  },
  {
    category: "Backend",
    skills: [
      "Node.js",
      "Express.js",
      "MongoDB",
      "PostgreSQL",
      "Prisma ORM",
      "EJS",
      "JWT",
    ],
  },
  {
    category: "Tools & Deployment",
    skills: ["Git", "GitHub", "Vercel", "Render", "Postman"],
  },
  {
    category: "Soft Skills",
    skills: [
      "Collaboration",
      "Adaptability",
      "Problem Solving",
      "Time Management",
      "Effective Communication",
    ],
  },
];

const Skills = () => {
  return (
    <section
      id="skills"
      className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
      aria-label="Skills"
    >
      <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-navy/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
        <h2 className="text-sm font-bold uppercase tracking-widest text-lightest-slate lg:sr-only">
          Skills
        </h2>
      </div>
      <div>
        {skillsData.map((category, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="mb-8"
          >
            <h3 className="mb-4 text-lg font-medium text-lightest-slate">
              {category.category}
            </h3>
            <div className="flex flex-wrap gap-2">
              {category.skills.map((skill, i) => (
                <Badge
                  key={i}
                  variant="secondary"
                  className="text-green bg-green/10 hover:bg-green/20 rounded-full px-4 py-1.5 text-sm font-medium leading-5 border-none transition-colors"
                >
                  {skill}
                </Badge>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Skills;

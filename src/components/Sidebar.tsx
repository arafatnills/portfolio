"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useEffect, useState } from "react";
import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";
import ResumeButton from "./GetResume";
import Profile from "./Profile";

const navLinks = [
  { name: "About", url: "/#about" },
  { name: "Skills", url: "/#skills" },
  { name: "Projects", url: "/#projects" },
];

const Sidebar = () => {
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("section");
      let current = "";
      sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        if (window.scrollY >= sectionTop - 200) {
          current = section.getAttribute("id") || "";
        }
      });
      setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="lg:fixed lg:top-0 lg:left-0 lg:h-screen lg:w-1/2 lg:flex lg:flex-col lg:justify-between lg:py-24 lg:px-24 ">
      <div>
       <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Profile />
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl sm:text-5xl font-bold text-lightest-slate tracking-tight"
        >
          <Link href="/">Arafat Nill</Link>
        </motion.h1>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mt-3 text-lg sm:text-xl font-medium text-lightest-slate tracking-tight"
        >
          Full-Stack Developer
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-4 max-w-xs leading-normal text-slate"
        >
          I build modern, responsive and scalable web applications that deliver
          great user experiences.
        </motion.p>
        <div className="mt-6 hidden lg:flex">
          <ResumeButton />
        </div>
        <nav
          className="nav hidden lg:block mt-16"
          aria-label="In-page jump links"
        >
          <ul className="w-max">
            {navLinks.map((link, index) => {
              const sectionId = link.url.split("#")[1];
              const isActive = activeSection === sectionId;

              return (
                <motion.li
                  key={link.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                >
                  <Link
                    href={link.url}
                    className={`group flex items-center py-3 ${isActive ? "text-white font-bold" : ""}`}
                  >
                    <span
                      className={`mr-4 h-px transition-all ${
                        isActive
                          ? "w-16 bg-lightest-slate"
                          : "w-8 bg-slate group-hover:w-16 group-hover:bg-lightest-slate"
                      }`}
                    ></span>

                    <span
                      className={`text-xs font-bold uppercase tracking-widest ${
                        isActive
                          ? "text-lightest-slate"
                          : "text-slate group-hover:text-lightest-slate"
                      }`}
                    ></span>
                    {link.name}
                  </Link>
                </motion.li>
              );
            })}
          </ul>
        </nav>
      </div>

      <motion.ul
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.6 }}
        className="mt-8 flex items-center gap-5 lg:mt-0"
        aria-label="Social media"
      >
        <li className="text-2xl text-slate hover:text-lightest-slate transition-colors">
          <a
            href="https://github.com/arafatnills"
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
          >
            <FaGithub />
          </a>
        </li>
        <li className="text-2xl text-slate hover:text-lightest-slate transition-colors">
          <a
            href="https://www.linkedin.com/in/arafatnill/"
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
          >
            <FaLinkedin />
          </a>
        </li>
        <li className="text-2xl text-slate hover:text-lightest-slate transition-colors">
          <a
            href="mailto:arafatnill.dev@gmail.com"
            target="_blank"
            rel="noreferrer"
            aria-label="Email"
          >
            <FaEnvelope />
          </a>
        </li>
      </motion.ul>

      <div className="mt-6 lg:hidden">
        <ResumeButton />
      </div>
    </header>
  );
};

export default Sidebar;

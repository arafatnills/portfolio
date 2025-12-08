"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import { motion } from 'framer-motion';

const navLinks = [
    { name: 'About', url: '/#about' },
    { name: 'Skills', url: '/#skills' },
    { name: 'Projects', url: '/#projects' },
];

const Sidebar = () => {
    const [activeSection, setActiveSection] = useState('');

    useEffect(() => {
        const handleScroll = () => {
            const sections = document.querySelectorAll('section');
            let current = '';
            sections.forEach((section) => {
                const sectionTop = section.offsetTop;
                if (window.scrollY >= sectionTop - 200) {
                    current = section.getAttribute('id') || '';
                }
            });
            setActiveSection(current);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <header className="lg:fixed lg:top-0 lg:left-0 lg:h-screen lg:w-1/2 lg:flex lg:flex-col lg:justify-between lg:py-24 lg:px-24 p-12">
            <div>
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="text-4xl sm:text-5xl font-bold text-lightest-slate tracking-tight"
                >
                    <Link href="/">Md Arafat Ali</Link>
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
                    Experienced full-stack developer specializing in the MERN stack, Next.js, and Tailwind CSS.
                </motion.p>

                <nav className="nav hidden lg:block mt-16" aria-label="In-page jump links">
                    <ul className="w-max">
                        {navLinks.map((link, index) => (
                            <motion.li
                                key={link.name}
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                            >
                                <Link
                                    href={link.url}
                                    className={`group flex items-center py-3 ${activeSection === link.url.substring(1) ? 'text-lightest-slate' : 'text-slate hover:text-lightest-slate'}`}
                                >
                                    <span className={`mr-4 h-px w-8 bg-slate transition-all group-hover:w-16 group-hover:bg-lightest-slate ${activeSection === link.url.substring(1) ? 'w-16 bg-lightest-slate' : ''}`}></span>
                                    <span className="text-xs font-bold uppercase tracking-widest text-slate group-hover:text-lightest-slate">
                                        {link.name}
                                    </span>
                                </Link>
                            </motion.li>
                        ))}
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
                    <a href="https://github.com/CodeWithArafat1" target="_blank" rel="noreferrer" aria-label="GitHub">
                        <FaGithub />
                    </a>
                </li>
                <li className="text-2xl text-slate hover:text-lightest-slate transition-colors">
                    <a href="https://www.linkedin.com/in/arafatnill/" target="_blank" rel="noreferrer" aria-label="LinkedIn">
                        <FaLinkedin />
                    </a>
                </li>
                <li className="text-2xl text-slate hover:text-lightest-slate transition-colors">
                    <a href="mailto:arafatnill.dev@gmail.com" target="_blank" rel="noreferrer" aria-label="Email">
                        <FaEnvelope />
                    </a>
                </li>
            </motion.ul>
        </header>
    );
};

export default Sidebar;

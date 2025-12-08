"use client";

import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
    return (
        <section id="about" className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24" aria-label="About me">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-navy/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0"
            >
                <h2 className="text-sm font-bold uppercase tracking-widest text-lightest-slate lg:sr-only">About</h2>
            </motion.div>
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
            >
                <p className="mb-4">
                    Experienced full-stack developer specializing in the MERN stack, Next.js, and Tailwind CSS. Successfully delivered end-to-end solutions for projects like GadgetGalaxy and TravelEase, featuring responsive design, real-time data, dashboards, and secure CRUD. Eager to build robust applications, solve complex problems, and learn collaboratively.
                </p>
                <p className="mb-4">
                    I have a strong background in both frontend and backend development, with a focus on creating seamless user experiences. My expertise includes building scalable applications using modern technologies and best practices.
                </p>

                <h3 className="mt-8 mb-4 text-lg font-medium text-lightest-slate">Education</h3>
                <div className="mb-4">
                    <h4 className="font-medium text-lightest-slate">Shahadowla Government College</h4>
                    <p className="text-sm text-slate">B.Sc (Honours) in Botany | 2025 – Present</p>
                    <p className="text-sm text-slate">Bagha, Rajshahi, Bangladesh</p>
                </div>

                <h3 className="mt-8 mb-4 text-lg font-medium text-lightest-slate">Languages</h3>
                <ul className="list-disc pl-5 text-slate">
                    <li>Bangla (Native)</li>
                    <li>English (Fluent)</li>
                    <li>Hindi (Conversational)</li>
                </ul>
            </motion.div>
        </section>
    );
};

export default About;

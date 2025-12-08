"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa';
import { Badge } from "@/components/ui/badge";
import { projects } from "@/data/projects";
import Link from 'next/link';
import Image from 'next/image';

const Projects = () => {
    return (
        <section id="projects" className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24" aria-label="Selected projects">
            <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-navy/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
                <h2 className="text-sm font-bold uppercase tracking-widest text-lightest-slate lg:sr-only">Projects</h2>
            </div>
            <div>
                <ul className="group/list">
                    {projects.map((project, index) => (
                        <motion.li
                            key={index}
                            className="mb-12"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                        >
                            <div className="group relative grid gap-4 pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
                                <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-light-navy/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"></div>
                                <div className="z-10 sm:order-2 sm:col-span-6">
                                    <h3>
                                        <Link className="inline-flex items-baseline font-medium leading-tight text-lightest-slate hover:text-green focus-visible:text-green group/link text-base" href={`/projects/${project.slug}`} aria-label={project.title}>
                                            <span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block"></span>
                                            <span>
                                                {project.title} <span className="inline-block"><FaExternalLinkAlt className="inline-block h-3 w-3 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 motion-reduce:transition-none ml-1" /></span>
                                            </span>
                                        </Link>
                                    </h3>
                                    <p className="mt-2 text-xs text-slate uppercase tracking-wide">{project.date}</p>
                                    <p className="mt-2 text-sm leading-normal">
                                        {project.description}
                                    </p>
                                    <ul className="mt-2 flex flex-wrap" aria-label="Technologies used">
                                        {project.tech.map((tech, i) => (
                                            <li key={i} className="mr-1.5 mt-2">
                                                <Badge variant="secondary" className="text-green bg-green/10 hover:bg-green/20 rounded-full px-3 py-1 text-xs font-medium leading-5 border-none">
                                                    {tech}
                                                </Badge>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                                <div className="z-10 sm:order-1 sm:col-span-2">
                                    <Link href={`/projects/${project.slug}`} className="block relative rounded border-2 border-slate/10 transition group-hover:border-slate/30 sm:order-1 sm:col-span-2 sm:translate-y-1 hover:border-green/50 overflow-hidden">
                                        <Image
                                            src={project.image}
                                            alt={project.title}
                                            width={600}
                                            height={300}
                                            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                                        />
                                    </Link>
                                </div>
                            </div>
                        </motion.li>
                    ))}
                </ul>
            </div>
        </section>
    );
};

export default Projects;

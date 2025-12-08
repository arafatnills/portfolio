import React from 'react';
import { projects } from '@/data/projects';
import { notFound } from 'next/navigation';
import MainLayout from '@/components/MainLayout';
import { Badge } from '@/components/ui/badge';
import { FaExternalLinkAlt, FaGithub, FaArrowLeft } from 'react-icons/fa';
import Link from 'next/link';
import Image from 'next/image';

interface PageProps {
    params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
    return projects.map((project) => ({
        slug: project.slug,
    }));
}

export default async function ProjectDetails({ params }: PageProps) {
    const { slug } = await params;
    const project = projects.find((p) => p.slug === slug);

    if (!project) {
        notFound();
    }

    return (
        <MainLayout>
            <div className="mb-8">
                <Link href="/#projects" className="inline-flex items-center text-green hover:underline">
                    <FaArrowLeft className="mr-2" /> Back to Projects
                </Link>
            </div>

            <header className="mb-10">
                <h1 className="text-4xl font-bold text-lightest-slate mb-4">{project.title}</h1>
                <p className="text-slate mb-6 text-lg">{project.date}</p>

                <div className="flex gap-4 mb-8">
                    <a
                        href={project.url}
                        target="_blank"
                        rel="noreferrer"
                        className="flex items-center gap-2 px-4 py-2 border border-green text-green rounded hover:bg-green/10 transition-colors"
                    >
                        <FaExternalLinkAlt /> Live Demo
                    </a>
                    <a
                        href={project.repo}
                        target="_blank"
                        rel="noreferrer"
                        className="flex items-center gap-2 px-4 py-2 border border-slate text-slate rounded hover:border-lightest-slate hover:text-lightest-slate transition-colors"
                    >
                        <FaGithub /> View Code
                    </a>
                </div>

                {project.image && (
                    <div className="mb-8 rounded-lg overflow-hidden border border-lightest-navy shadow-xl">
                        <Image
                            src={project.image}
                            alt={project.title}
                            width={1200}
                            height={630}
                            className="w-full h-auto object-cover hover:scale-105 transition-transform duration-500"
                        />
                    </div>
                )}

                <div className="flex flex-wrap gap-2 mb-8">
                    {project.tech.map((tech) => (
                        <Badge key={tech} variant="secondary" className="text-green bg-green/10 border-none">
                            {tech}
                        </Badge>
                    ))}
                </div>
            </header>

            <section className="mb-12">
                <h2 className="text-2xl font-bold text-lightest-slate mb-4">Overview</h2>
                <p className="text-slate leading-relaxed text-lg">
                    {project.fullDescription}
                </p>
            </section>

            <section>
                <h2 className="text-2xl font-bold text-lightest-slate mb-4">Key Features</h2>
                <ul className="list-disc list-inside text-slate space-y-2 text-lg">
                    {project.features.map((feature, index) => (
                        <li key={index}>{feature}</li>
                    ))}
                </ul>
            </section>
        </MainLayout>
    );
}

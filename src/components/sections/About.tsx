"use client";

import { motion } from "framer-motion";

const About = () => {
  return (
    <section
      id="about"
      className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
      aria-label="About me"
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-navy/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0"
      >
        <h2 className="text-sm font-bold uppercase tracking-widest text-lightest-slate lg:sr-only">
          About
        </h2>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <p className="mb-4">
          I am a dedicated full-stack developer with a strong focus on{" "}
          <b className=" text-white"> backend architecture </b>, specializing in 
          <b className=" text-white"> Node.js</b>, <b className=" text-white">Express.js</b>, <b className=" text-white">PostgreSQL</b>, and <b className=" text-white">MongoDB</b>. I have successfully
          built scalable RESTful APIs and secure data pipelines for projects
          like <b className=" text-white">Digital Life Lessons</b>,{" "}
          <b className=" text-white">GadgetGalaxy</b> and{" "}
          <b className=" text-white">TravelEase</b>, ensuring robust{" "}
          <b className=" text-white">CRUD </b>
          operations, <b className=" text-white">JWT </b>authentication, and
          seamless database management using
          <b className=" text-white"> Prisma ORM</b>.
        </p>
        <p className="mb-4">
          While I have a solid foundation in modern frontend technologies like
          <b className=" text-white"> Next.js</b> and{" "}
          <b className=" text-white">Tailwind CSS </b> to deliver complete
          end-to-end solutions, my core expertise lies in architecting secure,
          efficient <b className=" text-white">server-side logic</b>. I am deeply passionate about solving
          complex backend challenges, <b className=" text-white">optimizing database</b> performance, and
          building reliable applications that scale.
        </p>

        <h3 className="mt-8 mb-4 text-lg font-medium text-lightest-slate">
          Education
        </h3>
        <div className="mb-4">
          <h4 className="font-medium text-lightest-slate">
            Shahadowla Government College
          </h4>
          <p className="text-sm text-slate">
            B.Sc (Honours) in Botany | 2025 – Present
          </p>
          <p className="text-sm text-slate">Bagha, Rajshahi, Bangladesh</p>
        </div>

        <h3 className="mt-8 mb-4 text-lg font-medium text-lightest-slate">
          Languages
        </h3>
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

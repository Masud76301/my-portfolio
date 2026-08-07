"use client";

import { motion } from "framer-motion";
import ProjectCard from "./ProjectCard";
import projects from "./projects.json";

const Projects = ({ id = "projects" }) => {
    return (
        <section
            id={id}
            className="relative w-full overflow-hidden bg-[#0B0B0B] py-28 lg:py-36"
        >
            {/* Ambient backdrop: dot grid + breathing glow — matches About & Skills */}
            <div
                className="pointer-events-none absolute inset-0 opacity-[0.15]"
                style={{
                    backgroundImage:
                        "radial-gradient(circle, rgba(255,255,255,0.5) 1px, transparent 1px)",
                    backgroundSize: "28px 28px",
                }}
            />
            <motion.div
                className="pointer-events-none absolute left-1/2 top-0 h-[420px] w-[420px] -translate-x-1/2 -translate-y-1/3 rounded-full bg-[#4ADE80]/10 blur-[120px]"
                animate={{ opacity: [0.5, 1, 0.5], scale: [1, 1.1, 1] }}
                transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
            />

            <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
                {/* Heading */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.6 }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                    className="mx-auto mb-24 max-w-3xl text-center"
                >
                    <span className="inline-flex items-center gap-2 rounded-full border border-[#4ADE80]/30 bg-[#4ADE80]/10 px-4 py-1 font-mono text-sm text-[#4ADE80]">
                        <motion.span
                            className="h-1.5 w-1.5 rounded-full bg-[#4ADE80]"
                            animate={{ opacity: [1, 0.3, 1] }}
                            transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
                        />
                        featured_work
                    </span>

                    <h2 className="mt-6 text-4xl font-bold text-white md:text-6xl">
                        Featured Projects
                    </h2>

                    <motion.div
                        initial={{ scaleX: 0 }}
                        whileInView={{ scaleX: 1 }}
                        viewport={{ once: true, amount: 1 }}
                        transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
                        style={{ transformOrigin: "center" }}
                        className="mx-auto mt-6 h-1 w-24 rounded-full bg-[#4ADE80]"
                    />

                    <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-gray-400">
                        A collection of projects showcasing my passion for building
                        modern, scalable, and user-friendly web applications using the
                        latest web technologies.
                    </p>
                </motion.div>

                {/* Projects */}
                <div className="space-y-40">
                    {projects.map((project, index) => (
                        <ProjectCard key={project.id} project={project} index={index} />
                    ))}
                </div>

                {/* Bottom CTA */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.6 }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                    className="relative mt-32 overflow-hidden rounded-2xl border border-white/10 bg-white/5 px-6 py-16 text-center backdrop-blur-xl"
                >
                    <div
                        className="pointer-events-none absolute inset-0 opacity-[0.08]"
                        style={{
                            backgroundImage:
                                "radial-gradient(circle, rgba(255,255,255,0.5) 1px, transparent 1px)",
                            backgroundSize: "24px 24px",
                        }}
                    />

                    <div className="relative">
                        <span className="font-mono text-xs tracking-wide text-[#4ADE80]">
                            {"// more_on_github"}
                        </span>

                        <h3 className="mt-3 text-3xl font-bold text-white">
                            Interested in seeing more?
                        </h3>

                        <p className="mx-auto mt-4 max-w-md text-gray-400">
                            Explore additional projects and open-source contributions on
                            GitHub.
                        </p>

                        <motion.a
                            href="https://github.com/Masud76301"
                            target="_blank"
                            rel="noopener noreferrer"
                            whileHover={{
                                scale: 1.05,
                                boxShadow: "0 0 24px rgba(74,222,128,0.35)",
                            }}
                            whileTap={{ scale: 0.97 }}
                            className="mt-8 inline-flex items-center rounded-full bg-[#4ADE80] px-8 py-4 font-semibold text-[#0B0B0B] transition-colors duration-300 hover:bg-[#6EE7A8]"
                        >
                            View My GitHub
                        </motion.a>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Projects;
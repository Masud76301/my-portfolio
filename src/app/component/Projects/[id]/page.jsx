"use client";

import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { motion } from "framer-motion";
import {
    FiArrowLeft,
    FiExternalLink,
    FiGithub,
    FiAlertCircle,
    FiTrendingUp,
} from "react-icons/fi";
import { use } from "react";
import projects from "@/app/component/Projects/projects.json";

const fadeUp = {
    hidden: { opacity: 0, y: 24 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const staggerContainer = {
    hidden: {},
    show: { transition: { staggerChildren: 0.06 } },
};

const badge = {
    hidden: { opacity: 0, y: 10 },
    show: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } },
};

export default function ProjectDetailsPage({ params }) {
    const { id } = use(params);
    const project = projects.find((p) => String(p.id) === String(id));

    if (!project) {
        notFound();
    }

    const {
        projectName,
        image,
        description,
        technologies,
        liveLink,
        githubClient,
        challenges,
        futurePlans,
    } = project;

    return (
        <section className="relative w-full overflow-hidden bg-[#0B0B0B] py-24 lg:py-32">
            {/* Ambient backdrop — same as Projects section */}
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

            <div className="relative z-10 mx-auto max-w-5xl px-6 lg:px-8">
                {/* Back link */}
                <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4 }}
                >
                    <Link
                        href="/#projects"
                        className="inline-flex items-center gap-2 text-sm font-medium text-gray-400 transition hover:text-[#4ADE80]"
                    >
                        <FiArrowLeft />
                        Back to Projects
                    </Link>
                </motion.div>

                {/* Header */}
                <motion.div
                    variants={fadeUp}
                    initial="hidden"
                    animate="show"
                    className="mt-8"
                >
                    <h1 className="text-4xl font-bold text-white md:text-6xl">
                        {projectName}
                    </h1>
                    {description && (
                        <p className="mt-5 max-w-2xl text-lg leading-8 text-gray-400">
                            {description}
                        </p>
                    )}
                </motion.div>

                {/* Image */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.15, ease: "easeOut" }}
                    className="relative mt-10 aspect-video w-full overflow-hidden rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl"
                >
                    <Image
                        src={image}
                        alt={projectName}
                        fill
                        priority
                        className="object-cover"
                    />
                </motion.div>

                {/* Tech stack */}
                {technologies?.length > 0 && (
                    <motion.div
                        variants={staggerContainer}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true, amount: 0.4 }}
                        className="mt-12"
                    >
                        <h2 className="text-xl font-semibold text-white">
                            Tech Stack
                        </h2>
                        <div className="mt-4 flex flex-wrap gap-3">
                            {technologies.map((tech) => (
                                <motion.span
                                    key={tech}
                                    variants={badge}
                                    className="rounded-full border border-cyan-500/30 bg-cyan-500/10 px-4 py-2 text-sm text-cyan-300 transition hover:bg-cyan-500 hover:text-white"
                                >
                                    {tech}
                                </motion.span>
                            ))}
                        </div>
                    </motion.div>
                )}

                {/* Live link / GitHub */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.6 }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                    className="mt-10 flex flex-wrap gap-4"
                >
                    {liveLink && (
                        <Link
                            href={liveLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 rounded-full bg-[#4ADE80] px-6 py-3 font-semibold text-[#0B0B0B] transition hover:scale-105 hover:bg-[#6EE7A8]"
                        >
                            View Live Project
                            <FiExternalLink />
                        </Link>
                    )}

                    {githubClient && (
                        <Link
                            href={githubClient}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 rounded-full border border-white/20 px-6 py-3 font-semibold text-white transition hover:border-[#4ADE80] hover:text-[#4ADE80]"
                        >
                            View Client Repository
                            <FiGithub />
                        </Link>
                    )}
                </motion.div>
                {/* Challenges */}
                {challenges?.length > 0 && (
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 0.5, ease: "easeOut" }}
                        className="mt-16"
                    >
                        <h2 className="flex items-center gap-2 text-xl font-semibold text-white">
                            <FiAlertCircle className="text-[#4ADE80]" />
                            Challenges Faced
                        </h2>
                        <ul className="mt-4 space-y-3 pl-6">
                            {challenges.map((item, i) => (
                                <li
                                    key={i}
                                    className="flex items-start gap-3 text-gray-400"
                                >
                                    <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#4ADE80]" />
                                    <span className="leading-7">{item}</span>
                                </li>
                            ))}
                        </ul>
                    </motion.div>
                )}

                {/* Future plans */}
                {futurePlans?.length > 0 && (
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 0.5, ease: "easeOut" }}
                        className="mb-8 mt-16"
                    >
                        <h2 className="flex items-center gap-2 text-xl font-semibold text-white">
                            <FiTrendingUp className="text-[#4ADE80]" />
                            Potential Improvements &amp; Future Plans
                        </h2>
                        <ul className="mt-4 space-y-3 pl-6">
                            {futurePlans.map((item, i) => (
                                <li
                                    key={i}
                                    className="flex items-start gap-3 text-gray-400"
                                >
                                    <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#4ADE80]" />
                                    <span className="leading-7">{item}</span>
                                </li>
                            ))}
                        </ul>
                    </motion.div>
                )}
            </div>
        </section>
    );
}
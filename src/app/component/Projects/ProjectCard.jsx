"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
    FiArrowUpRight,
    FiGithub,
    FiExternalLink,
} from "react-icons/fi";

const ProjectCard = ({ project, index }) => {
    const {
        title,
        subtitle,
        description,
        image,
        technologies,
        live,
        github,
        features,
        category,
        year,
        featured,
    } = project;

    const reverse = index % 2 !== 0;

    return (
        <motion.div
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
                duration: 0.7,
                ease: "easeOut",
            }}
            className={`grid lg:grid-cols-2 gap-12 items-center ${reverse ? "lg:[&>*:first-child]:order-2" : ""
                }`}
        >
            {/* Image */}
            <motion.div
                whileHover={{ scale: 1.03 }}
                transition={{ duration: 0.3 }}
                className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl"
            >
                <div className="relative aspect-video overflow-hidden">
                    <Image
                        src={image}
                        alt={title}
                        fill
                        className="object-cover transition duration-700 group-hover:scale-110"
                    />

                    {/* Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition duration-500" />

                    {/* Buttons */}
                    <div className="absolute bottom-6 left-6 flex gap-3 opacity-0 group-hover:opacity-100 transition duration-500">
                        <Link
                            href={live}
                            target="_blank"
                            className="flex items-center gap-2 rounded-full bg-white px-5 py-2 text-sm font-semibold text-black transition hover:scale-105"
                        >
                            Live Demo
                            <FiExternalLink />
                        </Link>

                        <Link
                            href={github}
                            target="_blank"
                            className="flex items-center gap-2 rounded-full border border-white/30 bg-white/10 px-5 py-2 text-sm text-white backdrop-blur-md transition hover:bg-white/20"
                        >
                            GitHub
                            <FiGithub />
                        </Link>
                    </div>
                </div>
            </motion.div>

            {/* Content */}
            <div>
                <div className="flex flex-wrap items-center gap-3 mb-5">
                    {featured && (
                        <span className="rounded-full bg-cyan-500/20 px-4 py-1 text-xs font-semibold uppercase tracking-widest text-cyan-400">
                            Featured
                        </span>
                    )}

                    {category && (
                        <span className="rounded-full border border-white/10 px-4 py-1 text-xs text-gray-300">
                            {category}
                        </span>
                    )}

                    {year && (
                        <span className="rounded-full border border-white/10 px-4 py-1 text-xs text-gray-300">
                            {year}
                        </span>
                    )}
                </div>

                <h3 className="text-4xl font-bold text-white">
                    {title}
                </h3>

                {subtitle && (
                    <p className="mt-2 text-cyan-400 font-medium">
                        {subtitle}
                    </p>
                )}

                <p className="mt-6 leading-8 text-gray-400">
                    {description}
                </p>

                {/* Features */}

                {features?.length > 0 && (
                    <div className="mt-8">
                        <h4 className="mb-3 text-white font-semibold">
                            Key Features
                        </h4>

                        <ul className="space-y-2">
                            {features.map((item) => (
                                <li
                                    key={item}
                                    className="flex items-center gap-3 text-gray-400"
                                >
                                    <span className="h-2 w-2 rounded-full bg-cyan-400" />
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>
                )}

                {/* Technologies */}

                <div className="mt-8 flex flex-wrap gap-3">
                    {technologies.map((tech) => (
                        <span
                            key={tech}
                            className="rounded-full border border-cyan-500/30 bg-cyan-500/10 px-4 py-2 text-sm text-cyan-300 transition hover:bg-cyan-500 hover:text-white"
                        >
                            {tech}
                        </span>
                    ))}
                </div>

                {/* Buttons */}

                <div className="mt-10 flex flex-wrap gap-4">
                    <Link
                        href={live}
                        target="_blank"
                        className="inline-flex items-center gap-2 rounded-full bg-cyan-500 px-6 py-3 font-semibold text-white transition hover:scale-105 hover:bg-cyan-400"
                    >
                        Visit Website
                        <FiArrowUpRight />
                    </Link>

                    <Link
                        href={github}
                        target="_blank"
                        className="inline-flex items-center gap-2 rounded-full border border-white/20 px-6 py-3 font-semibold text-white transition hover:border-cyan-400 hover:text-cyan-400"
                    >
                        Source Code
                        <FiGithub />
                    </Link>
                </div>
            </div>
        </motion.div>
    );
};

export default ProjectCard;
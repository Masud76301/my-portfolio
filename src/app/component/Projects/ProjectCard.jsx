"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { FiArrowUpRight } from "react-icons/fi";

const ProjectCard = ({ project }) => {
    const { id, projectName, image, description, featured } = project;

    return (
        <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            whileHover={{ y: -6 }}
            className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl"
        >
            {/* Image */}
            <div className="relative aspect-video overflow-hidden">
                <Image
                    src={image}
                    alt={projectName}
                    fill
                    className="object-cover transition duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition duration-500" />

                {featured && (
                    <span className="absolute left-4 top-4 rounded-full bg-white px-4 py-1 text-xs font-semibold uppercase tracking-widest text-gray-600 backdrop-blur-sm">
                        Featured
                    </span>
                )}
            </div>

            {/* Content */}
            <div className="p-6">
                <h3 className="text-2xl font-bold text-white">{projectName}</h3>

                {description && (
                    <p className="mt-3 line-clamp-2 text-sm leading-6 text-gray-400">
                        {description}
                    </p>
                )}

                <Link
                    href={`/component/Projects/${id}`}
                    className="mt-6 inline-flex items-center gap-2 rounded-full bg-[#4ADE80] px-5 py-2.5 text-sm font-semibold text-[#0B0B0B] transition hover:scale-105 hover:bg-[#6EE7A8]"
                >
                    View Details
                    <FiArrowUpRight />
                </Link>
            </div>
        </motion.div>
    );
};

export default ProjectCard;
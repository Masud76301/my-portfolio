"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { FaGraduationCap } from "react-icons/fa";

const education = [
    {
        id: 1,
        university: "Independent University, Bangladesh",
        degree: "M.Sc. in Electrical & Electronics Engineering",
        duration: "Jan 2018 - Jun 2020",
        logo: "/education/iub.png",
    },
    {
        id: 2,
        university: "University of Science & Technology Chittagong",
        degree: "B.Sc. in Electrical & Electronics Engineering",
        duration: "Jul 2011 - Mar 2016",
        logo: "/education/ustc.png",
    },
    {
        id: 3,
        university: "Higher Secondary Certificate (HSC)",
        degree: "Science • Chattogram Board",
        duration: "Passing Year • 2010",
        logo: "/education/hsc.png",
    },
];

export default function Education({ id = "education" }) {
    return (
        <section
            id={id}
            className="relative w-full overflow-hidden bg-[#0B0B0B] px-6 py-24 lg:px-10"
        >
            {/* Ambient backdrop: dot grid + breathing glow — matches About / Skills / Projects */}
            <div
                className="pointer-events-none absolute inset-0 opacity-[0.15]"
                style={{
                    backgroundImage:
                        "radial-gradient(circle, rgba(255,255,255,0.5) 1px, transparent 1px)",
                    backgroundSize: "28px 28px",
                }}
            />
            <motion.div
                className="pointer-events-none absolute left-0 top-1/4 h-[380px] w-[380px] -translate-y-1/2 rounded-full bg-[#4ADE80]/10 blur-[120px]"
                animate={{ opacity: [0.5, 1, 0.5], scale: [1, 1.1, 1] }}
                transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
            />

            <div className="relative mx-auto max-w-5xl">
                {/* Heading */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.6 }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                    className="mb-16 flex flex-col items-center"
                >
                    <span className="inline-flex items-center gap-2 rounded-full border border-[#4ADE80]/30 bg-[#4ADE80]/10 px-4 py-1 font-mono text-sm text-[#4ADE80]">
                        <motion.span
                            className="h-1.5 w-1.5 rounded-full bg-[#4ADE80]"
                            animate={{ opacity: [1, 0.3, 1] }}
                            transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
                        />
                        education
                    </span>

                    <div className="mt-5 flex items-center gap-4">
                        <div className="flex h-14 w-14 items-center justify-center rounded-xl border border-[#4ADE80]/30 bg-[#4ADE80]/10">
                            <FaGraduationCap className="text-3xl text-[#4ADE80]" />
                        </div>

                        <div>
                            <h2 className="text-4xl font-bold text-white md:text-5xl">
                                Education
                            </h2>
                            <p className="mt-1 text-gray-400">My academic journey</p>
                        </div>
                    </div>
                </motion.div>

                {/* Timeline */}
                <div className="relative">
                    {/* Connecting line — draws downward on scroll */}
                    <motion.div
                        initial={{ scaleY: 0 }}
                        whileInView={{ scaleY: 1 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 1, ease: "easeOut" }}
                        style={{ transformOrigin: "top" }}
                        className="absolute bottom-0 left-10 top-0 w-[2px] bg-gradient-to-b from-[#4ADE80] via-[#4ADE80]/40 to-transparent"
                    />

                    <div className="space-y-14">
                        {education.map((item, index) => (
                            <motion.div
                                key={item.id}
                                initial={{ opacity: 0, x: -30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true, amount: 0.4 }}
                                transition={{
                                    duration: 0.5,
                                    delay: index * 0.15,
                                    ease: "easeOut",
                                }}
                                className="relative flex gap-8"
                            >
                                {/* Logo node */}
                                <div className="relative z-10 shrink-0">
                                    <motion.div
                                        initial={{ scale: 0 }}
                                        whileInView={{ scale: 1 }}
                                        viewport={{ once: true, amount: 0.4 }}
                                        transition={{
                                            type: "spring",
                                            stiffness: 260,
                                            damping: 18,
                                            delay: index * 0.15 + 0.15,
                                        }}
                                        whileHover={{
                                            scale: 1.08,
                                            boxShadow: "0 0 24px rgba(74,222,128,0.35)",
                                        }}
                                        className="flex h-20 w-20 items-center justify-center rounded-full border border-[#4ADE80]/30 bg-[#111827] shadow-lg shadow-[#4ADE80]/10"
                                    >
                                        <Image
                                            src={item.logo}
                                            alt={item.university}
                                            width={56}
                                            height={56}
                                            className="rounded-full object-contain"
                                        />
                                    </motion.div>
                                </div>

                                {/* Text — no card wrapper */}
                                <div className="flex-1 pt-1">
                                    <h3 className="text-2xl font-bold text-white">
                                        {item.university}
                                    </h3>

                                    <p className="mt-2 text-lg text-gray-400">{item.degree}</p>

                                    <span className="mt-3 inline-block font-mono text-sm font-medium text-[#4ADE80]">
                                        {item.duration}
                                    </span>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
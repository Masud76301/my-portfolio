"use client";

import { motion } from "framer-motion";
import {
    SiHtml5,
    SiCss,
    SiJavascript,
    SiReact,
    SiNextdotjs,
    SiTailwindcss,
    SiNodedotjs,
    SiExpress,
    SiMongodb,
    SiC,
    SiCplusplus,
} from "react-icons/si";
import { RiShieldCheckFill } from "react-icons/ri";

const skillCategories = [
    {
        title: "Frontend",
        skills: [
            { name: "HTML5", icon: SiHtml5, color: "#E34F26" },
            { name: "CSS3", icon: SiCss, color: "#1572B6" },
            { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
            { name: "React", icon: SiReact, color: "#61DAFB" },
            { name: "Next.js", icon: SiNextdotjs, color: "#ffffff" },
            { name: "Tailwind CSS", icon: SiTailwindcss, color: "#38BDF8" },
        ],
    },
    {
        title: "Backend",
        skills: [
            { name: "Node.js", icon: SiNodedotjs, color: "#5FA04E" },
            { name: "Express.js", icon: SiExpress, color: "#D1D5DB" },
            { name: "BetterAuth", icon: RiShieldCheckFill, color: "#4ADE80" },
        ],
    },
    {
        title: "Database",
        skills: [
            { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
        ],
    },
    {
        title: "Programming",
        skills: [
            { name: "C", icon: SiC, color: "#659AD2" },
            { name: "C++", icon: SiCplusplus, color: "#00599C" },
        ],
    },
];

// One category's row of chips staggers in after its header
const rowVariants = {
    hidden: {},
    visible: {
        transition: { staggerChildren: 0.06 },
    },
};

const chipVariants = {
    hidden: { opacity: 0, y: 16, scale: 0.94 },
    visible: {
        opacity: 1,
        y: 0,
        scale: 1,
        transition: { type: "spring", stiffness: 260, damping: 20 },
    },
};

const headerVariants = {
    hidden: { opacity: 0, x: -12 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.4, ease: "easeOut" } },
};

export default function Skills({ id = " skills" }) {
    return (
        <section
            id={id}
            className="relative w-full overflow-hidden bg-[#0B0B0B] px-6 py-24"
        >
            {/* Ambient backdrop: dot grid + soft glow, kept quiet */}
            <div
                className="pointer-events-none absolute inset-0 opacity-[0.15]"
                style={{
                    backgroundImage:
                        "radial-gradient(circle, rgba(255,255,255,0.5) 1px, transparent 1px)",
                    backgroundSize: "28px 28px",
                }}
            />
            <motion.div
                className="pointer-events-none absolute left-1/2 top-0 h-[420px] w-[420px] -translate-x-1/2 -translate-y-1/3 rounded-full bg-emerald-500/10 blur-[110px]"
                animate={{ opacity: [0.6, 1, 0.6], scale: [1, 1.08, 1] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            />

            <div className="relative mx-auto max-w-6xl">
                {/* Heading */}
                <motion.div
                    className="mb-16 text-center"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.6 }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                >
                    <span className="inline-flex items-center gap-2 rounded-full border border-emerald-400/30 bg-emerald-400/10 px-4 py-1 font-mono text-sm text-emerald-400">
                        <motion.span
                            className="h-1.5 w-1.5 rounded-full bg-emerald-400"
                            animate={{ opacity: [1, 0.3, 1] }}
                            transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
                        />
                        tech_stack
                    </span>

                    <h2 className="mt-5 text-4xl font-bold text-white md:text-5xl">
                        Technical Skills
                    </h2>

                    <p className="mx-auto mt-4 max-w-2xl text-gray-400">
                        Technologies and tools I use to build fast, scalable, and modern
                        web applications.
                    </p>
                </motion.div>

                {/* Skills Grid */}
                <div className="space-y-12">
                    {skillCategories.map((category) => (
                        <div key={category.title}>
                            {/* Category header styled like a code comment */}
                            <motion.div
                                className="mb-5 flex items-center gap-3"
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true, amount: 0.8 }}
                                variants={headerVariants}
                            >
                                <h3 className="whitespace-nowrap font-mono text-sm font-semibold tracking-wide text-emerald-400">
                                    {"// " + category.title}
                                </h3>
                                <span className="h-px flex-1 bg-gradient-to-r from-white/15 to-transparent" />
                                <span className="font-mono text-xs text-gray-500">
                                    {String(category.skills.length).padStart(2, "0")}
                                </span>
                            </motion.div>

                            <motion.div
                                className="flex flex-wrap gap-4"
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true, amount: 0.3 }}
                                variants={rowVariants}
                            >
                                {category.skills.map((skill) => {
                                    const Icon = skill.icon;

                                    return (
                                        <motion.div
                                            key={skill.name}
                                            variants={chipVariants}
                                            whileHover={{
                                                y: -4,
                                                borderColor: "rgba(74,222,128,0.6)",
                                                boxShadow: "0 0 20px rgba(74,222,128,0.18)",
                                            }}
                                            whileTap={{ scale: 0.96 }}
                                            className="group flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 px-5 py-3 backdrop-blur-xl"
                                        >
                                            <motion.span
                                                className="flex"
                                                whileHover={{ rotate: -8, scale: 1.15 }}
                                                transition={{ type: "spring", stiffness: 300, damping: 15 }}
                                            >
                                                <Icon size={22} style={{ color: skill.color }} />
                                            </motion.span>

                                            <span className="whitespace-nowrap text-sm font-medium text-white">
                                                {skill.name}
                                            </span>
                                        </motion.div>
                                    );
                                })}
                            </motion.div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
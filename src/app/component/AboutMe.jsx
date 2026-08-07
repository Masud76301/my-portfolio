"use client";

import { motion } from "framer-motion";

const paragraphs = [
    <>
        Hello! I'm{" "}
        <span className="font-semibold text-white">Khaled Masud</span>, a
        graduate in{" "}
        <span className="font-medium text-[#4ADE80]">
            Electrical Engineering
        </span>{" "}
        with a strong passion for technology, coding, and problem-solving. My
        curiosity about how software works inspired me to explore web
        development, and over time it became more than just a skill—it became
        the career I truly enjoy.
    </>,
    <>
        My programming journey started with learning the fundamentals of web
        development. Through consistent practice and building real-world
        projects, I developed hands-on experience with{" "}
        <span className="font-medium text-white">
            JavaScript, React, Next.js, Node.js, Express.js, MongoDB, Tailwind
            CSS,
        </span>{" "}
        and modern development tools. Every project has strengthened my
        problem-solving skills and encouraged me to continuously improve.
    </>,
    <>
        I enjoy creating modern full-stack web applications that are fast,
        responsive, and user-friendly. Whether it's designing beautiful user
        interfaces, developing secure backend functionality, or optimizing
        performance, I love turning ideas into practical digital solutions
        that make a real impact.
    </>,
    <>
        Outside of programming, I enjoy learning about emerging technologies,
        reading technical articles, watching football and cricket, and
        spending quality time with my family and friends. These activities
        keep me motivated, creative, and always eager to learn something new.
    </>,
    <>
        My goal is to grow as a professional{" "}
        <span className="font-medium text-[#4ADE80]">
            Full-Stack Software Engineer
        </span>
        , contribute to meaningful products, collaborate with talented teams,
        and continue learning throughout my career. I believe that
        consistency, curiosity, and continuous improvement are the keys to
        becoming a great developer.
    </>,
];

const fadeUp = {
    hidden: { opacity: 0, y: 22 },
    visible: (i = 0) => ({
        opacity: 1,
        y: 0,
        transition: { duration: 0.5, ease: "easeOut", delay: i * 0.12 },
    }),
};

export default function AboutMe({ id = "about" }) {
    return (
        <section
            id={id}
            className="relative w-full overflow-hidden border-t border-white/10 bg-[#111827] py-24"
        >
            {/* Ambient backdrop: dot grid + breathing glow, matches the rest of the site */}
            <div
                className="pointer-events-none absolute inset-0 opacity-[0.12]"
                style={{
                    backgroundImage:
                        "radial-gradient(circle, rgba(255,255,255,0.5) 1px, transparent 1px)",
                    backgroundSize: "28px 28px",
                }}
            />
            <motion.div
                className="pointer-events-none absolute right-0 top-1/3 h-[380px] w-[380px] -translate-y-1/2 rounded-full bg-[#4ADE80]/10 blur-[120px]"
                animate={{ opacity: [0.5, 1, 0.5], scale: [1, 1.1, 1] }}
                transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
            />

            <div className="relative mx-auto max-w-4xl px-6 lg:px-8">
                {/* Section Badge */}
                <motion.span
                    initial={{ opacity: 0, y: 12 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.8 }}
                    transition={{ duration: 0.4, ease: "easeOut" }}
                    className="inline-flex items-center gap-2 rounded-full border border-[#4ADE80]/30 bg-[#4ADE80]/10 px-4 py-1 text-sm font-medium text-[#4ADE80]"
                >
                    <motion.span
                        className="h-1.5 w-1.5 rounded-full bg-[#4ADE80]"
                        animate={{ opacity: [1, 0.3, 1] }}
                        transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
                    />
                    About Me
                </motion.span>

                {/* Heading */}
                <motion.h2
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.6 }}
                    transition={{ duration: 0.55, ease: "easeOut", delay: 0.1 }}
                    className="mt-6 text-4xl font-bold leading-tight text-white md:text-5xl"
                >
                    Turning Curiosity Into Meaningful Digital Experiences
                </motion.h2>

                {/* Decorative Line — draws in from the left */}
                <motion.div
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    viewport={{ once: true, amount: 1 }}
                    transition={{ duration: 0.6, ease: "easeOut", delay: 0.3 }}
                    style={{ transformOrigin: "left" }}
                    className="mt-6 h-1 w-24 rounded-full bg-[#4ADE80]"
                />

                {/* Content */}
                <div className="mt-10 space-y-8 text-lg leading-9 text-gray-300">
                    {paragraphs.map((p, i) => (
                        <motion.p
                            key={i}
                            custom={i}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.4 }}
                            variants={fadeUp}
                        >
                            {p}
                        </motion.p>
                    ))}
                </div>

                {/* Bottom Quote */}
                <motion.div
                    initial={{ opacity: 0, x: -16 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.8 }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                    className="relative mt-16 pl-6"
                >
                    <motion.span
                        initial={{ scaleY: 0 }}
                        whileInView={{ scaleY: 1 }}
                        viewport={{ once: true, amount: 1 }}
                        transition={{ duration: 0.5, ease: "easeOut", delay: 0.2 }}
                        style={{ transformOrigin: "top" }}
                        className="absolute left-0 top-0 h-full w-1 rounded-full bg-[#4ADE80]"
                    />
                    <p className="text-xl italic text-gray-200">
                        "I believe every line of code is an opportunity to learn, solve a
                        problem, and create something meaningful."
                    </p>
                </motion.div>
            </div>
        </section>
    );
}
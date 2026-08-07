'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { FiDownload, FiArrowRight, FiChevronDown } from 'react-icons/fi';
import {
    TbBrandNextjs,
    TbBrandReact,
    TbBrandMongodb,
    TbBrandJavascript,
    TbBrandTailwind,
    TbBrandNodejs,
    TbSparkles,
} from 'react-icons/tb';

const TYPING_TITLES = [
    'Full-Stack Web Developer',
    'React Developer',
    'Next.js Developer',
    'Problem Solver',
];

const TECH_PILLS = [
    { name: 'Next.js', icon: TbBrandNextjs, color: 'text-white' },
    { name: 'React', icon: TbBrandReact, color: 'text-[#61DAFB]' },
    { name: 'JavaScript', icon: TbBrandJavascript, color: 'text-[#F7DF1E]' },
    { name: 'MongoDB', icon: TbBrandMongodb, color: 'text-[#47A248]' },
    { name: 'Tailwind CSS', icon: TbBrandTailwind, color: 'text-[#38BDF8]' },
    { name: 'Node.js', icon: TbBrandNodejs, color: 'text-[#5FA04E]' },
];

const STATS = [
    { value: '15+', label: 'Projects Completed' },
    { value: '6+', label: 'Tech Stack Mastered' },
    { value: '100%', label: 'Continuous Learning' },
];

export default function Hero({ id = 'home' }) {
    const [titleIndex, setTitleIndex] = useState(0);
    const [displayText, setDisplayText] = useState('');
    const [isDeleting, setIsDeleting] = useState(false);

    // Typing effect loop
    useEffect(() => {
        const currentFullText = TYPING_TITLES[titleIndex];
        let speed = isDeleting ? 35 : 75;

        if (!isDeleting && displayText === currentFullText) {
            speed = 1800; // Pause at full word
        } else if (isDeleting && displayText === '') {
            setIsDeleting(false);
            setTitleIndex((prev) => (prev + 1) % TYPING_TITLES.length);
            speed = 300;
        }

        const timer = setTimeout(() => {
            setDisplayText((prev) => {
                if (!isDeleting) {
                    if (prev.length < currentFullText.length) {
                        return currentFullText.slice(0, prev.length + 1);
                    }
                    setIsDeleting(true);
                    return prev;
                } else {
                    return currentFullText.slice(0, prev.length - 1);
                }
            });
        }, speed);

        return () => clearTimeout(timer);
    }, [displayText, isDeleting, titleIndex]);

    // Smooth scroll helper
    const scrollToSection = (sectionId) => {
        const element = document.getElementById(sectionId);
        if (element) {
            const navOffset = 80;
            const elementPosition = element.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - navOffset;

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth',
            });
        }
    };

    // Animation variants
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.15,
                delayChildren: 0.1,
            },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 25 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
        },
    };

    return (
        <section
            id={id}
            className="relative w-full min-h-screen flex items-center justify-center bg-[#0B0B0B] text-white overflow-hidden pt-28 pb-16 lg:py-32"
        >
            {/* Background Decorative Gradients & Glow Effects */}
            <div className="absolute top-1/4 left-10 w-96 h-96 bg-[#4ADE80]/10 rounded-full blur-[120px] pointer-events-none" />
            <div className="absolute bottom-10 right-10 w-96 h-96 bg-[#5EEAD4]/10 rounded-full blur-[120px] pointer-events-none" />
            <div className="absolute inset-0 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:32px_32px] opacity-[0.03] pointer-events-none" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10">
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                    className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center"
                >
                    {/* Left Column: Content */}
                    <div className="lg:col-span-7 flex flex-col justify-center space-y-6 text-center lg:text-left">
                        {/* Small Welcome Badge */}
                        <motion.div variants={itemVariants} className="flex justify-center lg:justify-start">
                            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#111827]/80 border border-white/10 backdrop-blur-md shadow-inner text-xs sm:text-sm font-medium text-zinc-300">
                                <span className="w-2 h-2 rounded-full bg-[#4ADE80] animate-ping" />
                                <span className="w-2 h-2 rounded-full bg-[#4ADE80] -ml-4" />
                                <span>👋 Welcome to my portfolio</span>
                            </div>
                        </motion.div>

                        {/* Main Heading & Gradient Name */}
                        <motion.div variants={itemVariants} className="space-y-2">
                            <h2 className="text-xl sm:text-2xl font-medium text-zinc-400 tracking-wide">
                                Hello, I&apos;m
                            </h2>
                            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight">
                                <span className="bg-gradient-to-r from-[#4ADE80] via-[#5EEAD4] to-white bg-clip-text text-transparent">
                                    Khaled Masud
                                </span>
                            </h1>
                            {/* Typing Profession Subtitle */}
                            <div className="h-10 sm:h-12 flex items-center justify-center lg:justify-start text-xl sm:text-3xl font-bold tracking-tight text-zinc-200">
                                <span className="mr-2">I am a</span>
                                <span className="text-[#4ADE80] flex items-center">
                                    <span>{displayText}</span>
                                    <span className="ml-1 inline-block w-0.5 h-7 sm:h-8 bg-[#4ADE80] animate-pulse" />
                                </span>
                            </div>
                        </motion.div>

                        {/* Introduction Paragraph */}
                        <motion.p
                            variants={itemVariants}
                            className="text-base sm:text-lg text-zinc-400 max-w-2xl mx-auto lg:mx-0 leading-relaxed"
                        >I love buildI build modern, responsive, and user-friendly web applications using <span className='font-bold text-white'>Next.js, React, JavaScript, and MongoDB.</span> Passionate about solving real-world problems through clean code and continuously learning new technologies.
                        </motion.p>



                        {/* CTA Buttons */}
                        <motion.div
                            variants={itemVariants}
                            className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2"
                        >
                            {/* Primary Button */}
                            <a
                                href="/resume.pdf"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-full bg-gradient-to-r from-[#4ADE80] to-[#5EEAD4] text-slate-950 font-bold text-sm sm:text-base shadow-[0_0_25px_rgba(74,222,128,0.35)] hover:shadow-[0_0_35px_rgba(74,222,128,0.55)] hover:scale-[1.03] active:scale-[0.98] transition-all duration-300 group"
                            >
                                <FiDownload className="w-5 h-5 text-slate-950 group-hover:translate-y-0.5 transition-transform" />
                                <span>Download Resume</span>
                            </a>

                            {/* Secondary Button */}
                            <button
                                type="button"
                                onClick={() => scrollToSection('projects')}
                                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-full bg-[#111827]/80 hover:bg-[#111827] border border-white/10 hover:border-[#4ADE80]/50 backdrop-blur-xl text-white font-medium text-sm sm:text-base hover:scale-[1.03] active:scale-[0.98] transition-all duration-300 group shadow-lg"
                            >
                                <span>View Projects</span>
                                <FiArrowRight className="w-5 h-5 text-[#4ADE80] group-hover:translate-x-1 transition-transform" />
                            </button>
                        </motion.div>

                        {/* Small Statistics Cards */}
                        <motion.div
                            variants={itemVariants}
                            className="grid grid-cols-3 gap-3 sm:gap-4 pt-6 border-t border-white/10 max-w-xl mx-auto lg:mx-0"
                        >
                            {STATS.map((stat) => (
                                <div
                                    key={stat.label}
                                    className="p-3 sm:p-4 rounded-xl bg-[#111827]/50 border border-white/5 backdrop-blur-md text-center hover:border-[#4ADE80]/30 transition-all duration-300"
                                >
                                    <div className="text-2xl sm:text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#4ADE80] to-[#5EEAD4]">
                                        {stat.value}
                                    </div>
                                    <div className="text-[11px] sm:text-xs text-zinc-400 mt-1 font-medium leading-tight">
                                        {stat.label}
                                    </div>
                                </div>
                            ))}
                        </motion.div>
                    </div>

                    {/* Right Column: Visual Profile & Floating Glass Tech Cards */}
                    <div className="lg:col-span-5 flex justify-center items-center relative mt-6 lg:mt-0">
                        {/* Ambient Profile Glow Background */}
                        <div className="absolute w-72 sm:w-96 h-72 sm:h-96 rounded-full bg-gradient-to-tr from-[#4ADE80]/25 via-[#5EEAD4]/15 to-transparent blur-3xl -z-10 animate-pulse" />

                        {/* Main Circular Profile Container */}
                        <motion.div
                            initial={{ scale: 0.85, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
                            className="relative group"
                        >
                            {/* Outer Glow Ring */}
                            <div className="absolute -inset-4 rounded-full bg-gradient-to-r from-[#4ADE80] to-[#5EEAD4] opacity-30 blur-md group-hover:opacity-60 transition duration-500" />

                            {/* Middle Glass Ring */}
                            <div className="relative w-64 sm:w-80 h-64 sm:h-80 rounded-full p-2 bg-gradient-to-b from-white/20 via-white/5 to-transparent backdrop-blur-2xl border border-white/20 shadow-2xl overflow-hidden flex items-center justify-center">
                                <div className="w-full h-full rounded-full overflow-hidden relative bg-[#111827]">
                                    <Image
                                        src="/khaled_photo.jpg"
                                        alt="Khaled Masud - Full-Stack Developer Profile"
                                        fill
                                        priority
                                        sizes="(max-width: 640px) 256px, 320px"
                                        className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                                    />
                                </div>
                            </div>

                            {/* Floating Glass Card 1: React (Top Left) */}
                            <motion.div
                                animate={{ y: [0, -10, 0] }}
                                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                                className="absolute -top-3 -left-4 sm:-left-8 px-3.5 py-2 rounded-2xl bg-[#111827]/85 border border-white/15 backdrop-blur-xl shadow-xl flex items-center gap-2.5 hover:scale-110 transition-transform cursor-pointer"
                            >
                                <div className="p-1.5 rounded-lg bg-[#61DAFB]/10 text-[#61DAFB]">
                                    <TbBrandReact className="w-5 h-5" />
                                </div>
                                <div>
                                    <div className="text-xs font-bold text-white">React ⚛️</div>
                                    <div className="text-[10px] text-zinc-400">UI Architecture</div>
                                </div>
                            </motion.div>

                            {/* Floating Glass Card 2: Next.js (Top Right) */}
                            <motion.div
                                animate={{ y: [0, 10, 0] }}
                                transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
                                className="absolute top-6 -right-4 sm:-right-8 px-3.5 py-2 rounded-2xl bg-[#111827]/85 border border-white/15 backdrop-blur-xl shadow-xl flex items-center gap-2.5 hover:scale-110 transition-transform cursor-pointer"
                            >
                                <div className="p-1.5 rounded-lg bg-white/10 text-white">
                                    <TbBrandNextjs className="w-5 h-5" />
                                </div>
                                <div>
                                    <div className="text-xs font-bold text-white">Next.js ▲</div>
                                    <div className="text-[10px] text-zinc-400">Full-Stack SSR</div>
                                </div>
                            </motion.div>

                            {/* Floating Glass Card 3: MongoDB (Bottom Left) */}
                            <motion.div
                                animate={{ y: [0, 12, 0] }}
                                transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
                                className="absolute -bottom-2 -left-4 sm:-left-6 px-3.5 py-2 rounded-2xl bg-[#111827]/85 border border-white/15 backdrop-blur-xl shadow-xl flex items-center gap-2.5 hover:scale-110 transition-transform cursor-pointer"
                            >
                                <div className="p-1.5 rounded-lg bg-[#47A248]/10 text-[#47A248]">
                                    <TbBrandMongodb className="w-5 h-5" />
                                </div>
                                <div>
                                    <div className="text-xs font-bold text-white">MongoDB 🍃</div>
                                    <div className="text-[10px] text-zinc-400">NoSQL Database</div>
                                </div>
                            </motion.div>

                            {/* Floating Glass Card 4: JavaScript (Bottom Right) */}
                            <motion.div
                                animate={{ y: [0, -10, 0] }}
                                transition={{ duration: 4.2, repeat: Infinity, ease: 'easeInOut', delay: 1.5 }}
                                className="absolute -bottom-4 -right-4 sm:-right-6 px-3.5 py-2 rounded-2xl bg-[#111827]/85 border border-white/15 backdrop-blur-xl shadow-xl flex items-center gap-2.5 hover:scale-110 transition-transform cursor-pointer"
                            >
                                <div className="p-1.5 rounded-lg bg-[#F7DF1E]/10 text-[#F7DF1E]">
                                    <TbBrandJavascript className="w-5 h-5" />
                                </div>
                                <div>
                                    <div className="text-xs font-bold text-white">JavaScript ✨</div>
                                    <div className="text-[10px] text-zinc-400">ES6+ Core</div>
                                </div>
                            </motion.div>

                            {/* Floating Sparkle Badge (Center Right Accent) */}
                            <motion.div
                                animate={{ scale: [1, 1.15, 1] }}
                                transition={{ duration: 3, repeat: Infinity }}
                                className="absolute top-1/2 -right-10 hidden sm:flex items-center justify-center w-10 h-10 rounded-full bg-[#4ADE80]/10 border border-[#4ADE80]/40 text-[#4ADE80] shadow-[0_0_15px_rgba(74,222,128,0.3)] backdrop-blur-md"
                            >
                                <TbSparkles className="w-5 h-5" />
                            </motion.div>
                        </motion.div>
                    </div>
                </motion.div>

                {/* Scroll-Down Indicator */}
                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.2, duration: 0.6 }}
                    className="flex flex-col items-center justify-center mt-12 lg:mt-16"
                >
                    <button
                        type="button"
                        onClick={() => scrollToSection('about')}
                        className="flex flex-col items-center gap-2 text-zinc-500 hover:text-[#4ADE80] transition-colors duration-300 focus:outline-none group"
                        aria-label="Scroll down to About section"
                    >
                        <span className="text-xs font-medium uppercase tracking-widest">Scroll Down</span>
                        <div className="p-2 rounded-full bg-[#111827]/60 border border-white/10 group-hover:border-[#4ADE80]/40 backdrop-blur-md transition-all duration-300 shadow-sm">
                            <FiChevronDown className="w-4 h-4 animate-bounce text-[#4ADE80]" />
                        </div>
                    </button>
                </motion.div>
            </div>
        </section>
    );
}
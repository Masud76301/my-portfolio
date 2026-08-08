"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import {
    FaGithub,
    FaLinkedin,
    FaFacebook,
    FaArrowUp,
} from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Education", href: "#education" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
];

const socialLinks = [
    { icon: FaGithub, href: "https://github.com/Masud76301", label: "GitHub" },
    { icon: FaLinkedin, href: "https://www.linkedin.com/in/khaledmasud76301", label: "LinkedIn" },
    { icon: FaFacebook, href: "#", label: "Facebook" },
    { icon: MdEmail, href: "mailto:khaledmasud76301@gmail.com", label: "Email" },
];

export default function Footer() {
    return (
        <footer className="relative w-full overflow-hidden bg-[#060606] pt-20 pb-8">
            <div className="relative z-10 mx-auto max-w-7xl px-6">
                {/* Top — 2 columns only */}
                <div className="grid gap-12 md:grid-cols-2">
                    {/* Logo & Description */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <Link
                            href="/"
                            className="inline-flex items-center gap-2 text-2xl font-bold"
                        >
                            <span className="rounded-lg bg-emerald-500/10 px-3 py-2 text-emerald-400">
                                KM
                            </span>
                            <span className="text-white">
                                Khaled Masud
                                <span className="text-emerald-400"></span>
                            </span>
                        </Link>

                        <p className="mt-5 max-w-sm text-sm leading-7 text-gray-400">
                            Building responsive, scalable and modern web applications with
                            React, Next.js and Tailwind CSS.
                        </p>
                    </motion.div>

                    {/* Navigation */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <h3 className="mb-5 text-lg font-semibold text-white">
                            Quick Navigation
                        </h3>

                        <ul className="grid grid-cols-2 gap-3">
                            {navLinks.map((item) => (
                                <li key={item.name}>
                                    <Link
                                        href={item.href}
                                        className="group inline-flex items-center text-gray-400 transition hover:text-emerald-300"
                                    >
                                        <span className="relative">
                                            {item.name}
                                            <span className="absolute -bottom-1 left-0 h-[2px] w-0 bg-emerald-400 transition-all duration-300 group-hover:w-full"></span>
                                        </span>
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </motion.div>
                </div>

                {/* Bottom */}
                <div className="mt-14 flex flex-col items-center justify-between gap-5 border-t border-white/10 pt-6 text-sm text-gray-500 md:flex-row">
                    <p>
                        © {new Date().getFullYear()}{" "}
                        <span className="text-gray-300">Khaled Masud</span>. All Rights
                        Reserved.
                    </p>

                    {/* Small inline social icons */}
                    <div className="flex items-center gap-3">
                        {socialLinks.map((item) => {
                            const Icon = item.icon;
                            return (
                                <a
                                    key={item.label}
                                    href={item.href}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="text-gray-500 transition-colors duration-300 hover:text-emerald-400"
                                >
                                    <Icon size={18} />
                                </a>
                            );
                        })}
                    </div>

                    <a
                        href="#home"
                        className="group flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 transition-all duration-300 hover:border-emerald-400/40 hover:bg-emerald-400/10 hover:text-emerald-400"
                    >
                        Back to Top
                        <FaArrowUp className="transition-transform duration-300 group-hover:-translate-y-1" />
                    </a>
                </div>
            </div>
        </footer>
    );
}
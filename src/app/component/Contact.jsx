"use client";
import { motion } from "framer-motion";
import {
  FiMail,
  FiCopy,
  FiMapPin,
  FiGithub,
  FiLinkedin,
  FiSend,
  FiPhone,
  FiFacebook,
} from "react-icons/fi";

import { useState } from "react";

export default function Contact({ id = "experience" }) {
  const [copied, setCopied] = useState(false);

  const email = "khaledmasud76301@gmail.com";

  const copyEmail = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);

    setTimeout(() => {
      setCopied(false);
    }, 2000);
  };

  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-[#0B0B0B] py-28 w-full"
    >
      {/* Background Glow */}
      <div className="absolute left-1/2 top-32 h-[420px] w-[420px] -translate-x-1/2 rounded-full bg-[#4ADE80]/10 blur-[140px]" />

      {/* Dot Grid */}
      <div
        className="absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage:
            "radial-gradient(circle,#4ADE80 1px,transparent 1px)",
          backgroundSize: "24px 24px",
        }}
      />

      <div className="relative z-10 mx-auto max-w-7xl px-6">
        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-20 text-center"
        >
          <span className="inline-block rounded-full border border-[#4ADE80]/20 bg-[#4ADE80]/10 px-4 py-2 font-mono text-sm text-[#4ADE80]">
            // Contact
          </span>

          <h2 className="mt-6 text-4xl font-bold text-white md:text-5xl">
            Let's Connect
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-gray-400">
            Whether you have a project idea, freelance opportunity, or just want
            to say hello — my inbox is always open.
          </p>
        </motion.div>

        {/* Grid */}

        <div className="grid gap-20 lg:grid-cols-2 items-center">
          <motion.form
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl"
          >
            <div className="grid gap-6 md:grid-cols-2">
              <input
                type="text"
                placeholder="Your Name"
                className="rounded-xl border border-white/10 bg-[#111111] px-5 py-4 text-white outline-none transition focus:border-[#4ADE80] focus:ring-2 focus:ring-[#4ADE80]/20"
              />

              <input
                type="email"
                placeholder="Email Address"
                className="rounded-xl border border-white/10 bg-[#111111] px-5 py-4 text-white outline-none transition focus:border-[#4ADE80] focus:ring-2 focus:ring-[#4ADE80]/20"
              />
            </div>

            <input
              type="text"
              placeholder="Subject"
              className="mt-6 w-full rounded-xl border border-white/10 bg-[#111111] px-5 py-4 text-white outline-none transition focus:border-[#4ADE80] focus:ring-2 focus:ring-[#4ADE80]/20"
            />

            <textarea
              rows="7"
              placeholder="Write your message..."
              className="mt-6 w-full rounded-xl border border-white/10 bg-[#111111] px-5 py-4 text-white outline-none transition focus:border-[#4ADE80] focus:ring-2 focus:ring-[#4ADE80]/20"
            />

            <button className="mt-8 flex items-center gap-3 rounded-xl bg-[#4ADE80] px-7 py-4 font-semibold text-black transition hover:scale-[1.03] hover:shadow-[0_0_30px_rgba(74,222,128,.35)]">
              <FiSend />
              Send Message
            </button>
          </motion.form>

          {/* LEFT — no card, just text */}

          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-2xl font-semibold text-white">Get in Touch</h3>

            <p className="mt-4 leading-8 text-gray-400">
              I'm currently open to internships, freelance projects,
              collaborations, and full-time opportunities.
            </p>

            {/* Email */}

            <div className="mt-10 flex items-center gap-3">
              <FiMail className="text-xl text-[#4ADE80]" />
              <span className="text-gray-300">{email}</span>
              <button
                onClick={copyEmail}
                className="ml-1 text-sm text-[#4ADE80] transition hover:text-[#6ee7a0]"
              >
                <FiCopy />
              </button>
              {copied && (
                <span className="text-xs text-[#4ADE80]">Copied!</span>
              )}
            </div>

            {/* Phone */}

            <div className="mt-5 flex items-center gap-3">
              <FiPhone className="text-xl text-[#4ADE80]" />
              <span className="text-gray-300">+880 154 062 8977</span>
            </div>

            {/* Location */}

            <div className="mt-5 flex items-center gap-3">
              <FiMapPin className="text-xl text-[#4ADE80]" />
              <span className="text-gray-300"> Chattogram, Bangladesh </span>
            </div>

            {/* Social */}

            <div className="mt-12 flex gap-4">
              <a
                href="https://github.com/Masud76301"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-14 w-14 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-xl text-gray-300 transition hover:border-[#4ADE80] hover:bg-[#4ADE80]/10 hover:text-[#4ADE80]"
              >
                <FiGithub />
              </a>

              <a
                href="https://www.linkedin.com/in/khaledmasud76301"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-14 w-14 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-xl text-gray-300 transition hover:border-[#4ADE80] hover:bg-[#4ADE80]/10 hover:text-[#4ADE80]"
              >
                <FiLinkedin />
              </a>

              <a
                href="https://www.facebook.com/khaled.masud.7165"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-14 w-14 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-xl text-gray-300 transition hover:border-[#4ADE80] hover:bg-[#4ADE80]/10 hover:text-[#4ADE80]"
              >
                <FiFacebook />
              </a>
            </div>
          </motion.div>

          {/* RIGHT */}


        </div>
      </div>
    </section>
  );
}
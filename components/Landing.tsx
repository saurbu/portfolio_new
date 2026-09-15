"use client";

import {
  ArrowDown,
  ArrowUpRight,
  Mail,
} from "lucide-react";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { motion, type Variants } from "framer-motion";

type Theme = "light" | "dark";

type LandingProps = {
  theme?: Theme;
};

type SocialLink = {
  label: string;
  href: string;
  icon: React.ComponentType<{ size?: number }>;
};

const socialLinks: SocialLink[] = [
  {
    label: "GitHub",
    href: "https://github.com/saurbu",
    icon: FaGithub,
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/sauravsharma8/",
    icon: FaLinkedinIn,
  },
];

const techStack = [
  "React",
  "Node.js",
  "Express",
  "MongoDB",
];

const containerVariants: Variants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const fadeUp: Variants = {
  hidden: {
    opacity: 0,
    y: 28,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

export default function Landing({
  theme = "light",
}: LandingProps) {
  const isLight = theme === "light";

  return (
    <section
      id="home"
      className={`relative flex min-h-screen overflow-hidden px-6 pt-24 transition-colors duration-500 sm:px-8 lg:px-12 ${
        isLight
          ? "bg-[#eee9dc]"
          : "bg-[#10140f]"
      }`}
    >
      {/* Background grid */}

      <div
        className={`pointer-events-none absolute inset-0 ${
          isLight
            ? "bg-[linear-gradient(rgba(39,50,38,0.035)_1px,transparent_1px),linear-gradient(90deg,rgba(39,50,38,0.035)_1px,transparent_1px)]"
            : "bg-[linear-gradient(rgba(255,255,255,0.018)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.018)_1px,transparent_1px)]"
        } bg-[size:90px_90px]`}
      />

      {/* Subtle center atmosphere */}

      <motion.div
        className={`pointer-events-none absolute left-1/2 top-1/2 h-[420px] w-[420px] -translate-x-1/2 -translate-y-1/2 rounded-full blur-3xl ${
          isLight
            ? "bg-[#65734f]/[0.045]"
            : "bg-[#65734f]/[0.04]"
        }`}
        animate={{
          scale: [1, 1.08, 1],
          opacity: [0.5, 0.8, 0.5],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Decorative vertical line */}

      <motion.div
        initial={{
          scaleY: 0,
        }}
        animate={{
          scaleY: 1,
        }}
        transition={{
          duration: 1.2,
          delay: 0.4,
          ease: [0.16, 1, 0.3, 1],
        }}
        className={`pointer-events-none absolute bottom-0 left-6 top-24 origin-top sm:left-8 lg:left-12 ${
          isLight
            ? "bg-[#273226]/[0.08]"
            : "bg-white/[0.06]"
        }`}
      />

      {/* Decorative top-right line */}

      <motion.div
        initial={{
          scaleX: 0,
        }}
        animate={{
          scaleX: 1,
        }}
        transition={{
          duration: 1.2,
          delay: 0.5,
          ease: [0.16, 1, 0.3, 1],
        }}
        className={`pointer-events-none absolute right-6 top-24 hidden h-px w-28 origin-right sm:right-8 sm:block lg:right-12 ${
          isLight
            ? "bg-[#273226]/[0.08]"
            : "bg-white/[0.06]"
        }`}
      />

      {/* Small decorative dot */}

      <motion.div
        initial={{
          opacity: 0,
          scale: 0,
        }}
        animate={{
          opacity: 1,
          scale: 1,
        }}
        transition={{
          duration: 0.5,
          delay: 1,
        }}
        className={`pointer-events-none absolute right-[10%] top-[24%] hidden h-2 w-2 rounded-full lg:block ${
          isLight
            ? "bg-[#65734f]/50"
            : "bg-[#a8b89a]/50"
        }`}
      />

      {/* Main content */}

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="show"
        className="relative z-10 mx-auto flex w-full max-w-7xl flex-1 flex-col justify-center"
      >
        <div className="grid w-full grid-cols-1 lg:grid-cols-[1fr_280px] lg:gap-16 xl:gap-24">
          {/* LEFT */}

          <div>
            {/* Eyebrow */}

            <motion.div
              variants={fadeUp}
              className="mb-8 flex items-center gap-4"
            >
              <span
                className={`h-px w-10 ${
                  isLight
                    ? "bg-[#65734f]"
                    : "bg-[#a8b89a]"
                }`}
              />

              <span
                className={`text-[10px] font-semibold uppercase tracking-[0.35em] sm:text-xs ${
                  isLight
                    ? "text-[#65734f]"
                    : "text-white/40"
                }`}
              >
                Full Stack Developer
              </span>
            </motion.div>

            {/* Heading */}

            <div className="overflow-hidden">
              <motion.h1
                variants={fadeUp}
                className={`text-[18vw] font-bold leading-[0.78] tracking-[-0.085em] sm:text-[15vw] md:text-[12vw] lg:text-[9rem] xl:text-[10rem] ${
                  isLight
                    ? "text-[#273226]"
                    : "text-white"
                }`}
              >
                Saurav
              </motion.h1>
            </div>

            <div className="overflow-hidden">
              <motion.h1
                variants={fadeUp}
                className={`mt-2 text-[18vw] font-bold leading-[0.82] tracking-[-0.085em] sm:text-[15vw] md:text-[12vw] lg:text-[9rem] xl:text-[10rem] ${
                  isLight
                    ? "text-[#65734f]"
                    : "text-[#a8b89a]"
                }`}
              >
                Sharma
                <span
                  className={
                    isLight
                      ? "text-[#273226]"
                      : "text-white"
                  }
                >
                  .
                </span>
              </motion.h1>
            </div>

            {/* Description */}

            <motion.div
              variants={fadeUp}
              className="mt-9 max-w-2xl"
            >
              <p
                className={`max-w-xl text-sm leading-7 sm:text-base sm:leading-8 ${
                  isLight
                    ? "text-[#5d6658]"
                    : "text-white/50"
                }`}
              >
                I build modern web applications with
                clean interfaces, scalable backend systems
                and practical AI-powered experiences.
              </p>
            </motion.div>

            {/* Actions */}

            <motion.div
              variants={fadeUp}
              className="mt-8 flex flex-wrap items-center gap-3"
            >
              <a
                href="#projects"
                className={`group flex items-center gap-3 rounded-full px-6 py-3.5 text-sm font-medium transition-all duration-300 hover:-translate-y-1 ${
                  isLight
                    ? "bg-[#273226] text-[#f5f0e4] hover:bg-[#344331]"
                    : "bg-white text-black hover:bg-white/90"
                }`}
              >
                View Projects

                <ArrowUpRight
                  size={16}
                  className="transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
                />
              </a>

              <a
                href="#contact"
                className={`group flex items-center gap-3 rounded-full border px-6 py-3.5 text-sm font-medium transition-all duration-300 hover:-translate-y-1 ${
                  isLight
                    ? "border-[#273226]/15 bg-[#f5f0e4]/50 text-[#273226] hover:bg-[#f5f0e4]"
                    : "border-white/10 bg-white/[0.03] text-white hover:bg-white/[0.07]"
                }`}
              >
                <Mail size={16} />

                Contact Me
              </a>
            </motion.div>

            {/* Social */}

            <motion.div
              variants={fadeUp}
              className="mt-8 flex items-center gap-3"
            >
              {socialLinks.map((social) => {
                const Icon = social.icon;

                return (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={social.label}
                    className={`flex h-10 w-10 items-center justify-center rounded-full border transition-all duration-300 hover:-translate-y-1 ${
                      isLight
                        ? "border-[#273226]/10 bg-[#f5f0e4]/40 text-[#273226] hover:bg-[#f5f0e4]"
                        : "border-white/10 bg-white/[0.03] text-white/60 hover:bg-white/[0.07] hover:text-white"
                    }`}
                  >
                    <Icon size={16} />
                  </a>
                );
              })}
            </motion.div>
          </div>

          {/* RIGHT INFORMATION PANEL */}

          <motion.div
            variants={fadeUp}
            className="mt-14 hidden flex-col justify-end lg:mt-0 lg:flex"
          >
            <div
              className={`mb-8 h-px w-full ${
                isLight
                  ? "bg-[#273226]/10"
                  : "bg-white/[0.08]"
              }`}
            />

            <p
              className={`mb-5 text-[9px] font-semibold uppercase tracking-[0.35em] ${
                isLight
                  ? "text-[#273226]/35"
                  : "text-white/25"
              }`}
            >
              Tech Stack
            </p>

            <div className="space-y-3">
              {techStack.map((tech, index) => (
                <motion.div
                  key={tech}
                  initial={{
                    opacity: 0,
                    x: 20,
                  }}
                  animate={{
                    opacity: 1,
                    x: 0,
                  }}
                  transition={{
                    duration: 0.5,
                    delay: 0.8 + index * 0.1,
                  }}
                  className={`flex items-center justify-between border-b pb-3 ${
                    isLight
                      ? "border-[#273226]/10"
                      : "border-white/[0.07]"
                  }`}
                >
                  <span
                    className={`text-sm ${
                      isLight
                        ? "text-[#273226]/65"
                        : "text-white/55"
                    }`}
                  >
                    {tech}
                  </span>

                  <span
                    className={`text-[9px] ${
                      isLight
                        ? "text-[#65734f]"
                        : "text-[#a8b89a]"
                    }`}
                  >
                    0{index + 1}
                  </span>
                </motion.div>
              ))}
            </div>

            <div
              className={`mt-10 text-[9px] uppercase tracking-[0.3em] ${
                isLight
                  ? "text-[#273226]/25"
                  : "text-white/20"
              }`}
            >
              Based in India
            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* Bottom status */}

      <motion.div
        initial={{
          opacity: 0,
        }}
        animate={{
          opacity: 1,
        }}
        transition={{
          duration: 0.8,
          delay: 1.2,
        }}
        className={`absolute bottom-8 left-6 hidden text-[9px] uppercase tracking-[0.3em] sm:block lg:left-12 ${
          isLight
            ? "text-[#273226]/25"
            : "text-white/20"
        }`}
      >
        Available for opportunities
      </motion.div>

      {/* Scroll */}

      <motion.a
        href="#about"
        initial={{
          opacity: 0,
        }}
        animate={{
          opacity: 1,
        }}
        transition={{
          duration: 0.8,
          delay: 1.3,
        }}
        className={`absolute bottom-7 left-1/2 flex -translate-x-1/2 flex-col items-center gap-2 ${
          isLight
            ? "text-[#273226]/35"
            : "text-white/30"
        }`}
      >
        <span className="text-[9px] uppercase tracking-[0.4em]">
          Scroll
        </span>

        <motion.div
          animate={{
            y: [0, 5, 0],
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <ArrowDown size={14} />
        </motion.div>
      </motion.a>

      {/* Bottom right */}

      <div
        className={`absolute bottom-8 right-6 hidden text-[9px] uppercase tracking-[0.3em] sm:block lg:right-12 ${
          isLight
            ? "text-[#273226]/25"
            : "text-white/20"
        }`}
      >
        React · Node · MongoDB
      </div>
    </section>
  );
}
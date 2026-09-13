"use client";

import { useState } from "react";
import { Menu, X, Download, ArrowUpRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navItems = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <header className="fixed left-0 right-0 top-0 z-[1000] px-4 pt-4 sm:px-6">
      <nav className="mx-auto flex h-[68px] max-w-7xl items-center justify-between rounded-2xl border border-white/10 bg-black/75 px-5 shadow-2xl backdrop-blur-xl sm:px-7">

        <a
          href="#home"
          className="group flex items-center"
          onClick={closeMenu}
        >
          <span className="text-2xl font-bold tracking-tight text-white">
            saurbu
          </span>

          <span className="ml-1 h-1.5 w-1.5 rounded-full bg-red-500 transition-transform duration-300 group-hover:scale-150" />
        </a>

        <div className="hidden items-center gap-8 md:flex">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="group relative text-sm text-white/50 transition-colors duration-300 hover:text-white"
            >
              {item.name}

              <span className="absolute -bottom-2 left-0 h-px w-0 bg-white transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </div>

        <div className="hidden md:block">
          <a
            href="/resume.pdf"
            download
            className="group flex items-center gap-2 rounded-full border border-white/10 bg-white px-4 py-2.5 text-sm font-medium text-black transition-all duration-300 hover:scale-105 hover:bg-white/90"
          >
            <Download size={15} />

            <span>Download Resume</span>

            <ArrowUpRight
              size={14}
              className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
            />
          </a>
        </div>

        <button
          type="button"
          aria-label={isOpen ? "Close menu" : "Open menu"}
          onClick={() => setIsOpen((value) => !value)}
          className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/[0.04] text-white transition hover:bg-white/[0.08] md:hidden"
        >
          {isOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.2 }}
            className="mx-auto mt-2 max-w-7xl overflow-hidden rounded-2xl border border-white/10 bg-black/95 shadow-2xl backdrop-blur-xl md:hidden"
          >
            <div className="p-3">
              {navItems.map((item, index) => (
                <motion.a
                  key={item.name}
                  href={item.href}
                  onClick={closeMenu}
                  initial={{ opacity: 0, x: -15 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{
                    duration: 0.2,
                    delay: index * 0.04,
                  }}
                  className="flex items-center justify-between rounded-xl px-4 py-3.5 text-sm text-white/60 transition hover:bg-white/[0.05] hover:text-white"
                >
                  <span>{item.name}</span>
                  <ArrowUpRight size={15} />
                </motion.a>
              ))}

              <a
                href="/resume.pdf"
                download
                onClick={closeMenu}
                className="mt-2 flex items-center justify-center gap-2 rounded-xl bg-white px-4 py-3.5 text-sm font-medium text-black transition hover:bg-white/90"
              >
                <Download size={16} />
                Download Resume
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
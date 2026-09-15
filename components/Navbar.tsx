"use client";

import { useState } from "react";
import {
  Menu,
  X,
  Download,
  ArrowUpRight,
  Sun,
  Moon,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

type Theme = "light" | "dark";

type NavbarProps = {
  theme: Theme;
  setTheme: React.Dispatch<React.SetStateAction<Theme>>;
};

const navItems = [
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar({
  theme,
  setTheme,
}: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);

  const isLight = theme === "light";

  const closeMenu = () => {
    setIsOpen(false);
  };

  const toggleTheme = () => {
    setTheme((current) =>
      current === "light" ? "dark" : "light"
    );
  };

  return (
    <header className="fixed left-0 right-0 top-0 z-[10000] px-4 pt-4 sm:px-6">
      <nav
        className={`relative mx-auto flex h-[68px] max-w-7xl items-center justify-between rounded-2xl border px-5 shadow-2xl backdrop-blur-xl transition-all duration-500 sm:px-7 ${
          isLight
            ? "border-[#273226]/10 bg-[#273226]/30 shadow-[#273226]/10"
            : "border-white/10 bg-[#10140f]/90"
        }`}
      >
        {/* LOGO */}

        <a
          href="#home"
          onClick={closeMenu}
          className="group flex items-center"
        >
          <span
            className={`text-2xl font-bold tracking-tight transition-colors duration-500 ${
              isLight
                ? "text-[#273226]"
                : "text-white"
            }`}
          >
            saurbu
          </span>

          <span
            className={`ml-1 h-1.5 w-1.5 rounded-full transition-all duration-300 group-hover:scale-150 ${
              isLight
                ? "bg-[#65734f]"
                : "bg-[#a8b89a]"
            }`}
          />
        </a>

        {/* DESKTOP NAVIGATION */}

        <div className="hidden items-center gap-8 md:flex">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className={`group relative text-md transition-colors duration-300 ${
                isLight
                  ? "text-[#273226]/95 hover:text-[#273226]"
                  : "text-white/50 hover:text-white"
              }`}
            >
              {item.name}

              <span
                className={`absolute -bottom-2 left-0 h-px w-0 transition-all duration-300 group-hover:w-full ${
                  isLight
                    ? "bg-[#273226]"
                    : "bg-white"
                }`}
              />
            </a>
          ))}
        </div>

        {/* DESKTOP RIGHT */}

        <div className="hidden items-center gap-3 md:flex">
          {/* THEME BUTTON */}

          <button
            type="button"
            onClick={toggleTheme}
            aria-label="Toggle theme"
            className={`flex h-10 items-center gap-2 rounded-full border px-3 transition-all duration-300 ${
              isLight
                ? "border-[#273226]/10 bg-[#273226]/5 text-[#273226] hover:bg-[#273226]/10"
                : "border-white/10 bg-white/5 text-white hover:bg-white/10"
            }`}
          >
            <motion.div
              key={theme}
              initial={{
                rotate: -90,
                scale: 0.5,
                opacity: 0,
              }}
              animate={{
                rotate: 0,
                scale: 1,
                opacity: 1,
              }}
              transition={{
                duration: 0.25,
              }}
            >
              {isLight ? (
                <Moon size={16} />
              ) : (
                <Sun size={16} />
              )}
            </motion.div>

            <span className="text-xs font-medium">
              {isLight ? "Dark" : "Light"}
            </span>
          </button>

          {/* RESUME */}

          <a
            href="/resume.pdf"
            download
            className={`group flex items-center gap-2 rounded-full px-4 py-2.5 text-sm font-medium transition-all duration-300 hover:scale-105 ${
              isLight
                ? "bg-[#273226] text-[#f5f0e4] hover:bg-[#344331]"
                : "bg-white text-black hover:bg-white/90"
            }`}
          >
            <Download size={15} />

            <span>Download Resume</span>

            <ArrowUpRight
              size={14}
              className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
            />
          </a>
        </div>

        {/* MOBILE MENU BUTTON */}

        <button
          type="button"
          aria-label={
            isOpen ? "Close menu" : "Open menu"
          }
          onClick={() => setIsOpen((value) => !value)}
          className={`flex h-10 w-10 items-center justify-center rounded-xl border transition md:hidden ${
            isLight
              ? "border-[#273226]/10 bg-[#273226]/5 text-[#273226]"
              : "border-white/10 bg-white/[0.04] text-white"
          }`}
        >
          {isOpen ? (
            <X size={20} />
          ) : (
            <Menu size={20} />
          )}
        </button>
      </nav>

      {/* MOBILE MENU */}

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{
              opacity: 0,
              y: -15,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            exit={{
              opacity: 0,
              y: -15,
            }}
            transition={{
              duration: 0.2,
            }}
            className={`relative z-[10001] mx-auto mt-2 max-w-7xl overflow-hidden rounded-2xl border shadow-2xl backdrop-blur-xl md:hidden ${
              isLight
                ? "border-[#273226]/10 bg-[#f5f0e4]/95"
                : "border-white/10 bg-[#10140f]/95"
            }`}
          >
            <div className="p-3">
              {/* NAV LINKS */}

              {navItems.map((item, index) => (
                <motion.a
                  key={item.name}
                  href={item.href}
                  onClick={closeMenu}
                  initial={{
                    opacity: 0,
                    x: -15,
                  }}
                  animate={{
                    opacity: 1,
                    x: 0,
                  }}
                  transition={{
                    duration: 0.2,
                    delay: index * 0.04,
                  }}
                  className={`flex items-center justify-between rounded-xl px-4 py-3.5 text-sm transition ${
                    isLight
                      ? "text-[#273226]/60 hover:bg-[#273226]/5 hover:text-[#273226]"
                      : "text-white/60 hover:bg-white/[0.05] hover:text-white"
                  }`}
                >
                  <span>{item.name}</span>

                  <ArrowUpRight size={15} />
                </motion.a>
              ))}

              {/* MOBILE THEME */}

              <button
                type="button"
                onClick={toggleTheme}
                className={`mt-2 flex w-full items-center justify-center gap-2 rounded-xl border px-4 py-3.5 text-sm transition ${
                  isLight
                    ? "border-[#273226]/10 bg-[#273226]/5 text-[#273226]"
                    : "border-white/10 bg-white/[0.04] text-white"
                }`}
              >
                {isLight ? (
                  <Moon size={16} />
                ) : (
                  <Sun size={16} />
                )}

                {isLight
                  ? "Dark Theme"
                  : "Light Theme"}
              </button>

              {/* MOBILE RESUME */}

              <a
                href="/resume.pdf"
                download
                onClick={closeMenu}
                className={`mt-2 flex items-center justify-center gap-2 rounded-xl px-4 py-3.5 text-sm font-medium ${
                  isLight
                    ? "bg-[#273226] text-[#f5f0e4]"
                    : "bg-white text-black"
                }`}
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
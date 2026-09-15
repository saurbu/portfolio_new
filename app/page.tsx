"use client";

import { useState } from "react";

import Navbar from "@/components/Navbar";
import Landing from "@/components/Landing";
import CursorSkills from "@/components/CursorSkills";
import Skills from "@/components/Skills";
import Projects, {
  type Project,
} from "@/components/Projects";
import Game from "@/components/Game";

type Theme = "light" | "dark";

export default function Home() {
  const [theme, setTheme] =
    useState<Theme>("light");

  const [hoveredProject, setHoveredProject] =
    useState<Project | null>(null);

  const [selectedProject, setSelectedProject] =
    useState<Project | null>(null);

  return (
    <main
      className={`min-h-screen transition-colors duration-500 ${
        theme === "light"
          ? "theme-light bg-[#eee9dc] text-[#273226]"
          : "theme-dark bg-[#10140f] text-white"
      }`}
    >
      <Navbar
        theme={theme}
        setTheme={setTheme}
      />

      <Landing theme={theme} />

      <CursorSkills
        projectSkills={
          hoveredProject?.skills || []
        }
        selectedProject={selectedProject}
      />

      <section
        id="about"
        className="scroll-mt-24 flex min-h-screen items-center justify-center px-6"
      >
        <h2
          className={`text-center text-5xl font-bold tracking-tight transition-colors duration-500 md:text-7xl ${
            theme === "light"
              ? "text-[#273226]"
              : "text-white"
          }`}
        >
          About Me
        </h2>
      </section>

      <Skills theme={theme} />

      <Projects
        setHoveredProject={setHoveredProject}
        selectedProject={selectedProject}
        setSelectedProject={setSelectedProject}
      />

      <Game theme={theme} />

      <section
        id="contact"
        className="scroll-mt-24 flex min-h-screen items-center justify-center px-6"
      >
        <h2
          className={`text-center text-5xl font-bold tracking-tight transition-colors duration-500 md:text-7xl ${
            theme === "light"
              ? "text-[#273226]"
              : "text-white"
          }`}
        >
          Contact
        </h2>
      </section>
    </main>
  );
}
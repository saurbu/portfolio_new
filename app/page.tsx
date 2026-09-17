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
import About from "@/components/About";
import Contact from "@/components/Contact";

type Theme = "light" | "dark";

export default function Home() {
  const [theme, setTheme] =
    useState<Theme>("dark");

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
      <About theme={theme} />

      <Skills theme={theme} />

      <Projects
        setHoveredProject={setHoveredProject}
        selectedProject={selectedProject}
        setSelectedProject={setSelectedProject}
      />

      <Game theme={theme} />

      <Contact theme={theme} />
    </main>
  );
}
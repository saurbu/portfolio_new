"use client";

import { useState } from "react";

import Navbar from "@/components/Navbar";
import CursorSkills from "@/components/CursorSkills";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";

type Project = {
  id: string;
  name: string;
  image: string;
  description: string;
  skills: string[];
  github: string;
  live: string;
};

export default function Home() {
  const [hoveredProject, setHoveredProject] =
    useState<Project | null>(null);

  const [selectedProject, setSelectedProject] =
    useState<Project | null>(null);

  return (
    <main className="min-h-screen bg-black">
      <Navbar />

      <CursorSkills
        projectSkills={hoveredProject?.skills || []}
        selectedProject={selectedProject}
      />

      <section
        id="home"
        className="scroll-mt-24 flex min-h-screen items-center justify-center px-6"
      >
        <h1 className="text-center text-6xl font-bold tracking-tight text-white md:text-8xl">
          Saurav Sharma
        </h1>
      </section>

      <section
        id="about"
        className="scroll-mt-24 flex min-h-screen items-center justify-center px-6"
      >
        <h2 className="text-center text-5xl font-bold tracking-tight text-white md:text-7xl">
          About Me
        </h2>
      </section>

      <div className="scroll-mt-24">
        <Skills />
      </div>

      <Projects
        setHoveredProject={setHoveredProject}
        selectedProject={selectedProject}
        setSelectedProject={setSelectedProject}
      />

      <section
        id="contact"
        className="scroll-mt-24 flex min-h-screen items-center justify-center px-6"
      >
        <h2 className="text-center text-5xl font-bold tracking-tight text-white md:text-7xl">
          Contact
        </h2>
      </section>
    </main>
  );
}
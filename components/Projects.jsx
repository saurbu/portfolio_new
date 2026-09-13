"use client";

import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt, FaArrowLeft } from "react-icons/fa";

const projects = [
  {
    id: "tendertrace",
    name: "TenderTrace",
    image: "/projects/tendertrace.png",
    description:
      "A MERN-based civic-tech platform that improves transparency in government tenders, bills, materials, attendance and public complaints.",
    skills: ["React.js", "Node.js", "MongoDB", "Express.js"],
    github: "#",
    live: "#",
  },
  {
    id: "chathub",
    name: "ChatHub.Ai",
    image: "/projects/chathub.png",
    description:
      "An AI chatbot application built with React and Gemini API with chat history, voice interaction, themes and a responsive interface.",
    skills: ["React.js", "JavaScript", "Firebase"],
    github: "https://github.com/saurbu/ChatHub.Ai",
    live: "https://saurbu.github.io/ChatHub.Ai/",
  },
  {
    id: "renterr",
    name: "RenterR",
    image: "/projects/renterr.png",
    description:
      "A rental platform designed to make it easier for users to discover and manage rental properties through a modern web interface.",
    skills: ["React.js", "Node.js", "MongoDB"],
    github: "#",
    live: "#",
  },
  {
    id: "college",
    name: "College Discovery",
    image: "/projects/college.png",
    description:
      "A frontend college discovery platform where users can search colleges, filter by categories and save colleges using localStorage.",
    skills: ["React.js", "JavaScript", "Tailwind CSS"],
    github: "#",
    live: "https://college-discovery-platform-five-phi.vercel.app",
  },
  {
    id: "docapproval",
    name: "Doc Approval",
    image: "/projects/docapproval.png",
    description:
      "A document approval workflow application that helps users submit, review and manage documents through a structured interface.",
    skills: ["React.js", "Node.js", "MongoDB"],
    github: "#",
    live: "#",
  },
];

function getOffset(index, currentIndex, total) {
  let offset = index - currentIndex;

  if (offset > total / 2) {
    offset -= total;
  }

  if (offset < -total / 2) {
    offset += total;
  }

  return offset;
}

function getCardPosition(offset) {
  if (offset === 0) {
    return {
      x: 0,
      y: 0,
      scale: 1,
      rotate: 0,
      opacity: 1,
      zIndex: 5,
    };
  }

  if (offset === -1) {
    return {
      x: -330,
      y: 55,
      scale: 0.8,
      rotate: -9,
      opacity: 0.7,
      zIndex: 3,
    };
  }

  if (offset === 1) {
    return {
      x: 330,
      y: 55,
      scale: 0.8,
      rotate: 9,
      opacity: 0.7,
      zIndex: 3,
    };
  }

  if (offset === -2) {
    return {
      x: -580,
      y: 120,
      scale: 0.6,
      rotate: -16,
      opacity: 0.3,
      zIndex: 1,
    };
  }

  if (offset === 2) {
    return {
      x: 580,
      y: 120,
      scale: 0.6,
      rotate: 16,
      opacity: 0.3,
      zIndex: 1,
    };
  }

  return {
    x: offset < 0 ? -760 : 760,
    y: 170,
    scale: 0.45,
    rotate: offset < 0 ? -22 : 22,
    opacity: 0,
    zIndex: 0,
  };
}

function ProjectCard({
  project,
  offset,
  onHover,
  onLeave,
  onClick,
}) {
  const position = getCardPosition(offset);

  return (
    <motion.button
      type="button"
      onMouseEnter={() => onHover(project)}
      onMouseLeave={onLeave}
      onClick={onClick}
      className="absolute left-1/2 top-1/2 w-[280px] text-left outline-none md:w-[390px]"
      animate={{
        x: position.x - 195,
        y: position.y - 150,
        scale: position.scale,
        rotate: position.rotate,
        opacity: position.opacity,
        zIndex: position.zIndex,
      }}
      transition={{
        type: "spring",
        stiffness: 120,
        damping: 20,
        mass: 0.8,
      }}
      style={{
        pointerEvents: Math.abs(offset) <= 2 ? "auto" : "none",
      }}
    >
      <div className="overflow-hidden rounded-[28px] border border-white/10 bg-white/[0.04] shadow-2xl backdrop-blur-xl">
        <div className="aspect-[16/10] overflow-hidden bg-black">
          <img
            src={project.image}
            alt={project.name}
            className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
          />
        </div>

        <div className="p-6">
          <h3 className="text-2xl font-semibold text-white">
            {project.name}
          </h3>

          <p className="mt-3 line-clamp-3 text-sm leading-6 text-white/50">
            {project.description}
          </p>
        </div>
      </div>
    </motion.button>
  );
}

function ProjectDetails({
  project,
  onBack,
  onSelectProject,
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 25 }}
      transition={{ duration: 0.35 }}
      className="mx-auto w-full max-w-7xl"
    >
      <button
        type="button"
        onClick={onBack}
        className="mb-8 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-5 py-3 text-sm text-white/70 transition hover:bg-white/[0.08] hover:text-white"
      >
        <FaArrowLeft />
        Back to Projects
      </button>

      <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_300px]">
        <div className="rounded-[32px] border border-white/10 bg-white/[0.03] p-5 backdrop-blur-xl md:p-7">
          <div className="overflow-hidden rounded-[24px] border border-white/10 bg-black">
            <img
              src={project.image}
              alt={project.name}
              className="max-h-[480px] w-full object-cover"
            />
          </div>

          <div className="mt-7">
            <p className="text-xs uppercase tracking-[0.25em] text-red-400/70">
              Project
            </p>

            <h2 className="mt-2 text-4xl font-bold tracking-tight text-white md:text-5xl">
              {project.name}
            </h2>

            <p className="mt-5 max-w-3xl text-base leading-7 text-white/50">
              {project.description}
            </p>

            <div className="mt-8">
              <h3 className="text-xs uppercase tracking-[0.2em] text-white/35">
                Main Technologies
              </h3>

              <div className="mt-4 flex flex-wrap gap-3">
                {project.skills.map((skill) => (
                  <div
                    key={skill}
                    data-project-skill={skill}
                    className="flex h-14 items-center gap-3 rounded-xl border border-white/10 bg-black/50 px-3"
                  >
                    <div className="project-skill-placeholder h-10 w-10 shrink-0 rounded-lg border border-white/10 bg-white/[0.025]" />

                    <span className="text-sm font-medium text-white/70">
                      {skill}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              {project.github !== "#" && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.05] px-5 py-2.5 text-sm text-white transition hover:bg-white/[0.1]"
                >
                  <FaGithub />
                  GitHub
                </a>
              )}

              {project.live !== "#" && (
                <a
                  href={project.live}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-red-500 px-5 py-2.5 text-sm font-medium text-white transition hover:bg-red-400"
                >
                  <FaExternalLinkAlt />
                  Live Demo
                </a>
              )}
            </div>
          </div>
        </div>

        <aside className="h-fit rounded-[32px] border border-white/10 bg-white/[0.03] p-5 backdrop-blur-xl lg:sticky lg:top-8">
          <p className="text-xs uppercase tracking-[0.25em] text-white/40">
            Explore
          </p>

          <h3 className="mt-2 text-2xl font-semibold text-white">
            Other Projects
          </h3>

          <div className="mt-5 space-y-3">
            {projects
              .filter((item) => item.id !== project.id)
              .map((item) => (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => onSelectProject(item)}
                  className="group flex w-full gap-3 rounded-2xl border border-white/10 bg-black/30 p-3 text-left transition hover:border-white/20 hover:bg-white/[0.05]"
                >
                  <div className="h-14 w-18 shrink-0 overflow-hidden rounded-xl bg-black">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="h-full w-full object-cover transition duration-500 group-hover:scale-110"
                    />
                  </div>

                  <div className="min-w-0">
                    <h4 className="truncate text-sm font-semibold text-white">
                      {item.name}
                    </h4>

                    <p className="mt-1 line-clamp-2 text-xs leading-5 text-white/40">
                      {item.description}
                    </p>
                  </div>
                </button>
              ))}
          </div>
        </aside>
      </div>
    </motion.div>
  );
}

export default function Projects({
  setHoveredProject,
  selectedProject,
  setSelectedProject,
}) {
  const sectionRef = useRef(null);

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const pointerStart = useRef(null);

  useEffect(() => {
    if (selectedProject || isPaused) return;

    const interval = setInterval(() => {
      setCurrentIndex(
        (previous) => (previous + 1) % projects.length
      );
    }, 3500);

    return () => clearInterval(interval);
  }, [isPaused, selectedProject]);

  useEffect(() => {
    const section = sectionRef.current;

    if (!section) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) {
          setSelectedProject(null);
          setHoveredProject(null);
          setIsPaused(false);
        }
      },
      {
        threshold: 0,
      }
    );

    observer.observe(section);

    return () => observer.disconnect();
  }, [setSelectedProject, setHoveredProject]);

  const handlePointerDown = (event) => {
    pointerStart.current = event.clientX;
  };

  const handlePointerUp = (event) => {
    if (pointerStart.current === null) return;

    const distance = event.clientX - pointerStart.current;

    if (Math.abs(distance) > 70) {
      if (distance < 0) {
        setCurrentIndex(
          (previous) => (previous + 1) % projects.length
        );
      } else {
        setCurrentIndex(
          (previous) =>
            (previous - 1 + projects.length) % projects.length
        );
      }
    }

    pointerStart.current = null;
  };

  const handleSelectProject = (project) => {
    setSelectedProject(project);
    setHoveredProject(null);
    setIsPaused(true);

    requestAnimationFrame(() => {
      sectionRef.current?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    });
  };

  const handleBack = () => {
    setSelectedProject(null);
    setHoveredProject(null);
    setIsPaused(false);
  };

  return (
    <section
      ref={sectionRef}
      id="projects"
      className="relative min-h-screen overflow-hidden bg-black px-6 py-22"
    >
      <div className="mx-auto max-w-7xl">
        <AnimatePresence mode="wait">
          {selectedProject ? (
            <ProjectDetails
              key="details"
              project={selectedProject}
              onBack={handleBack}
              onSelectProject={handleSelectProject}
            />
          ) : (
            <motion.div
              key="carousel"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <p className="mb-2 text-sm uppercase tracking-[0.3em] text-white/40">
                Selected Work
              </p>

              <h2 className="text-6xl font-bold tracking-tight text-white md:text-8xl">
                Projects
              </h2>

              <p className="mt-4 max-w-2xl text-lg leading-relaxed text-white/50">
                A collection of projects I've built while exploring
                frontend, backend and full-stack development.
              </p>

              <div
                className="relative mx-auto mt-2 h-[460px] w-full max-w-[1200px] touch-pan-y select-none overflow-visible"
                onPointerDown={handlePointerDown}
                onPointerUp={handlePointerUp}
                onPointerCancel={() => {
                  pointerStart.current = null;
                }}
              >
                <div className="pointer-events-none absolute left-1/2 top-1/2 h-[40px] w-[430px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/[0.04]" />

                <div className="pointer-events-none absolute left-1/2 top-1/2 h-[50px] w-[540px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/[0.025]" />

                {projects.map((project, index) => {
                  const offset = getOffset(
                    index,
                    currentIndex,
                    projects.length
                  );

                  return (
                    <ProjectCard
                      key={project.id}
                      project={project}
                      offset={offset}
                      onHover={(item) => {
                        setIsPaused(true);
                        setHoveredProject(item);
                      }}
                      onLeave={() => {
                        setIsPaused(false);
                        setHoveredProject(null);
                      }}
                      onClick={() => handleSelectProject(project)}
                    />
                  );
                })}
              </div>

              <div className="mt-4 flex justify-center gap-2">
                {projects.map((project, index) => (
                  <button
                    key={project.id}
                    type="button"
                    aria-label={`Go to ${project.name}`}
                    onClick={() => setCurrentIndex(index)}
                    className={`h-1.5 rounded-full transition-all`}
                  />
                ))}
              </div>

              <p className="mt-5 text-center text-xs uppercase tracking-[0.2em] text-white/25">
                Hover to pause · Drag to explore · Click to view
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
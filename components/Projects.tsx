"use client";

import {
  useEffect,
  useRef,
  useState,
  type CSSProperties,
  type PointerEvent,
} from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  FaGithub,
  FaExternalLinkAlt,
  FaArrowLeft,
} from "react-icons/fa";

export type Project = {
  id: string;
  name: string;
  image: string;
  description: string;
  skills: string[];
  github: string;
  live: string;
  accent: string;
};

type ProjectCardProps = {
  project: Project;
  offset: number;
  onHover: (project: Project) => void;
  onLeave: () => void;
  onClick: () => void;
};

type ProjectDetailsProps = {
  project: Project;
  onBack: () => void;
  onSelectProject: (project: Project) => void;
};

type ProjectsProps = {
  setHoveredProject: (project: Project | null) => void;
  selectedProject: Project | null;
  setSelectedProject: (project: Project | null) => void;
};

type ProjectCardStyle = CSSProperties & {
  "--project-light-card"?: string;
};

const projects: Project[] = [
  {
    id: "tendertrace",
    name: "TenderTrace",
    image:
      "https://ik.imagekit.io/kaptaanjii/projectimage/projectT.png",
    description:
      "A MERN-based civic-tech platform that improves transparency in government tenders, bills, materials, attendance and public complaints.",
    skills: ["React.js", "Node.js", "MongoDB", "Express.js"],
    github: "#",
    live: "#",
    accent: "#8FAF6A",
  },
  {
    id: "chathub",
    name: "ChatHub.Ai",
    image:
      "https://ik.imagekit.io/kaptaanjii/projectimage/project2.png",
    description:
      "An AI chatbot application built with React and Gemini API with chat history, voice interaction, themes and a responsive interface.",
    skills: ["React.js", "JavaScript", "Gemini API"],
    github: "https://github.com/saurbu/ChatHub.Ai",
    live: "https://saurbu.github.io/ChatHub.Ai/",
    accent: "#D8A7FF",
  },
  {
    id: "renterr",
    name: "RenterR",
    image:
      "https://ik.imagekit.io/kaptaanjii/projectimage/projectR.png",
    description:
      "A rental platform designed to make it easier for users to discover and manage rental properties through a modern web interface.",
    skills: ["React.js", "Node.js", "MongoDB"],
    github: "#",
    live: "#",
    accent: "#D69B63",
  },
  {
    id: "college",
    name: "College Discovery",
    image:
      "https://ik.imagekit.io/kaptaanjii/projectimage/projectR.png",
    description:
      "A frontend college discovery platform where users can search colleges, filter by categories and save colleges using localStorage.",
    skills: ["React.js", "JavaScript", "Tailwind CSS"],
    github: "#",
    live: "https://college-discovery-platform-five-phi.vercel.app",
    accent: "#7FB7A3",
  },
  {
    id: "docapproval",
    name: "Doc Approval",
    image:
      "https://ik.imagekit.io/kaptaanjii/projectimage/projectW.png",
    description:
      "A document approval workflow application that helps users submit, review and manage documents through a structured interface.",
    skills: ["React.js", "Node.js", "MongoDB"],
    github: "#",
    live: "#",
    accent: "#C9B77D",
  },
  {
    id: "watch",
    name: "Doc Approval",
    image:
      "https://ik.imagekit.io/kaptaanjii/projectimage/projectW.png",
    description:
      "A document approval workflow application that helps users submit, review and manage documents through a structured interface.",
    skills: ["React.js", "Node.js", "MongoDB"],
    github: "#",
    live: "#",
    accent: "#C9B77D",
  },
];

function getOffset(
  index: number,
  currentIndex: number,
  total: number
): number {
  let offset = index - currentIndex;

  if (offset > total / 2) {
    offset -= total;
  }

  if (offset < -total / 2) {
    offset += total;
  }

  return offset;
}

function getCardPosition(offset: number) {
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
      opacity: 0.72,
      zIndex: 3,
    };
  }

  if (offset === 1) {
    return {
      x: 330,
      y: 55,
      scale: 0.8,
      rotate: 9,
      opacity: 0.72,
      zIndex: 3,
    };
  }

  if (offset === -2) {
    return {
      x: -580,
      y: 120,
      scale: 0.6,
      rotate: -16,
      opacity: 0.32,
      zIndex: 1,
    };
  }

  if (offset === 2) {
    return {
      x: 580,
      y: 120,
      scale: 0.6,
      rotate: 16,
      opacity: 0.32,
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
}: ProjectCardProps) {
  const position = getCardPosition(offset);

  const cardStyle: ProjectCardStyle = {
    "--project-light-card": project.accent,
    borderColor:
      offset === 0
        ? "var(--project-active-border)"
        : "var(--project-border)",
    boxShadow:
      offset === 0
        ? "0 8px 20px rgba(0,0,0,0.12)"
        : "0 5px 14px rgba(0,0,0,0.07)",
  };

  return (
    <motion.button
      type="button"
      onMouseEnter={() => onHover(project)}
      onMouseLeave={onLeave}
      onClick={onClick}
      className="absolute left-1/2 top-1/2 w-[280px] text-left outline-none sm:w-[330px] md:w-[390px]"
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
      <div
        className="project-color-card group overflow-hidden rounded-[28px] border transition-all duration-500"
        style={cardStyle}
      >
        <div className="relative aspect-[16/10] overflow-hidden bg-black">
          <img
            src={project.image}
            alt={project.name}
            className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
          />

          <div
            className="pointer-events-none absolute inset-0"
            style={{
              backgroundColor: "var(--project-image-overlay)",
            }}
          />

          <div
            className="absolute left-4 top-4 rounded-full border px-3 py-1 text-[10px] uppercase tracking-[0.2em] backdrop-blur-md"
            style={{
              borderColor: `${project.accent}70`,
              backgroundColor: "var(--project-label-bg)",
              color: project.accent,
            }}
          >
            Project
          </div>
        </div>

        <div className="p-6">
          <div className="flex items-center gap-3">
            <span
              className="h-2 w-2 shrink-0 rounded-full"
              style={{
                backgroundColor: project.accent,
              }}
            />

            <h3
              className="text-2xl font-semibold"
              style={{
                color: "var(--project-card-text)",
              }}
            >
              {project.name}
            </h3>
          </div>

          <p
            className="mt-3 line-clamp-3 text-sm leading-6"
            style={{
              color: "var(--project-card-muted)",
            }}
          >
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
}: ProjectDetailsProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 25 }}
      transition={{ duration: 0.35 }}
      className="mx-auto w-full max-w-7xl"
    >
      <div className="grid items-start gap-5 lg:grid-cols-[minmax(0,1fr)_280px] xl:gap-7">
        <motion.div
          layout
          className="project-color-card overflow-hidden rounded-[26px] border p-4 shadow-[0_8px_22px_rgba(0,0,0,0.10)] sm:rounded-[30px] sm:p-5 lg:p-6"
          style={{
            "--project-light-card": project.accent,
            borderColor: "var(--project-border)",
          } as ProjectCardStyle}
        >
          <div className="relative h-[190px] overflow-hidden rounded-[20px] border bg-black sm:h-[220px] md:h-[250px] lg:h-[250px] xl:h-[270px]">
            <img
              src={project.image}
              alt={project.name}
              className="h-full w-full object-cover"
            />
          </div>

          <div className="mt-5 sm:mt-6">
            <div className="flex items-center gap-3">
              <span
                className="h-2 w-2 shrink-0 rounded-full sm:h-2.5 sm:w-2.5"
                style={{
                  backgroundColor: project.accent,
                }}
              />

              <p
                className="text-[10px] uppercase tracking-[0.25em] sm:text-xs"
                style={{
                  color: project.accent,
                }}
              >
                Project
              </p>
            </div>

            <h2
              className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl"
              style={{
                color: "var(--project-card-text)",
              }}
            >
              {project.name}
            </h2>

            <p
              className="mt-3 max-w-4xl text-sm leading-6 sm:text-base sm:leading-7"
              style={{
                color: "var(--project-card-muted)",
              }}
            >
              {project.description}
            </p>

            <div className="mt-5 sm:mt-6">
              <h3
                className="text-[10px] uppercase tracking-[0.2em] sm:text-xs"
                style={{
                  color: "var(--project-card-muted)",
                }}
              >
                Main Technologies
              </h3>

              <div className="mt-3 flex flex-wrap gap-2 sm:gap-3">
                {project.skills.map((skill) => (
                  <div
                    key={skill}
                    data-project-skill={skill}
                    className="flex h-14 items-center gap-3 rounded-xl border px-3"
                    style={{
                      backgroundColor: "var(--project-tech-bg)",
                      borderColor: `${project.accent}45`,
                    }}
                  >
                    <div
                      className="project-skill-placeholder h-12 w-12 shrink-0 rounded-xl border"
                      style={{
                        backgroundColor:
                          "var(--project-tech-placeholder)",
                        borderColor: `${project.accent}45`,
                      }}
                    />

                    <span
                      className="text-xs font-medium sm:text-sm"
                      style={{
                        color: "var(--project-card-text)",
                      }}
                    >
                      {skill}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-5 flex flex-wrap gap-2 sm:mt-6 sm:gap-3">
              {project.github !== "#" && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border px-4 py-2 text-xs transition sm:px-5 sm:py-2.5 sm:text-sm"
                  style={{
                    borderColor: "var(--project-border)",
                    backgroundColor: "var(--project-button)",
                    color: "var(--project-card-text)",
                  }}
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
                  className="inline-flex items-center gap-2 rounded-full px-4 py-2 text-xs font-medium transition hover:brightness-110 sm:px-5 sm:py-2.5 sm:text-sm"
                  style={{
                    backgroundColor: project.accent,
                    color: "#111",
                  }}
                >
                  <FaExternalLinkAlt />
                  Live Demo
                </a>
              )}
            </div>
          </div>
        </motion.div>

        <div className="flex flex-col gap-4 lg:sticky lg:top-24">
          <button
            type="button"
            onClick={onBack}
            className="inline-flex w-fit items-center gap-2 rounded-full border px-4 py-2.5 text-sm transition sm:px-5 sm:py-3"
            style={{
              borderColor: "var(--project-border)",
              backgroundColor: "var(--project-button)",
              color: "var(--project-text)",
            }}
          >
            <FaArrowLeft />
            Back to Projects
          </button>

          <aside
            className="h-fit rounded-[26px] border p-4 sm:rounded-[30px] sm:p-5"
            style={{
              backgroundColor: "var(--project-sidebar-bg)",
              borderColor: "var(--project-border)",
            }}
          >
            <p
              className="text-[10px] uppercase tracking-[0.25em] sm:text-xs"
              style={{
                color: "var(--project-muted)",
              }}
            >
              Explore
            </p>

            <h3
              className="text-xl font-semibold sm:text-2xl"
              style={{
                color: "var(--project-text)",
              }}
            >
              Other Projects
            </h3>

            <div className="mt-2 space-y-2.5 sm:mt-2 sm:space-y-3">
              {projects
                .filter((item) => item.id !== project.id)
                .map((item) => (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => onSelectProject(item)}
                    className="group flex w-full gap-3 rounded-xl border p-2.5 text-left transition hover:scale-[1.01] sm:rounded-2xl sm:p-3"
                    style={{
                      backgroundColor:
                        "var(--project-small-card-bg)",
                      borderColor: "var(--project-border)",
                    }}
                  >
                    <div
                      className="h-12 w-16 shrink-0 overflow-hidden rounded-lg sm:h-14 sm:w-[72px] sm:rounded-xl"
                      style={{
                        backgroundColor: item.accent,
                      }}
                    >
                      <img
                        src={item.image}
                        alt={item.name}
                        className="h-full w-full object-cover transition duration-500 group-hover:scale-110"
                      />
                    </div>

                    <div className="min-w-0">
                      <div className="flex items-center gap-2">
                        <span
                          className="h-1.5 w-1.5 shrink-0 rounded-full"
                          style={{
                            backgroundColor: item.accent,
                          }}
                        />

                        <h4
                          className="truncate text-xs font-semibold sm:text-sm"
                          style={{
                            color: "var(--project-text)",
                          }}
                        >
                          {item.name}
                        </h4>
                      </div>

                      <p
                        className="mt-1 line-clamp-2 text-[11px] leading-4 sm:text-xs sm:leading-5"
                        style={{
                          color: "var(--project-muted)",
                        }}
                      >
                        {item.description}
                      </p>
                    </div>
                  </button>
                ))}
            </div>
          </aside>
        </div>
      </div>
    </motion.div>
  );
}

export default function Projects({
  setHoveredProject,
  selectedProject,
  setSelectedProject,
}: ProjectsProps) {
  const sectionRef = useRef<HTMLElement | null>(null);
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [isPaused, setIsPaused] = useState<boolean>(false);
  const pointerStart = useRef<number | null>(null);

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
        const completelyOutside =
          entry.boundingClientRect.bottom < 0 ||
          entry.boundingClientRect.top > window.innerHeight;

        if (completelyOutside) {
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

  const handlePointerDown = (
    event: PointerEvent<HTMLDivElement>
  ) => {
    pointerStart.current = event.clientX;
  };

  const handlePointerUp = (
    event: PointerEvent<HTMLDivElement>
  ) => {
    if (pointerStart.current === null) return;

    const distance =
      event.clientX - pointerStart.current;

    if (Math.abs(distance) > 70) {
      if (distance < 0) {
        setCurrentIndex(
          (previous) => (previous + 1) % projects.length
        );
      } else {
        setCurrentIndex(
          (previous) =>
            (previous - 1 + projects.length) %
            projects.length
        );
      }
    }

    pointerStart.current = null;
  };

  const handleSelectProject = (project: Project) => {
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
      className="relative min-h-screen scroll-mt-24 overflow-hidden px-4 sm:px-6"
      style={{
        backgroundColor: "var(--project-section-bg)",
      }}
    >
      <div
        id="projects"
        className={`mx-auto max-w-7xl ${
          selectedProject
            ? "my-6"
            : "py-16 sm:py-20 lg:my-22"
        }`}
      >
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
              <p
                className="mt-8 text-xs uppercase tracking-[0.3em] md:mt-2 sm:text-sm"
                style={{
                  color: "var(--project-muted)",
                }}
              >
                Selected Work
              </p>

              <h2
                className="text-5xl font-bold tracking-tight sm:text-6xl md:text-8xl"
                style={{
                  color: "var(--project-text)",
                }}
              >
                Projects
              </h2>

              <p
                className="mt-3 max-w-2xl text-sm leading-relaxed sm:mt-4 sm:text-lg"
                style={{
                  color: "var(--project-muted)",
                }}
              >
                A collection of projects I've built while exploring
                frontend, backend and full-stack development.
              </p>

              <div
                className="relative mx-auto mt-[-40px] h-[460px] w-full max-w-[1200px] touch-pan-y select-none overflow-visible"
                onPointerDown={handlePointerDown}
                onPointerUp={handlePointerUp}
                onPointerCancel={() => {
                  pointerStart.current = null;
                }}
              >
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
                      onClick={() =>
                        handleSelectProject(project)
                      }
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
                    onClick={() =>
                      setCurrentIndex(index)
                    }
                    className="h-1.5 w-6 rounded-full transition"
                    style={{
                      backgroundColor:
                        currentIndex === index
                          ? project.accent
                          : "var(--project-dot)",
                    }}
                  />
                ))}
              </div>

              <p
                className="mt-5 text-center text-[10px] uppercase tracking-[0.18em] sm:text-xs sm:tracking-[0.2em]"
                style={{
                  color: "var(--project-hint)",
                }}
              >
                Hover to pause · Drag to explore · Click to view
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
"use client";

import {
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
  type ComponentType,
  type CSSProperties,
} from "react";

import { motion } from "framer-motion";

import {
  SiReact,
  SiJavascript,
  SiHtml5,
  SiCss,
  SiTailwindcss,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiMysql,
  SiPhp,
  SiPython,
  SiGit,
} from "react-icons/si";

import { FaGithub } from "react-icons/fa";

import {
  Brain,
  Boxes,
  Sparkles,
  Globe,
  Code2,
} from "lucide-react";

type Skill = {
  name: string;
  icon: ComponentType<{
    className?: string;
    style?: CSSProperties;
  }>;
  color: string;
};

type Position = {
  x: number;
  y: number;
};

type Project = {
  id: string;
  name: string;
  image: string;
  description: string;
  skills: string[];
  github: string;
  live: string;
};

type CursorSkillsProps = {
  projectSkills?: string[];
  selectedProject?: Project | null;
};

const skills: Skill[] = [
  {
    name: "React.js",
    icon: SiReact,
    color: "#61DAFB",
  },
  {
    name: "React",
    icon: SiReact,
    color: "#61DAFB",
  },
  {
    name: "JavaScript",
    icon: SiJavascript,
    color: "#F7DF1E",
  },
  {
    name: "HTML",
    icon: SiHtml5,
    color: "#E34F26",
  },
  {
    name: "CSS",
    icon: SiCss,
    color: "#1572B6",
  },
  {
    name: "Tailwind CSS",
    icon: SiTailwindcss,
    color: "#06B6D4",
  },
  {
    name: "Tailwind",
    icon: SiTailwindcss,
    color: "#06B6D4",
  },
  {
    name: "Node.js",
    icon: SiNodedotjs,
    color: "#68A063",
  },
  {
    name: "Express.js",
    icon: SiExpress,
    color: "#FFFFFF",
  },
  {
    name: "REST APIs",
    icon: Globe,
    color: "#8FAF6A",
  },
  {
    name: "MongoDB",
    icon: SiMongodb,
    color: "#47A248",
  },
  {
    name: "MySQL",
    icon: SiMysql,
    color: "#4479A1",
  },
  {
    name: "C/C++",
    icon: Code2,
    color: "#659AD2",
  },
  {
    name: "PHP",
    icon: SiPhp,
    color: "#777BB4",
  },
  {
    name: "Python",
    icon: SiPython,
    color: "#3776AB",
  },
  {
    name: "Git",
    icon: SiGit,
    color: "#F05032",
  },
  {
    name: "GitHub",
    icon: FaGithub,
    color: "#FFFFFF",
  },
  {
    name: "VS Code",
    icon: Code2,
    color: "#007ACC",
  },
  {
    name: "Gemini API",
    icon: Sparkles,
    color: "#8AB4F8",
  },
  {
    name: "DSA",
    icon: Brain,
    color: "#65734F",
  },
  {
    name: "OOP",
    icon: Boxes,
    color: "#65734F",
  },
];

const trailPositions: Position[] = [
  { x: 12, y: 22 },
  { x: 5, y: 58 },
  { x: 55, y: 48 },
  { x: 28, y: 84 },
  { x: 68, y: 74 },
  { x: 108, y: 94 },
  { x: 22, y: 130 },
  { x: 52, y: 110 },
  { x: 92, y: 130 },
  { x: 122, y: 120 },
  { x: 46, y: 150 },
  { x: 72, y: 176 },
  { x: 102, y: 166 },
  { x: 135, y: 155 },
  { x: 150, y: 110 },
  { x: 145, y: 65 },
  { x: 120, y: 45 },
  { x: 80, y: 30 },
  { x: 170, y: 140 },
];

export default function CursorSkills({
  projectSkills = [],
  selectedProject = null,
}: CursorSkillsProps) {
  const [mouse, setMouse] = useState<Position>({
    x: -200,
    y: -200,
  });

  const [isSkillsVisible, setIsSkillsVisible] =
    useState<boolean>(false);

  const [isGameVisible, setIsGameVisible] =
    useState<boolean>(false);

  const [isGameResultVisible, setIsGameResultVisible] =
    useState<boolean>(false);

  const [skillPositions, setSkillPositions] =
    useState<Record<string, Position>>({});

  const [projectPositions, setProjectPositions] =
    useState<Record<string, Position>>({});

  const [gamePositions, setGamePositions] =
    useState<Record<string, Position>>({});

  const projectAnimationDone = useRef<boolean>(false);

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      setMouse({
        x: event.clientX,
        y: event.clientY,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  useEffect(() => {
    const section = document.getElementById("skills");

    if (!section) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsSkillsVisible(entry.isIntersecting);
      },
      {
        threshold: 0.15,
      }
    );

    observer.observe(section);

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const game = document.getElementById("game");

    if (!game) return;

    const updateResultState = () => {
      setIsGameResultVisible(
        game.hasAttribute("data-game-result")
      );
    };

    updateResultState();

    const observer = new MutationObserver(updateResultState);

    observer.observe(game, {
      attributes: true,
      attributeFilter: ["data-game-result"],
    });

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const game = document.getElementById("game");

    if (!game) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsGameVisible(entry.isIntersecting);
      },
      {
        threshold: 0.15,
      }
    );

    observer.observe(game);

    return () => observer.disconnect();
  }, []);

  useLayoutEffect(() => {
    if (
      !isSkillsVisible ||
      selectedProject ||
      isGameVisible ||
      isGameResultVisible
    ) {
      setSkillPositions({});
      return;
    }

    let frameId: number | null = null;

    const updatePositions = () => {
      if (frameId !== null) {
        cancelAnimationFrame(frameId);
      }

      frameId = requestAnimationFrame(() => {
        const positions: Record<string, Position> = {};

        skills.forEach((skill) => {
          const elements = document.querySelectorAll(
            ".skill-logo-placeholder"
          );

          const element: Element | null =
            Array.from(elements).find((item) => {
              const parent = item.closest("[data-skill]");

              return (
                parent &&
                parent.getAttribute("data-skill") === skill.name
              );
            }) ?? null;

          if (!element) return;

          const rect = element.getBoundingClientRect();

          positions[skill.name] = {
            x: rect.left + rect.width / 2 - 28,
            y: rect.top + rect.height / 2 - 28,
          };
        });

        setSkillPositions(positions);
      });
    };

    updatePositions();

    window.addEventListener("scroll", updatePositions, {
      passive: true,
    });

    window.addEventListener("resize", updatePositions);

    const resizeObserver = new ResizeObserver(updatePositions);

    const section = document.getElementById("skills");

    if (section) {
      resizeObserver.observe(section);
    }

    return () => {
      if (frameId !== null) {
        cancelAnimationFrame(frameId);
      }

      window.removeEventListener("scroll", updatePositions);
      window.removeEventListener("resize", updatePositions);

      resizeObserver.disconnect();
    };
  }, [
    isSkillsVisible,
    selectedProject,
    isGameVisible,
    isGameResultVisible,
  ]);

  useLayoutEffect(() => {
    if (!selectedProject || isGameResultVisible) {
      setProjectPositions({});
      projectAnimationDone.current = false;
      return;
    }

    projectAnimationDone.current = false;

    let frameId: number | null = null;

    const findProjectPlaceholder = (
      skillName: string
    ): Element | null => {
      const placeholders = document.querySelectorAll(
        ".project-skill-placeholder"
      );

      for (const placeholder of placeholders) {
        const parent = placeholder.closest(
          "[data-project-skill]"
        );

        if (
          parent &&
          parent.getAttribute("data-project-skill") === skillName
        ) {
          return placeholder;
        }
      }

      return null;
    };

    const updateProjectPositions = () => {
      if (frameId !== null) {
        cancelAnimationFrame(frameId);
      }

      frameId = requestAnimationFrame(() => {
        const positions: Record<string, Position> = {};

        selectedProject.skills.forEach((skill) => {
          const element = findProjectPlaceholder(skill);

          if (!element) return;

          const rect = element.getBoundingClientRect();

          positions[skill] = {
            x: rect.left + rect.width / 2 - 24,
            y: rect.top + rect.height / 2 - 24,
          };
        });

        setProjectPositions(positions);
      });
    };

    updateProjectPositions();

    const timer1 = setTimeout(updateProjectPositions, 0);
    const timer2 = setTimeout(updateProjectPositions, 50);
    const timer3 = setTimeout(updateProjectPositions, 100);
    const timer4 = setTimeout(updateProjectPositions, 200);
    const timer5 = setTimeout(updateProjectPositions, 400);
    const timer6 = setTimeout(updateProjectPositions, 700);
    const timer7 = setTimeout(updateProjectPositions, 1000);

    const handleScroll = () => {
      updateProjectPositions();
    };

    const handleResize = () => {
      updateProjectPositions();
    };

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    window.addEventListener("resize", handleResize);

    const resizeObserver = new ResizeObserver(
      updateProjectPositions
    );

    resizeObserver.observe(document.body);

    const animationTimer = setTimeout(() => {
      updateProjectPositions();
      projectAnimationDone.current = true;
    }, 1000);

    return () => {
      if (frameId !== null) {
        cancelAnimationFrame(frameId);
      }

      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
      clearTimeout(timer4);
      clearTimeout(timer5);
      clearTimeout(timer6);
      clearTimeout(timer7);
      clearTimeout(animationTimer);

      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);

      resizeObserver.disconnect();
    };
  }, [selectedProject, isGameResultVisible]);

  useLayoutEffect(() => {
    if (
      !isGameVisible ||
      selectedProject ||
      isGameResultVisible
    ) {
      setGamePositions({});
      return;
    }

    let frameId: number | null = null;

    const updateGamePositions = () => {
      if (frameId !== null) {
        cancelAnimationFrame(frameId);
      }

      frameId = requestAnimationFrame(() => {
        const positions: Record<string, Position> = {};

        skills.forEach((skill) => {
          const element = document.querySelector(
            `[data-game-skill="${skill.name}"] .game-skill-placeholder`
          );

          if (!element) return;

          const rect = element.getBoundingClientRect();

          positions[skill.name] = {
            x: rect.left + rect.width / 2 - 24,
            y: rect.top + rect.height / 2 - 24,
          };
        });

        setGamePositions(positions);
      });
    };

    updateGamePositions();

    const timer1 = setTimeout(updateGamePositions, 0);
    const timer2 = setTimeout(updateGamePositions, 50);
    const timer3 = setTimeout(updateGamePositions, 150);
    const timer4 = setTimeout(updateGamePositions, 300);
    const timer5 = setTimeout(updateGamePositions, 600);

    window.addEventListener("scroll", updateGamePositions, {
      passive: true,
    });

    window.addEventListener("resize", updateGamePositions);

    const resizeObserver = new ResizeObserver(
      updateGamePositions
    );

    resizeObserver.observe(document.body);

    return () => {
      if (frameId !== null) {
        cancelAnimationFrame(frameId);
      }

      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
      clearTimeout(timer4);
      clearTimeout(timer5);

      window.removeEventListener(
        "scroll",
        updateGamePositions
      );

      window.removeEventListener(
        "resize",
        updateGamePositions
      );

      resizeObserver.disconnect();
    };
  }, [
    isGameVisible,
    selectedProject,
    isGameResultVisible,
  ]);

  const projectSkillSet = new Set(projectSkills);

  const selectedSkillSet = new Set(
    selectedProject?.skills || []
  );

  if (isGameResultVisible) {
    return null;
  }

  return (
    <div className="pointer-events-none fixed inset-0 z-[9999] overflow-hidden">
      {!selectedProject &&
        !isSkillsVisible &&
        !isGameVisible &&
        skills.map((skill, index) => {
          const Icon = skill.icon;

          const position =
            trailPositions[index % trailPositions.length];

          const highlighted = projectSkillSet.has(
            skill.name
          );

          return (
            <motion.div
              key={skill.name}
              className="absolute hidden md:block"
              animate={{
                x: mouse.x + position.x,
                y: mouse.y + position.y,
                opacity: highlighted ? 1 : 0.72,
                scale: highlighted ? 1.08 : 1,
              }}
              transition={{
                type: "spring",
                stiffness: 220,
                damping: 24,
                mass: 0.25,
                delay: index * 0.025,
              }}
            >
              <motion.div
                animate={{
                  x: [0, 2, 0],
                  y: [0, -2, 0],
                }}
                transition={{
                  duration: 1.2 + index * 0.04,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-black/80 backdrop-blur-md"
                style={{
                  boxShadow: highlighted
                    ? `0 0 26px ${skill.color}90`
                    : `0 0 16px ${skill.color}45`,
                }}
              >
                <Icon
                  className="text-lg"
                  style={{
                    color: skill.color,
                    filter: `drop-shadow(0 0 ${
                      highlighted ? "10px" : "6px"
                    } ${skill.color}90)`,
                  }}
                />
              </motion.div>
            </motion.div>
          );
        })}

      {isSkillsVisible &&
        !selectedProject &&
        !isGameVisible &&
        skills.map((skill, index) => {
          const Icon = skill.icon;
          const target = skillPositions[skill.name];

          if (!target) return null;

          return (
            <motion.div
              key={`skills-${skill.name}`}
              className="absolute"
              initial={{
                x: mouse.x + 40,
                y: mouse.y + 40,
                opacity: 0,
                scale: 0.6,
              }}
              animate={{
                x: target.x,
                y: target.y,
                opacity: 1,
                scale: 1,
              }}
              transition={{
                duration: 0.3,
                ease: "easeOut",
                delay: index * 0.02,
              }}
            >
              <div className="flex h-14 w-14 items-center justify-center rounded-lg">
                <Icon
                  className="text-2xl"
                  style={{
                    color: skill.color,
                    filter: `drop-shadow(0 0 7px ${skill.color}70)`,
                  }}
                />
              </div>
            </motion.div>
          );
        })}

      {isGameVisible &&
        !selectedProject &&
        skills.map((skill) => {
          const Icon = skill.icon;
          const target = gamePositions[skill.name];

          if (!target) return null;

          return (
            <motion.div
              key={`game-${skill.name}`}
              className="pointer-events-none fixed"
              initial={{
                left: target.x,
                top: target.y,
                opacity: 0,
                scale: 0.7,
              }}
              animate={{
                left: target.x,
                top: target.y,
                opacity: 1,
                scale: 1,
              }}
              transition={{
                duration: 0.25,
                ease: "easeOut",
              }}
            >
              <div className="flex h-12 w-12 items-center justify-center bg-transparent">
                <Icon
                  className="text-3xl"
                  style={{
                    color: skill.color,
                    filter: `drop-shadow(0 0 7px ${skill.color}70)`,
                  }}
                />
              </div>
            </motion.div>
          );
        })}

      {selectedProject &&
        skills.map((skill, index) => {
          const Icon = skill.icon;
          const target = projectPositions[skill.name];

          if (!selectedSkillSet.has(skill.name)) {
            const position =
              trailPositions[index % trailPositions.length];

            return (
              <motion.div
                key={`cursor-${skill.name}`}
                className="absolute"
                animate={{
                  x: mouse.x + position.x,
                  y: mouse.y + position.y,
                  opacity: 0.7,
                }}
                transition={{
                  type: "spring",
                  stiffness: 220,
                  damping: 24,
                  mass: 0.25,
                }}
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-black/80 backdrop-blur-md">
                  <Icon
                    className="text-lg"
                    style={{
                      color: skill.color,
                      filter: `drop-shadow(0 0 6px ${skill.color}80)`,
                    }}
                  />
                </div>
              </motion.div>
            );
          }

          if (!target) return null;

          if (!projectAnimationDone.current) {
            return (
              <motion.div
                key={`project-${skill.name}`}
                className="fixed"
                initial={{
                  left: mouse.x + 20,
                  top: mouse.y + 20,
                  opacity: 0,
                  scale: 0.3,
                }}
                animate={{
                  left: target.x,
                  top: target.y,
                  opacity: 1,
                  scale: 1,
                }}
                transition={{
                  type: "spring",
                  stiffness: 220,
                  damping: 20,
                  mass: 0.3,
                  delay: index * 0.08,
                }}
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-white/10 bg-black">
                  <Icon
                    className="text-2xl"
                    style={{
                      color: skill.color,
                      filter: `drop-shadow(0 0 9px ${skill.color}90)`,
                    }}
                  />
                </div>
              </motion.div>
            );
          }

          return (
            <div
              key={`project-fixed-${skill.name}`}
              className="fixed"
              style={{
                left: target.x,
                top: target.y,
              }}
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-white/10 bg-black">
                <Icon
                  className="text-2xl"
                  style={{
                    color: skill.color,
                    filter: `drop-shadow(0 0 9px ${skill.color}90)`,
                  }}
                />
              </div>
            </div>
          );
        })}
    </div>
  );
}
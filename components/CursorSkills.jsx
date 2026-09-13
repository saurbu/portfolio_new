"use client";

import {
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
} from "react";

import { motion } from "framer-motion";

import {
  SiReact,
  SiJavascript,
  SiHtml5,
  SiCss,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiFirebase,
  SiTailwindcss,
  SiMysql,
  SiGit,
  SiPhp,
} from "react-icons/si";

import { FaJava } from "react-icons/fa";

const skills = [
  { name: "React.js", icon: SiReact, color: "#61DAFB" },
  { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
  { name: "HTML", icon: SiHtml5, color: "#E34F26" },
  { name: "CSS", icon: SiCss, color: "#1572B6" },
  { name: "Node.js", icon: SiNodedotjs, color: "#68A063" },
  { name: "Express.js", icon: SiExpress, color: "#FFFFFF" },
  { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
  { name: "Firebase", icon: SiFirebase, color: "#FFCA28" },
  { name: "Java", icon: FaJava, color: "#F89820" },
  { name: "PHP", icon: SiPhp, color: "#777BB4" },
  { name: "MySQL", icon: SiMysql, color: "#4479A1" },
  { name: "Git", icon: SiGit, color: "#F05032" },
  { name: "Tailwind CSS", icon: SiTailwindcss, color: "#06B6D4" },
];

const trailPositions = [
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
];

export default function CursorSkills({
  projectSkills = [],
  selectedProject = null,
}) {
  const [mouse, setMouse] = useState({
    x: -200,
    y: -200,
  });

  const [isSkillsVisible, setIsSkillsVisible] = useState(false);

  const [skillPositions, setSkillPositions] = useState({});

  const [projectPositions, setProjectPositions] = useState({});

  const projectAnimationDone = useRef(false);

  useEffect(() => {
    const handleMouseMove = (event) => {
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

  useLayoutEffect(() => {
    if (!isSkillsVisible || selectedProject) {
      setSkillPositions({});
      return;
    }

    let frameId;

    const updatePositions = () => {
      cancelAnimationFrame(frameId);

      frameId = requestAnimationFrame(() => {
        const positions = {};

        skills.forEach((skill) => {
          const element = document.querySelector(
            `[data-skill="${skill.name}"] .skill-logo-placeholder`
          );

          if (!element) return;

          const rect = element.getBoundingClientRect();

          positions[skill.name] = {
            x: rect.left,
            y: rect.top,
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
      cancelAnimationFrame(frameId);

      window.removeEventListener("scroll", updatePositions);
      window.removeEventListener("resize", updatePositions);

      resizeObserver.disconnect();
    };
  }, [isSkillsVisible, selectedProject]);

  useLayoutEffect(() => {
    if (!selectedProject) {
      setProjectPositions({});
      projectAnimationDone.current = false;
      return;
    }

    projectAnimationDone.current = false;

    let frameId = null;

    const updateProjectPositions = () => {
      if (frameId) {
        cancelAnimationFrame(frameId);
      }

      frameId = requestAnimationFrame(() => {
        const positions = {};

        selectedProject.skills.forEach((skill) => {
          const element = document.querySelector(
            `[data-project-skill="${skill}"] .project-skill-placeholder`
          );

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

    const handleScroll = () => {
      updateProjectPositions();
    };

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    window.addEventListener("resize", updateProjectPositions);
    const resizeObserver = new ResizeObserver(
      updateProjectPositions
    );

    resizeObserver.observe(document.body);
    const timer1 = setTimeout(updateProjectPositions, 0);
    const timer2 = setTimeout(updateProjectPositions, 50);
    const timer3 = setTimeout(updateProjectPositions, 150);
    const timer4 = setTimeout(updateProjectPositions, 300);

    const animationTimer = setTimeout(() => {
      projectAnimationDone.current = true;
    }, 800);

    return () => {
      if (frameId) {
        cancelAnimationFrame(frameId);
      }

      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
      clearTimeout(timer4);
      clearTimeout(animationTimer);

      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener(
        "resize",
        updateProjectPositions
      );

      resizeObserver.disconnect();
    };
  }, [selectedProject]);

  const projectSkillSet = new Set(projectSkills);

  const selectedSkillSet = new Set(
    selectedProject?.skills || []
  );

  return (
    <div className="pointer-events-none fixed inset-0 z-[9999] overflow-hidden">

      {!selectedProject &&
        !isSkillsVisible &&
        skills.map((skill, index) => {
          const Icon = skill.icon;
          const position = trailPositions[index];

          const highlighted = projectSkillSet.has(skill.name);

          return (
            <motion.div
              key={skill.name}
              className="absolute"
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
              <div
                className="flex h-14 w-14 items-center justify-center rounded-2xl border border-white/10 bg-black"
                style={{
                  boxShadow: `0 0 25px ${skill.color}50`,
                }}
              >
                <Icon
                  className="text-3xl"
                  style={{
                    color: skill.color,
                    filter: `drop-shadow(0 0 9px ${skill.color}90)`,
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
            const position = trailPositions[index];

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
                <div
                  className="flex h-12 w-12 items-center justify-center rounded-xl border border-white/10 bg-black"
                  style={{
                    boxShadow: `0 0 24px ${skill.color}70`,
                  }}
                >
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
              <div
                className="flex h-12 w-12 items-center justify-center rounded-xl border border-white/10 bg-black"
                style={{
                  boxShadow: `0 0 24px ${skill.color}70`,
                }}
              >
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
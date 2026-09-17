"use client";

import { useEffect, useState } from "react";

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
import { TbBrandVscode } from "react-icons/tb";
import { FaGithub } from "react-icons/fa";

import {
  Brain,
  Boxes,
  Sparkles,
  Globe,
  Code2,
} from "lucide-react";

type Theme = "light" | "dark";

type IconProps = {
  className?: string;
  style?: React.CSSProperties;
};

type Skill = {
  name: string;
  icon: React.ComponentType<IconProps>;
  color: string;
};

type Question = {
  question: string;
  correct: string[];
};

type GameQuestion = Question & {
  options: string[];
};

type GameProps = {
  theme?: Theme;
};

const skills: Skill[] = [
  {
    name: "React.js",
    icon: SiReact,
    color: "#61DAFB",
  },
  // {
  //   name: "React",
  //   icon: SiReact,
  //   color: "#61DAFB",
  // },
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
  // {
  //   name: "Tailwind",
  //   icon: SiTailwindcss,
  //   color: "#06B6D4",
  // },
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
    icon: TbBrandVscode,
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

const allSkills = skills.map((skill) => skill.name);

const questionBank: Question[] = [
  {
    question: "Select the frontend technologies.",
    correct: [
      "React.js",
      "JavaScript",
      "HTML",
      "CSS",
      "Tailwind CSS",
    ],
  },
  {
    question: "Select the backend technologies.",
    correct: [
      "Node.js",
      "Express.js",
      "REST APIs",
      "Firebase",
    ],
  },
  {
    question: "Select the database technologies.",
    correct: [
      "MongoDB",
      "MySQL",
    ],
  },
  {
    question: "Select the technologies used for styling.",
    correct: [
      "CSS",
      "Tailwind CSS",
    ],
  },
  {
    question: "Select the programming languages.",
    correct: [
      "C/C++",
      "PHP",
      "Python",
      "Java",
    ],
  },
  {
    question: "Select the development tools.",
    correct: [
      "Git",
      "GitHub",
      "VS Code",
    ],
  },
  {
    question: "Select the technologies commonly used in a MERN application.",
    correct: [
      "React.js",
      "Node.js",
      "Express.js",
      "MongoDB",
    ],
  },
  {
    question: "Select the technologies I use in my frontend projects.",
    correct: [
      "React.js",
      "JavaScript",
      "HTML",
      "CSS",
      "Tailwind CSS",
    ],
  },
  {
    question: "Select the technologies related to AI development.",
    correct: [
      "Python",
      "Gemini API",
    ],
  },
  {
    question: "Select the programming concepts.",
    correct: [
      "DSA",
      "OOP",
    ],
  },
  {
    question: "Select the technologies used for databases.",
    correct: [
      "MongoDB",
      "MySQL",
    ],
  },
  {
    question: "Select the technologies used in my full-stack projects.",
    correct: [
      "React.js",
      "Node.js",
      "Express.js",
      "MongoDB",
      "JavaScript",
    ],
  },
];

function shuffle<T>(array: T[]): T[] {
  const result = [...array];

  for (let i = result.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));

    [result[i], result[j]] = [
      result[j],
      result[i],
    ];
  }

  return result;
}

function createGame(): GameQuestion[] {
  return shuffle(questionBank).map((question) => ({
    ...question,
    options: (allSkills),
  }));
}

function getSkillStyle(index: number): string {
  const positions = [
    "translate-x-1 -translate-y-1",
    "-translate-x-1 translate-y-2",
    "translate-x-2",
    "-translate-x-1 -translate-y-1",
    "translate-x-1 translate-y-1",
    "-translate-x-2",
    "translate-y-2",
    "translate-x-1",
  ];

  return positions[index % positions.length];
}

export default function Game({
  theme = "light",
}: GameProps) {
  const isLight = theme === "light";

  const [gameQuestions, setGameQuestions] =
    useState<GameQuestion[]>([]);

  const [questionIndex, setQuestionIndex] =
    useState(0);

  const [selected, setSelected] =
    useState<string[]>([]);

  const [score, setScore] = useState(0);

  const [submitted, setSubmitted] =
    useState(false);

  const [draggedSkill, setDraggedSkill] =
    useState<string | null>(null);

  const [mounted, setMounted] =
    useState(false);

  useEffect(() => {
    setGameQuestions(createGame());
    setMounted(true);
  }, []);

  if (!mounted || !gameQuestions.length) {
    return (
      <section
        id="game"
        className={`relative min-h-screen scroll-mt-24 px-6 py-16 transition-colors duration-500 ${
          isLight
            ? "bg-[#eee9dc] text-[#273226]"
            : "bg-[#10140f] text-white"
        }`}
      >
        <div className="flex min-h-[70vh] items-center justify-center">
          <span className="text-sm opacity-40">
            Loading...
          </span>
        </div>
      </section>
    );
  }

  const currentQuestion =
    gameQuestions[questionIndex];

  const addSkill = (skill: string) => {
    if (selected.includes(skill)) return;

    setSelected((previous) => [
      ...previous,
      skill,
    ]);
  };

  const removeSkill = (skill: string) => {
    setSelected((previous) =>
      previous.filter((item) => item !== skill)
    );
  };

  const isCorrectAnswer = () => {
    const correct = [
      ...currentQuestion.correct,
    ].sort();

    const answer = [
      ...selected,
    ].sort();

    return (
      correct.length === answer.length &&
      correct.every(
        (value, index) =>
          value === answer[index]
      )
    );
  };

  const nextQuestion = () => {
    const correct = isCorrectAnswer();

    const nextScore = correct
      ? score + 1
      : score;

    if (
      questionIndex ===
      gameQuestions.length - 1
    ) {
      setScore(nextScore);
      setSubmitted(true);
      setDraggedSkill(null);
      return;
    }

    if (correct) {
      setScore((previous) => previous + 1);
    }

    setSelected([]);
    setDraggedSkill(null);

    setQuestionIndex(
      (previous) => previous + 1
    );
  };

  const restartGame = () => {
    setGameQuestions(createGame());
    setQuestionIndex(0);
    setSelected([]);
    setScore(0);
    setSubmitted(false);
    setDraggedSkill(null);
  };

  if (submitted) {
    const percentage = Math.round(
      (score / gameQuestions.length) * 100
    );

    return (
      <section
        id="game"
        data-game-result="true"
        className={`relative min-h-screen scroll-mt-24 px-6 py-12 transition-colors duration-500 ${
          isLight
            ? "bg-[#eee9dc] text-[#273226]"
            : "bg-[#10140f] text-white"
        }`}
      >
        <div className="mx-auto flex min-h-[75vh] max-w-6xl items-center justify-center">
          <div
            className={`w-full max-w-md rounded-3xl border p-8 text-center shadow-sm transition-colors duration-500 ${
              isLight
                ? "border-[#273226]/10 bg-[#f5f0e4]/70"
                : "border-white/10 bg-[#10140f]"
            }`}
          >
            <p
              className={`text-xs uppercase tracking-[0.3em] ${
                isLight
                  ? "text-[#65734f]"
                  : "text-white/40"
              }`}
            >
              Challenge Complete
            </p>

            <h2
              className={`mt-4 text-6xl font-bold ${
                isLight
                  ? "text-[#273226]"
                  : "text-white"
              }`}
            >
              {score}/{gameQuestions.length}
            </h2>

            <p
              className={`mt-3 text-sm ${
                isLight
                  ? "text-[#5d6658]"
                  : "text-white/50"
              }`}
            >
              {percentage}% correct
            </p>

            <p
              className={`mt-5 text-lg font-semibold ${
                isLight
                  ? "text-[#273226]"
                  : "text-white"
              }`}
            >
              {percentage === 100
                ? "Perfect Score 🔥"
                : percentage >= 70
                  ? "Great Job 🚀"
                  : "Keep Practicing 💪"}
            </p>

            <button
              type="button"
              onClick={restartGame}
              className={`mt-7 rounded-full border px-6 py-2.5 text-sm font-semibold transition ${
                isLight
                  ? "border-[#273226] text-[#273226] hover:-translate-y-0.5 hover:bg-[#273226] hover:text-[#f5f0e4]"
                  : "border-white text-white hover:-translate-y-0.5 hover:bg-white hover:text-black"
              }`}
            >
              Play Again
            </button>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section
      id="game"
      className={`relative min-h-screen overflow-hidden scroll-mt-24 px-6 py-12 transition-colors duration-500 ${
        isLight
          ? "bg-[#eee9dc] text-[#273226]"
          : "bg-[#10140f] text-white"
      }`}
    >
      <div className="mx-auto max-w-7xl">
        <div>
          <p
            className={`mb-2 text-sm uppercase tracking-[0.3em] ${
              isLight
                ? "text-[#65734f]"
                : "text-white/40"
            }`}
          >
            Interactive Challenge
          </p>

          <h2
            className={`text-5xl font-bold tracking-tight md:text-8xl ${
              isLight
                ? "text-[#273226]"
                : "text-white"
            }`}
          >
            Tech Game
          </h2>

          <p
            className={`mx-auto mt-2 max-w-xl text-center text-sm leading-relaxed ${
              isLight
                ? "text-[#5d6658]"
                : "text-white/50"
            }`}
          >
            Select the technologies that answer the question.
          </p>
        </div>

        <div className="mx-auto mt-6 max-w-6xl">
          <div className="mb-4 flex items-center justify-between">
            <span
              className={`text-xs font-semibold ${
                isLight
                  ? "text-[#273226]"
                  : "text-white"
              }`}
            >
              Question {questionIndex + 1} /{" "}
              {gameQuestions.length}
            </span>

            <span
              className={`text-xs ${
                isLight
                  ? "text-[#5d6658]"
                  : "text-white/40"
              }`}
            >
              Score: {score}
            </span>
          </div>

          <div
            className={`mb-5 h-1 overflow-hidden rounded-full ${
              isLight
                ? "bg-[#273226]/10"
                : "bg-white/10"
            }`}
          >
            <div
              className="h-full rounded-full bg-[#65734f] transition-all duration-500"
              style={{
                width: `${
                  ((questionIndex + 1) /
                    gameQuestions.length) *
                  100
                }%`,
              }}
            />
          </div>

          <div className="mb-5 text-center">
            <h3
              className={`text-lg font-semibold md:text-xl ${
                isLight
                  ? "text-[#273226]"
                  : "text-white"
              }`}
            >
              {currentQuestion.question}
            </h3>
          </div>

          <div className="grid items-stretch gap-5 lg:grid-cols-[1fr_310px]">
            <div
              className={`rounded-3xl border p-4 transition-colors duration-500 ${
                isLight
                  ? "border-[#273226]/10 bg-[#f5f0e4]/50"
                  : "border-white/10 bg-black/20"
              }`}
            >
              <div className="mb-3 flex items-center justify-between">
                <span
                  className={`text-[10px] uppercase tracking-[0.25em] ${
                    isLight
                      ? "text-[#65734f]"
                      : "text-white/40"
                  }`}
                >
                  Technologies
                </span>

                <span
                  className={`text-[10px] ${
                    isLight
                      ? "text-[#5d6658]"
                      : "text-white/35"
                  }`}
                >
                  Drag / Click
                </span>
              </div>

              <div className="grid grid-cols-3 gap-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-7">
                {currentQuestion.options.map(
                  (skill, index) => {
                    const skillData = skills.find(
                      (item) =>
                        item.name === skill
                    );

                    const isSelected =
                      selected.includes(skill);

                    if (!skillData) return null;

                    const Icon = skillData.icon;

                    return (
                      <button
                        key={skill}
                        type="button"
                        draggable={!isSelected}
                        onDragStart={(event) => {
                          setDraggedSkill(skill);

                          event.dataTransfer.setData(
                            "text/plain",
                            skill
                          );
                        }}
                        onClick={() =>
                          addSkill(skill)
                        }
                        disabled={isSelected}
                        data-game-skill={skill}
                        className={`group relative h-[82px] rounded-2xl border border-dashed px-2 transition-all duration-300 ${
                          isLight
                            ? "border-[#273226]/15 bg-[#eee9dc]/60"
                            : "border-white/10 bg-black"
                        } ${getSkillStyle(index)} ${
                          isSelected
                            ? "scale-100 opacity-15"
                            : isLight
                              ? "hover:border-[#65734f]/50"
                              : "hover:border-white/30"
                        }`}
                      >
                        <div
                          className={`game-skill-placeholder absolute left-1/2 top-1/2 flex h-12 w-12 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-xl border transition-colors duration-500 ${
                            isLight
                              ? "border-[#273226]/10 bg-[#f5f0e4]"
                              : "border-white/10 bg-black"
                          }`}
                        >
                          {/* <Icon
                            className="text-2xl transition-transform duration-300 group-hover:scale-100"
                            style={{
                              color: skillData.color,
                            }}
                          /> */}
                        </div>

                        <span
                          className={`absolute bottom-2 left-0 right-0 truncate text-[10px] font-medium ${
                            isLight
                              ? "text-[#5d6658]"
                              : "text-white/50"
                          }`}
                        >
                          {skill}
                        </span>
                      </button>
                    );
                  }
                )}
              </div>
            </div>

            <div
              onDragOver={(event) =>
                event.preventDefault()
              }
              onDrop={(event) => {
                event.preventDefault();

                const skill =
                  event.dataTransfer.getData(
                    "text/plain"
                  ) || draggedSkill;

                if (skill) {
                  addSkill(skill);
                }

                setDraggedSkill(null);
              }}
              className={`flex min-h-[190px] flex-col rounded-3xl border-2 border-dashed p-4 transition-colors duration-500 ${
                isLight
                  ? "border-[#273226]/15 bg-[#f5f0e4]/30"
                  : "border-white/10 bg-black/20"
              }`}
            >
              <div className="flex items-center justify-between">
                <span
                  className={`text-[10px] uppercase tracking-[0.25em] ${
                    isLight
                      ? "text-[#65734f]"
                      : "text-white/40"
                  }`}
                >
                  Your Answer
                </span>

                <span className="text-[10px] opacity-35">
                  {selected.length}
                </span>
              </div>

              <div className="mt-3 flex flex-1 flex-wrap content-start gap-2">
                {selected.length === 0 ? (
                  <div className="flex w-full items-center justify-center">
                    <p
                      className={`text-center text-xs ${
                        isLight
                          ? "text-[#5d6658]"
                          : "text-white"
                      } opacity-30`}
                    >
                      Drag technologies here
                    </p>
                  </div>
                ) : (
                  selected.map((skill) => {
                    const skillData = skills.find(
                      (item) =>
                        item.name === skill
                    );

                    if (!skillData) return null;

                    const Icon = skillData.icon;

                    return (
                      <button
                        key={skill}
                        type="button"
                        onClick={() =>
                          removeSkill(skill)
                        }
                        className={`flex items-center gap-1.5 rounded-xl border px-2.5 py-2 text-[10px] font-medium transition ${
                          isLight
                            ? "border-[#273226]/10 bg-[#eee9dc] text-[#273226] hover:border-[#65734f]/40"
                            : "border-white/10 bg-black text-white hover:border-white/30"
                        }`}
                      >
                        <Icon
                          className="text-sm"
                          style={{
                            color: skillData.color,
                          }}
                        />

                        {skill}

                        <span className="ml-1 opacity-40">
                          ×
                        </span>
                      </button>
                    );
                  })
                )}
              </div>
            </div>
          </div>

          <div className="mt-5 flex justify-end">
            <button
              type="button"
              onClick={nextQuestion}
              className={`rounded-full border px-6 py-2.5 text-xs font-semibold transition hover:-translate-y-0.5 ${
                isLight
                  ? "border-[#273226] text-[#273226] hover:bg-[#273226] hover:text-[#f5f0e4]"
                  : "border-white text-white hover:bg-white hover:text-black"
              }`}
            >
              {questionIndex ===
              gameQuestions.length - 1
                ? "Submit"
                : "Next →"}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
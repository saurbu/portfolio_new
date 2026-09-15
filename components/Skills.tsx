"use client";

type Theme = "light" | "dark";

type SkillCardProps = {
  title: string;
  skills: string[];
  category: string;
  theme: Theme;
};

type SkillsProps = {
  theme?: Theme;
};

const frontendSkills: string[] = [
  "React",
  "JavaScript",
  "HTML",
  "CSS",
  "Tailwind",
];

const backendSkills: string[] = [
  "Node.js",
  "Express.js",
  "REST APIs",
];

const databaseSkills: string[] = [
  "MongoDB",
  "MySQL",
];

const programmingSkills: string[] = [
  "C/C++",
  "PHP",
  "Python",
];

const toolsAiSkills: string[] = [
  "Git",
  "GitHub",
  "VS Code",
  "Gemini API",
];

const conceptSkills: string[] = [
  "DSA",
  "OOP",
];

const skillCategories: {
  title: string;
  skills: string[];
  category: string;
}[] = [
  {
    title: "Frontend Development",
    skills: frontendSkills,
    category: "frontend",
  },
  {
    title: "Backend Development",
    skills: backendSkills,
    category: "backend",
  },
  {
    title: "Database",
    skills: databaseSkills,
    category: "database",
  },
  {
    title: "Programming",
    skills: programmingSkills,
    category: "programming",
  },
  {
    title: "Tools & AI",
    skills: toolsAiSkills,
    category: "tools-ai",
  },
  {
    title: "Concepts",
    skills: conceptSkills,
    category: "concepts",
  },
];

function SkillCard({
  title,
  skills,
  category,
  theme,
}: SkillCardProps) {
  const isLight = theme === "light";

  return (
    <div
      className={`skill-category rounded-2xl border p-4 backdrop-blur-md transition-all duration-500 ${
        isLight
          ? "border-[#273226]/10 bg-[#f5f0e4]/70 shadow-sm"
          : "border-white/10 bg-white/[0.02]"
      }`}
      data-category={category}
    >
      <h3
        className={`mb-3 text-base font-semibold transition-colors duration-500 ${
          isLight ? "text-[#273226]" : "text-white"
        }`}
      >
        {title}
      </h3>

      <div className="grid grid-cols-2 gap-2">
        {skills.map((skill) => (
          <div
            key={skill}
            className={`skill-slot flex h-14 items-center gap-2 rounded-xl border border-dashed px-2.5 transition-all duration-500 ${
              isLight
                ? "border-[#273226]/15 bg-[#eee9dc]/70 hover:border-[#65734f]/40 hover:bg-[#e5e0d2]"
                : "border-white/10 bg-black hover:border-white/20"
            }`}
            data-skill={skill}
          >
            <div
              className={`skill-logo-placeholder flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border transition-all duration-500 ${
                isLight
                  ? "border-[#273226]/10 bg-[#f5f0e4]"
                  : "border-white/10 bg-black"
              }`}
            />

            <span
              className={`truncate text-xs font-medium transition-colors duration-500 ${
                isLight
                  ? "text-[#5d6658]"
                  : "text-white/60"
              }`}
            >
              {skill}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function Skills({
  theme = "light",
}: SkillsProps) {
  const isLight = theme === "light";

  return (
    <section
      id="skills"
      className={`relative min-h-screen overflow-hidden px-6 py-8 transition-colors duration-500 ${
        isLight ? "bg-[#eee9dc]" : "bg-black"
      }`}
    >
      <div className="mx-auto flex min-h-[calc(100vh-4rem)] max-w-7xl flex-col justify-center">
        <div>
          <p
            className={`mb-1 text-xs uppercase tracking-[0.3em] transition-colors duration-500 ${
              isLight
                ? "text-[#65734f]"
                : "text-white/40"
            }`}
          >
            Technologies
          </p>

          <h2
            className={`text-5xl font-bold tracking-tight transition-colors duration-500 md:text-7xl ${
              isLight
                ? "text-[#273226]"
                : "text-white"
            }`}
          >
            Skills
          </h2>

          <p
            className={`mt-1 max-w-2xl text-sm leading-relaxed transition-colors duration-500 ${
              isLight
                ? "text-[#5d6658]"
                : "text-white/50"
            }`}
          >
            Technologies and tools I use to build modern,
            responsive and full-stack web applications.
          </p>
        </div>

        <div className="mt-5 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {skillCategories.map((category) => (
            <SkillCard
              key={category.category}
              title={category.title}
              skills={category.skills}
              category={category.category}
              theme={theme}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
"use client";

const frontendSkills = ["React.js", "JavaScript", "HTML", "CSS"];
const backendSkills = ["Node.js", "Express.js", "MongoDB", "Firebase"];
const otherSkills = ["Java", "PHP", "MySQL", "Git", "Tailwind CSS"];

function SkillCard({ title, skills, category }) {
  return (
    <div
      className="skill-category rounded-3xl border border-white/10 bg-white/[0.03] p-7 backdrop-blur-md"
      data-category={category}
    >
      <h3 className="mb-8 text-2xl font-semibold text-white">
        {title}
      </h3>

      <div className="grid grid-cols-2 gap-5">
        {skills.map((skill) => (
          <div
            key={skill}
            className="skill-slot flex h-28 flex-col items-center justify-center rounded-2xl border border-dashed border-white/10 bg-black/40"
            data-skill={skill}
          >
            <div className="skill-logo-placeholder h-14 w-14 rounded-2xl border border-white/10 bg-white/[0.03]" />

            <span className="mt-3 text-xs text-white/50">
              {skill}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function Skills() {
  return (
    <section
      id="skills"
      className="relative min-h-screen overflow-hidden bg-black px-6 py-22"
    >
      <div className="mx-auto max-w-7xl">
        <p className="mb-2 text-sm uppercase tracking-[0.3em] text-white/40">
          Technologies
        </p>

        <h2 className="text-6xl font-bold tracking-tight text-white md:text-8xl">
          Skills
        </h2>

        <p className="mt-2 max-w-2xl text-lg leading-relaxed text-white/50">
          Technologies and tools I use to build modern, responsive
          and full-stack web applications.
        </p>

        <div className="mt-2 grid gap-6 md:grid-cols-3">
          <SkillCard
            title="Frontend"
            skills={frontendSkills}
            category="frontend"
          />

          <SkillCard
            title="Backend"
            skills={backendSkills}
            category="backend"
          />

          <SkillCard
            title="Other"
            skills={otherSkills}
            category="other"
          />
        </div>
      </div>
    </section>
  );
}


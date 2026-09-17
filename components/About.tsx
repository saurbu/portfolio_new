"use client";

import { motion } from "framer-motion";
import {
  ArrowUpRight,
  MapPin,
  Code2,
  BriefcaseBusiness,
} from "lucide-react";

type AboutProps = {
  theme?: "light" | "dark";
};

export default function About({ theme = "dark" }: AboutProps) {
  const isLight = theme === "light";

  return (
    <section
      id="about"
      className={`relative min-h-screen overflow-hidden px-6 py-24 md:px-12 md:py-24 ${
        isLight ? "bg-[#f2ecdc]" : "bg-[#10140f]"
      }`}
    >
      <div className="mx-auto max-w-7xl">
        <div className="text-left">
          <p
            className={`text-xs uppercase tracking-[0.3em] ${
              isLight ? "text-[#65734f]" : "text-white/40"
            }`}
          >
            A Little Bit
          </p>

          <h2
            className={`text-5xl font-bold tracking-tight md:text-8xl ${
              isLight ? "text-[#273226]" : "text-white"
            }`}
          >
            About <span style={{ color: "var(--muted)" }}>Me</span>
          </h2>

          <p
            className={`max-w-3xl text-sm leading-relaxed md:text-base ${
              isLight ? "text-[#5d6658]" : "text-white/50"
            }`}
          >
            A developer who enjoys turning ideas into useful, clean and
            interactive digital experiences.
          </p>
        </div>

        <div className="mt-5 grid gap-16 lg:grid-cols-[1.15fr_0.85fr] lg:gap-24">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6 }}
            >
              <p
                className={`text-xs uppercase tracking-[0.25em] ${
                  isLight ? "text-[#65734f]" : "text-white/35"
                }`}
              >
                Who I am
              </p>

              <h3
                className={`mt-6 max-w-3xl text-xl font-semibold leading-tight md:text-3xl ${
                  isLight ? "text-[#28301f]" : "text-white"
                }`}
              >
                I build full-stack web applications with a focus on
                practical solutions and smooth user experiences.
              </h3>

              <div
                className={`mt-2 max-w-2xl space-y-3 text-sm leading-8 md:text-base ${
                  isLight ? "text-[#68705d]" : "text-white/55"
                }`}
              >
                <p>
                  I am Saurav Sharma, a Computer Science Engineering student
                  and aspiring full-stack developer. I enjoy working across
                  both frontend and backend development and understanding how
                  the complete application works together.
                </p>

                <p>
                  My development journey started with the fundamentals of web
                  development and gradually moved toward building complete
                  applications using modern JavaScript technologies. I like
                  learning by building real projects rather than only
                  studying concepts.
                </p>

                <p>
                  I am currently focused on improving my full-stack
                  development skills, strengthening my problem-solving
                  abilities and gaining real-world development experience.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className={`mt-2 border-t pt-3 ${
                isLight
                  ? "border-[#28301f]/15"
                  : "border-white/10"
              }`}
            >
              <p
                className={`text-xs uppercase tracking-[0.25em] ${
                  isLight ? "text-[#65734f]" : "text-white/35"
                }`}
              >
                What I enjoy
              </p>

              <div className="mt-4 grid gap-8 sm:grid-cols-2">
                <div>
                  <Code2
                    size={22}
                    strokeWidth={1.5}
                    className={
                      isLight ? "text-[#65734f]" : "text-white/60"
                    }
                  />

                  <h4
                    className={`text-lg font-semibold ${
                      isLight ? "text-[#28301f]" : "text-white"
                    }`}
                  >
                    Building
                  </h4>

                  <p
                    className={`mt-1 text-sm leading-4 ${
                      isLight ? "text-[#68705d]" : "text-white/45"
                    }`}
                  >
                    Turning ideas into functional applications and
                    experimenting with new technologies through projects.
                  </p>
                </div>

                <div>
                  <BriefcaseBusiness
                    size={20}
                    strokeWidth={1.5}
                    className={
                      isLight ? "text-[#65734f]" : "text-white/60"
                    }
                  />

                  <h4
                    className={`text-lg font-semibold ${
                      isLight ? "text-[#28301f]" : "text-white"
                    }`}
                  >
                    Growing
                  </h4>

                  <p
                    className={`mt-1 text-sm leading-4 ${
                      isLight ? "text-[#68705d]" : "text-white/45"
                    }`}
                  >
                    Improving my development workflow, learning from
                    projects and preparing for real-world engineering work.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7 }}
            className="lg:pt-3"
          >
            <div
              className={`rounded-2xl border p-7 md:p-9 ${
                isLight
                  ? "border-[#28301f]/15 bg-white/20"
                  : "border-white/10 bg-white/[0.025]"
              }`}
            >
              <p
                className={`text-xs uppercase tracking-[0.25em] ${
                  isLight ? "text-[#65734f]" : "text-white/35"
                }`}
              >
                Currently
              </p>

              <h3
                className={`mt-6 text-2xl font-semibold leading-tight md:text-3xl ${
                  isLight ? "text-[#28301f]" : "text-white"
                }`}
              >
                Learning, building and looking for opportunities to grow.
              </h3>

              <div
                className={`mt-10 space-y-7 border-t pt-8 ${
                  isLight
                    ? "border-[#28301f]/10"
                    : "border-white/10"
                }`}
              >
                <div className="flex items-start gap-4">
                  <MapPin
                    size={20}
                    strokeWidth={1.5}
                    className={
                      isLight ? "text-[#65734f]" : "text-white/50"
                    }
                  />

                  <div>
                    <p
                      className={`text-sm ${
                        isLight ? "text-[#28301f]" : "text-white"
                      }`}
                    >
                      India
                    </p>

                    <p
                      className={`mt-1 text-xs ${
                        isLight ? "text-[#68705d]" : "text-white/40"
                      }`}
                    >
                      Open to opportunities
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Code2
                    size={20}
                    strokeWidth={1.5}
                    className={
                      isLight ? "text-[#65734f]" : "text-white/50"
                    }
                  />

                  <div>
                    <p
                      className={`text-sm ${
                        isLight ? "text-[#28301f]" : "text-white"
                      }`}
                    >
                      Full-Stack Development
                    </p>

                    <p
                      className={`mt-1 text-xs ${
                        isLight ? "text-[#68705d]" : "text-white/40"
                      }`}
                    >
                      Frontend + Backend
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <BriefcaseBusiness
                    size={20}
                    strokeWidth={1.5}
                    className={
                      isLight ? "text-[#65734f]" : "text-white/50"
                    }
                  />

                  <div>
                    <p
                      className={`text-sm ${
                        isLight ? "text-[#28301f]" : "text-white"
                      }`}
                    >
                      Open to Internship
                    </p>

                    <p
                      className={`mt-1 text-xs ${
                        isLight ? "text-[#68705d]" : "text-white/40"
                      }`}
                    >
                      Interested in real-world development
                    </p>
                  </div>
                </div>
              </div>

              <div
                className={`mt-10 border-t pt-8 ${
                  isLight
                    ? "border-[#28301f]/10"
                    : "border-white/10"
                }`}
              >
                <p
                  className={`text-sm leading-7 ${
                    isLight ? "text-[#68705d]" : "text-white/45"
                  }`}
                >
                  My goal is simple: keep building, keep learning and become
                  a better developer with every project.
                </p>

                <div
                  className={`mt-7 inline-flex items-center gap-2 text-sm font-medium ${
                    isLight ? "text-[#28301f]" : "text-white"
                  }`}
                >
                  Let's build something useful
                  <ArrowUpRight size={16} />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
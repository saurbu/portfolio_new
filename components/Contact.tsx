"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Mail,
  MapPin,
  Send,
} from "lucide-react";
import {
  FaGithub,
  FaLinkedinIn,
} from "react-icons/fa";

type ContactProps = {
  theme?: "light" | "dark";
};

export default function Contact({
  theme = "dark",
}: ContactProps) {
  const isLight = theme === "light";
  const [result, setResult] = useState("");

  const onSubmit = async (
    event: React.FormEvent<HTMLFormElement>
  ) => {
    event.preventDefault();

    setResult("Sending....");

    const form = event.currentTarget;
    const formData = new FormData(form);

    formData.append(
      "access_key",
      "a64b77af-fb0f-4359-a975-9404cea2ddef"
    );

    const response = await fetch(
      "https://api.web3forms.com/submit",
      {
        method: "POST",
        body: formData,
      }
    );

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      form.reset();
    } else {
      setResult("Error");
    }
  };
  return (
    <section
      id="contact"
      className={`relative min-h-screen overflow-hidden px-6 py-24 md:px-12 md:py-23 ${
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
            Get In Touch
          </p>

          <h2
            className={`text-5xl font-bold tracking-tight md:text-8xl ${
              isLight ? "text-[#273226]" : "text-white"
            }`}
          >
            Contact{" "}
            <span style={{ color: "var(--muted)" }}>
              Me
            </span>
          </h2>

          <p
            className={` mt- max-w-2xl text-sm leading-5 md:text-base ${
              isLight ? "text-[#5d6658]" : "text-white/50"
            }`}
          >
            Have a project, opportunity or idea in mind?
            Feel free to reach out.
          </p>
        </div>

        <div className="mt-8 grid gap-16 lg:grid-cols-[0.9fr_1.1fr] lg:gap-24">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7 }}
          >
            <p
              className={`text-xs uppercase tracking-[0.25em] ${
                isLight ? "text-[#65734f]" : "text-white/35"
              }`}
            >
              Let's Connect
            </p>

            <h3
              className={` max-w-xl text-2xl font-semibold leading-tight md:text-4xl ${
                isLight ? "text-[#28301f]" : "text-white"
              }`}
            >
              Let's build something
              <span
                className="block"
                style={{ color: "var(--muted)" }}
              >
                useful together.
              </span>
            </h3>

            <p
              className={`mt-3 max-w-lg text-sm leading-5 md:text-base ${
                isLight ? "text-[#68705d]" : "text-white/50"
              }`}
            >
              I am open to internship opportunities,
              collaborations and interesting development
              projects. If you think we could work together,
              send me a message.
            </p>

            <div className="mt-8 space-y-6">
              <a
                href="mailto:your-email@example.com"
                className="group flex items-center gap-5"
              >
                <div
                  className={`flex h-12 w-12 items-center justify-center rounded-full border ${
                    isLight
                      ? "border-[#28301f]/15 bg-white/20"
                      : "border-white/10 bg-white/[0.03]"
                  }`}
                >
                  <Mail
                    size={19}
                    strokeWidth={1.5}
                    className={
                      isLight
                        ? "text-[#65734f]"
                        : "text-white/60"
                    }
                  />
                </div>

                <div>
                  <p
                    className={`text-xs uppercase tracking-[0.2em] ${
                      isLight
                        ? "text-[#65734f]"
                        : "text-white/35"
                    }`}
                  >
                    Email
                  </p>

                  <p
                    className={`mt-1 text-sm ${
                      isLight
                        ? "text-[#28301f]"
                        : "text-white"
                    }`}
                  >
                    Kaptaan0802@gmail.com
                  </p>
                </div>

                <ArrowUpRight
                  size={17}
                  className={`ml-auto transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 ${
                    isLight
                      ? "text-[#65734f]"
                      : "text-white/40"
                  }`}
                />
              </a>

              <div className="flex items-center gap-5">
                <div
                  className={`flex h-12 w-12 items-center justify-center rounded-full border ${
                    isLight
                      ? "border-[#28301f]/15 bg-white/20"
                      : "border-white/10 bg-white/[0.03]"
                  }`}
                >
                  <MapPin
                    size={19}
                    strokeWidth={1.5}
                    className={
                      isLight
                        ? "text-[#65734f]"
                        : "text-white/60"
                    }
                  />
                </div>

                <div>
                  <p
                    className={`text-xs uppercase tracking-[0.2em] ${
                      isLight
                        ? "text-[#65734f]"
                        : "text-white/35"
                    }`}
                  >
                    Location
                  </p>

                  <p
                    className={`mt-1 text-sm ${
                      isLight
                        ? "text-[#28301f]"
                        : "text-white"
                    }`}
                  >
                    India
                  </p>
                </div>
              </div>
            </div>

            <div
              className={`mt-6 flex gap-4 border-t pt-8 ${
                isLight
                  ? "border-[#28301f]/10"
                  : "border-white/10"
              }`}
            >
              <a
                href="https://github.com/saurbu"
                target="_blank"
                rel="noopener noreferrer"
                className={`flex h-11 w-11 items-center justify-center rounded-full border transition-transform duration-300 hover:-translate-y-1 ${
                  isLight
                    ? "border-[#28301f]/15 text-[#28301f] hover:bg-[#28301f]/5"
                    : "border-white/10 text-white/60 hover:bg-white/5"
                }`}
              >
                <FaGithub size={18} />
              </a>

              <a
                href="https://linkedin.com/"
                target="_blank"
                rel="noopener noreferrer"
                className={`flex h-11 w-11 items-center justify-center rounded-full border transition-transform duration-300 hover:-translate-y-1 ${
                  isLight
                    ? "border-[#28301f]/15 text-[#28301f] hover:bg-[#28301f]/5"
                    : "border-white/10 text-white/60 hover:bg-white/5"
                }`}
              >
                <FaLinkedinIn size={18} />
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7 }}
          >
            <form
              onSubmit={onSubmit}
              className={`rounded-2xl border p-4 md:p-6 ${
                isLight
                  ? "border-[#28301f]/15 bg-white/20"
                  : "border-white/10 bg-white/[0.025]"
              }`}
            >
              <p
                className={`text-xs uppercase tracking-[0.25em] ${
                  isLight
                    ? "text-[#65734f]"
                    : "text-white/35"
                }`}
              >
                Send A Message
              </p>

              <div className="mt-4 space-y-1">
                <div>
                  <label
                    className={`text-xs uppercase tracking-[0.2em] ${
                      isLight
                        ? "text-[#68705d]"
                        : "text-white/40"
                    }`}
                  >
                    Name
                  </label>

                  <input
                    type="text"
                    name="name"
                    required
                    placeholder="Your name"
                    className={`w-full border-b bg-transparent px-0 pb-3 text-sm outline-none transition-colors ${
                      isLight
                        ? "border-[#28301f]/15 text-[#28301f] placeholder:text-[#68705d]/60 focus:border-[#65734f]"
                        : "border-white/10 text-white placeholder:text-white/25 focus:border-white/40"
                    }`}
                  />
                </div>

                <div>
                  <label
                    className={`text-xs uppercase tracking-[0.2em] ${
                      isLight
                        ? "text-[#68705d]"
                        : "text-white/40"
                    }`}
                  >
                    Email
                  </label>

                  <input
                    type="email"
                    name="email"
                    required
                    placeholder="your@email.com"
                    className={`w-full border-b bg-transparent px-0 pb-3 text-sm outline-none transition-colors ${
                      isLight
                        ? "border-[#28301f]/15 text-[#28301f] placeholder:text-[#68705d]/60 focus:border-[#65734f]"
                        : "border-white/10 text-white placeholder:text-white/25 focus:border-white/40"
                    }`}
                  />
                </div>

                <div>
                  <label
                    className={`text-xs uppercase tracking-[0.2em] ${
                      isLight
                        ? "text-[#68705d]"
                        : "text-white/40"
                    }`}
                  >
                    Message
                  </label>

                  <textarea
                    name="message"
                    required
                    rows={2}
                    placeholder="Tell me about your idea..."
                    className={`w-full resize-none border-b bg-transparent pb-3 text-sm outline-none transition-colors ${
                      isLight
                        ? "border-[#28301f]/15 text-[#28301f] placeholder:text-[#68705d]/60 focus:border-[#65734f]"
                        : "border-white/10 text-white placeholder:text-white/25 focus:border-white/40"
                    }`}
                  />
                </div>
              </div>

              <button
                type="submit"
                disabled={result === "Sending...."}
                className={`mt-10 inline-flex items-center gap-3 rounded-full border px-6 py-3 text-sm font-medium transition-all duration-300 hover:-translate-y-1 ${
                  isLight
                    ? "border-[#28301f]/20 text-[#28301f] hover:bg-[#28301f]/5"
                    : "border-white/15 text-white hover:bg-white/5"
                }`}
              >
                {result === "Sending...." ? "Sending..." : "Send Message"}
                <Send size={16} />
              </button>

              {result && result !== "Sending...." && (
                <p
                  className={`mt-4 text-xs ${
                    result === "Form Submitted Successfully"
                      ? isLight
                        ? "text-[#65734f]"
                        : "text-white/60"
                      : "text-red-500"
                  }`}
                >
                  {result}
                </p>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
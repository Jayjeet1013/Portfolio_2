"use client";

import Link from "next/link";
import { motion } from "framer-motion";

type Project = {
  title: string;
  href: string;
  description: string;
};

const projects: Project[] = [
  {
    title: "Asva Capital",
    href: "https://asvaventures.com/",
    description:
      "A thesis-driven Digital Asset fund investing across diverse digital assets in private and public markets.",
  },
  {
    title: "DepNetwork",
    href: "https://depnetwork.vercel.app/",
    description:
      "Infrastructure layer empowering DePin and AI ecosystems with scalable, decentralized capabilities.",
  },
  {
    title: "BitFuge",
    href: "https://bitfuge.vercel.app/",
    description:
      "DeFi primitives for the Bitcoin community to unlock new possibilities on the Bitcoin network.",
  },
  {
    title: "Hash Stone Capital",
    href: "https://hash-stone-capital.com/",
    description:
      "Digital asset investment firm delivering innovative strategies for the evolving crypto landscape.",
  },
];

const container = {
  hidden: { opacity: 0, y: 16 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut", staggerChildren: 0.08 },
  },
};

const item = {
  hidden: { opacity: 0, y: 18, scale: 0.98 },
  show: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.35 } },
};

export default function Page() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-gradient-to-b from-slate-50 via-white to-slate-100 text-slate-900">
      {/* Animated background accents */}
      <motion.div
        className="pointer-events-none absolute -top-20 -left-20 h-64 w-64 rounded-full bg-indigo-200/50 blur-3xl"
        initial={{ opacity: 0, scale: 0.8, x: -40, y: -40 }}
        animate={{ opacity: 1, scale: 1, x: 0, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      />
      <motion.div
        className="pointer-events-none absolute -bottom-24 -right-24 h-72 w-72 rounded-full bg-cyan-200/50 blur-3xl"
        initial={{ opacity: 0, scale: 0.8, x: 40, y: 40 }}
        animate={{ opacity: 1, scale: 1, x: 0, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
      />

      <div className="mx-auto max-w-6xl px-4 py-14 sm:py-16">
        {/* Hero */}
        <motion.header
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, ease: "easeOut" }}
          className="mx-auto mb-10 max-w-3xl text-center sm:mb-12"
        >
          <h1 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
            Freelancer Portfolio
          </h1>
          <p className="mt-3 text-slate-600 sm:text-lg">
            Showcasing freelance projects crafted with{" "}
            <span className="font-semibold text-slate-900">clean design</span>,
            <span className="font-semibold text-slate-900">
              smooth performance
            </span>
            , and 
            <span className="font-semibold text-slate-900"> scalable code</span>.
          </p>
        </motion.header>

        {/* Projects grid */}
        <motion.section
          variants={container}
          initial="hidden"
          animate="show"
          className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3"
        >
          {projects.map((p) => (
            <motion.article
              key={p.title}
              variants={item}
              whileHover={{ y: -6, scale: 1.01 }}
              whileTap={{ scale: 0.99 }}
              className="group relative flex h-full flex-col rounded-2xl border border-slate-200/70 bg-white/80 p-5 shadow-sm backdrop-blur-md transition-shadow hover:shadow-lg"
            >
              <div className="mb-2 flex items-start justify-between">
                <h2 className="text-lg font-semibold tracking-tight text-slate-900">
                  {p.title}
                </h2>
              </div>

              <p className="mb-5 line-clamp-4 text-sm leading-relaxed text-slate-600">
                {p.description}
              </p>

              <div className="mt-auto flex items-center justify-between">
                <Link
                  href={p.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-xl bg-slate-900 px-3.5 py-2 text-sm font-semibold text-white transition-colors hover:bg-slate-800"
                >
                  Live Link
                  <span
                    aria-hidden
                    className="transition-transform group-hover:translate-x-0.5"
                  >
                    →
                  </span>
                </Link>
              </div>

              {/* subtle bottom gradient on hover */}
              <div className="pointer-events-none absolute inset-x-0 bottom-0 h-16 rounded-b-2xl bg-gradient-to-t from-slate-900/5 opacity-0 transition-opacity group-hover:opacity-100" />
            </motion.article>
          ))}
        </motion.section>

        {/* Footer CTA */}
        <motion.footer
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.25, duration: 0.4 }}
          className="mx-auto mt-12 max-w-3xl text-center text-slate-600"
        >
          <p>
            Interested in collaborating or have questions?{" "}
            <Link
              href="mailto:hello@example.com"
              className="font-semibold text-slate-900 underline-offset-4 hover:underline"
            >
              Get in touch
            </Link>
          </p>
        </motion.footer>
      </div>
    </div>
  );
}

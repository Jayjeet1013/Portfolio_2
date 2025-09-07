"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Container } from "@/components/Container";
import { Heading } from "@/components/Heading";
import { Paragraph } from "@/components/Paragraph";

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
    title: "SuperPortal",
    href: "https://superportal.ai/",
    description:
      "Streamline DeFi Operations, leverage Swarms for real-time DeFi operations across multiple blockchains",
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
    <Container>
      <span className="text-4xl" data-reveal="y">
        🧑‍💻
      </span>
      <Heading className="font-black">Freelancer</Heading>
      <Paragraph className="mt-3 max-w-2xl">
        I build fast, clean, and scalable web apps for startups and founders.
        Here are a few recent projects.
      </Paragraph>

      <motion.section
        variants={container}
        initial="hidden"
        animate="show"
        data-stagger="children"
        className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
      >
        {projects.map((p) => (
          <motion.article
            key={p.title}
            variants={item}
            data-reveal="y"
            whileHover={{ y: -4, scale: 1.005 }}
            whileTap={{ scale: 0.99 }}
            className="group relative flex h-full flex-col rounded-xl border border-neutral-200 bg-white p-5 shadow-sm transition-shadow hover:shadow-md"
          >
            <h2 className="text-base font-semibold tracking-tight text-neutral-900">
              {p.title}
            </h2>
            <p className="mt-2 line-clamp-4 text-sm leading-relaxed text-neutral-600">
              {p.description}
            </p>
            <div className="mt-4">
              <Link
                href={p.href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-lg bg-neutral-900 px-3 py-1.5 text-sm font-semibold text-white transition-colors hover:bg-neutral-800"
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
          </motion.article>
        ))}
      </motion.section>
    </Container>
  );
}

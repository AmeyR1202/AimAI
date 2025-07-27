"use client";
import React from "react";
import { motion } from "framer-motion";
import { Palette, Code, PieChart } from "lucide-react";

const roles = [
  {
    title: "Product Design",
    description:
      "At AimAI, our product designers craft intuitive, visually compelling experiences that seamlessly merge aesthetics with functionality, elevating user engagement across all platforms.",
    icon: <Palette className="w-16 h-16 text-yellow-400" />,
  },
  {
    title: "Product Development",
    description:
      "Engineers at AimAI build scalable systems and intelligent solutions that power the core of our AI-driven products — turning vision into reality through code.",
    icon: <Code className="w-16 h-16 text-yellow-400" />,
  },
  {
    title: "Marketing",
    description:
      "AimAI's marketing team transforms product value into powerful narratives, driving user acquisition and brand loyalty through data-backed strategy and bold storytelling.",
    icon: <PieChart className="w-16 h-16 text-yellow-400" />,
  },
];

// Variants
const containerVariant = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const cardVariant = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      ease: "easeOut",
    },
  },
};

const headingVariant = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      ease: "easeOut",
    },
  },
};

const CareerCardsDark = () => {
  return (
    <div className="py-16 px-4">
      {/* Heading */}
      <motion.div
        className="pb-16 flex justify-center"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        variants={headingVariant}
      >
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white text-center leading-snug max-w-4xl">
          Just a few of the ways you <br />
          can{" "}
          <span className="bg-gradient-to-r from-[#FF6F61] to-[#6F61FF] bg-clip-text text-transparent">
            make a difference
          </span>{" "}
          at AimAI
        </h1>
      </motion.div>

      {/* Cards */}
      <motion.div
        className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8"
        variants={containerVariant}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        {roles.map((role, idx) => (
          <motion.div
            key={idx}
            className="bg-zinc-900 rounded-2xl shadow-lg p-8 text-center flex flex-col items-center transition hover:shadow-xl"
            variants={cardVariant}
          >
            <div>{role.icon}</div>
            <h3 className="text-xl font-bold mt-6 text-white">{role.title}</h3>
            <p className="text-gray-400 mt-4 text-sm leading-relaxed">
              {role.description}
            </p>
            <button className="mt-6 px-6 py-2 rounded-full bg-yellow-400 text-sm font-bold text-black hover:bg-yellow-500 transition cursor-pointer">
              VIEW OPENINGS
            </button>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default CareerCardsDark;

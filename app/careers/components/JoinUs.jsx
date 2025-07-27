"use client";
import React from "react";
import { motion } from "framer-motion";

const fadeInTogether = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      ease: "easeOut",
    },
  },
};

const fadeInGrid = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { duration: 1.5, ease: "easeOut" },
  },
};

const HeroDarkMode = () => {
  return (
    <section className="relative w-full min-h-screen flex items-center justify-center px-4 text-center bg-black overflow-hidden">
      {/* Animated grid background */}
      <motion.div
        aria-hidden
        className="absolute inset-0 z-0 pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(255, 255, 255, 0.15) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255, 255, 255, 0.15) 1px, transparent 1px)
          `,
          backgroundSize: "50px 50px",
          WebkitMaskImage:
            "radial-gradient(circle, rgba(255,255,255,1) 0%, rgba(255,255,255,0) 80%)",
          maskImage:
            "radial-gradient(circle, rgba(255,255,255,1) 0%, rgba(255,255,255,0) 80%)",
          WebkitMaskRepeat: "no-repeat",
          maskRepeat: "no-repeat",
          WebkitMaskPosition: "center",
          maskPosition: "center",
        }}
        variants={fadeInGrid}
        initial="hidden"
        animate="show"
      />

      {/* Foreground content */}
      <motion.div
        className="relative z-10"
        variants={fadeInTogether}
        initial="hidden"
        animate="show"
      >
        <motion.p
          className="uppercase text-sm font-medium text-gray-400 tracking-widest mb-2"
          variants={fadeInTogether}
        >
          Careers at AimAI
        </motion.p>

        <motion.h1
          className="text-4xl sm:text-5xl md:text-6xl font-bold text-white"
          variants={fadeInTogether}
        >
          Be a part of <br />
          something great
        </motion.h1>

        <motion.button
          className="mt-6 bg-blue-600 text-white font-semibold px-6 py-3 rounded-full shadow-md hover:bg-blue-700 transition cursor-pointer"
          variants={fadeInTogether}
        >
          See open roles →
        </motion.button>
      </motion.div>
    </section>
  );
};

export default HeroDarkMode;

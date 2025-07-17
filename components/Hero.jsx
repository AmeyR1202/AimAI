"use client";

import Link from "next/link";
import React from "react";
import { Button } from "./ui/button";
import { motion } from "framer-motion";

// Define parent and child animation variants
const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1, // delay between child animations
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 1 } },
};

const HeroSection = () => {
  return (
    <section className="w-full pt-36 md:pt-48 pb-10">
      <motion.div
        className="space-y-6 text-center"
        variants={container}
        initial="hidden"
        animate="show"
      >
        <motion.div className="space-y-6 mx-auto" variants={item}>
          <motion.h1
            variants={item}
            className="text-5xl font-bold md:text-6xl lg:text-7xl xl:text-8xl gradient-title text-shadow-2xs"
          >
            Your AI Career Coach for
            <br />
            Professional Success
          </motion.h1>

          <motion.p
            variants={item}
            className="mx-auto max-w-[600px] text-muted-foreground md:text-xl"
          >
            Get ahead with customized career support, cutting-edge AI tools, and
            proven strategies to land your dream role.
          </motion.p>
        </motion.div>

        <motion.div className="flex justify-center space-x-4" variants={item}>
          <motion.div variants={item}>
            <Link href="/dashboard">
              <Button size="lg" className="px-8">
                Get Started
              </Button>
            </Link>
          </motion.div>
          <motion.div variants={item}>
            <Link href="https://www.youtube.com/">
              <Button size="lg" className="px-8" variant="outline">
                Watch Demo
              </Button>
            </Link>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;

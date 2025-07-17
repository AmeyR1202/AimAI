"use client";

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

const Stats = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const stats = [
    { value: "50+", label: "Industries Covered" },
    { value: "1000+", label: "Interview Questions" },
    { value: "95%", label: "Success Rate" },
    { value: "24/7", label: "AI Support" },
  ];

  const variants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.2, duration: 0.6 },
    }),
  };

  return (
    <section className="w-full py-12 md:py-24 bg-muted/50">
      <div className="container mx-auto px-4 md:px-6" ref={ref}>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              custom={index}
              variants={variants}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              className="flex flex-col items-center justify-center space-y-2"
            >
              <h3 className="text-4xl font-bold">{stat.value}</h3>
              <p className="text-muted-foreground">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;

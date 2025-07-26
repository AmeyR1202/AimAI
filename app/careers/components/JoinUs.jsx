"use client";
import React from "react";
import { motion } from "framer-motion";

const JoinUs = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 pt-32">
      <div>
        <h1 className="text-4xl font-bold sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl gradient-title">
          Join Us
        </h1>

        <div className="mt-6 space-y-4 max-w-3xl">
          <p className="text-2xl sm:text-3xl font-bold text-gray-100 leading-relaxed relative">
            We’re building something big — and{" "}
            <span className="relative inline-block font-extrabold">
              <motion.span
                initial={{ width: 0 }}
                animate={{ width: "100%" }}
                transition={{ duration: 1, ease: "easeInOut" }}
                className="absolute inset-0 bg-yellow-400 rounded z-0 origin-left"
              />
              <span className="relative z-10 text-black px-2">
                WE NEED YOU!
              </span>
            </span>
          </p>
        </div>
      </div>

      {/* Highlighted "future" Section */}
      <section className="flex flex-col lg:flex-row justify-center items-start px-6 md:px-16 gap-10 text-white">
        <div className="">
          <h1 className="text-3xl mt-10 sm:text-4xl md:text-5xl font-extrabold leading-tight">
            Design your life, your career, and our{" "}
            <span className="relative inline-block">
              <motion.span
                initial={{ width: 0 }}
                animate={{ width: "100%" }}
                transition={{ duration: 1, ease: "easeInOut" }}
                className="absolute inset-0 bg-yellow-400 rounded z-0 origin-left"
              />
              <span className="relative z-10 text-black px-2">future</span>
            </span>
            ...
          </h1>
        </div>
      </section>
    </div>
  );
};

export default JoinUs;

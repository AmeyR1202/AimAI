"use client";
import React from "react";
import { motion } from "framer-motion";

const animationProps = {
  initial: { opacity: 0, y: 50 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 1.2, ease: "easeInOut" },
};

const OurWhy = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 pt-32">
      <motion.div
        className="grid grid-cols-1 md:grid-cols-12 gap-8"
        {...animationProps}
      >
        {/* About Us section with yellow line */}
        <div className="col-span-12 md:col-span-5">
          <motion.div className="flex items-start" {...animationProps}>
            <motion.div
              className="w-1 bg-yellow-500 mr-4 h-12 sm:h-14 md:h-18 lg:h-20 xl:h-28"
              {...animationProps}
            />
            <div>
              <motion.h1
                className="text-4xl font-bold sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl gradient-title"
                {...animationProps}
              >
                About Us
              </motion.h1>
              <motion.p
                className="text-lg text-gray-400 mt-6 max-w-2xl"
                {...animationProps}
              >
                We revolutionize career development with AI-powered tools that
                give job seekers the competitive edge. Our platform combines
                cutting-edge technology with proven coaching methodologies to
                maximize your hiring potential.
              </motion.p>
            </div>
          </motion.div>
        </div>

        {/* What We Do section */}
        <div className="col-span-12 md:col-span-7 md:pl-8">
          <motion.h2
            className="text-amber-500 pt-3 text-2xl font-bold sm:text-3xl md:text-4xl lg:text-5xl mb-6"
            {...animationProps}
          >
            What We Do
          </motion.h2>

          {/* Interview Prep */}
          <motion.div
            className="p-6 rounded-lg border-l-4 border-amber-500 mt-5"
            {...animationProps}
          >
            <h3 className="text-xl font-semibold text-white mb-3">
              Interview Prep
            </h3>
            <p className="text-gray-400">
              Practice with AI simulations that mimic real interviews across
              industries. Get instant feedback on your answers, body language,
              and communication skills to build confidence and improve
              performance.
            </p>
          </motion.div>

          {/* Online Quiz */}
          <motion.div
            className="p-6 rounded-lg border-l-4 border-amber-500 mt-5"
            {...animationProps}
          >
            <h3 className="text-xl font-semibold text-white mb-3">
              Online Quiz
            </h3>
            <p className="text-gray-400">
              Test your knowledge with adaptive quizzes tailored to your target
              roles. Our system identifies skill gaps and provides personalized
              learning resources to strengthen your weak areas.
            </p>
          </motion.div>

          {/* Resume Builder */}
          <motion.div
            className="p-6 rounded-lg border-l-4 border-amber-500 mt-5"
            {...animationProps}
          >
            <h3 className="text-xl font-semibold text-white mb-3">
              Resume Builder
            </h3>
            <p className="text-gray-400">
              Create ATS-friendly resumes that highlight your strengths. Our AI
              analyzes job descriptions and optimizes your content to increase
              interview callback rates by up to 3x.
            </p>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default OurWhy;

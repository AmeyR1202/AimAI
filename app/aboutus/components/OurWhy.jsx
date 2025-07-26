"use client";
import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

const OurWhy = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  // Stats data
  const stats = [
    { value: "50+", label: "Industries Covered" },
    { value: "1000+", label: "Interview Questions" },
    { value: "95%", label: "Success Rate" },
    { value: "24/7", label: "AI Support" },
  ];

  // Animation variants
  const variants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.2, duration: 0.6 },
    }),
  };

  // Main animation props
  const animationProps = {
    initial: { opacity: 0, y: 50 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.8, ease: "easeInOut" },
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 pt-32">
      {/* Main content section */}
      <motion.div
        className="grid grid-cols-1 md:grid-cols-12 gap-8"
        {...animationProps}
      >
        {/* About Us column */}
        <div className="col-span-12 md:col-span-6">
          <div className="flex items-start">
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
          </div>
        </div>

        {/* What We Do column */}
        <div className="col-span-12 md:col-span-6 md:pl-8">
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
            className="p-6 rounded-lg border-l-4 border-amber-500 mt-5 "
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
            className="p-6 rounded-lg border-l-4 border-amber-500 mt-5 "
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

      {/* Stats section */}
      <section className="w-full py-12 md:py-24 ">
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
                <h3 className="text-4xl font-bold text-amber-500">
                  {stat.value}
                </h3>
                <p className="text-muted-foreground">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default OurWhy;

import React from "react";

const Blog = () => {
  return (
    <div className="relative min-h-screen bg-black flex flex-col items-center justify-center px-6 py-20 text-white text-center overflow-hidden">
      {/* Faint grid that fades softly from center */}
      <div
        aria-hidden
        className="absolute inset-0 z-0 pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(255, 255, 255, 0.15) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255, 255, 255, 0.15) 1px, transparent 1px)
          `,
          backgroundSize: "50px 50px",
          WebkitMaskImage: `
            radial-gradient(
              circle at center,
              rgba(255,255,255,1) 0%,
              rgba(255,255,255,0.6) 20%,
              rgba(255,255,255,0.2) 40%,
              rgba(255,255,255,0) 65%
            )
          `,
          maskImage: `
            radial-gradient(
              circle at center,
              rgba(255,255,255,1) 0%,
              rgba(255,255,255,0.7) 20%,
              rgba(255,255,255,0.4) 40%,
              rgba(255,255,255,0.2) 65%
            )
          `,
          WebkitMaskRepeat: "no-repeat",
          maskRepeat: "no-repeat",
          WebkitMaskPosition: "center",
          maskPosition: "center",
          WebkitMaskSize: "100% 100%",
          maskSize: "100% 100%",
        }}
      />

      {/* Foreground content */}
      <h1 className="text-4xl sm:text-5xl font-bold mt-10 relative z-10">
        Chill. This page never got coded.
      </h1>
      <p className="mt-4 max-w-md text-lg text-gray-300 relative z-10">
        I'm a solo dev — I prioritized the pages people <em>actually</em> visit.
        <br />
        This one's just here to catch lost souls like you.
      </p>
      <p className="mt-6 text-sm text-gray-500 relative z-10">
        <a href="/" className="text-amber-400 underline hover:text-amber-600">
          Go home
        </a>{" "}
        before I start charging rent.
      </p>
    </div>
  );
};

export default Blog;

import React from "react";
import Image from "next/image";
import Footer from "@/components/Footer";

const PrivacyPage = () => {
  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center px-6 py-20 text-white text-center overflow-hidden bg-black">
      {/* Fading grid background (same as HeroDarkMode) */}
      <div
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
      />

      {/* Main content */}

      <h1 className="text-4xl sm:text-5xl font-bold mt-10 relative z-10">
        LOL. You really thought this page exists?
      </h1>
      <p className="mt-4 max-w-md text-lg text-gray-300 relative z-10">
        If it ain't mission-critical, it ain't coded. Simple.
      </p>
      <p className="mt-6 text-sm text-gray-500 relative z-10">
        <a href="/" className="text-amber-400 underline hover:text-amber-600">
          Go back home
        </a>{" "}
        or keep digging — maybe you'll find Atlantis too.
      </p>

      <div className="relative z-10 w-full"></div>
    </div>
  );
};

export default PrivacyPage;

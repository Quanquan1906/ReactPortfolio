import React, { useEffect, useState } from "react";
import { motion } from "motion/react";
import { getImageUrl } from "../../utils";

const TypewriterText = ({ text = "", speed = 40 }) => {
  const [displayedText, setDisplayedText] = useState("");
  useEffect(() => {
    if (!text) return;
    let index = 0;
    const interval = setInterval(() => {
      setDisplayedText((prev) => prev + text.charAt(index));
      index++;
      if (index >= text.length) clearInterval(interval);
    }, speed);
    return () => clearInterval(interval);
  }, [text, speed]);
  return (
    <p className="text-xl leading-relaxed mb-6 whitespace-pre-line">
      {displayedText}
    </p>
  );
};

export const Hero = () => {
  return (
    <section className="bg-gradient-to-r from-[#0A162E] to-[#1B3A6D] text-white py-20 px-10">
      <div className="max-w-6xl mx-auto flex flex-col-reverse md:flex-row items-center justify-between">
        {/* Left content */}
        <div className="max-w-xl space-y-6">
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-6xl font-bold mb-6"
          >
            Hi, I'm QUÂN
          </motion.h1>
          <TypewriterText
            text={`I'm a web developer using React and Tailwind CSS.\nReach out if you'd like to learn more!`}
            speed={50}
          />
          <a
            href="#contact"
            className="inline-block bg-blue-500 hover:bg-blue-600 text-white font-semibold px-6 py-3 rounded-md transition"
          >
            Contact Me
          </a>
        </div>
        {/* Right content */}
        <div className="flex-shrink-0">
          <img
            src={getImageUrl("hero/heroimg.png")}
            alt="Hero Image"
            className="shadow-lg rounded-full w-110 h-auto"
          />
        </div>
      </div>
    </section>
  );
};

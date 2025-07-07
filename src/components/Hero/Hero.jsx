import React, { useEffect, useState } from 'react';
import { motion } from 'motion/react';
import { getImageUrl } from '../../utils';
import { TypewriterEffectSmooth } from '../../../ui/typewriter-effect';

const words = [
  { text: "I'm" },
  { text: 'a' },
  { text: 'web' },
  { text: 'developer' },
  { text: 'using' },
  { text: 'React' },
  { text: 'and' },
  { text: 'Tailwind', className: 'text-blue-400' },
  { text: 'CSS.', className: 'text-blue-400 ' },
];

export const Hero = () => {
  return (
    <section className="w-full min-h-screen bg-gradient-to-r from-[#0A162E] to-[#1B3A6D] text-white py-24 px-10">
      <div className="max-w-6xl mx-auto flex flex-col-reverse md:flex-row items-center justify-between">
        {/* Left content */}
        <div className="max-w-xl space-y-6">
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-5xl font-bold mb-6 mt-6 tracking-wide"
          >
            Hi, I'm QUÂN
          </motion.h1>

          <div className="mb-6">
            <TypewriterEffectSmooth
              words={words}
              className=" md:text-xl text-xl font-normal tracking-normal text-white "
            />
          </div>
          <div className="mb-3 flex flex-col sm:flex-row justify-start gap-4">
          <a
            href="#contact"
            className="inline-block text-center bg-blue-500 hover:bg-blue-600 text-white font-semibold px-6 py-3 rounded-md transition"
          >
            Contact Me
          </a>
           <a
            href="#downloadCV"
            className="inline-block text-center bg-neutral-50 hover:bg-gray-300 text-black font-semibold px-6 py-3 rounded-md transition"
          >
            Download My CV
          </a>
          </div>
        </div>
        {/* Right content */}
        <div className="flex-shrink-0">
          <img src={getImageUrl('hero/heroimg.png')} alt="Hero Image" className="shadow-lg rounded-full w-110 " />
        </div>
      </div>
    </section>
  );
};

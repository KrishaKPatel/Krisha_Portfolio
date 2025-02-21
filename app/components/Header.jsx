import React from 'react';
import Image from 'next/image';
import { assets } from '@/assets/assets';
import { motion } from 'framer-motion'; // Import framer-motion

const Header = () => {
  return (
    <div className="w-full max-w-screen-lg text-center mx-auto h-screen flex flex-col items-center justify-center gap-4 pt-20 relative z-0">
      {/* Animated profile image */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false }}
        transition={{ duration: 1}}
      >
        <Image src={assets.profile_img} alt="Profile" className="rounded-full w-32" />
      </motion.div>

      {/* Animated text and heading */}
      <motion.h3
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false }}
        transition={{ duration: 1, delay: 0.3 }}
        className="flex items-end gap-2 text-xl md:text-xl mb-3 font-Ovo"
      >
        Hi! I'm Krisha Patel
      </motion.h3>

      <motion.h1
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false }}
        transition={{ duration: 1, delay: 0.5 }}
        className="text-xl sm:text-2xl lg:text-[54px] font-Ovo"
      >
        Full-Stack Developer
      </motion.h1>

      {/* Animated paragraph */}
      <motion.p
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false }}
        transition={{ duration: 1, delay: 0.7 }}
        className="max-w-2xl mx-auto font-Ovo"
      >
        I am a Full-stack Developer from Connecticut, USA with 3 years of experience.
      </motion.p>

      {/* Animated buttons */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false }}
        transition={{ duration: 1, delay: 1 }}
        className="flex flex-col sm:flex-row items-center gap-4 mt-4"
      >
        <a
          href="#contact"
          className="px-10 py-3 border border-white rounded-full bg-navColor text-navBG flex items-center gap-2 font-Ovo"
        >
          Contact me <Image src={assets.right_arrow_white} alt="right-arrow" className="w-4" />
        </a>

        <a
          href="/sample1.pdf"
          download="sample1.pdf"
          className="px-10 py-3 border rounded-full flex items-center gap-2 border-gray-500 text-navColor font-Ovo"
        >
          My resume <Image src={assets.download_icon} alt="download" className="w-4" />
        </a>
      </motion.div>
    </div>
  );
};

export default Header;

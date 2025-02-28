import { assets, infoList, toolsData } from '@/assets/assets';
import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion'; // Import framer-motion

const About = () => {
  return (
    <motion.div
      id="about"
      className="w-full px-[8%] py-10 scroll-mt-20 relative z-0"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false }}
      transition={{ duration: 1, ease: 'easeInOut' }}
    >
      <motion.h4
        className="text-center mb-2 text-lg font-Ovo"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false }}
        transition={{ duration: 1, delay: 0.2 }}
      >
        Introduction
      </motion.h4>
      <motion.h2
        className="text-center text-5xl font-Ovo"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false }}
        transition={{ duration: 1, delay: 0.4 }}
      >
        About Me
      </motion.h2>
      <div className="flex w-full flex-col lg:flex-row items-start gap-10 my-20">
  {/* Image Section (Left Side) */}
  <motion.div
    className="lg:w-[35%] w-64 sm:w-80 max-w-none rounded-3xl overflow-hidden priority h-auto max-h-[100vh] mx-auto lg:mx-0"
    initial={{ opacity: 0, scale: 0.8 }}
    whileInView={{ opacity: 1, scale: 1 }}
    viewport={{ once: false }}
    transition={{ duration: 1, ease: 'easeInOut' }}
  >
    <Image src={assets.user_image} alt="user" className="w-full h-full object-cover rounded-3xl" />
  </motion.div>

  {/* About & Skills Section (Right Side) */}
  <motion.div
    className="flex flex-col lg:w-[60%] flex-grow"
    initial={{ opacity: 0, x: -50 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: false }}
    transition={{ duration: 1, ease: 'easeInOut' }}
  >
    <p className="mb-1 max-w-2xl font-Ovo text-justify mx-auto lg:mx-0">
    Full Stack Developer with expertise in React.js, Vue.js, and AngularJS, building responsive and intuitive web applications. Skilled in UI optimization, API integration, and state management (Redux, Context API). Experienced in Material-UI, Tailwind CSS, and React Bootstrap for clean, modern designs. Strong collaborator, working with designers and backend teams in Agile environments. Passionate about writing efficient, maintainable code and enhancing user experiences.
    </p>

    <h3 className="my-4 text-navColor font-Ovo font-bold">Tools</h3>
    <ul className="flex flex-wrap gap-3 sm:gap-4">
      {toolsData.map((tool, index) => (
        <motion.li
          className="flex items-center justify-center w-12 sm:w-14 aspect-square border border-gray-400 rounded-lg cursor-pointer hover:-translate-y-2 duration-500 hover:shadow-black font-Ovo hover:bg-navBG overflow-hidden"
          key={index}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 1, delay: index * 0.1 }}
        >
          <Image src={tool} alt="tools" className="w-5 sm:w-7" />
        </motion.li>
      ))}
    </ul>
  </motion.div>
</div>


    </motion.div>
  );
};

export default About;

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const educationData = [
  {
    degree: 'Master of Science in Computer Science',
    institution: 'University Of New Haven',
    duration: 'Jan 2023 – Dec 2024',
  },
  {
    degree: 'Bachelor of Engineering in Computer Engineering',
    institution: 'Gujarat Technological University',
    duration: 'Aug 2017 – May 2021',
  },
];

const certificateData = [
  {
    title: 'PCEP-Certified Entry-level Python Programmer',
    organization: 'Python Institute',
  },
];

const Education = () => {
  return (
    <motion.div
      id="education"
      className="w-full px-[8%] py-10 scroll-mt-20 relative z-0"
      initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: false }}
            transition={{ duration: 0.8 }}
    >
      <motion.h2
        className="text-center text-5xl font-Ovo"
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false }}
        transition={{ duration: 0.8 }}
      >
        Education & Certificates
      </motion.h2>

      <motion.p
        className="text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo"
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        My academic background and certifications that support my career in computer science and development.
      </motion.p>

      {/* Education Section */}
      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 mt-10"
        initial="hidden"
                whileInView="visible"
                viewport={{ once: false }}
                variants={{
                    hidden: { opacity: 0, scale: 0.95 },
                    visible: { opacity: 1, scale: 1 },
                }}
                transition={{ duration: 0.8, delayChildren: 0.3, staggerChildren: 0.2 }}
      >
        {educationData.map((edu, index) => (
          <motion.div
            key={index}
            className="border border-navColor rounded-lg p-8 font-Ovo bg-navColor shadow-md"
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.8, delayChildren: 0.3, staggerChildren: 0.2 }}
          >
            <h2 className="text-lg my-4 text-navBG font-Ovo">{edu.degree}</h2>
            <p className="text-sm text-navBG leading-5 font-Ovo">{edu.institution}</p>
            <p className="text-sm text-navBG leading-5 font-Ovo mt-2">{edu.duration}</p>
          </motion.div>
        ))}
      </motion.div>

      {/* Certificates Section */}
      <motion.div
        className="mt-10"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false }}
        variants={{
          hidden: { opacity: 0, y: 20 },
          visible: { opacity: 1, y: 0 },
        }}
        transition={{ duration: 0.8, delayChildren: 0.3, staggerChildren: 0.2 }}
      >
        <h3 className="text-center text-xl font-Ovo mt-10">Certificates</h3>
        {certificateData.map((certificate, index) => (
          <motion.div
            key={index}
            className="border border-navColor rounded-lg p-8 mt-4 font-Ovo bg-navBG shadow-md"
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.8, delayChildren: 0.3, staggerChildren: 0.2 }}
          >
            <h4 className="text-lg my-4 text-navColor font-Ovo">{certificate.title}</h4>
            <p className="text-sm text-navColor leading-5 font-Ovo">{certificate.organization}</p>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default Education;

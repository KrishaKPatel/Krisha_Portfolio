import { assets, workData } from '@/assets/assets'
import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'

const Work = () => {
  return (
    <motion.div
      id='work'
      className='w-full px-[8%] py-10 relative !z-0'
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: false }} // Animation triggers every time the section comes into view
      transition={{ duration: 0.8 }}
    >
      <motion.h2
        className="text-center text-5xl font-Ovo"
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false }}
        transition={{ duration: 0.8 }}
      >
        Projects
      </motion.h2>

      <motion.p
        className="text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo"
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        I am a Full-stack Developer from Connecticut, USA with 3 years of experience.
      </motion.p>

      <motion.div
        className='grid grid-cols-auto my-10 gap-5 rounded-xl'
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: false }}
        transition={{ duration: 0.6, delay: 0.3 }}
      >
        {workData.map((project, index) => (
          <motion.div
            key={index}
            className='aspect-square border-navColor bg-no-repeat bg-cover bg-center relative cursor-pointer group'
            style={{ backgroundImage: `url(${project.bgImage})` }}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: false }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            whileHover={{ scale: 1.05 }}
          >
                        <Image
                            src={project.bgImage}
                            alt={project.title}
                            layout="fill"
                            objectFit="cover"
                            quality={100}
                            className='rounded-xl'
                        />
                        <div className="absolute inset-0 border-2 border-navColor rounded-xl"></div>
            <motion.div
              className='bg-navBG w-10/12 rounded-md absolute bottom-5 left-2 -translate-x-1/2 py-3 px-5 flex items-center justify-between duration-500 group-hover:translate-y-[-10px] border-1 border-navColor'
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{ duration: 0.4, delay: 0.2 }}
            >
              <div>
                <motion.h2
                  className='font-bold font-Ovo text-navColor'
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: false }}
                  transition={{ duration: 0.3 }}
                >
                  {project.title}
                </motion.h2>
              </div>
              <motion.div
                className='border rounded-full border-black w-5 aspect-square flex items-center justify-center shadow-[2px_2px_0_#000] group-hover:bg-navBG transition border-1 border-navColor'
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: false }}
                transition={{ duration: 0.4 }}
                whileHover={{ scale: 0.8 }}
              >
                 <motion.a  // Changed to <a> tag
                        href={project.link} // Link from workData
                        target="_blank" // Open in new tab
                        rel="noopener noreferrer" // Security best practice
                        className='border rounded-full border-black w-5 aspect-square flex items-center justify-center shadow-[2px_2px_0_#000] group-hover:bg-navBG transition border-1 border-navColor'
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: false }}
                        transition={{ duration: 0.4 }}
                        whileHover={{ scale: 0.8 }}
                    >
                        <Image src={assets.send_icon} alt='send icon' className='w-5' />
                    </motion.a>
              </motion.div>
            </motion.div>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  )
}

export default Work

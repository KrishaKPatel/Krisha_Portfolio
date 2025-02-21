import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { experienceData } from '@/assets/assets';

const Experience = () => {
    const [hoveredExperience, setHoveredExperience] = useState(null);
    const [isInSection, setIsInSection] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const section = document.getElementById('experience'); // Match the ID
            if (section) {
                const rect = section.getBoundingClientRect();
                const inView = rect.top < window.innerHeight && rect.bottom > 0;

                setIsInSection(inView);

                if (!inView) {
                    setHoveredExperience(null);
                }
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <motion.div
            id="experience" // Match the ID
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
                Experience
            </motion.h2>

            <motion.p
                className="text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo"
                initial={{ opacity: 0, y: -50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false }}
                transition={{ duration: 0.8, delay: 0.2 }}
            >
                I am a Full-stack Developer from Connecticut, USA with 3 years of experience. {/* Keep this or remove as needed */}
            </motion.p>

            <motion.div
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10" // Responsive grid
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false }}
                variants={{
                    hidden: { opacity: 0, scale: 0.95 },
                    visible: { opacity: 1, scale: 1 },
                }}
                transition={{ duration: 0.8, delayChildren: 0.3, staggerChildren: 0.2 }}
            >
                {experienceData.map((experience, index) => ( // Use experienceData here
                    <ExperienceItem
                        key={index}
                        experience={experience}
                        isHovered={hoveredExperience === experience && isInSection}
                        setHoveredExperience={setHoveredExperience}
                    />
                ))}
            </motion.div>
        </motion.div>
    );
};

const ExperienceItem = ({ experience, isHovered, setHoveredExperience }) => {
    return (
        <motion.div
            className="border border-navColor rounded-lg p-8 hover:shadow-lg font-Ovo hover:bg-navBG cursor-pointer duration-300 relative bg-navBG"
            variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
            }}
            onMouseEnter={() => setHoveredExperience(experience)}
            onMouseLeave={() => setHoveredExperience(null)}
        >
            <h2 className="text-lg my-4 text-navColor font-Ovo">{experience.title}</h2>
            <p className="text-sm text-navColor leading-5 font-Ovo line-clamp-2">
                {experience.company} {/* Display company name here */}
            </p>

            <AnimatePresence>
                {isHovered && (
                    <>
                        <motion.div
                            className="fixed top-0 left-0 w-full h-full bg-black/40 backdrop-blur-xl !backdrop-blur-3xl !z-50 !important"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.4, ease: "easeInOut" }}
                            onMouseLeave={() => setHoveredExperience(null)}
                        />

                        <motion.div
                            className="fixed top-1/2 left-1/2 !w-[90vw] !md:w-[80vw] !h-[60vh] !md:h-[70vh] bg-navBG shadow-lg rounded-lg p-5 text-center overflow-hidden z-50 backdrop-blur-xxl transform -translate-x-1/2 -translate-y-1/2 !top-1/2 !left-1/2 !transform -translate-x-1/2 -translate-y-1/2" // Added responsive widths and fixed height
                            initial={{ opacity: 0, scale: 0.9, y: -50 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.8, y: -20 }}
                            onMouseLeave={() => setHoveredExperience(null)}
                            transition={{
                                opacity: { duration: 0.4 },
                                scale: { type: "spring", damping: 30 },
                                y: { type: "spring", stiffness: 120 },
                            }}
                        >
                            <h2 className="text-xxl font-Ovo text-navColor font-bold">{experience.title}</h2>
                            <h3 className="text-xl text-navBG mt-2 shadow-sm bg-navColor rounded-lg "> {/* Removed overflow-auto here */}
                                {experience.company}
                            </h3>
                            <p className="text-md text-gray-700 mt-2"> {/* Removed overflow-auto here */}
                                {experience.location}
                            </p>
                            <p className="text-md text-gray-700 mt-2"> {/* Removed overflow-auto here */}
                                {experience.dates}
                            </p>
                            <ul className="text-md text-gray-700 mt-2 overflow-y-auto max-h-[calc(100%-180px)] list-disc pl-5 text-left"> {/* Added list-disc and padding */}
                                {experience.description.map((point, index) => (
                                    <li key={index}>{point}</li>
                                ))}
                            </ul>

                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </motion.div>
    );
};

export default Experience;
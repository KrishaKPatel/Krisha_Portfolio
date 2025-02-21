import React, { useState } from 'react'
import { motion } from 'framer-motion'

const Contact = () => {
    const [result, setResult] = useState("");

    const onSubmit = async (event) => {
        event.preventDefault();
        setResult("Sending....");
        const formData = new FormData(event.target);

        formData.append("access_key", "88461e0b-c31f-4edf-aaee-321e5e2e980e");

        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            body: formData
        });

        const data = await response.json();

        if (data.success) {
            setResult("Form Submitted Successfully");
            event.target.reset();
        } else {
            console.log("Error", data);
            setResult(data.message);
        }
    };

    return (
        <motion.div
            key="contact-section" // Ensures the animation is applied every time, even on scroll or navbar click
            id='contact'
            className='w-full px-[8%] py-10 scroll-mt-20 bg-[url("/footer-bg-color.png")] bg-no-repeat bg-center bg-[length:90%_auto] relative z-0'
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
        >
            <motion.h2
                className='text-center text-5xl font-Ovo'
                initial={{ opacity: 0, y: -50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false }} // Triggers every time it enters the viewport
                transition={{ duration: 0.8 }}
            >
                Get in Touch
            </motion.h2>
            <motion.p
                className='text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo'
                initial={{ opacity: 0, y: -50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false }} // Triggers every time it enters the viewport
                transition={{ duration: 0.8, delay: 0.2 }}
            >
                I'd love to hear from you! If you have any questions, comments, or feedback, please use the form below.
            </motion.p>

            <motion.form
                onSubmit={onSubmit}
                className='max-w-2xl mx-auto'
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: false }} // Triggers every time it enters the viewport
                transition={{ duration: 1, delay: 0.3 }}
            >
                <motion.div
                    className='grid grid-cols-auto gap-6 mt-10 mb-8'
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: false }} // Triggers every time it enters the viewport
                >
                    <motion.input
                        type="text"
                        placeholder='Enter your name'
                        required
                        className='flex-l p-3 outline-none border-[0.5px] border-navColor rounded-md bg-navBG font-Ovo'
                        name='name'
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: false }} // Triggers every time it enters the viewport
                    />
                    <motion.input
                        type="email"
                        placeholder='Enter your email'
                        required
                        className='flex-l p-3 outline-none border-[0.5px] border-navColor rounded-md bg-navBG font-Ovo'
                        name='email'
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: false }} // Triggers every time it enters the viewport
                    />
                </motion.div>
                <motion.textarea
                    rows='6'
                    placeholder='Enter your message'
                    required
                    className='w-full p-4 outline-none border-[0.5px] border-navColor rounded-md bg-navBG font-Ovo mb-6'
                    name='message'
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: false }} // Triggers every time it enters the viewport
                ></motion.textarea>
                <motion.button
                    type='submit'
                    className='py-3 px-8 w-max flex items-center justify-between gap-2 bg-navColor text-navBG rounded-full mx-auto hover:bg-navBG hover:text-navColor duration-500 font-Ovo font-bold'
                    whileHover={{ scale: 1.1 }}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 1 }}
                >
                    Submit
                </motion.button>

                <motion.p
                    className='mt-4'
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.6 }}
                    viewport={{ once: false }} // Triggers every time it enters the viewport
                >
                    {result}
                </motion.p>
            </motion.form>
        </motion.div>
    )
}

export default Contact

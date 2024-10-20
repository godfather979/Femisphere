import { motion } from 'framer-motion';
import React from 'react';

function Legal() {
    return (
        <>
            <div className="min-h-screen bg-gray-900 flex justify-center items-center flex-col p-4">
                {/* Header Section */}
                <motion.div
                    className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 via-yellow-400 to-yellow-500 mt-12 cursor-pointer"
                    initial={{ opacity: 0, y: -50 }}
                    animate={{ opacity: 1, y: 0 }}
                    whileHover={{ scale: 1.1 }} // Scale on hover
                    transition={{ duration: 0.6, type: "spring", stiffness: 120 }}
                >
                    FREE LEGAL AID FOR WOMEN
                </motion.div>

                {/* Image Section */}
                <motion.div
                    className="w-full md:w-3/5 h-96 rounded-lg shadow-lg py-10 mb-8 relative overflow-hidden mt-8"
                    style={{
                        backgroundImage: "url('/path-to-your-image.jpg')",
                        backgroundPosition: 'center',
                        backgroundSize: 'cover',
                        backgroundBlendMode: 'overlay',
                        backgroundColor: 'rgba(0,0,0,0.6)', // Dark overlay to blend with the grey theme
                    }}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1.5 }}
                >
                    {/* Decorative layer over image */}
                    <div className="absolute inset-0 bg-gray-700 opacity-50"></div>
                </motion.div>

                {/* Text Section */}
                <motion.div
                    className="w-full md:w-3/5 bg-gray-800 text-gray-200 p-6 rounded-lg shadow-lg text-lg leading-7"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 2 }}
                >
                    <motion.h2
                        className="text-3xl font-semibold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-purple-500"
                        initial={{ opacity: 0, y: 50 }} // Initial position for animation
                        animate={{ opacity: 1, y: 0 }} // Final position for animation
                        transition={{ duration: 1, delay: 0.2 }} // Adjust delay as needed
                    >
                        Crime Against Women
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, x: -100 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1.2 }}
                        className="mb-4"
                    >
                        The analysis on non-marital sexual violence in India, led by the Center for Gender Equity and Health, University of California, in collaboration with Mumbai-based International Institute for Population Sciences, concludes that non-marital sexual violence is a “pervasive concern” affecting more women and adolescents than reported cases suggest. Most assailants are known to the victims as partners, family members, or friends. Strangers perpetrating sexual violence is less common.
                    </motion.p>

                    <motion.h2
                        className="text-2xl font-semibold mt-6 mb-4 text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-purple-500"
                        initial={{ opacity: 0, y: 50 }} // Initial position for animation
                        animate={{ opacity: 1, y: 0 }} // Final position for animation
                        transition={{ duration: 1, delay: 0.4 }} // Adjust delay as needed
                    >
                        Sexual Harassment
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, x: -100 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1.4 }}
                        className="mb-4"
                    >
                        Sexual harassment is not about sex; it is about inequality at work, about erasing a woman’s worth, her mind, her competence, and reducing her to a body. The harms of sexual harassment and the scale of it have been made abundantly clear to everyone. The women being heard now have a certain visibility and influence. They are guaranteed to be heard by the law, media, and social media.
                    </motion.p>

                    <motion.h2
                        className="text-2xl font-semibold mt-6 mb-4 text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-purple-500"
                        initial={{ opacity: 0, y: 50 }} // Initial position for animation
                        animate={{ opacity: 1, y: 0 }} // Final position for animation
                        transition={{ duration: 1, delay: 0.6 }} // Adjust delay as needed
                    >
                        The Women’s Movement
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, x: -100 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1.6 }}
                    >
                        The women’s movement has been building strength for decades. While justice zigs and zags, Indian women have made progress. Because of cases like Bhanwari Devi and the Nirbhaya moment, laws have been put in place to protect women’s rights. More women are speaking up and pushing back against norms.
                    </motion.p>
                </motion.div>

                {/* Lawyer Suggestion Cards */}
                <div className="w-full md:w-3/5 grid grid-cols-1 md:grid-cols-3 gap-6 mt-12 mb-20">
                    {/* Card 1 */}
                    <motion.div
                        className="p-6 bg-gray-800 text-gray-200 rounded-lg shadow-lg flex flex-col justify-between"
                        initial={{ opacity: 0, y: 100 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <h3 className="text-xl font-semibold text-yellow-300 mb-2">Lawyer 1</h3>
                        <p>Specialist in women's rights and criminal law with 10+ years of experience.</p>
                        <button className="mt-4 p-2 bg-yellow-400 text-gray-900 rounded-lg">Contact</button>
                    </motion.div>

                    {/* Card 2 */}
                    <motion.div
                        className="p-6 bg-gray-800 text-gray-200 rounded-lg shadow-lg flex flex-col justify-between"
                        initial={{ opacity: 0, y: 100 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1.0 }}
                    >
                        <h3 className="text-xl font-semibold text-yellow-300 mb-2">Lawyer 2</h3>
                        <p>Expert in sexual harassment cases with a focus on workplace equality.</p>
                        <button className="mt-4 p-2 bg-yellow-400 text-gray-900 rounded-lg">Contact</button>
                    </motion.div>

                    {/* Card 3 */}
                    <motion.div
                        className="p-6 bg-gray-800 text-gray-200 rounded-lg shadow-lg flex flex-col justify-between"
                        initial={{ opacity: 0, y: 100 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1.2 }}
                    >
                        <h3 className="text-xl font-semibold text-yellow-300 mb-2">Lawyer 3</h3>
                        <p>Leading advocate in domestic violence cases and family law disputes.</p>
                        <button className="mt-4 p-2 bg-yellow-400 text-gray-900 rounded-lg">Contact</button>
                    </motion.div>
                </div>
            </div>
        </>
    );
}

export default Legal;

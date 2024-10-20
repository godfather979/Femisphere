import { motion } from 'framer-motion';
import React from 'react';

const Home = () => {
    return (
        <>
            {/* Main Container */}
            <div className="min-h-screen bg-gray-900 flex flex-col justify-center items-center p-8">
                
                {/* Video Section */}
                <motion.div
                    className="w-full md:w-3/5 h-80 rounded-lg mb-8 overflow-hidden" // Added overflow-hidden for rounded corners
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1.5 }}
                >
                    <video 
                        className="w-full h-full object-cover" 
                        autoPlay 
                        loop 
                        muted
                    >
                        <source src="https://www.example.com/your-video.mp4" type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                </motion.div>

                {/* Header Section with Hover Animation */}
                <motion.div
                    className="text-6xl font-bold text-white mb-12"
                    initial={{ opacity: 0, y: -50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                    whileHover={{ scale: 1.05, color: "#ffffff" }}
                >
                    EMPOWERING WOMEN THROUGH WELLNESS
                </motion.div>

                {/* Image Section with a New Background */}
                <motion.div
                    className="w-full md:w-3/5 h-80 rounded-lg shadow-lg mb-8"
                    style={{ 
                        backgroundImage: "url('https://via.placeholder.com/800')", // Test with placeholder
                        backgroundColor: '#2d3748', // Greyish background color
                        backgroundSize: 'cover', // Ensures image covers the div
                        backgroundPosition: 'center'
                    }}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1.5 }}
                />

                {/* Text Section */}
                <motion.div
                    className="w-full md:w-3/5 bg-gray-800 text-white p-6 rounded-lg shadow-lg text-lg leading-7"
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1.5 }}
                >
                    <h2 className="text-3xl font-semibold mb-4">Stand with Her, Change a Life</h2>
                    <p className="mb-4">
                        You can help a woman rebuild her life after surviving war and conflict. Your support provides essential skills and resources. Let’s stand together to empower women globally.
                    </p>
                </motion.div>

                {/* Stats Section */}
                <motion.div className="flex justify-between mt-10 space-x-8">
                    {/* Stat Card 1 */}
                    <motion.div
                        className="bg-gray-700 p-6 rounded-lg shadow-lg text-center"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1.2 }}
                        whileHover={{ scale: 1.1 }}
                    >
                        <p className="text-4xl font-bold text-green-400">579,287</p>
                        <p className="text-lg text-white">Women reached in 17 countries</p>
                    </motion.div>

                    {/* Stat Card 2 */}
                    <motion.div
                        className="bg-gray-700 p-6 rounded-lg shadow-lg text-center"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1.2 }}
                        whileHover={{ scale: 1.1 }}
                    >
                        <p className="text-4xl font-bold text-green-400">39,635</p>
                        <p className="text-lg text-white">Women served in 2023</p>
                    </motion.div>

                    {/* Stat Card 3 */}
                    <motion.div
                        className="bg-gray-700 p-6 rounded-lg shadow-lg text-center"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1.2 }}
                        whileHover={{ scale: 1.1 }}
                    >
                        <p className="text-4xl font-bold text-green-400">$35</p>
                        <p className="text-lg text-white">Supports training and stipends</p>
                    </motion.div>
                </motion.div>

            </div>
        </>
    );
}

export default Home;

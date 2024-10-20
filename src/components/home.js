import { motion, useMotionValue, useTransform, animate } from 'framer-motion';
import React, { useEffect } from 'react';
import myGif from '../images/0001-0240-unscreen.gif';
import femishepere from '../images/FEMISPHERE.png'; // Import your image here

const Home = () => {
    // Stat animations
    const countWomenReached = useMotionValue(0);
    const countWomenServed = useMotionValue(0);
    const countSupportTraining = useMotionValue(0);

    const roundedWomenReached = useTransform(countWomenReached, latest => Math.round(latest));
    const roundedWomenServed = useTransform(countWomenServed, latest => Math.round(latest));
    const roundedSupportTraining = useTransform(countSupportTraining, latest => Math.round(latest));

    useEffect(() => {
        const controls1 = animate(countWomenReached, 579287, { duration: 2 });
        const controls2 = animate(countWomenServed, 39635, { duration: 2 });
        const controls3 = animate(countSupportTraining, 35, { duration: 2 });

        return () => {
            controls1.stop();
            controls2.stop();
            controls3.stop();
        };
    }, []);

    return (
        <>
            {/* Main Container */}
            <div className="min-h-screen bg-gray-900 flex flex-col justify-center items-center p-8 mb-1">
                <img src={myGif} alt="Description of GIF" />

                {/* Video Section */}
                <motion.div
                    className="w-full md:w-3/5 h-500 rounded-lg mb-100 overflow-hidden "
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1.5 }}
                >
                    {/* Video Content Here */}
                </motion.div>

                {/* Header Section with Hover Animation and Gradient Text */}
                <motion.div
                    className="text-6xl font-bold mb-5 "
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                    whileHover={{ scale: 1.05, color: "#ffffff" }}
                    style={{
                        background: "linear-gradient(to right, #FFD700, #FFEA00)", // Bright yellow to gold
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent",
                    }}
                >
                    EMPOWERING WOMEN THROUGH WELLNESS
                </motion.div>

                {/* Second Image Section (FEMISHEPERE.png) */}
                <motion.div
                    className="w-full md:w-3/5 h-80 rounded-lg shadow-lg mb-8 mt-5"
                    style={{
                        backgroundImage: `url(${femishepere})`, // Use the imported image
                        backgroundColor: '#2d3748',
                        backgroundSize: 'cover',
                        backgroundPosition: 'center'
                    }}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1.5 }}
                />

                {/* Image Section with the Updated Background */}
                <motion.div
                    className="w-full md:w-3/5 h-80 rounded-lg shadow-lg mb-8 mt-5"
                    style={{
                        backgroundImage: "url('https://media.istockphoto.com/id/1349960155/photo/group-of-fashionable-women-standing-in-a-studio.jpg?s=612x612&w=0&k=20&c=yvz6WEdYTCwkFFu_B2BgceE4dlKZ0hbB3dcngOUv6kw=')", // Updated image URL
                        backgroundColor: '#2d3748',
                        backgroundSize: 'cover',
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
                        <p className="text-4xl font-bold text-green-400">
                            <motion.span>{roundedWomenReached}</motion.span>
                        </p>
                        <p className="text-lg text-white">Women connected in 17 countries</p>
                    </motion.div>

                    {/* Stat Card 2 */}
                    <motion.div
                        className="bg-gray-700 p-6 rounded-lg shadow-lg text-center"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1.2 }}
                        whileHover={{ scale: 1.1 }}
                    >
                        <p className="text-4xl font-bold text-green-400">
                            <motion.span>{roundedWomenServed}</motion.span>
                        </p>
                        <p className="text-lg text-white">Women accessed site in 2023</p>
                    </motion.div>

                    {/* Stat Card 3 */}
                    <motion.div
                        className="bg-gray-700 p-6 rounded-lg shadow-lg text-center"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1.2 }}
                        whileHover={{ scale: 1.1 }}
                    >
                        <p className="text-4xl font-bold text-green-400">
                            <motion.span>{roundedSupportTraining}</motion.span>
                        </p>
                        <p className="text-lg text-white">Startups supported - training and stipends</p>
                    </motion.div>
                </motion.div>

            </div>
        </>
    );
}

export default Home;




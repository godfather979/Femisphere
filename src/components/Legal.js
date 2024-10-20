import { motion } from 'framer-motion';
import React from 'react';

const Legal = () => {
    return (
        <>
            <div className="h-screen bg-gray-800 flex justify-center items-center flex-col">
                {/* Header Section */}
                <motion.div
                    className="text-5xl font-bold text-white mb-6"
                    initial={{ opacity: 0, y: -50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                >
                    FREE LEGAL AID FOR WOMEN
                </motion.div>

                {/* Image Section */}
                <motion.div
                    className="w-4/5 h-1/2 bg-cover bg-center rounded-lg shadow-lg"
                    style={{ 
                        backgroundImage: "url('/path-to-your-image.jpg')" 
                    }}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1.5 }}
                />

            </div>
        </>
    );
}

export default Legal;


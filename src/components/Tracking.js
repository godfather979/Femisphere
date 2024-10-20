import { motion } from 'framer-motion';
import RealTimeLocation from './RealTimeLocation';
import RealTimeRouteMap from './RealTimeRouteMap';
import Background from './Background'; // Assuming this is being used somewhere else
import { BackgroundBeams } from '../ui/background-beams'; // Uncomment if you want to use this

function Tracking() {
    return (
        <>
            <div className="bg-neutral-900 min-h-screen flex flex-col justify-between">

                {/* Header Section */}
                <div className="flex justify-between items-center p-6 bg-neutral-800 shadow-lg rounded-b-lg">

                    {/* Emergency Contacts Section with Background and Animation */}
                    <motion.div
                        className="flex items-center space-x-4 bg-blue-600 p-4 rounded-lg shadow-md" // Background and styles for Emergency Contacts
                        initial={{ opacity: 0, y: -20 }} // Initial animation state
                        animate={{ opacity: 1, y: 0 }} // Final animation state
                        transition={{ duration: 0.5 }} // Transition settings
                    >
                        <span className="text-xl font-bold text-white tracking-wide">
                            Emergency Contacts
                        </span>
                    </motion.div>

                    {/* Main Heading - Centered and Styled */}
                    <div className="flex-grow text-center">
                        <h1 className="text-5xl font-extrabold text-white bg-gradient-to-r from-yellow-400 to-pink-500 text-transparent bg-clip-text shadow-lg tracking-wide">
                            Have a{' '}
                            <motion.span
                                className="text-yellow-400" // Bright yellow color for "Safe Journey"
                                initial={{ scale: 0.5, opacity: 0 }} // Initial state for animation
                                animate={{ scale: 1, opacity: 1 }} // Final state
                                transition={{ duration: 0.5, ease: "easeIn" }} // Transition settings
                            >
                                Safe Journey
                            </motion.span>
                        </h1>
                    </div>

                    {/* SOS Button */}
                    <motion.button 
                        whileHover={{ scale: 1.05 }} 
                        className="ml-4 bg-red-500 text-white font-bold py-2 px-6 rounded-full shadow-md hover:bg-red-700 transition duration-200"
                    >
                        SOS
                    </motion.button>
                </div>

                {/* Map Section */}
                <div className="flex-grow flex justify-center items-center py-10">
                    <div className="w-11/12 h-1/2 bg-gray-800 rounded-xl overflow-hidden shadow-2xl p-4 relative">
                        {/* Insert RealTimeRouteMap or RealTimeLocation here */}
                        <RealTimeLocation />
                    </div>
                </div>

                {/* Footer Section (optional) */}
                {/* <BackgroundBeams /> */}

            </div>
        </>
    );
}

export default Tracking;

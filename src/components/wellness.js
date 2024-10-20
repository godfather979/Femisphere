import { motion } from 'framer-motion';
import { FiHeart, FiCheckCircle, FiCoffee } from 'react-icons/fi';
import { BsFillBarChartFill } from 'react-icons/bs';
import { FaRunning, FaAppleAlt, FaWater } from 'react-icons/fa';

function WellnessDashboard() {
    return (
        <div className="min-h-screen bg-black p-6">
            {/* Top Navigation */}
            <div className="flex justify-between items-center py-4 mb-8">
                <div className="flex items-center">
                    <div className="text-3xl font-semibold text-white">FEMISPHERE</div>
                </div>
                <div className="flex items-center space-x-6">
                    <input type="text" placeholder="Search" className="px-4 py-2 rounded-lg text-black" />
                    <button className="bg-purple-500 text-white px-4 py-2 rounded-lg">Notifications</button>
                    <div className="w-10 h-10 rounded-full bg-gray-200"></div>
                </div>
            </div>

            {/* Dashboard Greeting */}
            <div className="text-white text-4xl font-bold mb-8">
                Hi, Miley!
            </div>

            {/* Dashboard Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
                {/* Calories */}
                <div className="col-span-1 lg:col-span-2 bg-gray-900 rounded-xl p-6 shadow-lg">
                    <div className="flex items-center justify-between mb-4">
                        <div className="text-white text-2xl font-semibold">Calories</div>
                        <BsFillBarChartFill size={32} className="text-yellow-400" />
                    </div>
                    <motion.div
                        className="w-full h-44 bg-gradient-to-r from-yellow-400 to-blue-500 rounded-xl flex justify-center items-center"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 2 }}
                    >
                        {/* Random graphic representing calorie data */}
                        <FaAppleAlt size={48} className="text-white" />
                    </motion.div>
                </div>

                {/* Activity */}
                <div className="bg-gray-900 rounded-xl p-6 shadow-lg">
                    <div className="flex items-center justify-between mb-4">
                        <div className="text-white text-2xl font-semibold">Activity</div>
                        <FiHeart size={32} className="text-red-500" />
                    </div>
                    <div className="flex justify-between text-white">
                        <div className="flex flex-col items-center">
                            <FaRunning size={32} className="mb-2 text-yellow-300" />
                            <p>Steps</p>
                            <p>5500</p>
                        </div>
                        <div className="flex flex-col items-center">
                            <FiHeart size={32} className="mb-2 text-pink-400" />
                            <p>Heart rate</p>
                            <p>130 bpm</p>
                        </div>
                        <div className="flex flex-col items-center">
                            <FaAppleAlt size={32} className="mb-2 text-green-500" />
                            <p>Calories Burned</p>
                            <p>503 kcal</p>
                        </div>
                    </div>
                </div>

                {/* Habit Tracker */}
                <div className="bg-gray-900 rounded-xl p-6 shadow-lg">
                    <div className="flex items-center justify-between mb-4">
                        <div className="text-white text-2xl font-semibold">Habit tracker</div>
                        <FiCheckCircle size={32} className="text-green-500" />
                    </div>
                    <ul className="text-white">
                        <li className="flex items-center mb-2">
                            <FaRunning className="mr-2" /> Morning run: 07:00 am - 45 min
                        </li>
                        <li className="flex items-center mb-2">
                            <FaWater className="mr-2" /> 1.5L of water daily
                        </li>
                        <li className="flex items-center">
                            <FiCoffee className="mr-2" /> Cooking meal prep for 3 days
                        </li>
                    </ul>
                </div>

                {/* Daily Progress */}
                <div className="bg-gray-900 rounded-xl p-6 shadow-lg">
                    <div className="flex items-center justify-between mb-4">
                        <div className="text-white text-2xl font-semibold">Daily progress</div>
                        <BsFillBarChartFill size={32} className="text-purple-500" />
                    </div>
                    <div className="flex justify-center">
                        <div className="w-32 h-32 bg-gradient-to-r from-purple-400 to-purple-700 rounded-full flex items-center justify-center text-4xl font-bold text-white">
                            85%
                        </div>
                    </div>
                    <p className="text-center text-white mt-4">Keep working on your nutrition and sleep</p>
                </div>

                {/* Meditation */}
                <div className="bg-gray-900 rounded-xl p-6 shadow-lg">
                    <div className="flex items-center justify-between mb-4">
                        <div className="text-white text-2xl font-semibold">Meditation</div>
                        <FiHeart size={32} className="text-blue-400" />
                    </div>
                    <motion.div
                        className="text-center text-white"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 2 }}
                    >
                        <img src="https://via.placeholder.com/100" alt="Meditation Graphic" className="mx-auto mb-4" />
                        <p>Good vibes, good life</p>
                        <p>Positive thinking | 27 min</p>
                    </motion.div>
                </div>
            </div>
        </div>
    );
}

export default WellnessDashboard;




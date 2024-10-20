import { useState } from 'react';
import { motion } from 'framer-motion';

function Activity() {
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  // Toggle dropdown for weekly icons
  const toggleDropdown = () => {
    setDropdownOpen((prev) => !prev);
  };

  return (
    <div className="h-screen bg-blue-500 flex justify-center items-center space-x-8">
      {/* Wellness Card */}
      <div className="w-1/3 h-[400px] relative bg-gradient-to-b from-white to-[#e0e0e0] rounded-2xl shadow-lg p-4">
        {/* Title */}
        <div className="text-[#202125] text-2xl font-medium font-['Chillax'] leading-[30px]">
          Wellness Stats
        </div>

        {/* Dropdown Icon */}
        <div
          onClick={toggleDropdown}
          className="w-4 h-4 cursor-pointer mt-2 bg-gray-400 rounded-full"
        >
          <motion.div
            className="bg-white rounded-full"
            animate={{ rotate: isDropdownOpen ? 180 : 0 }}
            transition={{ duration: 0.2 }}
          />
        </div>

        {/* Dropdown Icons for Weekly Stats */}
        {isDropdownOpen && (
          <div className="absolute left-0 mt-2 bg-white rounded-lg shadow-md p-2">
            <div className="flex flex-col items-center">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-blue-500 rounded-full" />
                <span>Heart Rate</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-green-500 rounded-full" />
                <span>Total Steps</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-red-500 rounded-full" />
                <span>Kcal Burn</span>
              </div>
            </div>
          </div>
        )}

        {/* Progress Bars */}
        <div className="mt-6">
          <div className="text-[#202125] font-medium">Exercise</div>
          <motion.div
            className="bg-gray-300 rounded-full h-2"
            initial={{ width: 0 }}
            animate={{ width: '75%' }} // Adjust this value as needed
            transition={{ duration: 1 }}
          />
          <div className="text-[#202125] font-medium mt-2">Movement</div>
          <motion.div
            className="bg-gray-300 rounded-full h-2"
            initial={{ width: 0 }}
            animate={{ width: '50%' }} // Adjust this value as needed
            transition={{ duration: 1 }}
          />
          <div className="text-[#202125] font-medium mt-2">Steps</div>
          <motion.div
            className="bg-gray-300 rounded-full h-2"
            initial={{ width: 0 }}
            animate={{ width: '90%' }} // Adjust this value as needed
            transition={{ duration: 1 }}
          />
        </div>
      </div>
    </div>
  );
}

export default Activity;

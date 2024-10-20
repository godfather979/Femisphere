import { motion } from 'framer-motion';

function Daily() {
  return (
    <div className="w-[305px] h-[363px] relative bg-gradient-to-b from-[#f8f8fc] to-[#e2e2e2] rounded-2xl flex flex-col items-center justify-between p-5">
      {/* Title */}
      <div className="text-[#202125] text-2xl font-normal font-['Chillax'] leading-[30px] text-center">
        Daily progress
      </div>

      {/* Circular Progress Indicator */}
      <div className="relative flex items-center justify-center">
        <svg width="100" height="100" className="absolute">
          <circle
            cx="50"
            cy="50"
            r="45"
            stroke="#d6d0fd"
            strokeWidth="10"
            fill="transparent"
          />
          <motion.circle
            cx="50"
            cy="50"
            r="45"
            stroke="#a78bfa"
            strokeWidth="10"
            fill="transparent"
            strokeDasharray="283"
            strokeDashoffset="42" // This should be calculated based on the percentage
            initial={{ strokeDashoffset: 283 }}
            animate={{ strokeDashoffset: 42 }} // 85% of 283
            transition={{ duration: 1 }}
          />
        </svg>
        <div className="text-[#202125] text-[39.24px] font-normal font-['Chillax'] leading-[33.11px]">
          85%
        </div>
      </div>

      {/* Message */}
      <div className="text-center text-[#8f8f8f] text-base font-normal font-['Chillax'] leading-7">
        Keep working on your nutrition and sleep
      </div>
    </div>
  );
}

export default Daily;

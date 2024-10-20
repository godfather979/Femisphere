import { motion } from 'framer-motion';

function Job() {
  return (
    <>
      {/* Background Container */}
      <div className="h-screen bg-gradient-to-r from-blue-500 via-purple-600 to-indigo-700 flex justify-center items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex space-x-8"
        >
          {/* Job Card 1 */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="bg-gray-900 text-white p-6 rounded-lg max-w-sm"
          >
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-yellow-400 text-lg font-bold">Graphic Designer</h2>
                <p className="text-gray-400">Spotify</p>
              </div>
              <span className="bg-yellow-400 text-black px-2 py-1 rounded">Remote</span>
            </div>
            <div className="mt-4 flex justify-between text-gray-500 text-sm">
              <span className="flex items-center space-x-1">
                <span className="bg-gray-800 px-2 py-1 rounded">Freshers</span>
                <span className="bg-gray-800 px-2 py-1 rounded">Fulltime</span>
              </span>
              <span className="text-white font-bold">$50K/mo</span>
            </div>
            <div className="mt-6">
              <h3 className="text-lg font-bold">Job Description</h3>
              <p className="text-gray-400 mt-2">In a UX Designer job, you'll need both types of skills to develop the next generation of products.</p>
            </div>
            <div className="mt-6 flex justify-between">
              <motion.button whileHover={{ scale: 1.1 }} className="bg-gray-700 text-white py-2 px-4 rounded">
                Save
              </motion.button>
              <motion.button whileHover={{ scale: 1.1 }} className="bg-purple-600 text-white py-2 px-4 rounded">
                Apply Now
              </motion.button>
            </div>
          </motion.div>

          {/* Job Card 2 */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="bg-gray-900 text-white p-6 rounded-lg max-w-sm"
          >
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-yellow-400 text-lg font-bold">UX Designer</h2>
                <p className="text-gray-400">Google</p>
              </div>
              <span className="bg-yellow-400 text-black px-2 py-1 rounded">On-site</span>
            </div>
            <div className="mt-4 flex justify-between text-gray-500 text-sm">
              <span className="flex items-center space-x-1">
                <span className="bg-gray-800 px-2 py-1 rounded">3 years</span>
                <span className="bg-gray-800 px-2 py-1 rounded">Fulltime</span>
              </span>
              <span className="text-white font-bold">$80K/mo</span>
            </div>
            <div className="mt-6">
              <h3 className="text-lg font-bold">Job Description</h3>
              <p className="text-gray-400 mt-2">As a UX Designer, you'll create intuitive interfaces for next-gen products.</p>
            </div>
            <div className="mt-6 flex justify-between">
              <motion.button whileHover={{ scale: 1.1 }} className="bg-gray-700 text-white py-2 px-4 rounded">
                Save
              </motion.button>
              <motion.button whileHover={{ scale: 1.1 }} className="bg-purple-600 text-white py-2 px-4 rounded">
                Apply Now
              </motion.button>
            </div>
          </motion.div>

          {/* Job Card 3 */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="bg-gray-900 text-white p-6 rounded-lg max-w-sm"
          >
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-yellow-400 text-lg font-bold">Frontend Developer</h2>
                <p className="text-gray-400">Facebook</p>
              </div>
              <span className="bg-yellow-400 text-black px-2 py-1 rounded">Hybrid</span>
            </div>
            <div className="mt-4 flex justify-between text-gray-500 text-sm">
              <span className="flex items-center space-x-1">
                <span className="bg-gray-800 px-2 py-1 rounded">5 years</span>
                <span className="bg-gray-800 px-2 py-1 rounded">Fulltime</span>
              </span>
              <span className="text-white font-bold">$90K/mo</span>
            </div>
            <div className="mt-6">
              <h3 className="text-lg font-bold">Job Description</h3>
              <p className="text-gray-400 mt-2">You'll be developing interactive frontend elements for the platform.</p>
            </div>
            <div className="mt-6 flex justify-between">
              <motion.button whileHover={{ scale: 1.1 }} className="bg-gray-700 text-white py-2 px-4 rounded">
                Save
              </motion.button>
              <motion.button whileHover={{ scale: 1.1 }} className="bg-purple-600 text-white py-2 px-4 rounded">
                Apply Now
              </motion.button>
            </div>
          </motion.div>

          {/* Job Card 4 */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="bg-gray-900 text-white p-6 rounded-lg max-w-sm"
          >
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-yellow-400 text-lg font-bold">Backend Developer</h2>
                <p className="text-gray-400">Amazon</p>
              </div>
              <span className="bg-yellow-400 text-black px-2 py-1 rounded">Remote</span>
            </div>
            <div className="mt-4 flex justify-between text-gray-500 text-sm">
              <span className="flex items-center space-x-1">
                <span className="bg-gray-800 px-2 py-1 rounded">7 years</span>
                <span className="bg-gray-800 px-2 py-1 rounded">Fulltime</span>
              </span>
              <span className="text-white font-bold">$120K/mo</span>
            </div>
            <div className="mt-6">
              <h3 className="text-lg font-bold">Job Description</h3>
              <p className="text-gray-400 mt-2">Responsible for server-side application logic and integration.</p>
            </div>
            <div className="mt-6 flex justify-between">
              <motion.button whileHover={{ scale: 1.1 }} className="bg-gray-700 text-white py-2 px-4 rounded">
                Save
              </motion.button>
              <motion.button whileHover={{ scale: 1.1 }} className="bg-purple-600 text-white py-2 px-4 rounded">
                Apply Now
              </motion.button>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </>
  );
}

export default Job;


import { motion } from 'framer-motion';
import { useState } from 'react';

function Job() {
  const [searchTerm, setSearchTerm] = useState('');
  const [jobType, setJobType] = useState('');

  const handleSearch = () => {
    // Replace this alert with your search functionality
    alert(`Searching for: ${searchTerm} \nJob Type: ${jobType}`);
  };

  return (
    <>
      {/* Main Container */}
      <div className="min-h-screen bg-gray-800 flex flex-col items-center p-8">
        {/* Search Bar Container */}
        <div className="mb-10 flex flex-col items-center w-full">
          <div className="flex items-center bg-gray-900 p-4 rounded-lg shadow-lg w-full max-w-2xl">
            <input
              type="text"
              placeholder="Search for jobs..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="flex-grow p-3 rounded-lg focus:outline-none text-gray-800"
            />
            <select
              value={jobType}
              onChange={(e) => setJobType(e.target.value)}
              className="p-3 rounded-lg bg-gray-800 text-gray-300 ml-4"
            >
              <option value="">Job Type</option>
              <option value="full-time">Full-Time</option>
              <option value="part-time">Part-Time</option>
              <option value="internship">Internship</option>
            </select>
            <button
              onClick={handleSearch}
              className="bg-purple-600 text-white p-3 rounded-lg ml-4 hover:bg-purple-700 transition-colors"
            >
              Search
            </button>
          </div>
        </div>

        {/* Job Cards Container */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex flex-wrap justify-center space-x-8 space-y-8"
        >
          {/* Job Cards */}
          {[
            {
              title: "Graphic Designer",
              company: "Spotify",
              jobType: "Remote",
              experience: "Freshers",
              salary: "$50K/mo",
              description: "In a UX Designer job, you'll need both types of skills to develop the next generation of products.",
            },
            {
              title: "UX Designer",
              company: "Google",
              jobType: "On-site",
              experience: "3 years",
              salary: "$80K/mo",
              description: "As a UX Designer, you'll create intuitive interfaces for next-gen products.",
            },
            {
              title: "Frontend Developer",
              company: "Facebook",
              jobType: "Hybrid",
              experience: "5 years",
              salary: "$90K/mo",
              description: "You'll be developing interactive frontend elements for the platform.",
            },
            {
              title: "Backend Developer",
              company: "Amazon",
              jobType: "Remote",
              experience: "7 years",
              salary: "$120K/mo",
              description: "Responsible for server-side application logic and integration.",
            },
            {
              title: "Data Scientist",
              company: "Netflix",
              jobType: "Remote",
              experience: "4 years",
              salary: "$110K/mo",
              description: "As a Data Scientist, you will analyze large datasets to inform strategic decisions.",
            },
            {
              title: "Product Manager",
              company: "Apple",
              jobType: "On-site",
              experience: "5 years",
              salary: "$130K/mo",
              description: "You'll be responsible for defining the vision and strategy for products.",
            },
            {
              title: "DevOps Engineer",
              company: "Microsoft",
              jobType: "Hybrid",
              experience: "4 years",
              salary: "$105K/mo",
              description: "You will be managing cloud infrastructure and CI/CD processes.",
            },
            {
              title: "Sales Executive",
              company: "Salesforce",
              jobType: "Remote",
              experience: "2 years",
              salary: "$70K/mo",
              description: "As a Sales Executive, you will drive sales and maintain customer relationships.",
            },
            {
              title: "Mobile App Developer",
              company: "Adobe",
              jobType: "Remote",
              experience: "3 years",
              salary: "$95K/mo",
              description: "You will be responsible for developing mobile applications for iOS and Android platforms.",
            },
          ].map((job, index) => (
            <motion.div
              key={index}
              whileHover={{
                scale: 1.05,
                rotate: index % 2 === 0 ? 2 : -2,
                boxShadow: '0px 0px 15px rgba(255, 255, 255, 0.5)',
              }}
              transition={{ duration: 0.4 }}
              className="bg-gray-900 text-white p-6 rounded-lg max-w-sm hover:bg-gray-800 hover:text-white transition-colors"
            >
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="text-yellow-400 text-lg font-bold">{job.title}</h2>
                  <p className="text-gray-400">{job.company}</p>
                </div>
                <span className="bg-yellow-400 text-black px-2 py-1 rounded">{job.jobType}</span>
              </div>
              <div className="mt-4 flex justify-between text-gray-500 text-sm">
                <span className="flex items-center space-x-1">
                  <span className="bg-gray-800 px-2 py-1 rounded">{job.experience}</span>
                  <span className="bg-gray-800 px-2 py-1 rounded">Fulltime</span>
                </span>
                <span className="text-white font-bold">{job.salary}</span>
              </div>
              <div className="mt-6">
                <h3 className="text-lg font-bold">Job Description</h3>
                <p className="text-gray-400 mt-2">{job.description}</p>
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
          ))}
        </motion.div>
      </div>
    </>
  );
}

export default Job;











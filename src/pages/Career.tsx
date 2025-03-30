import React, { useState } from 'react';

const Career = () => {
  const [selectedJob, setSelectedJob] = useState('');
  const [showNotification, setShowNotification] = useState(false);

  const jobOptions = [
    'Software Engineer',
    'Frontend Developer',
    'Backend Developer',
    'Full Stack Developer',
    'DevOps Engineer',
    'UI/UX Designer',
    'Product Manager'
  ];

  const handleSubmit = () => {
    if (selectedJob) {
      setShowNotification(true);
      setTimeout(() => setShowNotification(false), 3000); // Hide notification after 3 seconds
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Career Opportunities</h1>
      <div className="prose max-w-none">
        <p className="text-lg text-gray-600 mb-4">
          Join our team at Lotelite Technology and be part of an innovative organization that's shaping the future of technology education.
        </p>
        <div className="bg-white rounded-lg shadow-md p-6 mb-6">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Why Work With Us?</h2>
          <ul className="list-disc pl-6 space-y-2 text-gray-600">
            <li>Innovative work environment</li>
            <li>Professional growth opportunities</li>
            <li>Competitive compensation packages</li>
            <li>Work-life balance</li>
            <li>Global exposure</li>
          </ul>
        </div>
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Current Openings</h2>
          <p className="text-gray-600 mb-4">
            We're always looking for talented individuals to join our team. Check back regularly for new opportunities.
          </p>
          <div className="space-y-4">
            <select
              value={selectedJob}
              onChange={(e) => setSelectedJob(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#0077B5]"
            >
              <option value="">Select a position</option>
              {jobOptions.map((job) => (
                <option key={job} value={job}>{job}</option>
              ))}
            </select>
            <button 
              onClick={handleSubmit}
              disabled={!selectedJob}
              className="bg-[#0077B5] text-white px-6 py-2 rounded-md hover:bg-[#005d8f] transition-colors disabled:bg-gray-400 disabled:cursor-not-allowed"
            >
              Apply Now
            </button>
          </div>
          {showNotification && (
            <div className="mt-4 p-3 bg-green-100 text-green-700 rounded-md">
              Thank you for your interest in the {selectedJob} position. We'll review your application and get back to you soon!
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Career; 
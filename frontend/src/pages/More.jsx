import React from "react";

const More = () => {
  return (
    <div className="bg-gray-900 text-white min-h-screen py-12 px-6">
      <h2 className="text-4xl font-bold text-center mb-10">More Information</h2>

      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-10">
        <div className="bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-yellow-400 transition duration-300">
          <h3 className="text-2xl font-semibold text-yellow-400 mb-4">
            Bot. Process. Efficiency.
          </h3>
          <p className="text-gray-300 leading-relaxed">
            Experience Robotic Process Automation (RPA) that unifies people,
            process, and technology. We enable businesses to unlock true
            potential by simplifying complex workflows and eliminating manual
            tasks.
          </p>
        </div>

        <div className="bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-yellow-400 transition duration-300">
          <h3 className="text-2xl font-semibold text-yellow-400 mb-4">
            AI-Powered Automation
          </h3>
          <p className="text-gray-300 leading-relaxed">
            We help business leaders embrace the future with intelligent
            automation. Our AI + ML powered solutions enable you to visualize
            your digital journey with smart insights, automated tasks, and
            optimized efficiency.
          </p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto mt-12 text-lg text-center text-gray-400">
        <p>
          At the intersection of innovation and intelligence, our platform is
          designed to elevate your business capabilities. Unlock seamless
          automation, drive productivity, and future-proof your processes — all
          with a single vision.
        </p>
      </div>
    </div>
  );
};

export default More;

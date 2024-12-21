"use client";
import React, { useState } from 'react';

const Scholarships = () => {
  const [imageZoomed, setImageZoomed] = useState(false);

  return (
    <section className="py-16 px-4 bg-white">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center space-y-8 md:space-y-0">
        {/* Text Section */}
        <div className="md:w-1/2 space-y-6 text-center md:text-left">
          <h2 className="text-3xl font-semibold text-gray-800">Scholarships</h2>
          <p className="text-lg text-gray-600">
            We believe in the transformative power of education and offer various scholarship programs to support students in their academic journeys. Our School Scholarships cater to students from nursery to intermediate levels, ensuring that deserving young minds can pursue their education without financial barriers. Our Undergraduate Scholarships sponsor students seeking higher education to focus on their studies without the burden of financial concerns.
          </p>
          <a
            href="https://tinyurl.com/ISHTUnderGraduateScholarship"
            className="inline-block py-3 px-6 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700 transition"
          >
            Apply for Undergraduate Scholarship
          </a>
        </div>
        {/* Image Section */}
        <div
          className="md:w-1/2 relative overflow-hidden cursor-pointer"
          onMouseEnter={() => setImageZoomed(true)}
          onMouseLeave={() => setImageZoomed(false)}
        >
          <img
            src="/scolarship.png"
            alt="Scholarships"
            className={`w-full h-80 object-cover rounded-xl transition-transform duration-500 ${
              imageZoomed ? 'scale-110' : 'scale-100'
            }`}
          />
          <div
            className={`absolute inset-0 bg-black opacity-50 transition-opacity duration-300 ${
              imageZoomed ? 'opacity-0' : 'opacity-50'
            }`}
          />
        </div>
      </div>
    </section>
  );
};

export default Scholarships;

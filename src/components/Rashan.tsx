"use client";
import React, { useState } from 'react';

const RationDistribution = () => {
  const [imageZoomed, setImageZoomed] = useState(false);

  return (
    <section className="py-16 px-4 bg-gray-100">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center space-y-8 md:space-y-0">
        {/* Text Section */}
        <div className="md:w-1/2 space-y-6 text-center md:text-left">
          <h2 className="text-3xl font-semibold text-gray-800">Ration Distribution</h2>
          <p className="text-lg text-gray-600">
            In addition to our educational initiatives, we conduct monthly ration drives to support families facing food scarcity. Through these drives, we distribute essential food supplies to those in need, ensuring that no child goes to bed hungry. Our commitment to uplifting students in need extends beyond education, as we strive to create a supportive community where families can thrive together.
          </p>
          <a
            href="/page4"
            className="inline-block py-3 px-6 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700 transition"
          >
            Tap for more information
          </a>
        </div>
        {/* Image Section */}
        <div
          className="md:w-1/2 relative overflow-hidden cursor-pointer"
          onMouseEnter={() => setImageZoomed(true)}
          onMouseLeave={() => setImageZoomed(false)}
        >
          <img
            src="/rashan.png"
            alt="Ration Distribution"
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

export default RationDistribution;





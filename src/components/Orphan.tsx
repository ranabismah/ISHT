"use client";
import React, { useState } from 'react';

const Orphanages = () => {
  const [imageZoomed, setImageZoomed] = useState(false);

  return (
    <section className="py-16 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center space-y-8 md:space-y-0">
        {/* Text Section */}
        <div className="md:w-1/2 space-y-6 text-center md:text-left">
          <h2 className="text-3xl font-semibold text-gray-800">Orphanages</h2>
          <p className="text-lg text-gray-600">
            At Iqra Sweet Home Trust (ISHT), we create a loving and supportive environment for 100+ children, offering them a safe home where they can feel secure and cared for. Our orphanage provides shelter, nutritious meals, and appropriate clothing, ensuring that each child feels dignified. We focus on their education, empowering them to realize their dreams and fostering personal growth. By nurturing these children, we pave the way for a brighter future, helping them develop the skills and confidence they need to thrive.
          </p>
        </div>
        {/* Image Section */}
        <div
          className="md:w-1/2 relative overflow-hidden cursor-pointer"
          onMouseEnter={() => setImageZoomed(true)}
          onMouseLeave={() => setImageZoomed(false)}
        >
          <img
            src="/orphan.png"
            alt="Orphanages"
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

export default Orphanages;



  
  
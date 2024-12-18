// components/Testimonials.tsx
"use client";
import { useState } from 'react';

const Testimonials = () => {
  const [current, setCurrent] = useState(0);
  const testimonials = [
    {
      quote: "Iqra Sweet Home Trust has been a beacon of hope in my life. The support they provided helped me not only survive but thrive.",
      name: "Student Name",
      image: "/logo.png", // Add image path for the student
    },
    {
      quote: "The ration drive from ISHT helped my family when we were struggling. I will forever be grateful for their help.",
      name: "Parent Name",
      image: "/logo.png", // Add image path for the parent
    },
  ];

  const handlePrev = () => {
    setCurrent((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrent((next) => (next === testimonials.length - 1 ? 0 : next + 1));
  };

  return (
    <section className="bg-blue-50 py-16">
      <h2 className="text-3xl font-semibold text-center text-blue-900 mb-8">What People Say</h2>
      
      <div className="max-w-3xl mx-auto text-center px-6">
        {/* Profile Image */}
        <div className="flex justify-center mb-4">
          <img
            src={testimonials[current].image}
            alt={testimonials[current].name}
            className="w-20 h-20 rounded-full object-cover shadow-lg"
          />
        </div>

        {/* Testimonial Quote */}
        <div className="text-lg text-blue-600 mb-6">
          <p className="italic">"{testimonials[current].quote}"</p>
        </div>

        {/* Testimonial Name */}
        <p className="mt-4 text-blue-800 font-semibold">
          - {testimonials[current].name}
        </p>

        {/* Navigation Buttons */}
        <div className="mt-6 flex justify-center items-center space-x-4">
          <button
            className="text-blue-800 hover:text-blue-600 text-2xl focus:outline-none transform transition-all duration-300 hover:scale-110"
            onClick={handlePrev}
            aria-label="Previous Testimonial"
          >
            &#8592;
          </button>
          <button
            className="text-blue-800 hover:text-blue-600 text-2xl focus:outline-none transform transition-all duration-300 hover:scale-110"
            onClick={handleNext}
            aria-label="Next Testimonial"
          >
            &#8594;
          </button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;

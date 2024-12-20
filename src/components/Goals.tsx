"use client";
import { useState } from 'react';

const Goals = () => {
  const [current, setCurrent] = useState(0);
  const testimonials = [
    {
      quote: "We strive to ensure that every child receives quality education, from nursery through to intermediate levels. By providing comprehensive support, we help students excel academically and secure their future.",
      name: "Educational Empowerment:",
    },
    {
      quote: " Beyond education, we emphasize the importance of personal growth and character development. Our programs are designed to instill values, confidence, and life skills in our students, preparing them to face the world with resilience.",
      name: "Holistic Development:",
    },
    {
quote:"We believe in creating a ripple effect of positive change. By empowering children, we aim to uplift entire communities, fostering a cycle of responsibility and support.",
name:"Community Impact:",
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
      <h2 className="text-3xl font-semibold text-center text-blue-900 mb-8">Goals & History</h2>
      <p className="mt-4  text-center py-3 text-lg text-gray-700">
          The Iqra Sweet Home Trust (ISHT) was founded with a profound commitment to the welfare of children in need, particularly those without parental care. Our goal is to provide a supportive and nurturing environment where these children can thrive.
        </p>
      <div className="max-w-3xl mx-auto text-center px-6">
        
 {/* Goal Name */}
 <p className="mt-4 text-blue-800 font-semibold">
          - {testimonials[current].name}
        </p>
        {/* Goal Quote */}
        <div className="text-lg text-blue-600 mb-6">
          <p className="italic">"{testimonials[current].quote}"</p>
        </div>

        

        {/* Navigation Buttons */}
        <div className="mt-6 flex justify-center items-center space-x-4">
          <button
            className="text-blue-800 hover:text-blue-600 text-4xl focus:outline-none transform transition-all duration-300 hover:scale-110"
            onClick={handlePrev}
            aria-label="Previous Testimonial"
          >
            &#8592;
          </button>
          <button
            className="text-blue-800 hover:text-blue-600 text-4xl focus:outline-none transform transition-all duration-300 hover:scale-110"
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

export default Goals;

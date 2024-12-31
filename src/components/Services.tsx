"use client";
import { useState, useEffect, useRef } from "react";

const useInView = (options: IntersectionObserverInit) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      options
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [options]);

  return { ref, isVisible };
};

const Services = () => {
  const { ref, isVisible } = useInView({ threshold: 0.2 });

  return (
    <section ref={ref} className="py-16 bg-white">
      {/* Heading with gradient text and animation */}
      <h2
        className={`text-5xl font-semibold text-center text-blue-900 mb-12 transition duration-700 ${
          isVisible ? "animate-bounceIn" : "opacity-0"
        }`}
      >
        Our Services
      </h2>

      {/* Grid Layout for Services */}
      <div
        className={`mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-6 transition-all duration-700 ${
          isVisible ? "animate-slideUpFadeIn" : "opacity-0"
        }`}
      >
        {/* Shelter Service */}
        <div className="group relative p-6 bg-blue-50 rounded-lg shadow-xl hover:scale-105 hover:shadow-2xl transition duration-300 ease-in-out">
          <h3 className="text-3xl font-semibold text-blue-900">Shelter</h3>
          <p className="mt-4 text-gray-600">
            Safe and welcoming accommodation for orphans and students in need.
            We provide a nurturing environment where students can thrive.
          </p>
        </div>

        {/* Education Service */}
        <div className="group relative p-6 bg-blue-50 rounded-lg shadow-xl hover:scale-105 hover:shadow-2xl transition duration-300 ease-in-out">
          <h3 className="text-3xl font-semibold text-blue-900">Education</h3>
          <p className="mt-4 text-gray-600">
            Offering free education from nursery to intermediate, along with
            scholarships for higher education to ensure a bright future for
            students.
          </p>
        </div>

        {/* Ration Distribution Service .*/}
        <div className="group relative p-6 bg-blue-50 rounded-lg shadow-xl hover:scale-105 hover:shadow-2xl transition duration-300 ease-in-out">
          <h3 className="text-3xl font-semibold text-blue-900">
            Ration Distribution
          </h3>
          <p className="mt-4 text-gray-600">
            Monthly drives to distribute essential food supplies to families
            facing food insecurity, ensuring they have what they need during
            tough times.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Services;

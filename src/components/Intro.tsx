"use client";
import { useEffect, useState } from "react";

const Intro = () => {
  const [inView, setInView] = useState(false);

  // Set up Intersection Observer to track when the element is in view
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        // When the element comes into view, set inView to true
        if (entry.isIntersecting) {
          setInView(true);
        } else {
          setInView(false); // Reset animation when the element goes out of view
        }
      },
      { threshold: 0.5 } // Trigger when 50% of the element is visible
    );

    const element = document.getElementById("intro-heading");
    if (element) {
      observer.observe(element);
    }

    return () => {
      if (element) observer.unobserve(element);
    };
  }, []);

  return (
    <section className="relative bg-gradient-to-b from-blue-900 to-blue-950 text-white py-16 px-6 lg:px-20">
      {/* Background Overlay */}
      <div className="absolute inset-0 bg-black opacity-50"></div>

      <div className="relative z-10 max-w-6xl mx-auto text-center flex flex-col items-center space-y-8">
        {/* Heading with Scroll-triggered Animation */}
        <h1
          id="intro-heading"
          className={`text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-white transition-all duration-700 transform ${
            inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          Empowering Students, Transforming Lives
        </h1>

        {/* Description */}
        <p className="text-lg sm:text-xl lg:text-2xl leading-relaxed text-gray-300 max-w-4xl mx-auto">
          <span className="text-white font-medium">Iqra Sweet Home Trust</span> is dedicated to providing shelter, education, and support to children in need across Pakistan. Join us in shaping the future of these bright young minds and help us create a better tomorrow.
        </p>

        {/* Image */}
        <div className="relative w-full max-w-lg lg:max-w-3xl overflow-hidden rounded-lg ">
          <img
            src="/logo.png"
            alt="Iqra Sweet Home Logo"
            className="w-full h-full object-contain lg:object-cover transform transition-transform duration-300 hover:scale-105"
          />
        </div>

        {/* Call-to-Action Button */}
        <div>
          <a
            href="/contact"
            className="inline-block px-10 py-4 text-lg font-semibold text-black bg-white rounded-full shadow-lg hover:bg-blue-400 hover:text-white transition-all duration-300"
          >
            Donate Now
          </a>
        </div>
      </div>
    </section>
  );
};

export default Intro;

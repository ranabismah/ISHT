// components/Intro.tsx

const Intro = () => (
  <section className="relative bg-blue-900 text-white py-24 px-6 lg:px-32 text-center flex flex-col items-center">
    {/* Background Image with Overlay */}
    <div
      className="absolute inset-0 bg-cover bg-center opacity-60"
      style={{ backgroundImage: 'url(/images/hero-bg.jpg)' }}
    />
    <div className="absolute inset-0 bg-black opacity-40" /> {/* Added dark overlay */}
    
    <div className="relative z-10 space-y-6">
      {/* Heading */}
      <h1 className="text-4xl lg:text-5xl font-bold leading-tight mb-4 sm:mb-6 tracking-wide font-sans">
        Empowering Students, Transforming Lives
      </h1>
      
      {/* Description */}
      <p className="text-xl lg:text-2xl mb-8 px-4 sm:px-12 max-w-4xl mx-auto leading-relaxed font-serif">
        Iqra Sweet Home Trust is dedicated to providing shelter, education, and support to children in need across Pakistan. Join us in shaping the future of these bright young minds and help us create a better tomorrow.
      </p>

      {/* Image */}
      <div className="w-full lg:w-2/3 mx-auto mb-8 overflow-hidden relative">
        <img
          src="/logo.png"
          alt="Iqra Sweet Home"
          className="object-cover w-full h-full rounded-xl shadow-xl transform transition-all duration-300 hover:scale-105"
        />
      </div>

      {/* Call-to-Action Button */}
      <div>
        <a
          href="#donate"
          className="inline-block py-3 px-8 text-lg font-semibold text-blue-900 bg-white rounded-lg shadow-lg hover:bg-blue-500 transition duration-300"
        >
          Donate Now
        </a>
      </div>
    </div>
  </section>
);

export default Intro;



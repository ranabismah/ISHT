import Image from "next/image";

const HeroSection = () => (
  <section className="relative bg-white text-gray-800 py-16 px-6 lg:px-12">
    <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between">
      {/* Left Section: Mission and Vision */}
      <div className="lg:w-1/2 text-center lg:text-left space-y-8">
        <h1 className="text-5xl font-extrabold text-blue-900 leading-tight">
          About Us <span className="text-blue-500">!</span>
        </h1>
        
        {/* Mission Statement */}
        <div className="space-y-4 max-w-3xl mx-auto lg:mx-0">
          <h2 className="text-2xl font-semibold text-blue-700">
            Mission Statement
          </h2>
          <p className="text-lg text-gray-600">
            Creating equal educational opportunities for high-merit, financially struggling students in Pakistan to make them financially independent through our holistic program.
          </p>
        </div>
        
        {/* Vision Statement */}
        <div className="space-y-4 max-w-3xl mx-auto lg:mx-0">
          <h2 className="text-2xl font-semibold text-blue-700">
            Vision Statement
          </h2>
          <p className="text-lg text-gray-600">
            We aim for our students and parents to become responsible, financially independent, and uplifted members of society who positively change the destiny of their future generations.
          </p>
        </div>
      </div>

      {/* Right Section: Hero Image */}
      <div className="lg:w-1/2 mt-12 lg:mt-0">
        <div className="relative overflow-hidden rounded-lg shadow-xl hover:scale-105 transition-all duration-500 ease-in-out">
          <Image
            src="/about-hero.png"
            alt="About Us Hero"
            width={600}
            height={400}
            className="object-cover w-full h-full"
          />
        </div>
      </div>
    </div>
  </section>
);

export default HeroSection;

const Services = () => (
    <section className="py-16 bg-white">
      <h2 className="text-3xl font-semibold text-center text-blue-900 mb-12">Our Services</h2>
  
      {/* Grid Layout for Services */}
      <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-6">
        
        {/* Shelter Service */}
        <div className="group relative overflow-hidden p-6 bg-blue-50 rounded-lg shadow-xl hover:scale-105 hover:shadow-2xl transition duration-300 ease-in-out">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-teal-400 opacity-40 group-hover:opacity-100 transition duration-300 ease-in-out"></div>
          <h3 className="text-xl font-semibold text-gray-200 z-10 relative">Shelter</h3>
          <p className="mt-4 text-blue-600 z-10 relative">
            Safe and welcoming accommodation for orphans and students in need. We provide a nurturing environment where students can thrive.
          </p>
        </div>
  
        {/* Education Service */}
        <div className="group relative overflow-hidden p-6 bg-blue-50 rounded-lg shadow-xl hover:scale-105 hover:shadow-2xl transition duration-300 ease-in-out">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-teal-400 opacity-40 group-hover:opacity-100 transition duration-300 ease-in-out"></div>
          <h3 className="text-xl font-semibold text-blue-900 z-10 relative">Education</h3>
          <p className="mt-4 text-gray-200 z-10 relative">
            Offering free education from nursery to intermediate, along with scholarships for higher education to ensure a bright future for students.
          </p>
        </div>
  
        {/* Ration Distribution Service */}
        <div className="group relative overflow-hidden p-6 bg-blue-50 rounded-lg shadow-xl hover:scale-105 hover:shadow-2xl transition duration-300 ease-in-out">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-teal-400 opacity-40 group-hover:opacity-100 transition duration-300 ease-in-out"></div>
          <h3 className="text-xl font-semibold text-blue-900 z-10 relative">Ration Distribution</h3>
          <p className="mt-4 text-gray-200 z-10 relative">
            Monthly drives to distribute essential food supplies to families facing food insecurity, ensuring they have what they need during tough times.
          </p>
        </div>
  
      </div>
    </section>
  );
  
  export default Services;
  
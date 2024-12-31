// components/CallToAction.tsx
const CallToAction = () => {
    const buttons = [
      {
        title: "Apply for School Scholarship",
        link: "https://tinyurl.com/SweetHomesScholarshipProgram ",
      },
      {
        title: "Apply for Undergraduate Scholarship",
        link: "https://docs.google.com/forms/d/e/1FAIpQLScV_9DaHPUF2_xX_Y8ppsrIV0c-OdgWFDY6E0t8TpG3WkkszA/viewform?pli=1",
      },
    ];
  
    return (
      <section className="py-16 bg-gradient-to-r from-blue-900 via-blue-600 to-blue-400 text-white">
        <div className="max-w-4xl mx-auto text-center">
          {/* Title */}
          <h2 className="text-4xl font-bold mb-8 tracking-wide animate-fadeIn">
            Empower the Future with Your Support
          </h2>
  
          {/* Buttons */}
          <div className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-6">
            {buttons.map((button, index) => (
              <a
                key={index}
                href={button.link}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-blue-900 font-semibold text-lg px-8 py-4 rounded-lg shadow-lg hover:shadow-xl hover:bg-gray-100 transform transition duration-300 ease-out hover:scale-105"
              >
                {button.title}
              </a>
            ))}
          </div>
        </div>
      </section>
    );
  };
  
  export default CallToAction;
  
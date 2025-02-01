import { 
    FaLaptopCode, FaMobileAlt, FaGlobe, FaUsers, 
    FaPencilRuler, FaDatabase, FaCheckCircle, FaLightbulb 
  } from "react-icons/fa";
  
  export default function ServiceSection() {
    const services = [
      { title: "Custom Software Solutions", icon: <FaLaptopCode /> },
      { title: "Mobile App Development", icon: <FaMobileAlt /> },
      { title: "Web Development", icon: <FaGlobe /> },
      { title: "Dedicated Teams", icon: <FaUsers /> },
      { title: "Design", icon: <FaPencilRuler /> },
      { title: "Data Engineering", icon: <FaDatabase /> },
      { title: "QA Testing", icon: <FaCheckCircle /> },
      { title: "Product Development & Consulting", icon: <FaLightbulb /> },
    ];
  
    return (
      <div className="w-full bg-white text-black py-16 px-6 flex flex-col items-center">
        
        {/* Heading and Paragraph Section */}
        <div className="w-full max-w-4xl text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-bold uppercase">
            Services and Solutions We Offer
          </h2>
          <p className="text-lg text-black  mt-4">
            CodeValley technology provides a wide range of software development services and solutions. 
            We also design and implement software products for companies to propel their business forward.
          </p>
        </div>
  
        {/* Service Icons Grid */}
        <div className="flex flex-wrap justify-center gap-4 max-w-6xl">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="flex flex-col items-center justify-center bg-black text-white p-2 rounded-full w-32 h-32 shadow-lg transition-transform transform hover:scale-110 delay-150 duration-300 ease-in-out hover:-translate-y-1  hover:bg-indigo-500 hover:shadow-2xl cursor-pointer"
            >
              <div className="text-4xl text-blue-400">{service.icon}</div>
              <h3 className="text-sm font-semibold text-center mt-2">{service.title}</h3>
            </div>
          ))}
        </div>
  
      </div>
    );
  }
  
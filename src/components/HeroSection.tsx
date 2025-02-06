import { 
  FaBriefcase, FaHeartbeat, FaBuilding, FaTruck, 
  FaCar, FaPlane, FaGraduationCap, FaShieldAlt 
} from "react-icons/fa";
  
  export default function HeroSection() {
    const industries = [
      { title: "Fintech", icon: <FaBriefcase /> },
      { title: "Health Care & Wellbeing", icon: <FaHeartbeat /> },
      { title: "Construction", icon: <FaBuilding /> },
      { title: "Logistic & Transportation", icon: <FaTruck /> },
      { title: "Automotive", icon: <FaCar /> },
      { title: "Travel & Hospitality", icon: <FaPlane /> },
      { title: "EdTech", icon: <FaGraduationCap /> },
      { title: "Insurance & Mortgage", icon: <FaShieldAlt /> },
    ];
     
       return (
         <div className="relative w-full min-h-screen bg-gray-600 text-white py-16 px-6 flex flex-col items-center justify-center">
           
           {/* Heading and Paragraph Section */}
           <div className="w-full max-w-4xl text-center mb-12">
              <h1 className="text-3xl md:text-5xl font-bold uppercase leading-tight">
                  Build Bespoke Software Solution for Your Business Growth
                </h1>
                <p className="text-lg text-gray-300 mt-4">
                From innovative startups to Fortune 500 enterprises, businesses trust us 
                to develop, test, upgrade, and scale their digital products. We ensure smooth 
                growth and lasting success every step of the way.
              </p>
           </div>
     
           {/* Service Icons Grid */}
           <div className="grid grid-cols-2 md:grid-cols-4 justify-center gap-4 max-w-6xl">
            {industries.map((industry, index) => (
              <div
                key={index}
                className="flex flex-col items-center justify-center bg-gray-900 text-white p-6 rounded-2xl shadow-lg transition-transform transform hover:scale-105 hover:shadow-2xl delay-150 duration-300 ease-in-out hover:-translate-y-1  hover:bg-indigo-500 cursor-pointer w-full h-40 gap-4"
              >
                <div className="text-4xl mb-3">{industry.icon}</div>
                <h2 className="text-md text-sm font-semibold text-center">{industry.title}</h2>
              </div>
            ))}
          </div>

     
         </div>
       );
  }
  
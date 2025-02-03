import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube, FaTiktok } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12 px-6">
      <div className="container mx-auto grid md:grid-cols-4 gap-10 text-center md:text-left">
        
        {/* Logo & About */}
        <div className="flex flex-col items-center md:items-start">
          <img src='assets/hit.png' alt='hit' className="w-32 mb-4" />
          <p className="text-gray-300 text-sm max-w-xs">
            Confident in our teamwork that we are going to deliver your project perfectly.
          </p>
        </div>

        {/* Social Media */}
        <div className="flex flex-col items-center md:items-start">
          <h3 className="text-lg font-semibold uppercase mb-4">Follow Us</h3>
          <div className="flex space-x-4">
            <a href="#" className="text-blue-500 hover:text-white text-2xl"><FaFacebookF /></a>
            <a href="#" className="text-pink-500 hover:text-white text-2xl"><FaInstagram /></a>
            <a href="#" className="text-blue-400 hover:text-white text-2xl"><FaTwitter /></a>
            <a href="#" className="text-red-500 hover:text-white text-2xl"><FaYoutube /></a>
            <a href="#" className="text-gray-400 hover:text-white text-2xl"><FaTiktok /></a>
          </div>
        </div>

        {/* Site Map */}
        <div className="flex flex-col items-center md:items-start">
          <h3 className="text-lg font-semibold uppercase mb-4">Site Map</h3>
          <nav className="flex flex-col space-y-2 text-gray-300">
            {["Home", "About", "Product", "Service", "Contact"].map((item, index) => (
              <a key={index} href={`/${item.toLowerCase()}`} className="hover:text-blue-400">
                {item}
              </a>
            ))}
          </nav>
        </div>

        {/* Location */}
        <div className="flex flex-col items-center md:items-start">
          <h3 className="text-lg font-semibold uppercase mb-4">Location</h3>
          <p className="text-gray-300">Ox Bowl Lake, Yenagoa, Bayelsa State.</p>
          <p className="text-gray-300" >+234(0)8066838459</p>
        </div>
      </div>

      {/* Copyright */}
      <div className="text-center text-gray-500 text-sm mt-12 border-t border-gray-700 pt-4">
        © {new Date().getFullYear()} CodeValley Technology. All Rights Reserved.
      </div>
    </footer>
  );
}

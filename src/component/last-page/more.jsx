import React from "react";
import { FaPhone, FaMapMarkerAlt, FaClock, FaUtensils, FaGlobe, FaFacebook, FaInstagram, FaTiktok, FaWhatsapp } from "react-icons/fa";

const MoreInfo = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between max-w-5xl mx-auto p-6 bg-white mb-10 rounded-lg">
      {/* Left Section */}
      <div className="w-full md:w-1/2 space-y-4">
        <h2 className="text-2xl font-bold">More informations</h2>

        <div className="flex items-center space-x-2">
          <FaUtensils className="text-gray-700" />
          <a href="#" className="text-blue-500 font-medium hover:underline">
            See the menu
          </a>
        </div>

        <div className="flex items-center space-x-2">
          <FaPhone className="text-gray-700" />
          <p className="text-gray-700">+847 87 37 29 01</p>
        </div>

        <div className="flex items-center space-x-2">
          <FaMapMarkerAlt className="text-gray-700" />
          <p className="text-gray-700">Singapore, Bishan</p>
        </div>

        <div className="flex items-center space-x-2">
          <FaClock className="text-gray-700" />
          <p className="text-gray-700">7j/7, 08:00 - 22:00</p>
        </div>

        <div className="flex items-center space-x-2">
          <FaGlobe className="text-gray-700" />
          <a href="https://www.bellaitalia.com" className="text-blue-500 font-medium hover:underline">
            www.bellaitalia.com
          </a>
        </div>

        {/* Social Media Icons */}
        <div className="flex space-x-4 mt-2">
          <FaFacebook className="text-gray-600 cursor-pointer hover:text-blue-500 text-xl" />
          <FaInstagram className="text-gray-600 cursor-pointer hover:text-pink-500 text-xl" />
          <FaTiktok className="text-gray-600 cursor-pointer hover:text-black text-xl" />
          <FaWhatsapp className="text-gray-600 cursor-pointer hover:text-green-500 text-xl" />
        </div>
      </div>

      {/* Right Section - Google Map */}
      <div className="w-full md:w-1/2 mt-6 md:mt-0">
        <iframe
          title="Google Map"
          className="w-full h-64 rounded-lg shadow-lg"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7968.380878599142!2d103.83318309227602!3d1.3622003723776165!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31da16f3857f1ef1%3A0x6ae2b3e9c7c5112!2sBishan-Ang%20Mo%20Kio%20Park!5e0!3m2!1sen!2s!4v1707133540564"
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
};

export default MoreInfo;

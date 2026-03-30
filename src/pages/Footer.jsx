import React from "react";
import { FaInstagram, FaYoutube, FaTwitter, FaDribbble, FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-teal-700 text-white py-16 px-6">
      <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-10">

        {/* Column 1 */}
        <div>
          <h2 className="text-2xl font-bold mb-4">Coursespace</h2>

          <p className="text-gray-200 mb-6">
            Coursespace is an online learning platform that has been
            operating since 2018 until now.
          </p>

          <div className="flex gap-4 text-xl">
            <FaInstagram />
            <FaYoutube />
            <FaTwitter />
            <FaDribbble />
            <FaGithub />
          </div>
        </div>

        {/* Column 2 */}
        <div>
          <h3 className="font-semibold text-lg mb-4">Course</h3>
          <ul className="space-y-2 text-gray-200">
            <li>UI/UX Design</li>
            <li>Mobile Development</li>
            <li>Machine Learning</li>
            <li>Web Development</li>
          </ul>
        </div>

        {/* Column 3 */}
        <div>
          <h3 className="font-semibold text-lg mb-4">Menu</h3>
          <ul className="space-y-2 text-gray-200">
            <li>Home</li>
            <li>Courses</li>
            <li>Testimonial</li>
            <li>Mentor</li>
          </ul>
        </div>

        {/* Column 4 */}
        <div>
          <h3 className="font-semibold text-lg mb-4">About</h3>
          <ul className="space-y-2 text-gray-200">
            <li>Contact Us</li>
            <li>Privacy & Policy</li>
            <li>Term & Condition</li>
            <li>FAQ</li>
          </ul>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
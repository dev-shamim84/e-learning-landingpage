import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
} from "react-icons/fa";
import logo from "../../assets/headerlogo.png";
import { IoLogoTwitter } from "react-icons/io";
import Animation from "../Motion/Animation";

const Footer = () => {
  return (
    <footer className=" bg-[#0B1D38] text-white">
      <div className="container mx-auto px-4 py-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Logo & Text */}
          <Animation delay={0.2} direction="up">
            <div>
              <img
                src={logo}
                alt="logo"
                className="mb-4 w-16 h-16 object-contain"
              />
              <p className="text-sm text-gray-300 mb-6">
                when an unknown printer took galley of type and scrambled it to
                make specimen book has.
              </p>

              {/* Social Icons */}
              <div className="flex gap-3">
                <FaFacebookF className="bg-amber-600 p-3 rounded-full text-white text-xl" />
                <FaInstagram className="bg-amber-600 p-3 rounded-full text-white text-xl" />
                <IoLogoTwitter className="bg-amber-600 p-3 rounded-full text-white text-xl" />
                <FaLinkedinIn className="bg-amber-600 p-3 rounded-full text-white text-xl" />
                <FaYoutube className="bg-amber-600 p-3 rounded-full text-white text-xl" />
              </div>
            </div>
          </Animation>

          {/* Contact */}
          <div>
            <Animation delay={0.2} direction="up">
              <h3 className="font-semibold mb-4">Contact us</h3>
              <p className="flex items-center gap-2 text-sm text-gray-300 mb-3">
                <span className="bg-white text-black p-2 rounded-md">📧</span>
                contact@learning.com
              </p>
              <p className="flex items-center gap-2 text-sm text-gray-300">
                <span className="bg-white text-black p-2 rounded-md">📞</span>
                (414) 687 - 5892
              </p>
            </Animation>
          </div>

          {/* About us */}
          <div>
            <Animation delay={0.2} direction="up">
              <h3 className="font-semibold mb-4">About us</h3>
              <ul className="space-y-2 text-gray-300 text-sm">
                <li>Mission</li>
                <li>Our team</li>
                <li>Awards</li>
                <li>Testimonials</li>
                <li>About Mentor</li>
              </ul>
            </Animation>
          </div>

          {/* Courses */}
          <div>
            <Animation delay={0.2} direction="up">
              <h3 className="font-semibold mb-4">Online classes</h3>
              <ul className="space-y-2 text-gray-300 text-sm">
                <li>Online science classes</li>
                <li>Online mathematics classes</li>
                <li>Online computer classes</li>
                <li>Online statistics classes</li>
                <li>Online geographic classes</li>
              </ul>
            </Animation>
          </div>
        </div>

        {/* Newsletter */}
        <div className="mt-12 flex flex-col justify-between md:flex-row  gap-6">
          <Animation delay={0.2} direction="up">
            <div>
              <h4 className="font-semibold mb-2">
                Subscribe to our newsletter
              </h4>
              <p className="text-sm text-gray-300">
                Subscribe today to unlock a wealth of knowledge, delivered right
                to your email, and stay ahead of the curve with ease.
              </p>
            </div>
          </Animation>
          <Animation delay={0.2} direction="up">
            <form className="flex">
              <input
                type="email"
                placeholder="Enter your email address"
                className="px-4 py-2 w-full bg-white rounded-l-lg text-black outline-none"
              />
              <button
                type="submit"
                className="bg-amber-600 px-5 py-2 rounded-r-lg font-semibold"
              >
                Subscribe
              </button>
            </form>
          </Animation>
        </div>

        {/* Bottom */}
        <div className="mt-10 border-t border-gray-700 pt-4 text-center text-sm text-gray-400">
          <Animation delay={0.2} direction="up">
            Copyright © 2025 Learning Agency | All Rights Reserved |{" "}
            <a href="#" className="hover:underline">
              Terms and Conditions
            </a>{" "}
            |{" "}
            <a href="#" className="hover:underline">
              Privacy Policy
            </a>
          </Animation>
        </div>
      </div>
      {/* Top Section */}
    </footer>
  );
};

export default Footer;

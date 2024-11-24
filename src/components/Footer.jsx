import React from "react";
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="w-full bg-blue-950 p-7">
      <div className="grid sm:grid-cols-[_2fr,_1fr,_1fr]  grid-cols-1 m-3 text-white gap-7">
        <div>
          <h4 className="mb-3 font-bold">e-Shop</h4>
          <p className="text-sm text-gray-300 ">
            {" "}
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Perspiciatis molestiae pariatur repellendus fugiat.
          </p>
        </div>
        <div>
          <h4 className="mb-3 font-bold">Quick Links</h4>
          <ul className="space-y-2 text-sm font-semibold text-gray-300">
            <li>Home</li>
            <li>Shop</li>
            <li>About Us</li>
            <li>Contact Us</li>
          </ul>
        </div>
        <div>
          <h4 className="mb-3 font-bold">Follow Us</h4>
          <div className="flex gap-3">
            <FaFacebook />
            <FaTwitter />
            <FaInstagram />
            <FaLinkedin />
          </div>
          <div className="flex items-center justify-between px-2 pr-0 overflow-hidden border rounded-md mt-7">
            <input
              className="text-sm bg-transparent outline-none "
              type="text"
              placeholder="Your email"
            />
            <button className="px-3 py-2 text-sm font-bold transition-all transform bg-red-500 border hover:scale-105">
              Subscribe
            </button>
          </div>
        </div>
      </div>
      <hr className="border-gray-500 mt-7" />
      <div className="flex justify-between mt-8 text-xs text-white ">
        <p>© 2024 Your Company Name. All rights reserved.</p>
        <p>
          Privacy police Term
          <span className="ml-3 ">Term of Service</span>
        </p>
      </div>
    </div>
  );
};

export default Footer;

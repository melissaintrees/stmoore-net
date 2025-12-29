import { useState } from "react";
import { FaInstagram, FaTiktok, FaYoutube } from "react-icons/fa6";
import { NavLink, Link } from "react-router";

const Footer = () => {
  const socialBase =
    "transition text-darkblue hover:text-banana bg-white rounded-full hover:bg-darkblue font-semibold";
  const currentYear = new Date().getFullYear();
  return (
    <footer className="bg-darkred text-white py-16 px-6">
      <div className="max-w-6xl mx-auto ">

        <div className="flex justify-center mt-3 gap-4">
          <NavLink
            className={socialBase}
            to={"http://tiktok.com/@stmooresfire"}
          >
            <div className="circle-icon-container">
              <FaTiktok className="text-md" />
            </div>
          </NavLink>
          <NavLink
            className={socialBase}
            to={"http://instagram.com/stmooresfire"}
          >
            <div className="circle-icon-container">
              <FaInstagram className="text-md" />
            </div>
          </NavLink>
          <NavLink
            className={socialBase}
            to={"http://youtube.com/stmooresfire"}
          >
            <div className="circle-icon-container">
              <FaYoutube className="text-md" />
            </div>
          </NavLink>
        </div>
        {/* Copyright */}
        <div className="text-center mt-4 pt-4 text-lg">
          <div className="text-banana font-semibold tracking-wider">
            St Moore Dev
            © {currentYear} All Rights Reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

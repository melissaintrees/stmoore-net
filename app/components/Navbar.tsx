import { useState } from "react";
import { NavLink } from "react-router";
import { FaTimes, FaBars } from "react-icons/fa";
import { FaInstagram, FaTiktok, FaYoutube } from "react-icons/fa6";
import { motion } from "motion/react"

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const mBase = "transition text-white hover:text-lavender font-normal text-3xl";
  const mActive = "transition text-white hover:text-lavender font-normal text-3xl";

  return (
     <motion.div   
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1}}
        transition={{ duration:.7, ease: "easeOut", }}
        >
    <header className="bg-watermelon">
      <nav className="max-w-6xl mx-auto flex items-center justify-between p-5">
        {/*left aligned nav */}
        <div className="flex flex-1">
               
              <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-darkblue hover:text-darkblue/70 text-4xl cursor-pointer"
            title="Menu"
          >
            {menuOpen ? (
              <FaTimes className="font-light" />
            ) : (
              <FaBars aria-hidden="true"/>
            )}
          </button>
   
  
        </div>

        {/*centered logo */}

          <div className="lg:flex flex justify-center">
        
              <span className="sr-only">
                The Official for St Moore, Synthpop artist
              </span>
              <img
                alt="Logo for St Moore, the synthpop artist"
                src="../../st-moore-logo.png"
                className="w-24 h-auto"
              />
         
          </div>
 

        {/* subscribe right menu */}
        <div className="flex flex-1 justify-end ">
        
            <NavLink
              className="text-lg py-2 px-3 outline-solid outline-4 outline-darkblue hover:outline-darkblue/70 cursor-pointer text-darkblue hover:text-darkblue/70 font-light transition-colors duration-300"
              target="blank"
              to="https://mailchi.mp/5a651d9e5e32/stmooresfire"
            >
              SUBSCRIBE
            </NavLink>
        
        </div>

        {/*mobile menu */}
   
      </nav>
      {/* Mobile Nav */}
      {menuOpen && (
        <div className="flex flex-col bg-darkred border-t border-darkblue px-6 py-8 space-y-5 text-center">
          <NavLink
            className={({ isActive }) => (isActive ? mActive : mBase)}
            to="/"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            HOME
          </NavLink>
          <NavLink
            className={({ isActive }) => (isActive ? mActive : mBase)}
            to="#videos"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            VIDEOS
          </NavLink>
          <NavLink
            className={({ isActive }) => (isActive ? mActive : mBase)}
            to="#about"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            ABOUT
          </NavLink>
          <NavLink
            className={({ isActive }) => (isActive ? mActive : mBase)}
            to="#show"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            SHOW
          </NavLink>
          {/* <NavLink
            className={({ isActive }) => (isActive ? mActive : mBase)}
            to="/contact"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            CONTACT
          </NavLink> */}
          <div className="space-x-5 p-4 align-center">
            <NavLink
              className={({ isActive }) => (isActive ? mActive : mBase)}
              to={"http://tiktok.com/@stmooresfire"}
              onClick={() => setMenuOpen(!menuOpen)}
            >
              <div className="circle-icon-container bg-white text-darkblue rounded-full hover:bg-white/80 hover:text-darkblue/80 ">
                <FaTiktok className="text-lg " />
              </div>
            </NavLink>
            <NavLink
              className={({ isActive }) => (isActive ? mActive : mBase)}
              to={"http://instagram.com/stmooresfire"}
              onClick={() => setMenuOpen(!menuOpen)}
            >
              <div className="circle-icon-container bg-white text-darkblue rounded-full hover:bg-white/80 hover:text-darkblue/80 ">
                <FaInstagram className="text-lg" />
              </div>
            </NavLink>

            <NavLink
              to={"http://youtube.com/stmooresfire"}
              onClick={() => setMenuOpen(!menuOpen)}
            >
              <div className="circle-icon-container bg-white text-darkblue rounded-full hover:bg-white/80 hover:text-darkblue/80 ">
                <FaYoutube className="text-lg" />
              </div>
            </NavLink>
          </div>
        </div>
      )}
    </header>
    </motion.div>
  );
};

export default Navbar;

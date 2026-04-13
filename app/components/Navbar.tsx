import { useState, useEffect } from "react";
import { NavLink } from "react-router";
import { FaTimes, FaBars } from "react-icons/fa";
import { FaInstagram, FaTiktok, FaYoutube } from "react-icons/fa6";
import { motion } from "motion/react"

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const mBase = "transition text-black font-semibold font-normal text-[18px]";
  const mActive = "transition text-black font-semibold hover:text-white font-normal text-[18px]";
  // Function to close the menu on viewport change
  const handleResize = () => {
    // Check if the screen width is larger than your mobile breakpoint (e.g., 'md')
    // Tailwind's default 'md' breakpoint is 768px.
    if (window.innerWidth >= 768) {
      setMenuOpen(false);
    }
  };

  useEffect(() => {
    // Add event listener when the component mounts
    window.addEventListener('resize', handleResize);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []); // Empty dependency array means this runs once on mount and cleanup on unmount
  return (
     <motion.div   
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1}}
        transition={{ duration:.7, ease: "easeIn", }}
        >
    <header className="bg-watermelon">
  
        <nav className="container w-full max-w-6xl mx-auto px-4 py-2 mx-auto bg-watermelon  md:px-5 md:py-6">
  <div className=" flex items-center justify-between ">
    
 
                <div className="flex  flex flex-col gap-4 mt-2 mb-4 md:mb-0 md:mt-0 md:flex-row md:items-center md:gap-5">
              <img
                aria-label="The Official Site for St Moore, Magical Synthpop artist "
                src="../../st-moore-logo.png"
                className="w-24 h-auto"
              />
                </div>
  
              <ul className="hidden md:flex gap-3 mt-2 mb-4 md:mb-0 md:mt-0 md:flex-row items-center ">
                <li
                  className="flex-1 items-center p-3 ">
        
        
              <NavLink
                    className={({ isActive }) => (isActive ? mActive : mBase)}
                    to="/"
                    onClick={() => setMenuOpen(!menuOpen)}
                  >
                    HOME
                  </NavLink>
                </li>
                <li
                  className=" p-3  ">
        
        
              <NavLink
                    className={({ isActive }) => (isActive ? mActive : mBase)}
                    to="#videos"
                    onClick={() => setMenuOpen(!menuOpen)}
                  >
                    VIDEOS
                  </NavLink>
                </li>
                <li
                  className="flex-1  p-3  ">
          <NavLink
                    className={({ isActive }) => (isActive ? mActive : mBase)}
                    to="#about"
                    onClick={() => setMenuOpen(!menuOpen)}
                  >
                    ABOUT
                  </NavLink>
                </li>
                <li
                  className="flex-1  p-3  ">

                  <NavLink
                    className={({ isActive }) => (isActive ? mActive : mBase)}
                    to="#show"
                    onClick={() => setMenuOpen(!menuOpen)}
                  >
                    SHOW
                  </NavLink>
                </li>
                        <li
                  className="flex-1  p-3  ">

                  <NavLink
                    className={({ isActive }) => (isActive ? mActive : mBase)}
                    to="https://mailchi.mp/5a651d9e5e32/stmooresfire"
                    onClick={() => setMenuOpen(!menuOpen)}
                  >
                    SUBSCRIBE
                  </NavLink>
                </li>
                 <li
                  className="flex  p-3 ">
                      <div className="space-x-4 align-center">
                    <NavLink
                      className={({ isActive }) => (isActive ? mActive : mBase)}
                      to={"http://tiktok.com/@stmooresfire"}
                      onClick={() => setMenuOpen(!menuOpen)}
                      aria-label={"Link to St Moore's TikTok"}
                    >
                      <div className="circle-icon-container bg-white text-darkblue rounded-full hover:bg-white/80 hover:text-darkblue/80 ">
                        <FaTiktok className="text-lg " />
                      </div>
                    </NavLink>
                    <NavLink
                      className={({ isActive }) => (isActive ? mActive : mBase)}
                      to={"http://instagram.com/stmooresfire"}
                      onClick={() => setMenuOpen(!menuOpen)}
                      aria-label={"Link to St Moore's Instagram"}
                    >
                      <div className="circle-icon-container bg-white text-darkblue rounded-full hover:bg-white/80 hover:text-darkblue/80 ">
                        <FaInstagram className="text-lg" />
                      </div>
                    </NavLink>

                    <NavLink
                      to={"http://youtube.com/stmooresfire"}
                      onClick={() => setMenuOpen(!menuOpen)}
                      aria-label={"Link to St Moore's YouTube Channel"}
                    >
                      <div className="circle-icon-container bg-white text-darkblue rounded-full hover:bg-white/80 hover:text-darkblue/80 ">
                        <FaYoutube className="text-lg" />
                      </div>
                    </NavLink>
                  </div>
                  </li>
              </ul>
              <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="flex order-1 md:hidden text-darkblue hover:text-darkblue/70 text-4xl cursor-pointer  "
            title="Menu"
          >
            {menuOpen ? (
              <FaTimes className="font-light" />
            ) : (
              <FaBars aria-hidden="true"/>
            )}
          </button>
          
  </div>
        </nav>
      {/* Mobile Nav */}
      {menuOpen && (
        <div className="flex md:hidden flex-col bg-darkred border-t border-darkblue px-6 py-8 space-y-5 text-center">
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
          <NavLink
            className={({ isActive }) => (isActive ? mActive : mBase)}
            to="https://mailchi.mp/5a651d9e5e32/stmooresfire"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            SUBSCRIBE
          </NavLink>
          <div className="space-x-5 p-3 align-center">
            <NavLink
              className={({ isActive }) => (isActive ? mActive : mBase)}
              to={"http://tiktok.com/@stmooresfire"}
              aria-label="Link to St Moore's Tiktok"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              <div className="circle-icon-container bg-white text-darkblue rounded-full hover:bg-white/80 hover:text-darkblue/80 ">
                <FaTiktok className="text-lg " />
              </div>
            </NavLink>
            <NavLink
              className={({ isActive }) => (isActive ? mActive : mBase)}
              to={"http://instagram.com/stmooresfire"}
              aria-label="Link to St Moore's Instagram"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              <div className="circle-icon-container bg-white text-darkblue rounded-full hover:bg-white/80 hover:text-darkblue/80 ">
                <FaInstagram className="text-lg" />
              </div>
            </NavLink>

            <NavLink
              to={"http://youtube.com/stmooresfire"}
              aria-label="Link to St Moore's YouTube Channel"
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

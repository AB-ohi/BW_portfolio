"use client";
import React, { useState, useEffect } from "react";
import { Home, User, Wrench, Briefcase, Menu, X } from "lucide-react";
import { Link } from "react-scroll";

const Navbar = () => {
  const [activeItem, setActiveItem] = useState("Home");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const navItems = [
    { name: "Home", icon: Home, to: "home" },
    { name: "About Me", icon: User, to: "about" },
    { name: "My Skill", icon: Wrench, to: "skill" },
    { name: "My Project", icon: Briefcase, to: "project" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (itemName) => {
    setActiveItem(itemName);
    setIsMenuOpen(false);
  };

  return (
    <>
      <nav 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled 
            ? "bg-gradient-to-r from-slate-900 via-purple-900/98 to-slate-900 backdrop-blur-xl shadow-2xl shadow-purple-500/30" 
            : "bg-gradient-to-r from-slate-900 via-purple-900/95 to-slate-900 backdrop-blur-lg"
        } border-b border-purple-500/30`}
      >
        <div className="w-11/12 max-w-7xl mx-auto">
          <div className="flex justify-between items-center h-20 md:h-20">
            {/* Logo */}
            <div className="group cursor-pointer z-50">
              <div className="relative">
                <img
                  className="w-16 h-16 md:w-20 md:h-20 object-contain transition-all duration-500 group-hover:scale-110 group-hover:rotate-6 drop-shadow-2xl"
                  src="https://i.ibb.co/JyLk2f0/logo.png"
                  alt="Logo"
                />
                <div className="absolute inset-0 bg-purple-500/30 blur-xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10"></div>
              </div>
            </div>

            {/* Desktop Navigation */}
            <ul className="hidden lg:flex gap-8 list-none">
              {navItems.map((item, index) => {
                const Icon = item.icon;
                const isActive = activeItem === item.name;

                return (
                  <li  key={index} className="relative group cursor-pointer">
                    <Link to={item.to}
                  smooth={true}
                  duration={700}
                  offset={-80}
                  onSetActive={() => setActiveItem(item.name)}
                  spy={true}
                      onClick={() => handleNavClick(item.name)}
                      className="relative h-12 w-28 flex items-center justify-center overflow-hidden"
                    >
                      <span
                        className={`absolute text-base font-semibold transition-all duration-500 ease-out text-purple-300
                          ${isActive ? "translate-y-[-150%] opacity-0" : "translate-y-0 opacity-100"}
                          group-hover:translate-y-[-150%] group-hover:opacity-0`}
                      >
                        {item.name}
                      </span>

                      <div
                        className={`absolute transition-all duration-500 ease-out
                          ${isActive ? "translate-y-0 opacity-100" : "translate-y-[150%] opacity-0"}
                          group-hover:translate-y-0 group-hover:opacity-100`}
                      >
                        <Icon className={`w-7 h-7 ${isActive ? "text-cyan-400" : "text-blue-400"}`} />
                      </div>

                      <div 
                        className={`absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg 
                          transition-opacity duration-300 -z-10
                          ${isActive ? "opacity-20" : "opacity-0"}
                          group-hover:opacity-20`}
                      ></div>

                      {isActive && (
                        <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-cyan-400 rounded-full animate-pulse shadow-lg shadow-cyan-400/50"></div>
                      )}
                    </Link>

                    <div 
                      className={`absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-purple-500 to-cyan-500 
                        transition-all duration-500 ease-out
                        ${isActive ? "w-full" : "w-0"}
                        group-hover:w-full`}
                    ></div>
                  </li>
                );
              })}
            </ul>

            {/* Hamburger Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden relative w-12 h-12 flex items-center justify-center rounded-lg bg-purple-600/20 border border-purple-500/30 hover:bg-purple-600/30 transition-all duration-300 group z-50"
            >
              <div className="relative w-6 h-6">
                <span
                  className={`absolute left-0 h-0.5 w-6 bg-purple-300 transition-all duration-300 ease-out ${
                    isMenuOpen ? "top-3 rotate-45" : "top-1 rotate-0"
                  }`}
                ></span>
                <span
                  className={`absolute left-0 top-3 h-0.5 w-6 bg-purple-300 transition-all duration-300 ease-out ${
                    isMenuOpen ? "opacity-0 translate-x-4" : "opacity-100 translate-x-0"
                  }`}
                ></span>
                <span
                  className={`absolute left-0 h-0.5 w-6 bg-purple-300 transition-all duration-300 ease-out ${
                    isMenuOpen ? "top-3 -rotate-45" : "top-5 rotate-0"
                  }`}
                ></span>
              </div>
              
              <div className="absolute inset-0 bg-purple-500/30 blur-lg rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>
            </button>
          </div>

          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-purple-500 to-transparent opacity-50"></div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 bg-black/80 backdrop-blur-sm z-40 lg:hidden transition-all duration-500 ${
          isMenuOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        onClick={() => setIsMenuOpen(false)}
      ></div>

      {/* Mobile Menu */}
      <div
        className={`fixed top-0 right-0 h-full w-72 sm:w-80 bg-gradient-to-b from-slate-900 via-purple-900/98 to-slate-900 backdrop-blur-xl border-l border-purple-500/30 shadow-2xl shadow-purple-500/50 z-40 lg:hidden transition-all duration-500 ease-out ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Mobile Menu Header */}
        <div className="p-6 border-b border-purple-500/20">
          <h2 className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
            Navigation
          </h2>
          <p className="text-sm text-purple-300/70 mt-1">Choose your destination</p>
        </div>

        {/* Mobile Menu Items */}
        <ul className="flex flex-col gap-2 p-4 mt-4">
          {navItems.map((item, index) => {
            const Icon = item.icon;
            const isActive = activeItem === item.name;

            return (
              <li
                key={index}
                className={`transform transition-all duration-500 ${
                  isMenuOpen 
                    ? "translate-x-0 opacity-100" 
                    : "translate-x-full opacity-0"
                }`}
                style={{ transitionDelay: `${index * 75}ms` }}
              >
                <Link to={item.to}
                  smooth={true}
                  duration={700}
                  offset={-80}
                  onClick={() => handleNavClick(item.name)}
                  className={`w-full group relative overflow-hidden rounded-xl transition-all duration-300 ${
                    isActive 
                      ? "bg-gradient-to-r from-purple-600/40 to-blue-600/40 border-2 border-cyan-400/50" 
                      : "bg-slate-800/30 border border-purple-500/20 hover:border-purple-400/40"
                  }`}
                >
                  <div className="flex items-center gap-4 p-4 relative z-10">
                    <div className={`flex items-center justify-center w-12 h-12 rounded-lg transition-all duration-300 ${
                      isActive 
                        ? "bg-cyan-400/20 scale-110" 
                        : "bg-purple-600/20 group-hover:bg-purple-600/30 group-hover:scale-105"
                    }`}>
                      <Icon className={`w-6 h-6 transition-all duration-300 ${
                        isActive 
                          ? "text-cyan-400" 
                          : "text-purple-300 group-hover:text-blue-400"
                      }`} />
                    </div>
                    
                    <span className={`text-lg font-semibold transition-colors duration-300 ${
                      isActive 
                        ? "text-cyan-300" 
                        : "text-purple-200 group-hover:text-white"
                    }`}>
                      {item.name}
                    </span>

                    {isActive && (
                      <div className="ml-auto">
                        <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse shadow-lg shadow-cyan-400/50"></div>
                      </div>
                    )}
                  </div>

                </Link>
              </li>
            );
          })}
        </ul>

        {/* Mobile Menu Footer */}
        <div className="absolute bottom-0 left-0 right-0 p-6 border-t border-purple-500/20">
          <div className="flex items-center justify-center gap-2 text-purple-300/70">
            <div className="w-8 h-0.5 bg-gradient-to-r from-transparent to-purple-500/50"></div>
            <span className="text-sm">Swipe to explore</span>
            <div className="w-8 h-0.5 bg-gradient-to-l from-transparent to-purple-500/50"></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
'use client'
import React, { useState } from 'react';
import { Home, User, Wrench, Briefcase } from 'lucide-react';

const Navbar = () => {
  const [activeItem, setActiveItem] = useState('Home');

  const navItems = [
    { name: 'Home', icon: Home },
    { name: 'About Me', icon: User },
    { name: 'My Skill', icon: Wrench },
    { name: 'My Project', icon: Briefcase }
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50  from-slate-900 via-purple-900/95 to-slate-900 backdrop-blur-lg border-b border-purple-500/30 shadow-lg shadow-purple-500/20">
      <div className="w-11/12 max-w-7xl mx-auto flex justify-between items-center">
        
        {/* Logo */}
        <div className="group cursor-pointer">
          <div className="relative">
            <img
              className="w-20 h-20 object-contain transition-all duration-500 group-hover:scale-110 group-hover:rotate-6 drop-shadow-2xl"
              src="https://i.ibb.co/JyLk2f0/logo.png"
              alt="Logo"
            />
            {/* Logo Glow Effect */}
            <div className="absolute inset-0 bg-purple-500/30 blur-xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10"></div>
          </div>
        </div>

        {/* Navigation Items */}
        <ul className="flex gap-8 list-none">
          {navItems.map((item, index) => {
            const Icon = item.icon;
            const isActive = activeItem === item.name;
            
            return (
              <li
                key={index}
                onClick={() => setActiveItem(item.name)}
                className="relative group cursor-pointer"
              >
                {/* Text and Icon Container */}
                <div className="relative h-12 w-28 flex items-center justify-center overflow-hidden">
                  
                  {/* Text */}
                  <span className={`
                    absolute text-base font-semibold transition-all duration-500 ease-out
                    ${isActive ? 'text-cyan-400' : 'text-purple-300'}
                    group-hover:translate-y-[-150%] group-hover:opacity-0
                  `}>
                    {item.name}
                  </span>

                  {/* Icon */}
                  <div className={`
                    absolute translate-y-[150%] opacity-0 
                    transition-all duration-500 ease-out
                    group-hover:translate-y-0 group-hover:opacity-100
                  `}>
                    <Icon 
                      className={`w-7 h-7 ${isActive ? 'text-cyan-400' : 'text-blue-400'}`}
                    />
                  </div>

                  {/* Animated Background on Hover */}
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg opacity-0 group-hover:opacity-20 transition-opacity duration-300 -z-10"></div>
                  
                  {/* Active Indicator */}
                  {isActive && (
                    <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-cyan-400 rounded-full animate-pulse shadow-lg shadow-cyan-400/50"></div>
                  )}
                </div>

                {/* Bottom Border Animation */}
                <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-500 to-cyan-500 group-hover:w-full transition-all duration-500 ease-out"></div>
                
                {/* Ripple Effect on Click */}
                <div className="absolute inset-0 rounded-lg opacity-0 group-active:opacity-100 bg-white/10 transition-opacity duration-150"></div>
              </li>
            );
          })}
        </ul>

      </div>

      {/* Top Border Glow */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-purple-500 to-transparent opacity-50"></div>
    </nav>
  );
};

export default Navbar;
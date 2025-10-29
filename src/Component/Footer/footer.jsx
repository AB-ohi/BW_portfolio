'use client';
import React from 'react';
import { Facebook, Github, Linkedin, Mail, Phone, MapPin, Heart, ArrowUp } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const quickLinks = [
    { name: 'Home', to: 'home' },
    { name: 'About Me', to: 'about' },
    { name: 'My Skills', to: 'skill' },
    { name: 'Projects', to: 'project' },
  ];

  const socialLinks = [
    { 
      name: 'Facebook', 
      icon: Facebook, 
      url: 'https://www.facebook.com/ab.ohi.14',
      color: 'hover:bg-blue-600'
    },
    { 
      name: 'GitHub', 
      icon: Github, 
      url: 'https://github.com/AB-ohi',
      color: 'hover:bg-gray-700'
    },
    { 
      name: 'LinkedIn', 
      icon: Linkedin, 
      url: 'https://www.linkedin.com/in/ohi-khan/',
      color: 'hover:bg-blue-700'
    },
    
  ];

  return (
    <footer className="relative bg-gradient-to-br from-slate-950 via-purple-950 to-slate-950 text-white border-t border-purple-500/30 mt-5">
      {/* Scroll to Top Button */}
      <button
        onClick={scrollToTop}
        className="absolute -top-6 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 p-4 rounded-full shadow-2xl shadow-purple-500/50 transition-all duration-300 hover:scale-110 group"
        aria-label="Scroll to top"
      >
        <ArrowUp className="w-6 h-6 group-hover:animate-bounce" />
      </button>

      <div className="max-w-7xl mx-auto px-8 py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          
          {/* About Section */}
          <div className="space-y-4">
            <div className="flex items-center gap-3 mb-4">
              <img
                src="https://i.ibb.co/JyLk2f0/logo.png"
                alt="Logo"
                className="w-16 h-16 object-contain"
              />
              <h3 className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                Your Name
              </h3>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Full Stack Developer passionate about creating beautiful and functional web applications. 
              Let's build something amazing together!
            </p>
            {/* Social Links */}
            <div className="flex gap-3 pt-2">
              {socialLinks.map((social, index) => {
                const Icon = social.icon;
                return (
                  <a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`p-2.5 bg-slate-800 ${social.color} rounded-lg transition-all duration-300 hover:scale-110 hover:-translate-y-1`}
                    aria-label={social.name}
                  >
                    <Icon className="w-5 h-5" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-purple-300 mb-4">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                   smooth={true}
                  duration={700}
                    href={`#${link.to}`}
                    className="text-gray-400 hover:text-purple-400 transition-colors duration-300 flex items-center gap-2 group"
                  >
                    <span className="w-0 h-0.5 bg-purple-400 group-hover:w-4 transition-all duration-300"></span>
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-purple-300 mb-4">Services</h4>
            <ul className="space-y-3 text-gray-400 text-sm">
              <li className="flex items-center gap-2 hover:text-purple-400 transition-colors duration-300 cursor-pointer">
                <span className="w-1.5 h-1.5 bg-purple-400 rounded-full"></span>
                Web Development
              </li>
              <li className="flex items-center gap-2 hover:text-purple-400 transition-colors duration-300 cursor-pointer">
                <span className="w-1.5 h-1.5 bg-purple-400 rounded-full"></span>
                UI/UX Design
              </li>
              <li className="flex items-center gap-2 hover:text-purple-400 transition-colors duration-300 cursor-pointer">
                <span className="w-1.5 h-1.5 bg-purple-400 rounded-full"></span>
                Mobile App Development
              </li>
              <li className="flex items-center gap-2 hover:text-purple-400 transition-colors duration-300 cursor-pointer">
                <span className="w-1.5 h-1.5 bg-purple-400 rounded-full"></span>
                API Integration
              </li>
              <li className="flex items-center gap-2 hover:text-purple-400 transition-colors duration-300 cursor-pointer">
                <span className="w-1.5 h-1.5 bg-purple-400 rounded-full"></span>
                Consulting
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-purple-300 mb-4">Get In Touch</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-gray-400 text-sm group">
                <MapPin className="w-5 h-5 text-purple-400 flex-shrink-0 group-hover:scale-110 transition-transform duration-300" />
                <span className="group-hover:text-purple-300 transition-colors duration-300">
                  Dhaka, Bangladesh
                </span>
              </li>
              <li className="flex items-start gap-3 text-gray-400 text-sm group">
                <Mail className="w-5 h-5 text-purple-400 flex-shrink-0 group-hover:scale-110 transition-transform duration-300" />
                <a 
                  href="mailto:your@email.com" 
                  className="group-hover:text-purple-300 transition-colors duration-300 break-all"
                >
                  ohikha63907@email.com
                </a>
              </li>
              <li className="flex items-start gap-3 text-gray-400 text-sm group">
                <Phone className="w-5 h-5 text-purple-400 flex-shrink-0 group-hover:scale-110 transition-transform duration-300" />
                <a 
                  href="tel:+8801234567890" 
                  className="group-hover:text-purple-300 transition-colors duration-300"
                >
                  +880 185 524 0429
                </a>
              </li>
            </ul>
           
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-purple-500/50 to-transparent mb-8"></div>

        {/* Bottom Footer */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-400">
          <p className="flex items-center gap-1.5">
            © {new Date().getFullYear()} 
            <span className="text-purple-400 font-semibold">Abu Sime Khan Ohi</span>
            . All rights reserved.
          </p>
          
          <p className="flex items-center gap-1.5">
            Made with 
            <Heart className="w-4 h-4 text-red-500 fill-red-500 animate-pulse" />
            by 
            <span className="text-purple-400 font-semibold">Abu Sime Khan Ohi</span>
          </p>

          <div className="flex gap-6">
            <a href="#" className="hover:text-purple-400 transition-colors duration-300">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-purple-400 transition-colors duration-300">
              Terms of Service
            </a>
          </div>
        </div>
      </div>

      {/* Background Decorative Elements */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-purple-600/10 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-pink-600/10 rounded-full blur-3xl -z-10"></div>
    </footer>
  );
};

export default Footer;
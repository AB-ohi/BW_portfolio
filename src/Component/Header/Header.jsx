import React from 'react'
import { Facebook, Github, Linkedin, Mail } from 'lucide-react'

const Header = () => {
  return (
    <header className="min-h-screen flex items-center justify-center  px-8">
      <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        
        {/* Left Side - Image with Icons */}
        <div className="flex justify-center">
          <div className="relative group">
            {/* Profile Image */}
            <div className="relative overflow-hidden">
              <div className="w-80 h-80 rounded-2xl overflow-hidden border-4 border-purple-500 shadow-2xl shadow-purple-500/50">
                <img 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" 
                  src="https://i.ibb.co/6B91vTv/mying.png" 
                  alt="Profile" 
                />
              </div>
              
              {/* Running Border Animation */}
              {/* <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute inset-0 rounded-2xl border-4 border-transparent border-t-cyan-400 border-r-pink-400 animate-spin"></div>
              </div> */}
            </div>

            {/* Social Icons - Slide up from bottom on hover */}
            <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 translate-y-full opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 ease-out">
              <div className="bg-slate-800/90 backdrop-blur-sm rounded-full px-6 py-3 flex gap-4 shadow-2xl border border-purple-500/50">
                <a 
                  href="https://www.facebook.com/ab.ohi.14" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-blue-600 hover:bg-blue-700 p-3 rounded-full transition-all duration-300 hover:scale-110 hover:-translate-y-1 shadow-lg"
                >
                  <Facebook className="w-5 h-5 text-white" />
                </a>
                <a 
                  href="https://github.com/AB-ohi" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-gray-700 hover:bg-gray-900 p-3 rounded-full transition-all duration-300 hover:scale-110 hover:-translate-y-1 shadow-lg"
                >
                  <Github className="w-5 h-5 text-white" />
                </a>
                <a 
                  href="https://www.linkedin.com/in/ohi-khan/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-blue-700 hover:bg-blue-800 p-3 rounded-full transition-all duration-300 hover:scale-110 hover:-translate-y-1 shadow-lg"
                >
                  <Linkedin className="w-5 h-5 text-white" />
                </a>
              </div>
            </div>

            {/* Glow Effect */}
            <div className="absolute -inset-4 bg-gradient-to-r from-cyan-500 to-pink-500 rounded-2xl blur-2xl opacity-20 group-hover:opacity-30 transition-opacity duration-300 -z-10"></div>
          </div>
        </div>

        {/* Right Side - Text Content */}
        <div className="text-white space-y-6">
          <div className="space-y-2">
            <p className="text-purple-400 text-lg font-medium">Hello, I'm</p>
            <h1 className="text-6xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Abu Sime Khan Ohi
            </h1>
            <h2 className="text-3xl font-semibold text-gray-300">
              Full Stack Developer
            </h2>
          </div>

          <p className="text-gray-400 text-lg leading-relaxed">
            I'm a passionate developer specializing in creating beautiful and functional web applications. 
            With expertise in modern technologies, I transform ideas into seamless digital experiences 
            that users love.
          </p>
          <p className="text-gray-400 text-lg leading-relaxed">
            I focus on building responsive, accessible, and performant applications using the latest 
            frameworks and best practices. Let's collaborate and bring your vision to life!
          </p>

          <div className="flex gap-4 pt-4">
            <button className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-3 rounded-full font-semibold transition-all duration-300 hover:scale-105 shadow-lg shadow-purple-500/50">
              Download CV
            </button>
            <button className="border-2 border-purple-500 hover:bg-purple-500/10 text-white px-8 py-3 rounded-full font-semibold transition-all duration-300 hover:scale-105">
              Contact Me
            </button>
          </div>
        </div>

      </div>
    </header>
  )
}

export default Header
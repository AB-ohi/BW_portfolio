'use client';
import React, { useState, useEffect, useRef } from 'react';
import { Download, Eye } from 'lucide-react';

const About = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    if (!isMounted) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        // Page niche gele asbe, upore gele chole jabe
        setIsVisible(entry.isIntersecting);
      },
      {
        threshold: 0.3, // 30% visible hole animation trigger hobe
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, [isMounted]);

  const handleDownloadResume = () => {
    // Resume download logic here
    console.log('Downloading resume...');
    // Example: window.open('/path-to-your-resume.pdf', '_blank');
  };

  const handleViewResume = () => {
    // Resume view logic here
    console.log('Viewing resume...');
    // Example: window.open('/path-to-your-resume.pdf', '_blank');
  };

  return (
    <section 
      ref={sectionRef}
      className="min-h-screen flex items-center justify-center py-20 px-8 overflow-hidden"
    >
      <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-16 items-center overflow-hidden">
        
        {/* Left Side - Developer Image with Scroll Animation */}
        <div 
          className={`
            flex justify-center transition-all duration-1000 ease-out
            ${isMounted && isVisible ? 'translate-x-0 opacity-100' : '-translate-x-full opacity-0'}
          `}
        >
          <div className="relative group">
            {/* Main Image Container */}
            <div className="relative">
              <div className="w-96 h-96 rounded-3xl overflow-hidden border-4 border-purple-500/50 shadow-2xl shadow-purple-500/30">
                <img 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                  src="https://images.unsplash.com/photo-1571171637578-41bc2dd41cd2?w=800&q=80" 
                  alt="Developer" 
                />
              </div>
              
              {/* Floating Animation Border */}
              <div className="absolute -inset-2 bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 rounded-3xl blur-xl opacity-30 group-hover:opacity-50 transition-opacity duration-500 animate-pulse -z-10"></div>
              
              {/* Corner Accent */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-cyan-400 to-purple-600 rounded-2xl opacity-80 group-hover:rotate-12 transition-transform duration-500"></div>
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-gradient-to-br from-pink-500 to-purple-700 rounded-full opacity-60 group-hover:-rotate-12 transition-transform duration-500"></div>
            </div>
          </div>
        </div>

        {/* Right Side - Content with Scroll Animation */}
        <div 
          className={`
            space-y-6 transition-all duration-1000 delay-300 ease-out
            ${isMounted && isVisible ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'}
          `}
        >
          {/* Section Title */}
          <div className="space-y-2">
            <p className="text-purple-400 text-lg font-semibold uppercase tracking-wider">
              Get To Know
            </p>
            <h2 className="text-5xl font-bold text-white">
              About <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Me</span>
            </h2>
          </div>

          {/* Description */}
          <div className="space-y-4 text-gray-300 text-lg leading-relaxed">
            <p>
              Hi! I'm a passionate <span className="text-purple-400 font-semibold">Full Stack Developer</span> with 
              expertise in building modern, scalable web applications. I specialize in creating 
              seamless user experiences using cutting-edge technologies.
            </p>
            <p>
              With a strong foundation in both <span className="text-cyan-400 font-semibold">frontend</span> and 
              <span className="text-pink-400 font-semibold"> backend</span> development, I transform complex 
              problems into elegant, efficient solutions. My goal is to craft digital experiences 
              that not only look great but perform exceptionally.
            </p>
            <p>
              I'm constantly learning and adapting to new technologies, ensuring that every project 
              I work on leverages the best tools and practices available. Let's build something 
              amazing together!
            </p>
          </div>

          {/* Skills Highlights */}
          <div className="flex flex-wrap gap-3 py-2">
            {['React', 'Node.js', 'TypeScript', 'MongoDB', 'Tailwind CSS'].map((skill, index) => (
              <span 
                key={index}
                className="px-4 py-2 bg-purple-500/20 border border-purple-500/50 rounded-full text-purple-300 text-sm font-medium hover:bg-purple-500/30 transition-colors duration-300"
              >
                {skill}
              </span>
            ))}
          </div>

          {/* Buttons */}
          <div className="flex gap-4 pt-4">
            <button 
              onClick={handleDownloadResume}
              className="group relative flex items-center gap-2 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8 py-3 rounded-full font-semibold transition-all duration-300 hover:scale-105 shadow-lg shadow-purple-500/50 hover:shadow-xl hover:shadow-purple-500/70"
            >
              <Download className="w-5 h-5 group-hover:animate-bounce" />
              Download Resume
            </button>
            
            <button 
              onClick={handleViewResume}
              className="group flex items-center gap-2 border-2 border-purple-500 hover:bg-purple-500/10 text-purple-300 hover:text-white px-8 py-3 rounded-full font-semibold transition-all duration-300 hover:scale-105 hover:border-purple-400"
            >
              <Eye className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
              View Resume
            </button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-6 pt-6 border-t border-purple-500/30">
            <div className="text-center">
              <h3 className="text-3xl font-bold text-purple-400">3+</h3>
              <p className="text-gray-400 text-sm mt-1">Years Experience</p>
            </div>
            <div className="text-center">
              <h3 className="text-3xl font-bold text-pink-400">50+</h3>
              <p className="text-gray-400 text-sm mt-1">Projects Done</p>
            </div>
            <div className="text-center">
              <h3 className="text-3xl font-bold text-cyan-400">30+</h3>
              <p className="text-gray-400 text-sm mt-1">Happy Clients</p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default About;
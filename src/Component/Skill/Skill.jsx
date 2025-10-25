"use client";
import React, { useState, useEffect, useRef } from "react";
import HTML_icon from '../../../public/logo_img/html.png'
import css_icon from '../../../public/logo_img/css.png'
import JavaScript_icon from '../../../public/logo_img/js.png'
import React_icon from '../../../public/logo_img/react.png'
import Express_icon from '../../../public/logo_img/Express.png'
import Node_icon from '../../../public/logo_img/node.png'
import mongoDB_icon from '../../../public/logo_img/mongoDB.png'
import Firebase_icon from '../../../public/logo_img/fireBase.png'
import Figma_icon from '../../../public/logo_img/figma.png'
import Next_icon from '../../../public/logo_img/next.png'
import Image from "next/image";

const Skills = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const sectionRef = useRef(null);

  const skills = [
    {
      name: "HTML",
      percentage: 90,
      color: "from-orange-500 to-red-500",
      icon: HTML_icon,
    },
    {
      name: "CSS",
      percentage: 80,
      color: "from-blue-500 to-cyan-500",
      icon: css_icon,
    },
    {
      name: "JavaScript",
      percentage: 60,
      color: "from-yellow-500 to-orange-500",
      icon: JavaScript_icon,
    },
    {
      name: "React",
      percentage: 70,
      color: "from-cyan-500 to-blue-500",
      icon: React_icon,
    },
    {
      name: "Express.js",
      percentage: 70,
      color: "from-gray-500 to-gray-700",
      icon: Express_icon,
    },
    {
      name: "Node.js",
      percentage: 50,
      color: "from-green-500 to-emerald-500",
      icon: Node_icon,
    },
    {
      name: "MongoDB",
      percentage: 90,
      color: "from-green-600 to-green-800",
      icon: mongoDB_icon,
    },
    {
      name: "Firebase",
      percentage: 80,
      color: "from-yellow-500 to-orange-600",
      icon: Firebase_icon,
    },
    {
      name: "Figma",
      percentage: 80,
      color: "from-purple-500 to-pink-500",
      icon: Figma_icon,
    },
    {
      name: "Next.js",
      percentage: 80,
      color: "from-black to-gray-700",
      icon: Next_icon,
    },
  ];

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    if (!isMounted) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      {
        threshold: 0.2,
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

  return (
    <section
      ref={sectionRef}
      className="min-h-screen flex items-center justify-center  px-8 overflow-hidden"
    >
      <div className="max-w-7xl w-full">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-purple-400 text-lg font-semibold uppercase tracking-wider mb-2">
            What I Offer
          </p>
          <h2 className="text-5xl font-bold text-white mb-4">
            My{" "}
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Skills
            </span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Expertise in modern web technologies and tools
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
          {skills.map((skill, index) => (
            <div
              key={index}
              className={`
                group relative transition-all duration-700 ease-out
                ${
                  isMounted && isVisible
                    ? "translate-y-0 opacity-100"
                    : "translate-y-20 opacity-0"
                }
              `}
              style={{
                transitionDelay: `${index * 100}ms`,
                animation:
                  isMounted && isVisible
                    ? `float ${3 + (index % 3)}s ease-in-out infinite`
                    : "none",
                animationDelay: `${index * 0.2}s`,
              }}
            >
              {/* Skill Card */}
              <div className="relative flex flex-col items-center">
                {/* Icon Circle */}
                <div
                  className={`
                  w-32 h-32 rounded-full 
                  flex items-center justify-center text-5xl
                  shadow-lg shadow-purple-500/30
                  transition-all duration-500
                  group-hover:scale-110 group-hover:rotate-12
                  group-hover:shadow-2xl group-hover:shadow-purple-500/50
                  border-4 border-white/10
                  relative overflow-hidden
                `}
                >
                  {/* Background Animation */}
                  <div className={`absolute inset-0 bg-white/0 group-hover:bg-gradient-to-br hover:${skill.color}  transition-all duration-500`}></div>

                  {/* Icon */}
                  <span className="relative z-10 filter drop-shadow-lg group-hover:opacity-0 transition-all">
                    <Image src={skill.icon} alt={skill.name}/>
                  </span>

                  {/* Percentage Badge - Show on Hover */}
                  <div className="absolute inset-0  rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 rotate-[347deg] transition-all  backdrop-blur-sm">
                    <span className="text-2xl font-bold text-white">
                      {skill.percentage}%
                    </span>
                  </div>
                </div>

                {/* Skill Name */}
                <h3 className="mt-4 text-xl font-semibold text-white group-hover:text-purple-400 transition-colors duration-300">
                  {skill.name}
                </h3>

                {/* Progress Bar */}
                <div className="w-full mt-3 h-2 bg-gray-700/50 rounded-full overflow-hidden">
                  <div
                    className={`h-full bg-gradient-to-r ${skill.color} rounded-full transition-all duration-1000 ease-out`}
                    style={{
                      width:
                        isMounted && isVisible ? `${skill.percentage}%` : "0%",
                      transitionDelay: `${index * 100 + 300}ms`,
                    }}
                  ></div>
                </div>

                {/* Floating Glow Effect */}
                <div
                  className={`
                  absolute -inset-4 bg-gradient-to-r ${skill.color} 
                  rounded-full blur-2xl opacity-0 group-hover:opacity-20 
                  transition-opacity duration-500 -z-10
                `}
                ></div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Decorative Text */}
        <div className="text-center mt-16">
          <p className="text-gray-500 text-sm">
            Hover over skills to see proficiency levels
          </p>
        </div>
      </div>

      {/* CSS Animation for Floating Effect */}
      <style jsx>{`
        @keyframes float {
          0%,
          100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-20px);
          }
        }
      `}</style>
    </section>
  );
};

export default Skills;

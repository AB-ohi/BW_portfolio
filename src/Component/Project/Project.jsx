'use client';
import React, { useState, useEffect, useRef } from 'react';
import { Github, ExternalLink, Code2 } from 'lucide-react';

const Project = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const [hoveredProject, setHoveredProject] = useState(null);
  const sectionRef = useRef(null);

  const projects = [
    {
      id: 1,
      title: 'E-Commerce Platform',
      description: 'A full-stack e-commerce application with real-time cart updates, payment integration, and admin dashboard. Features include product search, filtering, user authentication, and order management.',
      technologies: ['React', 'Node.js', 'MongoDB', 'Express'],
      githubLink: 'https://github.com/username/ecommerce',
      liveLink: 'https://ecommerce-demo.com',
      components: [
        'https://images.unsplash.com/photo-1557821552-17105176677c?w=400&h=300&fit=crop',
        'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=400&h=300&fit=crop',
        'https://images.unsplash.com/photo-1556742044-3c52d6e88c62?w=400&h=300&fit=crop',
        'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=300&fit=crop'
      ],
      gradient: 'from-blue-500 to-purple-600'
    },
    {
      id: 2,
      title: 'Social Media Dashboard',
      description: 'Modern social media analytics dashboard with real-time data visualization, post scheduling, and engagement metrics. Built with responsive design and dark mode support.',
      technologies: ['Next.js', 'Firebase', 'Tailwind', 'Chart.js'],
      githubLink: 'https://github.com/username/social-dashboard',
      liveLink: 'https://social-dashboard-demo.com',
      components: [
        'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=300&fit=crop',
        'https://images.unsplash.com/photo-1543286386-713bdd548da4?w=400&h=300&fit=crop',
        'https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=400&h=300&fit=crop',
        'https://images.unsplash.com/photo-1579389083078-4e7018379f7e?w=400&h=300&fit=crop'
      ],
      gradient: 'from-pink-500 to-orange-500'
    },
    {
      id: 3,
      title: 'Task Management App',
      description: 'Collaborative task management tool with drag-and-drop functionality, team workspace, real-time notifications, and progress tracking. Perfect for agile teams.',
      technologies: ['React', 'Express', 'MongoDB', 'Socket.io'],
      githubLink: 'https://github.com/username/task-manager',
      liveLink: 'https://task-manager-demo.com',
      components: [
        'https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=400&h=300&fit=crop',
        'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=400&h=300&fit=crop',
        'https://images.unsplash.com/photo-1507925921958-8a62f3d1a50d?w=400&h=300&fit=crop',
        'https://images.unsplash.com/photo-1432888622747-4eb9a8f2c203?w=400&h=300&fit=crop'
      ],
      gradient: 'from-green-500 to-teal-600'
    },
    {
      id: 4,
      title: 'Portfolio Website Builder',
      description: 'No-code portfolio builder with drag-and-drop interface, customizable templates, and one-click deployment. Users can create stunning portfolios without writing code.',
      technologies: ['Next.js', 'Figma', 'Firebase', 'Tailwind'],
      githubLink: 'https://github.com/username/portfolio-builder',
      liveLink: 'https://portfolio-builder-demo.com',
      components: [
        'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=400&h=300&fit=crop',
        'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=400&h=300&fit=crop',
        'https://images.unsplash.com/photo-1504639725590-34d0984388bd?w=400&h=300&fit=crop',
        'https://images.unsplash.com/photo-1522542550221-31fd19575a2d?w=400&h=300&fit=crop'
      ],
      gradient: 'from-purple-500 to-indigo-600'
    }
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
      { threshold: 0.2 }
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
      className="min-h-screen flex items-center justify-center py-20 px-8 overflow-hidden"
    >
      <div className="max-w-7xl w-full">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-purple-400 text-lg font-semibold uppercase tracking-wider mb-2">
            My Work
          </p>
          <h2 className="text-5xl font-bold text-white mb-4">
            Featured <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Projects</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Hover over projects to see the components and technologies used
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={project.id}
              onMouseEnter={() => setHoveredProject(project.id)}
              onMouseLeave={() => setHoveredProject(null)}
              className={`
                group relative rounded-2xl overflow-hidden border border-purple-500/30
                transition-all duration-700 ease-out cursor-pointer
                ${isMounted && isVisible 
                  ? 'translate-y-0 opacity-100' 
                  : 'translate-y-20 opacity-0'
                }
              `}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              {/* Project Card */}
              <div className="relative bg-gradient-to-br from-slate-900 to-slate-800 p-8 h-full min-h-[500px]">
                
                {/* Background Gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>

                {/* Content Container */}
                <div className="relative z-10 h-full flex flex-col">
                  
                  {/* Project Header */}
                  <div className="mb-6">
                    <div className="flex items-center gap-2 mb-2">
                      <Code2 className="w-5 h-5 text-purple-400" />
                      <span className="text-purple-400 text-sm font-semibold uppercase tracking-wider">
                        Project {String(index + 1).padStart(2, '0')}
                      </span>
                    </div>
                    <h3 className="text-2xl font-bold text-white group-hover:text-purple-300 transition-colors duration-300">
                      {project.title}
                    </h3>
                  </div>

                  {/* Default View - Description */}
                  <div className={`
                    transition-all duration-500 ease-out
                    ${hoveredProject === project.id ? 'opacity-0 translate-x-[-100%]' : 'opacity-100 translate-x-0'}
                  `}>
                    <p className="text-gray-400 text-base leading-relaxed mb-6">
                      {project.description}
                    </p>

                    {/* Technologies */}
                    <div className="mb-6">
                      <p className="text-sm text-purple-300 font-semibold mb-3">Technologies Used:</p>
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech, i) => (
                          <span
                            key={i}
                            className="px-3 py-1 bg-purple-500/20 border border-purple-500/50 rounded-full text-purple-300 text-xs font-medium"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Hover View - Component Images */}
                  <div className={`
                    absolute inset-8 transition-all duration-500 ease-out
                    ${hoveredProject === project.id ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-[100%]'}
                  `}>
                    <p className="text-sm text-purple-300 font-semibold mb-4">Project Components:</p>
                    <div className="grid grid-cols-2 gap-3">
                      {project.components.map((img, i) => (
                        <div
                          key={i}
                          className="relative rounded-lg overflow-hidden border border-purple-500/30 aspect-video group/img"
                          style={{ 
                            animation: hoveredProject === project.id ? `fadeInScale 0.5s ease-out ${i * 0.1}s both` : 'none'
                          }}
                        >
                          <img
                            src={img}
                            alt={`Component ${i + 1}`}
                            className="w-full h-full object-cover transition-transform duration-500 group-hover/img:scale-110"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover/img:opacity-100 transition-opacity duration-300"></div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Links - Always Visible at Bottom */}
                  <div className="mt-auto pt-6 flex gap-4">
                    <a
                      href={project.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-5 py-2.5 bg-gray-800 hover:bg-gray-700 text-white rounded-full font-medium transition-all duration-300 hover:scale-105 border border-gray-700"
                    >
                      <Github className="w-4 h-4" />
                      GitHub
                    </a>
                    <a
                      href={project.liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r ${project.gradient} text-white rounded-full font-medium transition-all duration-300 hover:scale-105 shadow-lg`}
                    >
                      <ExternalLink className="w-4 h-4" />
                      Live Demo
                    </a>
                  </div>
                </div>

                {/* Glow Effect */}
                <div className={`absolute inset-0 bg-gradient-to-r ${project.gradient} opacity-0 group-hover:opacity-5 blur-3xl transition-opacity duration-500 -z-10`}></div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* CSS Animations */}
      <style jsx>{`
        @keyframes fadeInScale {
          from {
            opacity: 0;
            transform: scale(0.8);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }
      `}</style>
    </section>
  );
};

export default Project;
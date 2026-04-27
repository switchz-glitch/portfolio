import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, ArrowRight } from 'lucide-react';
import WindowFrame from './WindowFrame';

const ProjectCard = ({ project, index }) => (
  <WindowFrame title={project.title.toLowerCase().replace(/ /g, '_') + '.js'} className="group">
    <div className="flex flex-col lg:flex-row gap-10 items-center">
      <div className="w-full lg:w-1/2 overflow-hidden rounded-lg aspect-video bg-bg-card border border-border-color relative">
        <img 
          src={project.image.startsWith('/') ? project.image.substring(1) : project.image} 
          alt={project.title} 
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-70 group-hover:opacity-100"
        />
        <div className="absolute inset-0 bg-accent/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      </div>
      
      <div className="w-full lg:w-1/2">
        <h3 className="text-3xl font-bold mb-4">{project.title}</h3>
        <p className="text-gray-400 text-sm mb-6 leading-relaxed font-mono">
          // {project.description}
        </p>
        
        <div className="flex flex-wrap gap-4 mb-8">
          {project.tech.map((t, i) => (
            <span key={i} className="text-[10px] font-mono text-accent/80 border border-accent/20 px-2 py-0.5 rounded">
              {t}
            </span>
          ))}
        </div>
        
        <div className="flex items-center gap-6">
          <a href="#" className="flex items-center gap-2 text-text-main font-mono text-[10px] uppercase tracking-widest hover:text-accent transition-colors">
            LIVE_DEMO <ExternalLink size={12} />
          </a>
          <a href="#" className="flex items-center gap-2 text-gray-500 font-mono text-[10px] uppercase tracking-widest hover:text-white transition-colors">
            VIEW_CODE <Github size={12} />
          </a>
        </div>
      </div>
    </div>
  </WindowFrame>
);

const Projects = () => {
  const projects = [
    {
      title: "FreshBasket Grocery",
      image: "grocery.png",
      description: "A premium, dark-themed grocery shopping experience with real-time inventory management and lightning-fast checkout.",
      tech: ["React", "Node.js", "MongoDB", "Redux"],
    },
    {
      title: "Nadiya's Jewelry Store",
      image: "jewelry.png",
      description: "Luxury e-commerce platform for high-end jewelry, featuring high-resolution galleries and secure payment integration.",
      tech: ["Angular", "MongoDB", "Tailwind"],
    }
  ];

  return (
    <section id="projects" className="py-32 px-10 md:pl-40 md:pr-24 bg-bg-dark transition-colors duration-300">
      <div className="max-w-6xl mx-auto">
        <div className="mb-20">
          <h2 className="text-4xl md:text-6xl font-bold mb-4 uppercase tracking-tighter italic">Recent_Work</h2>
          <p className="font-mono text-[10px] text-gray-600 uppercase tracking-widest">// collection_of_featured_projects</p>
        </div>
        
        <div className="space-y-20">
          {projects.map((project, i) => (
            <ProjectCard key={i} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;

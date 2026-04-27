import React from 'react';
import { motion } from 'framer-motion';
import WindowFrame from './WindowFrame';

const Skills = () => {
  const skills = [
    { name: "Frontend", items: ["React", "Next.js", "Tailwind", "TypeScript"] },
    { name: "Backend", items: ["Node.js", "Express", "PostgreSQL", "MongoDB"] },
    { name: "Tools", items: ["Git", "AWS", "Figma", "VS Code"] }
  ];

  return (
    <section id="about" className="py-32 px-10 md:pl-40 md:pr-24">
      <div className="max-w-6xl mx-auto">
        <div className="mb-20">
          <h2 className="text-4xl md:text-6xl font-bold mb-4 uppercase tracking-tighter italic italic-text">Profile_Data</h2>
          <p className="font-mono text-[10px] text-gray-600 uppercase tracking-widest">// my_technical_capabilities</p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <WindowFrame title="About.md">
            <div className="flex flex-col md:flex-row gap-8 items-start">
              <div className="w-24 h-24 rounded-xl overflow-hidden border border-border-color shrink-0">
                <img src="/profile.png" alt="Profile" className="w-full h-full object-cover" />
              </div>
              <div className="space-y-6 text-gray-400 leading-relaxed font-sans">
              <p>
                I'm a developer who believes in the power of <span className="text-text-main">minimalism</span> and <span className="text-text-main">precision</span>. Every line of code I write is aimed at creating a seamless user experience.
              </p>
              <p>
                With over 5 years of experience in the digital space, I've worked with startups and established brands to bring creative visions to life through modern technology.
              </p>
            </div>
          </div>
        </WindowFrame>
          
          <WindowFrame title="Skills.json">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {skills.map((cat, i) => (
                <div key={i}>
                  <h4 className="text-accent font-mono text-[10px] mb-6 uppercase tracking-widest">
                    // {cat.name}
                  </h4>
                  <ul className="space-y-4">
                    {cat.items.map((skill, j) => (
                      <li key={j} className="text-xs font-mono text-gray-300 flex items-center gap-2 group">
                        <span className="text-accent group-hover:translate-x-1 transition-transform">→</span>
                        {skill}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </WindowFrame>
        </div>
      </div>
    </section>
  );
};

export default Skills;

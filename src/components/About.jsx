import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <section id="about" className="section-padding overflow-hidden">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          <div className="absolute -top-10 -left-10 w-40 h-40 bg-primary-500/10 rounded-full blur-3xl" />
          <div className="glass p-2 rounded-[2rem] relative z-10">
            <img 
              src="/hero.png" 
              alt="About Me" 
              className="rounded-[1.8rem] w-full aspect-square object-cover grayscale"
            />
          </div>
          <div className="absolute -bottom-6 -right-6 glass p-6 rounded-2xl shadow-xl z-20">
            <div className="text-4xl font-bold text-primary-600">5+</div>
            <div className="text-sm font-medium text-gray-500">Years of<br />Experience</div>
          </div>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <span className="text-primary-600 font-bold tracking-widest uppercase text-sm">About Me</span>
          <h2 className="text-4xl md:text-5xl font-bold mt-2 mb-6 leading-tight">
            I craft digital products that people <span className="gradient-text">love to use.</span>
          </h2>
          <div className="space-y-4 text-lg text-gray-600 dark:text-gray-400">
            <p>
              I'm Jinesh, a passionate Full Stack Developer with a keen eye for design. My journey began when I built my first website at 15, and since then, I've been obsessed with creating seamless digital experiences.
            </p>
            <p>
              I specialize in React and Node.js, focusing on performance, accessibility, and clean architecture. I believe that great software is not just about writing code, but about solving real human problems.
            </p>
            <p>
              When I'm not coding, you'll find me exploring the latest in UI/UX trends, contributing to open-source projects, or hiking in the great outdoors.
            </p>
          </div>
          
          <div className="grid grid-cols-2 gap-8 mt-10">
            <div>
              <h4 className="font-bold text-xl mb-1 italic">Innovation</h4>
              <p className="text-sm text-gray-500">Pushing boundaries with every pixel.</p>
            </div>
            <div>
              <h4 className="font-bold text-xl mb-1 italic">Quality</h4>
              <p className="text-sm text-gray-500">Robust code that stands the test of time.</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;

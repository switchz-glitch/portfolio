import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section className="min-h-screen flex flex-col justify-center px-10 md:px-24 py-32 relative">
      <div className="absolute inset-0 bg-jinesh-grid pointer-events-none" />
      <div className="noise-overlay" />

      {/* Glowing Blobs */}
      <div className="absolute top-[20%] right-[10%] w-96 h-96 bg-accent/10 rounded-full blur-[100px] -z-10 animate-pulse" />
      <div className="absolute bottom-[20%] left-[10%] w-64 h-64 bg-success/5 rounded-full blur-[80px] -z-10 animate-pulse delay-700" />

      <div className="flex flex-col lg:flex-row lg:items-center gap-16 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}  
          className="max-w-4xl"
        >
          <div className="font-mono text-text-main text-lg md:text-xl mb-12 flex items-center gap-2">
            <span>Jinesh</span>
            <span className="text-accent">&lt;Navadiya&gt;</span>
          </div>

          <h1 className="text-6xl md:text-9xl font-bold leading-[0.9] tracking-tighter mb-10 text-text-main uppercase">
            Creative <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-blue-300">Developer</span>
          </h1>

          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mt-12">
            <div className="max-w-sm">
              <p className="text-gray-400 font-mono text-sm leading-relaxed">
                I'm Jinesh, a passionate developer based in India, specializing in building high-performance web applications with clean, elegant code.
              </p>
            </div>

            <div className="flex flex-col gap-4 text-right">
              <div className="font-mono text-[10px] text-gray-500 uppercase tracking-widest">
                // current_location: "India"
              </div>
              <div className="font-mono text-[10px] text-gray-500 uppercase tracking-widest">
                // status: "available_for_work"
              </div>
            </div>
          </div>

          <div className="mt-16 flex items-center gap-8">
            <motion.a
              href="#projects"
              whileHover={{ scale: 1.05 }}
              className="group flex items-center gap-4 text-text-main font-mono text-sm uppercase tracking-widest"
            >
              <div className="w-12 h-[1px] bg-white/20 group-hover:w-20 transition-all duration-500" />
              Explore Projects
            </motion.a>
          </div>
        </motion.div>

        {/* Profile Photo Section */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="relative hidden lg:block"
        >
          <div className="w-64 h-80 bg-bg-card border border-border-color rounded-2xl overflow-hidden relative group">
            <div className="absolute inset-0 bg-accent/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10" />
            <img
              src="/profile.png"
              alt="Jinesh"
              className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 scale-110 group-hover:scale-100"
            />
            {/* Photo Label */}
            <div className="absolute bottom-4 left-4 font-mono text-[8px] text-white/50 uppercase tracking-widest z-20">
              user_photo.jpg
            </div>
          </div>
          {/* Decorative frame elements */}
          <div className="absolute -top-4 -left-4 w-8 h-8 border-t-2 border-l-2 border-accent/30 rounded-tl-xl" />
          <div className="absolute -bottom-4 -right-4 w-8 h-8 border-b-2 border-r-2 border-accent/30 rounded-br-xl" />
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-10 md:left-24 font-mono text-[10px] text-gray-600 vertical-text hidden md:block">
        SCROLL_TO_EXPLORE ↓
      </div>
    </section>
  );
};

export default Hero;

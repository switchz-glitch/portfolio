import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const WindowFrame = ({ children, title, className = "" }) => {
  const [isMinimized, setIsMinimized] = useState(false);
  const [isClosed, setIsClosed] = useState(false);
  const constraintsRef = useRef(null);

  if (isClosed) return null;

  return (
    <div ref={constraintsRef} className="relative">
      <motion.div
        drag
        dragConstraints={constraintsRef}
        dragElastic={0.1}
        dragMomentum={false}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: [0.19, 1, 0.22, 1] }}
        className={`bg-bg-card border border-border-color rounded-lg overflow-hidden window-shadow relative z-10 ${className}`}
        style={{ touchAction: "none" }}
      >
        {/* Header Bar - The Drag Handle */}
        <div className="bg-bg-dark border-b border-border-color px-4 py-2.5 flex justify-between items-center select-none cursor-grab active:cursor-grabbing">
          <div className="flex gap-2">
            <div className="w-2.5 h-2.5 rounded-full border border-border-color flex items-center justify-center">
              <div className="w-1 h-1 bg-white/20 rounded-full" />
            </div>
            <div className="w-2.5 h-2.5 rounded-full border border-white/10" />
            <div className="w-2.5 h-2.5 rounded-full border border-white/10" />
          </div>
          
          <div className="text-[10px] font-mono text-gray-500 uppercase tracking-widest flex items-center gap-2">
            <span className="text-accent/50">&lt;</span>
            {title || "index.js"}
            <span className="text-accent/50">&gt;</span>
          </div>
          
          <div className="flex gap-3 text-gray-600 text-xs font-mono">
            <button 
              onClick={(e) => { e.stopPropagation(); setIsMinimized(!isMinimized); }}
              className="hover:text-accent transition-colors p-0.5"
              title="Minimize"
            >
              -
            </button>
            <button 
              className="hover:text-accent transition-colors p-0.5 opacity-30 cursor-not-allowed"
              title="Maximize"
              onClick={(e) => e.stopPropagation()}
            >
              □
            </button>
            <button 
              onClick={(e) => { e.stopPropagation(); setIsClosed(true); }}
              className="hover:text-red-500 transition-colors p-0.5"
              title="Close"
            >
              ×
            </button>
          </div>
        </div>
        
        {/* Content */}
        <AnimatePresence>
          {!isMinimized && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.5, ease: [0.19, 1, 0.22, 1] }}
              className="overflow-hidden"
            >
              <div className="p-5 md:p-8 pointer-events-auto">
                {children}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
        
        {isMinimized && (
          <div className="p-2 text-center text-[10px] font-mono text-gray-700 uppercase tracking-[0.2em]">
            Content_Minimized
          </div>
        )}
      </motion.div>
    </div>
  );
};

export default WindowFrame;

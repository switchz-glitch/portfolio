import React, { useState, useEffect } from 'react';

const Footer = () => {
  const [time, setTime] = useState(new Date().toLocaleTimeString());

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date().toLocaleTimeString());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <footer className="py-6 px-10 md:pl-40 md:pr-24 border-t border-white/5 bg-black flex flex-col md:flex-row justify-between items-center gap-4">
      <div className="flex items-center gap-6 font-mono text-[10px] text-gray-500 uppercase tracking-widest">
        <span>© 2026 Jinesh</span>
        <span className="w-1 h-1 bg-gray-800 rounded-full" />
        <span>Portfolio_v1.0</span>
      </div>
      
      <div className="flex items-center gap-6 font-mono text-[10px] text-gray-500 uppercase tracking-widest">
        <div className="flex items-center gap-2">
          <span className="w-1.5 h-1.5 bg-success rounded-full animate-pulse" />
          System_Online
        </div>
        <span className="w-1 h-1 bg-gray-800 rounded-full" />
        <span>IST {time}</span>
      </div>
    </footer>
  );
};

export default Footer;

import React from 'react';
import { motion } from 'framer-motion';
import { Home, User, Briefcase, Mail, Github, Linkedin, MessageSquare, Sun, Moon } from 'lucide-react';
import useDarkMode from '../hooks/useDarkMode';

const Sidebar = () => {
  const [colorTheme, setTheme] = useDarkMode();

  const links = [
    { icon: <Home size={18} />, href: "#" },
    { icon: <User size={18} />, href: "#about" },
    { icon: <Briefcase size={18} />, href: "#projects" },
    { icon: <MessageSquare size={18} />, href: "#blog" },
    { icon: <Mail size={18} />, href: "#contact" },
  ];

  return (
    <aside className="fixed left-0 top-0 h-screen w-14 md:w-20 flex flex-col items-center justify-between py-10 border-r border-border-color bg-bg-dark z-50 transition-colors duration-300">
      {/* Theme Toggle at Top */}
      <button
        onClick={() => setTheme(colorTheme)}
        className="w-10 h-10 flex items-center justify-center rounded-xl text-accent hover:scale-110 transition-all"
        title={`Switch to ${colorTheme} mode`}
      >
        {colorTheme === 'dark' ? <Moon size={20} /> : <Sun size={20} />}
      </button>
      
      <nav className="flex flex-col gap-12">
        {links.map((link, i) => (
          <a
            key={i}
            href={link.href}
            className="text-text-secondary hover:text-accent transition-all duration-300 relative group"
          >
            {link.icon}
            <div className="absolute left-0 top-1/2 -translate-y-1/2 w-[2px] h-0 bg-accent group-hover:h-full transition-all duration-300" />
          </a>
        ))}
      </nav>
      
      <div className="flex flex-col gap-6">
        <a href="#" className="text-text-secondary hover:text-text-primary transition-colors">
          <Github size={16} />
        </a>
        <a href="#" className="text-text-secondary hover:text-text-primary transition-colors">
          <Linkedin size={16} />
        </a>
      </div>
    </aside>
  );
};

export default Sidebar;

import React, { useState, useEffect } from 'react';
import { Sun, Moon, Menu, X, Terminal } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import useDarkMode from '../hooks/useDarkMode';

const Navbar = () => {
  const [colorTheme, setTheme] = useDarkMode();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Blog', href: '#blog' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'glass py-4 shadow-lg' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="flex items-center space-x-2 cursor-pointer group"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        >
          <div className="p-2 bg-primary-600 rounded-lg group-hover:rotate-12 transition-transform duration-300">
            <Terminal size={24} className="text-white" />
          </div>
          <span className="text-xl font-bold tracking-tighter">PORTFOLIO</span>
        </motion.div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link, i) => (
            <motion.a
              key={link.name}
              href={link.href}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="text-sm font-medium hover:text-primary-500 transition-colors"
            >
              {link.name}
            </motion.a>
          ))}
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => setTheme(colorTheme)}
            className="p-2 rounded-full glass hover:text-primary-500 transition-colors"
          >
            {colorTheme === 'light' ? <Sun size={20} /> : <Moon size={20} />}
          </motion.button>
        </div>

        {/* Mobile Toggle */}
        <div className="md:hidden flex items-center space-x-4">
          <button
            onClick={() => setTheme(colorTheme)}
            className="p-2 rounded-full glass"
          >
            {colorTheme === 'light' ? <Sun size={20} /> : <Moon size={20} />}
          </button>
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden glass border-t border-white/10"
          >
            <div className="flex flex-col p-6 space-y-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="text-lg font-medium hover:text-primary-500 transition-colors"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;

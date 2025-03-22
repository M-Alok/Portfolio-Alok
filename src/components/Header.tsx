import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { Menu, X, Github, Linkedin } from 'lucide-react';
import { fadeInDown } from '../utils/animation';
import useActiveSection from '../utils/useActiveSection';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const sectionIds = ['home', 'about', 'skills', 'projects', 'contact'];
  const activeSection = useActiveSection(sectionIds);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const scrollToSection = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth', block: 'start' });
    } else {
      console.error('Section not found');
    }
  };

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ];

  const socialLinks = [
    { icon: <Github size={20} />, href: 'https://github.com/M-Alok', label: 'GitHub' },
    { icon: <Linkedin size={20} />, href: 'https://www.linkedin.com/in/alok-m-47b817221/', label: 'LinkedIn' },
  ];

  return (
    <motion.header
      variants={fadeInDown}
      initial="hidden"
      whileInView="visible"
      className='fixed w-full z-50 duration-400 glass-card py-2'
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <motion.a
            href="#home"
            className="text-3xl font-bold gradient-text italic tracking-wider mr-2"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.2 }}
          >
            Portfolio
          </motion.a>

          {/* Desktop Nav Links */}
          <nav className="hidden md:flex justify-center items-center space-x-8">
            <ul className="flex glass-card rounded-full px-6 py-1">
              {navLinks.map((link, index) => (
                <motion.li
                  key={link.name}
                  whileHover={{ y: -3 }}
                  transition={{ type: 'spring', stiffness: 120 }}
                  className="flex items-center"
                >
                  <a 
                    href={link.href}
                    onClick={() => scrollToSection(link.href.replace('#', ''))}
                    className={`navbar text-indigo-100 font-medium text-lg transition-colors hover:text-white hover:shadow-lg px-3 py-2 ${
                      activeSection === link.href.replace('#', '') ? 'active' : ''
                    }`}
                  >
                    {link.name}
                  </a>
                  {index < navLinks.length - 1 && (
                    <div className="h-6 w-[2px] bg-indigo-100 mx-2"></div>
                  )}
                </motion.li>
              ))}
            </ul>
          </nav>

          {/* Social Links */}
          <div className="hidden md:flex items-center space-x-4">
            {socialLinks.map((link) => (
              <motion.a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="glass-card p-3 ml-2 rounded-full hover:text-indigo-600 hover:bg-indigo-100 transition-colors"
                aria-label={link.label}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                {link.icon}
              </motion.a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            className="md:hidden text-white focus:outline-none"
            onClick={toggleMenu}
            aria-label="Toggle menu"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </motion.button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-transparent mt-2"
          >
            <div className='h-0 w-[95%] border border-gray-500 mx-auto'></div>
            <div className="container mx-auto px-4 py-4">
              <ul className="space-y-4">
                {navLinks.map((link) => (
                  <motion.li
                    key={link.name}
                    whileHover={{ x: 5 }}
                    transition={{ type: 'spring', stiffness: 120 }}
                  >
                    <a
                      href={link.href}
                      className={`navbar text-white hover:text-indigo-100 font-medium transition-all ${
                        activeSection === link.href.replace('#', '') ? 'active' : ''
                      }`}
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {link.name}
                    </a>
                  </motion.li>
                ))}
              </ul>

              <div className="flex items-center space-x-4 mt-6">
                {socialLinks.map((link) => (
                  <motion.a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="glass-card p-3 rounded-full hover:text-indigo-600 hover:bg-indigo-100 transition-colors"
                    aria-label={link.label}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    {link.icon}
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Header;
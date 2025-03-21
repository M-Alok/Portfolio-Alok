import { Heart } from 'lucide-react';
import { motion } from 'framer-motion';
import { fadeInUp, heartBeat } from '../utils/animation';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <motion.footer
      className="bg-gradient-to-b from-gray-900 to-gray-800 relative overflow-hidden py-12"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.1 }}
      variants={fadeInUp}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="glass-card rounded-2xl p-8 backdrop-blur-sm border border-gray-800/50">
          <div className="flex flex-col md:flex-row justify-between items-center">
            {/* Left Side */}
            <motion.div className="mb-8 md:mb-0 text-center md:text-left">
              <a
                href="#home"
                className="text-2xl font-bold gradient-text"
              >
                Portfolio
              </a>
              <div className="w-20 h-1 bg-gradient-to-r from-indigo-600 to-purple-500 mx-auto md:mx-0 my-4 rounded-full"></div>
              <p className="text-gray-300 max-w-md text-lg">
                Building digital experiences that make a difference.<br />
                Let's create something amazing together.
              </p>
            </motion.div>

            {/* Right Side */}
            <div className="flex flex-col items-center md:items-end space-y-4">
              {/* Social Links */}
              <div className="flex space-x-4">
                {/* GitHub Icon */}
                <motion.a
                  href="https://github.com/M-Alok"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="glass-card p-3 rounded-full hover:bg-indigo-100 hover:text-indigo-600 transition-all"
                  aria-label="GitHub"
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-5 h-5"
                  >
                    <path d="M12 .296C5.372.296 0 5.668 0 12.296c0 5.298 3.438 9.8 8.207 11.388.599.111.793-.261.793-.578v-2.034c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.757-1.333-1.757-1.089-.745.083-.73.083-.73 1.205.084 1.839 1.238 1.839 1.238 1.07 1.834 2.807 1.305 3.492.998.107-.775.418-1.305.762-1.605-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.382 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.91 1.235 3.221 0 4.609-2.807 5.626-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.387 0-6.628-5.372-12-12-12z" />
                  </svg>
                </motion.a>

                {/* LinkedIn Icon */}
                <motion.a
                  href="https://www.linkedin.com/in/alok-m-47b817221/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="glass-card p-3 rounded-full hover:bg-indigo-100 hover:text-indigo-600 transition-all"
                  aria-label="LinkedIn"
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-5 h-5"
                  >
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                  </svg>
                </motion.a>
              </div>

              {/* Copyright and Heart */}
              <div className="text-center md:text-right">
                <p className="text-gray-400 text-sm">
                  © {currentYear} - M Alok
                </p>
                <p className="text-gray-500 text-sm mt-1 flex items-center justify-center md:justify-end">
                  Made with{" "}
                  <motion.span
                    className="mx-1 mb-1 bg-clip-text text-white"
                    variants={heartBeat}
                    animate="animate"
                  >
                    <Heart size={14} className="inline" fill="red" />
                  </motion.span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;

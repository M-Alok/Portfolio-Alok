import { motion } from 'framer-motion';
import profile from '../assets/profile.jpg';
import CV from '../assets/Alok.pdf';
import { ArrowRightIcon } from 'lucide-react';
import AboutArrow from './AboutArrow';
import {
  slideInFromLeft,
  slideInFromRight,
  scaleIn,
  floatAnimation,
  fadeInUp,
  staggerContainer
} from '../utils/animation';

const Hero = () => {
  return (
    <motion.section
      id="home"
      initial="hidden"
      whileInView="visible"
      variants={staggerContainer}
      viewport={{ once: false, amount: 0.1 }}
      className="pt-24 md:pt-32 pb-16 md:pb-24 bg-gradient-to-b from-gray-900 to-gray-800 overflow-hidden"
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row items-center">
          {/* Left Section */}
          <motion.div
            className="md:w-1/2 md:pr-12"
            variants={slideInFromLeft}
          >
            <motion.h1
              className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-4"
              variants={fadeInUp}
            >
              <span className="bg-gradient-to-r from-indigo-600 to-purple-500 bg-clip-text text-transparent">
                Hello, I'm
              </span>
              <br />
              <span className="text-white">M Alok</span>
            </motion.h1>

            <motion.h2
              className="text-xl md:text-2xl text-gray-300 mb-6"
              variants={fadeInUp}
              transition={{ delay: 0.1 }}
            >
              Full Stack Developer
            </motion.h2>

            <motion.p
              className="text-gray-400 text-lg mb-8 max-w-lg"
              variants={fadeInUp}
              transition={{ delay: 0.2 }}
            >
              Full Stack Developer skilled in MERN and Django. Experienced in building scalable web applications, implementing real-time features, and managing backend services. Proficient in React, JavaScript, and Python, with a strong focus on performance and user experience.
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-4"
              variants={fadeInUp}
              transition={{ delay: 0.3 }}
            >
              {/* Contact Me Button */}
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.05, boxShadow: '0 4px 12px rgba(79, 70, 229, 0.6)' }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-indigo-600 to-purple-500 hover:from-indigo-700 hover:to-purple-600 text-white font-medium py-3 px-6 rounded-md transition-all duration-300 ease-in-out inline-flex items-center justify-center"
              >
                Contact Me
                <ArrowRightIcon size={22} className="ml-2 transition-transform duration-300 ease-in-out group-hover:translate-x-1" />
              </motion.a>

              {/* Download CV Button */}
              <motion.a
                href={CV}
                download
                whileHover={{ scale: 1.05, backgroundColor: 'rgba(31, 41, 55, 0.5)' }}
                whileTap={{ scale: 0.95 }}
                className="glass-card hover:bg-gray-800/30 text-gray-300 font-medium py-3 px-6 rounded-md transition-all duration-300 ease-in-out inline-flex items-center justify-center gap-2"
              >
                Download CV
                <svg
                  className="w-6 h-6 fill-current"
                  height="100"
                  preserveAspectRatio="xMidYMid meet"
                  viewBox="0 0 100 100"
                  width="100"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M22.1,77.9a4,4,0,0,1,4-4H73.9a4,4,0,0,1,0,8H26.1A4,4,0,0,1,22.1,77.9ZM35.2,47.2a4,4,0,0,1,5.7,0L46,52.3V22.1a4,4,0,1,1,8,0V52.3l5.1-5.1a4,4,0,0,1,5.7,0,4,4,0,0,1,0,5.6l-12,12a3.9,3.9,0,0,1-5.6,0l-12-12A4,4,0,0,1,35.2,47.2Z" />
                </svg>
              </motion.a>
            </motion.div>
          </motion.div>

          {/* Right Section */}
          <motion.div
            className="md:w-1/2 mt-8 md:mt-0"
            variants={slideInFromRight}
          >
            <div className="relative">
              {/* Profile Image */}
              <motion.div
                className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-indigo-600 mx-auto"
                variants={scaleIn}
                whileHover={{ scale: 1.05, boxShadow: '0 4px 12px rgba(79, 70, 229, 0.5)' }}
              >
                <motion.img
                  src={profile}
                  alt="Profile"
                  className="w-full h-full object-cover"
                  variants={floatAnimation}
                />
              </motion.div>

              {/* Status Badge */}
              <motion.div
                className="md:hidden absolute -bottom-1 -right-4 glass-card p-4 rounded-full shadow-lg"
                variants={fadeInUp}
                whileInView="visible"
                whileHover={{
                  scale: 1.1,
                  backgroundColor: 'rgba(79, 70, 229, 0.6)',
                  boxShadow: '0 4px 12px rgba(79, 70, 229, 0.5)',
                }}
              >
                <div className="bg-indigo-600 text-white p-3 rounded-full">
                  <span className="sr-only">Available for work</span>
                  <motion.span
                    className="block w-4 h-4 rounded-full bg-green-400"
                    whileInView={{ scale: [1, 1.2, 1] }}
                    transition={{ repeat: Infinity, duration: 1.5 }}
                  />
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* About Arrow */}
        <AboutArrow />
      </div>
    </motion.section>
  );
};

export default Hero;

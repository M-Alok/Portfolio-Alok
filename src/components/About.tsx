import { motion } from 'framer-motion';
import { Briefcase, GraduationCap } from 'lucide-react';
import { fadeInUp, fadeInLeft, fadeInRight, staggerContainer, scaleIn } from '../utils/animation';

const About = () => {
  const stats = [
    { value: '6', label: 'Months of Internship' },
    { value: '3+', label: 'Projects Completed' },
  ];

  return (
    <motion.section 
      id="about"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.1 }}
      variants={staggerContainer}
      className="py-16 md:py-24 bg-gradient-to-b from-gray-900 to-gray-800 relative overflow-hidden"
    >
      <div className="container px-4 md:px-6">
        {/* Heading Section */}
        <motion.div 
          className="text-center mb-16"
          variants={fadeInUp}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 gradient-text">
            About Me
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-indigo-600 to-purple-500 mx-auto mb-6 rounded-full"></div>
          <p className="text-gray-300 max-w-2xl mx-auto text-lg">
            Here you'll find more information about me, what I do, and my current skills in terms of programming and technology
          </p>
        </motion.div>

        {/* Flex Container */}
        <div className="flex flex-col md:flex-row gap-12 items-center">
          {/* Left Section */}
          <motion.div 
            className="md:w-1/2"
            variants={fadeInLeft}
          >
            <motion.div 
              className="glass-card p-8 rounded-2xl"
              variants={scaleIn}
              whileHover={{ scale: 1.02 }}
            >
              <h3 className="text-2xl font-bold mb-4 text-white">
                Get to know me!
              </h3>
              <div className="space-y-4 text-gray-300">
                <motion.p variants={fadeInUp}>
                  I'm a <strong className="text-indigo-400">Full Stack Web Developer</strong> building the Front-end and Back-end of Websites and Web Applications that leads to the success of the overall product. Check out some of my work in the Projects section.
                </motion.p>
                <motion.p variants={fadeInUp}>
                  I also like sharing content related to the stuff that I have learned over the years in Web Development so it can help other people of the Dev Community. Feel free to connect or follow me on my LinkedIn where I post useful content related to Web Development and Programming.
                </motion.p>
                <motion.p variants={fadeInUp}>
                  I'm <strong className="text-indigo-400">open for Job opportunities</strong> where I can contribute, learn and grow. If you have a good opportunity that matches my skills and experience then don't hesitate to contact me.
                </motion.p>
              </div>

              {/* Stats Section */}
              <motion.div 
                className="mt-8 grid grid-cols-2 gap-4"
                variants={staggerContainer}
              >
                {stats.map((stat, index) => (
                  <motion.div 
                    key={index} 
                    className="glass-card p-4 mx-1 rounded-xl text-center backdrop-blur-sm"
                    variants={scaleIn}
                    whileHover={{ scale: 1.05 }}
                  >
                    <div className="text-3xl font-bold bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
                      {stat.value}
                    </div>
                    <div className="text-gray-300 text-sm">{stat.label}</div>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Right Section */}
          <motion.div 
            className="md:w-1/2"
            variants={fadeInRight}
          >
            <motion.div 
              className="glass-card p-8 rounded-2xl"
              variants={scaleIn}
              whileHover={{ scale: 1.02 }}
            >
              <h3 className="text-2xl font-bold mb-4 text-white">
                My Journey
              </h3>
              <div className="space-y-8">
                {[
                  {
                    icon: <Briefcase size={24} />,
                    title: 'Associate Software Engineer',
                    date: '2024 - Present',
                    description: 'Worked as a Software Developer Intern at Smatclik.',
                  },
                  {
                    icon: <GraduationCap size={24} />,
                    title: 'Master of Computer Applications',
                    date: '2023 - 2024',
                    description: 'Graduated with honors in Computer Applications with over-all CGPA of 8.89.',
                  },
                  {
                    icon: <GraduationCap size={24} />,
                    title: 'Bachelor of Science',
                    date: '2019 - 2022',
                    description: 'Graduated with honors in Computer Science with over-all CGPA of 7.84.',
                  },
                ].map((item, index) => (
                  <motion.div 
                    key={index}
                    className="flex group"
                    variants={fadeInUp}
                  >
                    <div className="flex-shrink-0 mr-4">
                      <div className="flex items-center justify-center w-12 h-12 rounded-md bg-indigo-600/20 text-indigo-400 group-hover:bg-indigo-600/30 transition-colors">
                        {item.icon}
                      </div>
                    </div>
                    <div>
                      <h4 className="text-xl font-semibold text-white">
                        {item.title}
                      </h4>
                      <p className="text-indigo-400">{item.date}</p>
                      <p className="text-gray-300 mt-2">
                        {item.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default About;

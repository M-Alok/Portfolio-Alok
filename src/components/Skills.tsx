import { motion } from 'framer-motion';
import { fadeInUp, fadeInUpDynamic, progressBarAnimation, scaleIn, slideInFromLeft, slideInFromRight, slideInWithDelay, staggerContainer } from '../utils/animation';

const Skills = () => {
  const technicalSkills = [
    { name: 'JavaScript', level: 85 },
    { name: 'React JS', level: 85 },
    { name: 'Tailwind CSS', level: 85 },
    { name: 'Python', level: 80 },
    { name: 'Node JS', level: 80 },
    { name: 'Express JS', level: 75 },
    { name: 'Django', level: 75 },
    { name: 'MongoDB', level: 70 },
    { name: 'SQL', level: 65 },
  ];

  const softSkills = [
    'Problem Solving',
    'Communication',
    'Teamwork',
    'Time Management',
    'Adaptability',
    'Creativity',
    'Leadership',
  ];

  return (
    <motion.section
      id="skills"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.1 }}
      variants={staggerContainer}
      className="py-16 md:py-24 bg-gradient-to-b from-gray-900 to-gray-800 relative overflow-hidden"
    >
      <div className="container mx-auto px-4 md:px-6">
        {/* Heading */}
        <motion.div
          className="text-center mb-16"
          variants={fadeInUp}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 gradient-text">
            My Skills
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-indigo-600 to-purple-500 mx-auto mb-6 rounded-full"></div>
          <p className="text-gray-300 max-w-2xl mx-auto text-lg">
            Here are my skills and technologies I've been working with recently
          </p>
        </motion.div>

        <div className="flex flex-col md:flex-row gap-12">
          {/* Technical Skills */}
          <motion.div
            className="md:w-2/3"
            variants={slideInFromLeft}
          >
            <motion.div variants={scaleIn} className="glass-card p-8 rounded-2xl">
              <h3 className="text-2xl font-bold mb-6 text-white">Technical Skills</h3>
              <div className="space-y-6">
                {technicalSkills.map((skill, index) => (
                  <motion.div
                    key={skill.name}
                    variants={slideInWithDelay(0.4 + index * 0.1)}
                    initial="hidden"
                    whileInView="visible"
                  >
                    <div className="flex justify-between mb-1">
                      <span className="font-medium text-gray-300">{skill.name}</span>
                      <span className="text-indigo-400">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-800 rounded-full h-2.5">
                      <motion.div
                        className="bg-gradient-to-r from-indigo-600 to-purple-500 h-2.5 rounded-full"
                        variants={progressBarAnimation(`${skill.level}%`, 0.5 + index * 0.1)}
                        initial="hidden"
                        whileInView="visible"
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Soft Skills */}
          <motion.div
            className="md:w-1/3"
            variants={slideInFromRight}
          >
            <motion.div variants={scaleIn} className="glass-card p-8 rounded-2xl">
              <h3 className="text-2xl font-bold mb-6 text-white">Soft Skills</h3>
              <div className="grid grid-cols-1 gap-4">
                {softSkills.map((skill, index) => (
                  <motion.div
                    key={skill}
                    className="glass-card p-4 rounded-xl backdrop-blur-sm hover:bg-gray-800/30 transition-colors"
                    variants={fadeInUpDynamic(0.6 + index * 0.1, 0.5)}
                    initial="hidden"
                    whileInView="visible"
                  >
                    <span className="font-medium text-gray-300">{skill}</span>
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

export default Skills;

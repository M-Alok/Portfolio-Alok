import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { staggerContainer, scaleIn, fadeInUp } from "../utils/animation";
import ChatMe from '../assets/ChatMe.png';
import StudyBud from '../assets/StudyBud.png';
import Streamify from '../assets/Streamify.png'
import { ExternalLink, Github, X } from 'lucide-react';

const Projects = () => {
  const [filter, setFilter] = useState('all');
  const [selectedProject, setSelectedProject] = useState<any>(null);

  const projects = [
    {
      id: 1,
      title: 'Streamify (Video Streaming Platform)',
      description: 'Streamify is a modern video streaming platform that allows users to watch, upload, and share videos with a clean, user-friendly interface using GetStream.io. Also it has User authentication and profile management with 32 Unique UI Themes.',
      image: Streamify,
      category: 'web',
      technologies: ['React JS', 'Node JS', 'Express JS', 'MongoDB', 'Tailwind CSS'],
      liveLink: 'https://streamify-81ow.onrender.com/',
      githubLink: 'https://github.com/M-Alok/Streamify',
      problem: 'Limited platforms for creators to share videos with customization and community engagement.',
      solution: 'Streamify provides a user-friendly platform for video uploading, streaming, and community interaction.',
      keyFeatures: [
        '1-on-1 and Group Video Calls with Screen Sharing & Recording',
        'Real-time Messaging with Typing Indicators & Reactions using GetStream.io',
        'JWT Authentication & Protected Routes, language Exchange Platform with 32 Unique UI Themes',
        'Global State Management with Zustand',
      ],
      impact: 'Empowers creators to share content seamlessly, fostering community engagement and digital expression.',
    },
    {
      id: 2,
      title: 'Real-time Chat Application',
      description: 'A real-time chat application using the MERN stack with Socket.io for instant messaging. Zustand manages state efficiently. Cloudinary handles media uploads for profile pictures and shared images.',
      image: ChatMe,
      category: 'web',
      technologies: ['React JS', 'Node JS', 'Express JS', 'MongoDB', 'Tailwind CSS'],
      liveLink: 'https://chat-me-8qo3.onrender.com/',
      githubLink: 'https://github.com/M-Alok/Chat-Me',
      problem: 'Difficulty in real-time communication and sharing media efficiently',
      solution: 'A real-time chat application that allows seamless messaging and media sharing',
      keyFeatures: [
        'Real-time messaging using Socket.io',
        'Media upload and storage with Cloudinary',
        'User authentication and session management',
        'State management with Zustand for smooth user experience',
      ],
      impact: 'Improves communication efficiency and user engagement through a responsive and feature-rich chat platform',
    },
    {
      id: 3,
      title: 'StudyBud (Social Learning Platform)',
      description: 'StudyBud is a web-based platform built using Django, designed to help students collaborate and engage in discussions. It allows users to create study rooms, join discussions, and interact with other learners.',
      image: StudyBud,
      category: 'web',
      technologies: ['Python', 'Django', 'SQLite'],
      liveLink: 'https://studybud-6xzs.onrender.com/',
      githubLink: 'https://github.com/M-Alok/StudyBud',
      problem: 'Lack of a dedicated platform for students to collaborate and share knowledge',
      solution: 'A study platform where students can create, join, and engage in topic-based rooms',
      keyFeatures: [
        'Room creation and participation for focused discussions',
        'User authentication and profile management',
        'Real-time updates and message sharing',
        'Search functionality for easy navigation of rooms and topics',
      ],
      impact: 'Enhances student collaboration and knowledge sharing through an interactive and organized platform',
    },
  ];

  const filteredProjects = filter === 'all' ? projects : projects.filter((project) => project.category === filter);

  useEffect(() => {
    document.body.style.overflow = selectedProject ? 'hidden' : 'auto';
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [selectedProject]);

  return (
    <motion.section
      id="projects"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.1 }}
      variants={staggerContainer}
      className="py-16 md:py-24 bg-gradient-to-b from-gray-900 to-gray-800"
    >
      <div className="container mx-auto px-4 md:px-6">
        {/* Heading */}
        <motion.h2
          className="text-3xl md:text-4xl font-bold mb-4 gradient-text text-center"
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
        >
          My Projects
        </motion.h2>

        {/* Underline */}
        <motion.div
          className="w-20 h-1 bg-gradient-to-r from-indigo-600 to-purple-500 mx-auto mb-8 rounded-full"
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
        ></motion.div>

        {/* Description */}
        <motion.p 
          className="text-gray-300 max-w-2xl mx-auto text-lg"
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
        >
          Here are some of my recent projects. Each project is unique and solves a specific problem.
        </motion.p>

        {/* Filter Buttons */}
        <motion.div
          className="flex justify-center mb-10 gap-4"
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
        >
          <motion.button
            onClick={() => setFilter('all')}
            variants={scaleIn}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className={`px-4 py-2 rounded-md transition-colors ${
              filter === 'all'
                ? 'bg-gradient-to-r from-indigo-600 to-purple-500 text-white'
                : 'glass-card text-gray-300 hover:bg-gray-800/30'
            }`}
          >
            All Projects
          </motion.button>
        </motion.div>

        {/* Project Cards */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
        >
          {filteredProjects.map((project) => (
            <motion.div
              key={project.id}
              className="glass-card rounded-2xl overflow-hidden hover:shadow-xl cursor-pointer"
              variants={scaleIn}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.4 }}
              onClick={() => setSelectedProject(project)}
            >
              <img src={project.image} alt={project.title} className="w-full h-48 object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-white">{project.title}</h3>
                <p className="text-gray-300 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, index) => (
                    <span
                      key={index}
                      className="bg-gray-800/50 text-indigo-400 text-sm font-medium px-2.5 py-0.5 rounded"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex justify-between">
                  <a 
                    href={project.liveLink} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-indigo-400 hover:text-indigo-300 inline-flex items-center"
                  >
                    Live Demo
                    <ExternalLink size={16} className="ml-1" />
                  </a>
                  <a 
                    href={project.githubLink} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-gray-300 hover:text-gray-200 inline-flex items-center"
                  >
                    Code
                    <Github size={16} className="ml-1" />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Modal */}
        <AnimatePresence>
        {selectedProject && (
          <motion.div
            className="fixed inset-0 bg-black bg-opacity-70 backdrop-blur-md flex justify-center items-center z-50 p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              className="bg-gray-800 rounded-lg p-6 w-full max-w-[90%] md:max-w-[70%] lg:max-w-[50%] max-h-[90vh] overflow-y-auto overflow-x-hidden relative scrollbar-custom"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button onClick={() => setSelectedProject(null)} className="absolute top-2 right-2 border bg-gray-700 text-gray-400 hover:text-indigo-100 hover:bg-indigo-600 rounded-full p-2 shadow-md transition duration-300">
                <X size={20} />
              </button>
              <img src={selectedProject.image} alt={selectedProject.title} className="w-full h-48 object-cover rounded-lg mb-4" />
              <h3 className="text-2xl font-bold text-white mb-2">{selectedProject.title}</h3>
              <p className="text-gray-300 mb-4">{selectedProject.description}</p>

              <div className="flex flex-wrap gap-2 mb-4">
                {selectedProject.technologies.map((tech: string, index: number) => (
                  <span key={index} className="bg-gray-700 text-indigo-400 text-sm font-medium px-2.5 py-0.5 rounded">
                    {tech}
                  </span>
                ))}
              </div>

              <h4 className="text-lg font-semibold text-white mb-1">Problem</h4>
              <p className="text-gray-300 mb-4">{selectedProject.problem}</p>

              <h4 className="text-lg font-semibold text-white mb-1">Solution</h4>
              <p className="text-gray-300 mb-4">{selectedProject.solution}</p>

              <h4 className="text-lg font-semibold text-white mb-1">Key Features</h4>
              <ul className="list-disc list-inside text-gray-300 mb-4">
                {selectedProject.keyFeatures.map((feature: string, index: number) => (
                  <li key={index}>{feature}</li>
                ))}
              </ul>

              <h4 className="text-lg font-semibold text-white mb-1">Impact</h4>
              <p className="text-gray-300 mb-4">{selectedProject.impact}</p>

              <div className="flex flex-wrap gap-4">
                <a
                  href={selectedProject.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gray-700 text-white px-4 py-2 rounded-md hover:bg-gray-500 inline-flex items-center"
                >
                  View Code <Github size={16} className="ml-2" />
                </a>
                <a
                  href={selectedProject.liveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-500 inline-flex items-center"
                >
                  Live Demo <ExternalLink size={16} className="ml-2" />
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
        </AnimatePresence>
      </div>
    </motion.section>
  );
};

export default Projects;

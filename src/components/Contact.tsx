import React, { useRef, useState } from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import emailjs from 'emailjs-com';
import { motion } from 'framer-motion';
import { fadeIn, fadeInUp, fadeInLeft, slideInFromLeft, slideInFromRight, staggerContainer, fadeInRight } from '../utils/animation';


const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const formRef = useRef<HTMLFormElement>(null);

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');
  const [submitStatus, setSubmitStatus] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      if (formRef.current) {
        await emailjs.sendForm(
          import.meta.env.VITE_EMAILJS_SERVICE_ID,
          import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
          formRef.current,
          import.meta.env.VITE_EMAILJS_PUBLIC_KEY
        );
  
        setSubmitStatus('success');
        setSubmitMessage('Thank you! Your message has been sent successfully.');
        setFormData({ name: '', email: '', subject: '', message: '' });
      }
    } catch (error) {
      console.error('EmailJS Error:', error);
      setSubmitStatus('error');
      setSubmitMessage('Something went wrong. Please try again later.');
    } finally {
      setIsSubmitting(false);
    }
    
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus('success');
      setSubmitMessage('Thank you! Your message has been sent successfully.');
      setFormData({ name: '', email: '', subject: '', message: '' });

      setTimeout(() => {
        setSubmitStatus('');
        setSubmitMessage('');
      }, 3000);
    }, 1500);
  };

  const contactInfo = [
    {
      icon: <Mail size={24} />,
      title: 'Email',
      content: 'ams03022001@gmail.com',
      link: 'mailto:ams03022001@gmail.com',
    },
    {
      icon: <Phone size={24} />,
      title: 'Phone',
      content: '+91 8431748582',
      link: 'tel:8431748582',
    },
    {
      icon: <MapPin size={24} />,
      title: 'Location',
      content: 'Hospet, India',
    },
  ];

  return (
    <motion.section
      id="contact"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.1 }}
      variants={staggerContainer}
      className="py-16 md:py-24 bg-gradient-to-b from-gray-900 to-gray-800 relative overflow-hidden"
    >

      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <motion.h2 variants={fadeInUp} className="text-3xl md:text-4xl font-bold mb-4 gradient-text">
            Get In Touch
          </motion.h2>
          <motion.div variants={fadeInUp} className="w-20 h-1 bg-gradient-to-r from-indigo-600 to-purple-500 mx-auto mb-6 rounded-full"></motion.div>
          <motion.p variants={fadeInUp} className="text-gray-300 max-w-2xl mx-auto text-lg">
            Feel free to contact me for any work or suggestions...
          </motion.p>
        </div>

        <div className="flex flex-col lg:flex-row gap-12">
          <motion.div 
            variants={slideInFromLeft} 
            className="lg:w-1/3"
          >
            <div className="glass-card rounded-2xl p-8 backdrop-blur-sm">
              <h3 className="text-2xl font-bold mb-6 text-white">Contact Information</h3>
              <div className="space-y-6">
                {contactInfo.map((item, index) => (
                  <motion.div 
                    key={index} 
                    variants={fadeInLeft}
                    className="flex items-start"
                  >
                    <div className="flex-shrink-0 mr-4">
                      <div className="flex items-center justify-center w-12 h-12 rounded-md bg-indigo-600/20 text-indigo-400">
                        {item.icon}
                      </div>
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-white">{item.title}</h4>
                      <a 
                        href={item.link} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-gray-300 hover:text-indigo-400 transition-colors"
                      >
                        {item.content}
                      </a>
                    </div>
                  </motion.div>
                ))}
              </div>
              <div className="mt-8">
                <h4 className="text-lg font-semibold mb-4 text-white">Follow Me</h4>
                <div className="flex space-x-4">
                  <motion.a 
                    href="https://github.com/M-Alok" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="glass-card p-3 rounded-full hover:text-indigo-600 hover:bg-indigo-100 transition-all"
                    aria-label="GitHub"
                    whileHover={{ scale: 1.2 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                    </svg>
                  </motion.a>
                  <motion.a 
                    href="https://www.linkedin.com/in/alok-m-47b817221/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="glass-card p-3 rounded-full hover:text-indigo-600 hover:bg-indigo-100 transition-all"
                    aria-label="LinkedIn"
                    whileHover={{ scale: 1.2 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                    </svg>
                  </motion.a>
                </div>
              </div>
            </div>
          </motion.div>
          
          <motion.div 
            variants={slideInFromRight} 
            className="lg:w-2/3"
          >
            <div className="glass-card rounded-2xl p-8 backdrop-blur-sm">
              <h3 className="text-2xl font-bold mb-6 text-white">Send Me a Message</h3>

              {submitStatus === 'success' && (
                <motion.div 
                  variants={fadeIn}
                  initial="hidden"
                  animate="visible"
                  className="mb-6 p-4 bg-green-600/20 text-green-400 rounded-md"
                >
                  {submitMessage}
                </motion.div>
              )}

              <form ref={formRef} onSubmit={handleSubmit}>
                {/* Name and Email Fields */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <motion.div variants={fadeInRight}>
                    <label htmlFor="name" className="block text-gray-300 font-medium mb-2">
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 bg-gray-800/50 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent text-gray-300"
                      placeholder="ex: John Doe"
                    />
                  </motion.div>

                  <motion.div variants={fadeInRight}>
                    <label htmlFor="email" className="block text-gray-300 font-medium mb-2">
                      Your Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 bg-gray-800/50 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent text-gray-300"
                      placeholder="ex: john@example.com"
                    />
                  </motion.div>
                </div>

                {/* Subject Field */}
                <motion.div variants={fadeInRight} className="mb-6">
                  <label htmlFor="subject" className="block text-gray-300 font-medium mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 bg-gray-800/50 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent text-gray-300"
                    placeholder="Enter subject..."
                  />
                </motion.div>

                {/* Message Field */}
                <motion.div variants={fadeInRight} className="mb-6">
                  <label htmlFor="message" className="block text-gray-300 font-medium mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-2 bg-gray-800/50 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent text-gray-300"
                    placeholder="Enter your message here..."
                  ></textarea>
                </motion.div>

                {/* Submit Button */}
                <motion.button
                  type="submit"
                  variants={fadeIn}
                  disabled={isSubmitting}
                  className="bg-gradient-to-r from-indigo-600 to-purple-500 hover:from-indigo-700 hover:to-purple-600 text-white font-medium py-3 px-6 rounded-md transition-all duration-300 ease-in-out transform hover:scale-105 inline-flex items-center"
                >
                  {isSubmitting ? (
                    <>
                      <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Sending...
                    </>
                  ) : (
                    <>
                      Send Message
                      <Send size={18} className="ml-2" />
                    </>
                  )}
                </motion.button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default Contact;

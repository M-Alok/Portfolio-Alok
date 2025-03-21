import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import { useState } from "react";
import { fadeInUp, floatAnimation } from "../utils/animation";

const ArrowDownButton = () => {
  const [showTooltip, setShowTooltip] = useState(false);

  return (
    <motion.div
      variants={fadeInUp}
      initial="hidden"
      animate="visible"
      className="hidden lg:flex justify-center items-center mt-40 relative"
    >
      {/* Tooltip */}
      {showTooltip && (
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          animate="visible"
          exit="hidden"
          transition={{ duration: 0.3 }}
          className="absolute -top-10 bg-indigo-600 text-gray-300 text-xs font-semibold mb-3 px-2 py-1 rounded shadow-md
                     after:content-[''] after:absolute after:left-1/2 after:-bottom-2 after:-translate-x-1/2 
                     after:border-4 after:border-transparent after:border-t-indigo-600"
        >
          About Me
        </motion.div>
      )}

      {/* Anchor Tag */}
      <motion.a
        href="#about"
        variants={floatAnimation}
        initial="hidden"
        animate="visible"
        className="animate-bounce text-indigo-600 hover:text-white bg-white hover:bg-indigo-600 p-2 rounded-full shadow-md duration-300"
        aria-label="Scroll down"
        onMouseEnter={() => setShowTooltip(true)}
        onMouseLeave={() => setShowTooltip(false)}
      >
        <ArrowDown size={24} />
      </motion.a>
    </motion.div>
  );
};

export default ArrowDownButton;

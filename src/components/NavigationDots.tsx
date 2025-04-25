
import { motion } from 'framer-motion';

const NavigationDots = () => {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { delay: 0.5 } }}
      className="flex space-x-1 mt-4"
    >
      {[1, 2, 3].map((dot, index) => (
        <div 
          key={index} 
          className="w-2 h-2 rounded-full bg-accent"
        />
      ))}
    </motion.div>
  );
};

export default NavigationDots;

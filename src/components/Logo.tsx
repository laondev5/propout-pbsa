
import { motion } from 'framer-motion';

const Logo = () => {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="flex items-center"
    >
      <span className="text-2xl font-bold text-white">Prop</span>
      <span className="text-2xl font-bold text-orange-500">Out</span>
    </motion.div>
  );
};

export default Logo;

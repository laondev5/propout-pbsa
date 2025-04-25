
import { motion } from 'framer-motion';

const CampusMap = () => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      className="w-full h-full"
    >
      <img 
        src="/lovable-uploads/46f9d242-5776-4e4f-b15f-0678153f8a7b.png" 
        alt="Campus Hot Zones Map" 
        className="w-full h-full object-contain rounded-lg"
      />
    </motion.div>
  );
};

export default CampusMap;

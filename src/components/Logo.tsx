import { motion } from "framer-motion";

const Logo = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="flex items-center gap-2"
    >
      <motion.div
        initial={{ scale: 0.8 }}
        animate={{ scale: 1 }}
        transition={{
          type: "spring",
          stiffness: 260,
          damping: 20,
        }}
        className="relative"
      >
        <img
          src="/lovable-uploads/pro3.png"
          alt="Logo"
          className="w-8 h-8 rounded-full object-cover"
        />
      </motion.div>
      <motion.h1
        initial={{ x: -20, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="text-xl font-heading tracking-wide gradient-text"
      >
        PropOut
      </motion.h1>
    </motion.div>
  );
};

export default Logo;

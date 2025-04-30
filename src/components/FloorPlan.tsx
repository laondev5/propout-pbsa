import { motion } from "framer-motion";

type FloorPlanProps = {
  className?: string;
};

const FloorPlan = ({ className = "" }: FloorPlanProps) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className={`relative ${className}`}
    >
      <svg
        viewBox="0 0 300 250"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full"
      >
        <motion.rect
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 2, ease: "easeInOut" }}
          className="stroke-accent"
          x="10"
          y="10"
          width="100"
          height="80"
          strokeWidth="1"
          strokeOpacity="0.7"
          fill="none"
        />
        <motion.rect
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 2, ease: "easeInOut", delay: 0.2 }}
          className="stroke-accent"
          x="110"
          y="10"
          width="80"
          height="80"
          strokeWidth="1"
          strokeOpacity="0.7"
          fill="none"
        />
        <motion.rect
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 2, ease: "easeInOut", delay: 0.4 }}
          className="stroke-accent"
          x="190"
          y="10"
          width="100"
          height="80"
          strokeWidth="1"
          strokeOpacity="0.7"
          fill="none"
        />
        <motion.rect
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 2, ease: "easeInOut", delay: 0.6 }}
          className="stroke-accent"
          x="10"
          y="90"
          width="150"
          height="150"
          strokeWidth="1"
          strokeOpacity="0.7"
          fill="none"
        />
        <motion.rect
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 2, ease: "easeInOut", delay: 0.8 }}
          className="stroke-accent"
          x="160"
          y="90"
          width="130"
          height="150"
          strokeWidth="1"
          strokeOpacity="0.7"
          fill="none"
        />
        <motion.circle
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 2, ease: "easeInOut", delay: 1 }}
          className="stroke-accent"
          cx="85"
          cy="165"
          r="30"
          strokeWidth="1"
          strokeOpacity="0.7"
          fill="none"
        />
        <motion.rect
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 2, ease: "easeInOut", delay: 1.2 }}
          className="stroke-accent"
          x="160"
          y="170"
          width="40"
          height="70"
          strokeWidth="1"
          strokeOpacity="0.7"
          fill="none"
        />

        {/* Grid Pattern */}
        <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
          <path
            d="M 10 0 L 0 0 0 10"
            fill="none"
            stroke="currentColor"
            strokeWidth="0.2"
            strokeOpacity="0.1"
          />
        </pattern>
        <rect width="100%" height="100%" fill="url(#grid)" />
      </svg>

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-background/20"></div>
    </motion.div>
  );
};

export default FloorPlan;

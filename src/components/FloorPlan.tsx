
import { motion } from 'framer-motion';

type FloorPlanProps = {
  className?: string;
};

const FloorPlan = ({ className = '' }: FloorPlanProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      className={`floor-plan p-1 rounded-md ${className}`}
    >
      <svg
        width="100%"
        height="100%"
        viewBox="0 0 300 250"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full"
      >
        {/* This is a simplified floor plan SVG */}
        <rect x="10" y="10" width="280" height="230" stroke="currentColor" strokeOpacity="0.7" fill="none" />
        <rect x="10" y="10" width="100" height="80" stroke="currentColor" strokeOpacity="0.7" fill="none" />
        <rect x="110" y="10" width="80" height="80" stroke="currentColor" strokeOpacity="0.7" fill="none" />
        <rect x="190" y="10" width="100" height="80" stroke="currentColor" strokeOpacity="0.7" fill="none" />
        <rect x="10" y="90" width="150" height="150" stroke="currentColor" strokeOpacity="0.7" fill="none" />
        <rect x="160" y="90" width="130" height="150" stroke="currentColor" strokeOpacity="0.7" fill="none" />
        <circle cx="85" cy="165" r="30" stroke="currentColor" strokeOpacity="0.7" fill="none" />
        <rect x="160" y="170" width="40" height="70" stroke="currentColor" strokeOpacity="0.7" fill="none" />
        <rect x="200" y="170" width="90" height="70" stroke="currentColor" strokeOpacity="0.7" fill="none" />
      </svg>
    </motion.div>
  );
};

export default FloorPlan;

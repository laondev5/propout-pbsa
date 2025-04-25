
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center"
      >
        <h1 className="text-4xl font-heading mb-4">404</h1>
        <p className="text-xl text-gray-300 mb-4">Oops! Page not found</p>
        <Link to="/" className="text-accent hover:text-white underline transition-colors">
          Return to PropOut Home
        </Link>
      </motion.div>
    </div>
  );
};

export default NotFound;

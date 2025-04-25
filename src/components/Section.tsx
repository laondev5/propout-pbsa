
import React from 'react';
import { motion } from 'framer-motion';
import NavigationDots from './NavigationDots';

type SectionProps = {
  children: React.ReactNode;
  id: string;
  className?: string;
  title?: string;
  showDots?: boolean;
  titlePosition?: 'left' | 'center';
};

const Section = ({ 
  children, 
  id, 
  className = '', 
  title, 
  showDots = true,
  titlePosition = 'left' 
}: SectionProps) => {
  return (
    <section 
      id={id} 
      className={`min-h-screen py-8 md:py-12 px-4 md:px-8 relative ${className}`}
    >
      {title && (
        <div className={`mb-8 md:mb-12 ${titlePosition === 'center' ? 'text-center' : ''}`}>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="title-text"
          >
            {title}
          </motion.h2>
          {showDots && <NavigationDots />}
        </div>
      )}
      {children}
    </section>
  );
};

export default Section;

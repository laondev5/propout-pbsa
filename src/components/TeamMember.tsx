
import { motion } from 'framer-motion';

type TeamMemberProps = {
  image: string;
  name: string;
  title: string;
  index: number;
};

const TeamMember = ({ image, name, title, index }: TeamMemberProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="flex flex-col items-center"
    >
      <div className="w-32 h-32 md:w-40 md:h-40 overflow-hidden rounded-md mb-4">
        <img src={image} alt={name} className="w-full h-full object-cover" />
      </div>
      <h3 className="text-lg font-semibold">{name}</h3>
      <p className="text-sm text-gray-300">{title}</p>
    </motion.div>
  );
};

export default TeamMember;

import { motion } from 'framer-motion';

type AnimatedCardProps = {
  children: React.ReactNode;
  index: number;
};

const AnimatedCard = ({ children, index }: AnimatedCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 30 }}
      transition={{
        delay: index * 0.2,
        type: 'easeInOut',
        duration: 0.5,
      }}
      className='w-full'
    >
      {children}
    </motion.div>
  );
};

export default AnimatedCard;

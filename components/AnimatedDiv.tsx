'use client';
import { motion, Variants } from 'framer-motion';

interface AnimatedDivProps {
  children: React.ReactNode;
  variants: Variants;
  className?: string;
}

const AnimatedDiv: React.FC<AnimatedDivProps> = ({
  children,
  variants,
  className,
}) => {
  return (
    <motion.div
      initial='hidden'
      whileInView='visible'
      viewport={{ once: true, amount: 0.5 }}
      variants={variants}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default AnimatedDiv;

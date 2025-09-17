import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Animation = ({ children, delay = 0, direction = "up" }) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const directions = {
    up: { opacity: 0, y: 40 },
    down: { opacity: 0, y: -40 },
    left: { opacity: 0, x: -40 },
    right: { opacity: 0, x: 40 },
  };

  return (
    <motion.div
      ref={ref}
      initial={directions[direction]}
      animate={inView ? { opacity: 1, x: 0, y: 0 } : {}}
      transition={{ duration: 0.8, delay }}
    >
      {children}
    </motion.div>
  );
};

export default Animation;

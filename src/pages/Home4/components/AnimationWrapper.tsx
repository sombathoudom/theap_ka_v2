import { useRef } from "react";
import { motion, useInView, HTMLMotionProps } from "framer-motion";

interface RevealProps {
  children: React.ReactNode;
  delay?: number;
}

export const Reveal = ({ children, delay = 0.2 }: RevealProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.6, delay: delay }}
    >
      {children}
    </motion.div>
  );
};

interface FadeInProps extends HTMLMotionProps<"div"> {
  direction?: "up" | "down" | "left" | "right" | "none";
  delay?: number;
  duration?: number;
  distance?: number;
}

export const FadeIn = ({
  children,
  direction = "up",
  delay = 0.5,
  duration = 0.5,
  distance = 40,
  ...props
}: FadeInProps) => {
  // Define offsets based on direction
  const directions = {
    up: { y: distance },
    down: { y: -distance },
    left: { x: distance },
    right: { x: -distance },
    none: { x: 0, y: 0 },
  };

  return (
    <motion.div
      initial={{
        opacity: 0,
        ...directions[direction],
      }}
      whileInView={{
        opacity: 1,
        x: 0,
        y: 0,
      }}
      viewport={{ once: true, amount: 0.2 }} // Trigger when 20% visible
      transition={{
        duration: duration,
        delay: delay,
        ease: [0.25, 0.1, 0.25, 1], // Custom cubic-bezier for smooth feel
      }}
      {...props} // Allows passing tailwind classes like "w-full"
    >
      {children}
    </motion.div>
  );
};

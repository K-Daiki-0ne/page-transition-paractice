import React, { FC } from 'react';
import { motion } from "framer-motion";
import {
  pageStyle,
  pageTransition,
  pageVariants
} from '../theme';


const About: FC = () => {
  const transition = { duration: 1.4, ease: [0.6, 0.01, -0.05, 0.9] };
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{
        opacity: 1,
        y: 0,
        transition: { delay: 0.5, ...transition },
      }}
      exit="exit"
    >
      <h1>About page</h1>
    </motion.div>
  )
}

export default About;
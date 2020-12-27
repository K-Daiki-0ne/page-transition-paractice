import React, { FC } from 'react';
import { motion } from 'framer-motion';
import {
  pageStyle,
  pageTransition,
  pageVariants
} from '../theme';

const Detail: FC = () => {
  return (
    <motion.div
      initial="initial"
      animate="in"    
      exit="out"
      variants={pageVariants}
      transition={pageTransition}
    >
    <h1>About page</h1>
  </motion.div>

  )
}

export default Detail
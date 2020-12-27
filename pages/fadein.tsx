import React, { FC } from 'react';
import { motion } from 'framer-motion';

const Fadein: FC = () => {
  return (
    <motion.div
      animate={{ scale: 1 }}
      transition={{ duration: 0.5 }}
    >
    <h1>Fadein page</h1>
  </motion.div>
  )
}

export default Fadein
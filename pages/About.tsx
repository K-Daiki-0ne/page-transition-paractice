import React, { FC } from 'react';
import { motion } from "framer-motion";


const About: FC = () => {
  return (
    <motion.div
      initial="initial"
      animate="in"
      exit="out"
    >
      <h1>About page</h1>
    </motion.div>
  )
}

export default About;
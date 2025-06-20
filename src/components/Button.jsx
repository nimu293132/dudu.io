import React from "react";
import { motion } from "framer-motion";

const Button = ({ onClick, className, children, style }) => {
  return (
    <motion.button
      onClick={onClick}
      className={`px-6 py-3 rounded-xl text-white font-bold shadow-md ${className}`}
      whileHover={{ scale: 1.05, rotate: [-1, 1, -1, 1, 0] }}
      whileTap={{ scale: 0.95 }}
      style={style}
    >
      {children}
    </motion.button>
  );
};

export default Button;

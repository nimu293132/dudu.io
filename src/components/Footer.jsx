import React from "react";
import { motion } from "framer-motion";

const Footer = ({ isForgiving }) => {
  return (
    <footer className="w-full p-4 mt-8   border-t ">
      {isForgiving && (
        <motion.div
          className="flex flex-col items-center space-y-4 border-gray-200 "
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
          <p className="text-gray-700 dark:text-gray-300 text-lg font-semibold text-center">
            Just a fun project 😅 by{" "}
            <a
              className="text-blue-600 dark:text-blue-400 hover:underline"
              href="https://github.com/dipanshurdev"
              target="_blank"
              rel="noopener noreferrer"
            >
              Dipanshu Rawat
            </a>
          </p>
          <div className="flex space-x-6">
            <a
              className="text-blue-600 dark:text-blue-400 hover:underline text-lg font-semibold"
              href="https://linkedin.com/in/dipanshurdev"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>
            <a
              className="text-blue-600 dark:text-blue-400 hover:underline text-lg font-semibold"
              href="https://twitter.com/dipanshurdev"
              target="_blank"
              rel="noopener noreferrer"
            >
              Twitter
            </a>
          </div>
        </motion.div>
      )}
    </footer>
  );
};

export default Footer;

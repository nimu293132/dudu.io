import React, { useState } from "react";
import { motion } from "framer-motion";

const NameInput = ({ setName }) => {
  const [inputName, setInputName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputName.trim()) {
      setName(inputName.trim());
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      className="text-center mb-8"
    >
      <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">
        Hi beautiful, what's your name?
      </h2>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col items-center gap-4"
      >
        <input
          type="text"
          value={inputName}
          onChange={(e) => setInputName(e.target.value)}
          placeholder="Enter your name"
          className="px-4 py-2 rounded-md border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
        />
        <button
          type="submit"
          className="px-6 py-2 bg-blue-500 hover:bg-blue-600 text-white font-bold rounded-md transition-colors duration-200"
        >
          Get In
        </button>
      </form>
    </motion.div>
  );
};

export default NameInput;

"use client";

import { ReactNode, useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface RotativeTextProps {
  options: {
    id: number;
    content: string;
  }[];
}

export function RotativeText({ options }: RotativeTextProps) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setIndex((state) => {
        if (state >= options.length - 1) return 0;
        return state + 1;
      });
    }, 1000);
    return () => clearInterval(id);
  }, [options]);

  return (
    <div className="px-2 w-64">
      <AnimatePresence>
        <motion.div
          key={options[index].id}
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -20, opacity: 0 }}
          transition={{ ease: "easeInOut" }}
          style={{ position: "absolute" }}
          layout
        >
          {options[index].content}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}

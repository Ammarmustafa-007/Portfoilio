import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sun, Moon } from "lucide-react";

const Themetoggle = () => {
  const [darkmode, setDarkmode] = useState(() => {
    const storedTheme = localStorage.getItem("theme");
    if (storedTheme) return storedTheme === "dark";
    return true;
  });

  useEffect(() => {
    if (darkmode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkmode]);

  return (
    <motion.button
      onClick={() => setDarkmode((prev) => !prev)}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9, rotate: 180 }}
      className="relative p-2.5 rounded-xl bg-card/30 backdrop-blur-md border border-white/10 text-foreground transition-all duration-300 hover:border-primary/30 hover:shadow-[0_0_20px_rgba(139,92,246,0.2)]"
      aria-label="Toggle Theme"
    >
      <AnimatePresence mode="wait" initial={false}>
        {darkmode ? (
          <motion.div
            key="sun"
            initial={{ rotate: -90, scale: 0, opacity: 0 }}
            animate={{ rotate: 0, scale: 1, opacity: 1 }}
            exit={{ rotate: 90, scale: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
          >
            <Sun className="w-5 h-5 text-amber-400" />
          </motion.div>
        ) : (
          <motion.div
            key="moon"
            initial={{ rotate: 90, scale: 0, opacity: 0 }}
            animate={{ rotate: 0, scale: 1, opacity: 1 }}
            exit={{ rotate: -90, scale: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
          >
            <Moon className="w-5 h-5 text-indigo-400" />
          </motion.div>
        )}
      </AnimatePresence>
    </motion.button>
  );
};

export default Themetoggle;

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export const Cursor = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  
  useEffect(() => {
    const updateMousePosition = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseOver = (e) => {
      // Check if we are hovering a link or button
      if (e.target.tagName.toLowerCase() === 'a' || e.target.tagName.toLowerCase() === 'button' || e.target.closest('a') || e.target.closest('button')) {
        setIsHovered(true);
      } else {
        setIsHovered(false);
      }
    };

    window.addEventListener("mousemove", updateMousePosition);
    document.addEventListener("mouseover", handleMouseOver);

    return () => {
      window.removeEventListener("mousemove", updateMousePosition);
      document.removeEventListener("mouseover", handleMouseOver);
    };
  }, []);

  return (
    <>
      {/* Outer springy circle */}
      <motion.div
        className="fixed top-0 left-0 w-10 h-10 rounded-full border-2 border-primary pointer-events-none z-[10000] mix-blend-difference hidden md:block"
        animate={{ 
          x: mousePosition.x - 20, 
          y: mousePosition.y - 20,
          scale: isHovered ? 1.5 : 1,
          backgroundColor: isHovered ? "rgba(139, 92, 246, 0.2)" : "rgba(139, 92, 246, 0)"
        }}
        transition={{ type: "spring", stiffness: 400, damping: 28, mass: 0.5 }}
      />
      {/* Exact dot */}
      <motion.div
        className="fixed top-0 left-0 w-2 h-2 bg-primary rounded-full pointer-events-none z-[10000] mix-blend-difference hidden md:block"
        animate={{ 
          x: mousePosition.x - 4, 
          y: mousePosition.y - 4,
          scale: isHovered ? 0 : 1
        }}
        transition={{ type: "tween", duration: 0.05 }}
      />
    </>
  );
};

import { useEffect, useState, useRef } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export const Cursor = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [isClicking, setIsClicking] = useState(false);
  const trailCount = 5;

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Springy follow for outer ring
  const springX = useSpring(mouseX, { stiffness: 300, damping: 25, mass: 0.5 });
  const springY = useSpring(mouseY, { stiffness: 300, damping: 25, mass: 0.5 });

  // Trail positions with increasing lag
  const trails = Array.from({ length: trailCount }, (_, i) => ({
    x: useSpring(mouseX, { stiffness: 200 - i * 30, damping: 20 + i * 3, mass: 0.3 + i * 0.1 }),
    y: useSpring(mouseY, { stiffness: 200 - i * 30, damping: 20 + i * 3, mass: 0.3 + i * 0.1 }),
  }));

  useEffect(() => {
    const updateMouse = (e) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };

    const handleOver = (e) => {
      if (
        e.target.tagName.toLowerCase() === "a" ||
        e.target.tagName.toLowerCase() === "button" ||
        e.target.closest("a") ||
        e.target.closest("button")
      ) {
        setIsHovered(true);
      } else {
        setIsHovered(false);
      }
    };

    const handleDown = () => setIsClicking(true);
    const handleUp = () => setIsClicking(false);

    window.addEventListener("mousemove", updateMouse);
    document.addEventListener("mouseover", handleOver);
    window.addEventListener("mousedown", handleDown);
    window.addEventListener("mouseup", handleUp);

    return () => {
      window.removeEventListener("mousemove", updateMouse);
      document.removeEventListener("mouseover", handleOver);
      window.removeEventListener("mousedown", handleDown);
      window.removeEventListener("mouseup", handleUp);
    };
  }, [mouseX, mouseY]);

  return (
    <>
      {/* Trail dots — fading gradient trail */}
      {trails.map((trail, i) => (
        <motion.div
          key={i}
          className="fixed top-0 left-0 rounded-full pointer-events-none z-[9999] hidden md:block"
          style={{
            x: trail.x,
            y: trail.y,
            translateX: "-50%",
            translateY: "-50%",
            width: 8 - i * 1,
            height: 8 - i * 1,
            background: `radial-gradient(circle, rgba(139, 92, 246, ${0.4 - i * 0.07}), rgba(168, 85, 247, ${0.2 - i * 0.03}))`,
            filter: `blur(${i * 0.5}px)`,
          }}
        />
      ))}

      {/* Outer ring — springy follow */}
      <motion.div
        className="fixed top-0 left-0 rounded-full pointer-events-none z-[10000] hidden md:block"
        style={{
          x: springX,
          y: springY,
          translateX: "-50%",
          translateY: "-50%",
        }}
        animate={{
          width: isHovered ? 56 : isClicking ? 28 : 40,
          height: isHovered ? 56 : isClicking ? 28 : 40,
          borderWidth: isHovered ? 3 : 2,
          borderColor: isHovered
            ? "rgba(168, 85, 247, 0.8)"
            : "rgba(139, 92, 246, 0.5)",
          backgroundColor: isHovered
            ? "rgba(139, 92, 246, 0.1)"
            : "rgba(139, 92, 246, 0)",
          boxShadow: isHovered
            ? "0 0 25px rgba(139, 92, 246, 0.4), 0 0 50px rgba(139, 92, 246, 0.15)"
            : "0 0 10px rgba(139, 92, 246, 0.2)",
        }}
        transition={{ type: "spring", stiffness: 400, damping: 22, mass: 0.4 }}
      />

      {/* Inner dot — instantaneous */}
      <motion.div
        className="fixed top-0 left-0 rounded-full pointer-events-none z-[10001] hidden md:block mix-blend-screen"
        style={{
          x: mouseX,
          y: mouseY,
          translateX: "-50%",
          translateY: "-50%",
          background: "radial-gradient(circle, rgba(168, 85, 247, 0.9), rgba(139, 92, 246, 0.6))",
          boxShadow: "0 0 12px rgba(139, 92, 246, 0.6)",
        }}
        animate={{
          width: isHovered ? 0 : isClicking ? 10 : 6,
          height: isHovered ? 0 : isClicking ? 10 : 6,
        }}
        transition={{ type: "tween", duration: 0.08 }}
      />
    </>
  );
};

import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowDown, Sparkles } from "lucide-react";
import { useRef } from "react";

export const Hero = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.85], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.85], [1, 0.92]);
  const y = useTransform(scrollYProgress, [0, 0.85], [0, 80]);
  const scrollIndicatorOpacity = useTransform(scrollYProgress, [0, 0.15], [1, 0]);

  const letterVariants = {
    hidden: { opacity: 0, y: 50, rotateX: -90 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      rotateX: 0,
      transition: {
        delay: 0.5 + i * 0.05,
        duration: 0.6,
        ease: [0.215, 0.61, 0.355, 1],
      },
    }),
  };

  const firstName = "Ammar".split("");
  const lastName = "Mustafa".split("");

  return (
    <section
      ref={containerRef}
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center px-4 overflow-hidden"
    >
      <motion.div style={{ opacity, scale, y }} className="container max-w-5xl mx-auto text-center z-10 mt-16">
        {/* Floating badge */}
        <motion.div
          initial={{ opacity: 0, y: 30, scale: 0.8 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-primary/10 border border-primary/20 backdrop-blur-md mb-8"
        >
          <Sparkles className="w-4 h-4 text-primary" />
          <span className="text-sm font-medium text-primary">Available for Work</span>
        </motion.div>

        {/* Hero Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 40 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="glass-card p-8 md:p-14 relative"
        >
          {/* Orb glows */}
          <div className="absolute -top-20 left-1/4 w-60 h-60 bg-primary/20 rounded-full blur-[100px] pointer-events-none" />
          <div className="absolute -bottom-20 right-1/4 w-60 h-60 bg-pink-500/15 rounded-full blur-[100px] pointer-events-none" />

          {/* Greeting */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="text-lg md:text-xl text-muted-foreground font-medium mb-4"
          >
            Hey there 👋 I'm
          </motion.p>

          {/* Name with 3D letter animation */}
          <h1 className="text-5xl sm:text-6xl md:text-8xl font-display font-black tracking-tight mb-2 perspective-[1000px]">
            <span className="inline-flex overflow-hidden">
              {firstName.map((letter, i) => (
                <motion.span
                  key={`first-${i}`}
                  custom={i}
                  variants={letterVariants}
                  initial="hidden"
                  animate="visible"
                  className="gradient-text inline-block"
                  whileHover={{ scale: 1.2, rotate: [-5, 5, 0], transition: { duration: 0.3 } }}
                >
                  {letter}
                </motion.span>
              ))}
            </span>
            <span className="inline-block mx-3" />
            <span className="inline-flex overflow-hidden">
              {lastName.map((letter, i) => (
                <motion.span
                  key={`last-${i}`}
                  custom={i + firstName.length}
                  variants={letterVariants}
                  initial="hidden"
                  animate="visible"
                  className="text-foreground inline-block"
                  style={{ opacity: 0.85 }}
                  whileHover={{ scale: 1.2, color: "hsl(263 70% 62%)", transition: { duration: 0.3 } }}
                >
                  {letter}
                </motion.span>
              ))}
            </span>
          </h1>

          {/* Animated role text */}
          <motion.div
            initial={{ opacity: 0, width: 0 }}
            animate={{ opacity: 1, width: "auto" }}
            transition={{ delay: 1.5, duration: 1, ease: "easeOut" }}
            className="overflow-hidden mx-auto mb-8"
          >
            <p className="text-xl md:text-2xl font-display font-light text-muted-foreground whitespace-nowrap">
              Full-Stack Developer · UI/UX Enthusiast · Entrepreneur
            </p>
          </motion.div>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.8, duration: 1 }}
            className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed mb-10"
          >
            I craft modern, responsive web applications with <span className="text-primary font-semibold">React</span>,{" "}
            <span className="text-primary font-semibold">Three.js</span>, and the{" "}
            <span className="text-primary font-semibold">MERN stack</span> — turning ideas into seamless digital experiences
            that users love.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2.2, duration: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <motion.a
              href="#projects"
              whileHover={{ scale: 1.05, boxShadow: "0 0 40px rgba(139, 92, 246, 0.5)" }}
              whileTap={{ scale: 0.95 }}
              className="cosmic-button text-lg px-10 py-4 flex items-center gap-2"
            >
              <Sparkles className="w-5 h-5" />
              View My Work
            </motion.a>
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05, backgroundColor: "rgba(139, 92, 246, 0.1)" }}
              whileTap={{ scale: 0.95 }}
              className="px-10 py-4 rounded-full border-2 border-primary/30 text-primary font-semibold text-lg transition-all duration-500 hover:border-primary/60"
            >
              Let's Talk
            </motion.a>
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Scroll indicator — fades as you start scrolling */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 3, duration: 1 }}
        style={{ opacity: scrollIndicatorOpacity }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center z-10"
      >
        <motion.span
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="text-xs font-medium text-muted-foreground mb-3 uppercase tracking-[0.25em]"
        >
          Scroll
        </motion.span>
        <motion.a
          href="#about"
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="w-10 h-10 rounded-full bg-card/50 backdrop-blur-md border border-white/10 flex items-center justify-center hover:bg-primary/20 transition-all duration-300"
        >
          <ArrowDown className="h-5 w-5 text-primary" />
        </motion.a>
      </motion.div>
    </section>
  );
};
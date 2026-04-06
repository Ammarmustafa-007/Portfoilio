import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";

export const Hero = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center px-4 overflow-hidden"
    >
      <div className="container max-w-4xl mx-auto text-center z-10 mt-16">
        <motion.div 
          initial={{ opacity: 0, scale: 0.9, y: 30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="space-y-6 bg-background/20 backdrop-blur-xl p-8 md:p-12 rounded-[2.5rem] border border-white/10 shadow-[0_0_40px_rgba(139,92,246,0.15)] relative overflow-hidden"
        >
          {/* Subtle inner glow */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-32 bg-primary/20 blur-[80px]"></div>

          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl md:text-7xl font-extrabold tracking-tight relative z-10"
          >
            Hi, I'm <br className="md:hidden" />
            <span className="text-primary text-glow inline-block px-2">Ammar</span>
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400 ml-2 inline-block">Mustafa</span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 1 }}
            className="text-base md:text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed font-medium relative z-10"
          >
            🚀 I build modern, responsive web applications with JavaScript, React, and MERN stack.<br />
            🎨 Skilled in Tailwind CSS, Next-Level UI, and crafting seamless digital experiences.<br />
            🌍 Entrepreneurial mindset with a focus on innovation, problem-solving, and growth.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.6 }}
            className="pt-8 relative z-10 inline-block"
          >
            <motion.a 
              whileHover={{ scale: 1.05, boxShadow: "0px 0px 25px 5px rgba(139, 92, 246, 0.4)" }}
              whileTap={{ scale: 0.95 }}
              href="#projects" 
              className="inline-block px-10 py-4 text-primary-foreground font-bold text-lg rounded-full overflow-hidden relative group"
            >
              <span className="absolute inset-0 w-full h-full bg-gradient-to-br from-primary to-purple-800 group-hover:from-purple-600 group-hover:to-primary transition-all duration-500"></span>
              <span className="relative">View My Work</span>
            </motion.a>
          </motion.div>
        </motion.div>
      </div>

      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce z-10"
      >
        <span className="text-sm font-semibold text-gray-400 mb-2 uppercase tracking-widest">Scroll</span>
        <a href="#about" className="p-3 rounded-full bg-background/50 backdrop-blur-md border border-white/10 hover:bg-primary/20 transition-all hover:scale-110">
          <ArrowDown className="h-6 w-6 text-primary" />
        </a>
      </motion.div>
    </section>
  );
};
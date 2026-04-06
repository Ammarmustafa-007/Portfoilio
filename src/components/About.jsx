import { Briefcase, Code, User } from "lucide-react";
import { motion } from "framer-motion";

export const About = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2 } }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.6 } }
  };

  return (
    <section id="about" className="py-24 px-4 relative z-10">
      <div className="container mx-auto max-w-6xl">
        <motion.h2 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          className="text-4xl md:text-5xl font-extrabold mb-16 text-center"
        >
          About <span className="text-primary text-glow">Me</span>
        </motion.h2>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Photo Option - Next Level 3D feeling Image Card */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.8, rotateY: 15 }}
            whileInView={{ opacity: 1, scale: 1, rotateY: 0 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.05, rotateY: -10, rotateX: 5 }}
            transition={{ duration: 0.8, type: "spring", bounce: 0.4 }}
            className="lg:col-span-5 relative w-full aspect-[4/5] max-w-md mx-auto"
          >
            <div className="absolute inset-0 bg-primary/30 rounded-3xl blur-[60px] transform -rotate-6"></div>
            <div className="relative h-full w-full rounded-3xl border-[0.5px] border-black/10 dark:border-white/20 bg-white/40 dark:bg-background/40 backdrop-blur-2xl overflow-hidden p-3 shadow-2xl flex items-center justify-center">
              <div className="w-full h-full bg-gradient-to-br from-primary/20 to-purple-900/40 rounded-2xl flex flex-col justify-center items-center relative overflow-hidden group">
                {/* Fallback Icon */}
                <User className="h-32 w-32 text-primary/30 absolute transition-transform duration-500 group-hover:scale-125 group-hover:text-primary/50" />
                
                {/* Image element - add your photo path here, e.g., /me.jpg */}
                <img 
                  src="/AmmarPhoto.jpg" 
                  alt="Ammar Mustafa" 
                  className="w-full h-full object-cover rounded-2xl relative z-10 mix-blend-overlay transition-all duration-700 group-hover:mix-blend-normal group-hover:scale-105" 
                  onError={(e) => { e.currentTarget.style.display = 'none'; }} 
                />
              </div>
            </div>
          </motion.div>

          {/* About Text and Skills */}
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="lg:col-span-7 space-y-8 bg-white/40 dark:bg-background/20 backdrop-blur-xl p-8 md:p-10 rounded-[2rem] border border-black/5 dark:border-white/10 shadow-[0_0_30px_rgba(0,0,0,0.1)] dark:shadow-[0_0_30px_rgba(0,0,0,0.5)]"
          >
            <motion.h3 variants={itemVariants} className="text-2xl md:text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-purple-400">
              Passionate Web Developer | Tech Creator | Entrepreneur
            </motion.h3>

            <motion.div variants={itemVariants} className="space-y-4 text-muted-foreground text-lg leading-relaxed">
              <p>✨ I’m a passionate web developer skilled in building responsive and user-friendly web applications using modern technologies like <span className="text-primary font-semibold text-glow">JavaScript, React, Tailwind CSS, and the MERN stack</span>.</p>
              <p>✨ I enjoy solving problems, learning new tools, and continuously improving my skills to grow as a developer and create impactful digital experiences.</p>
              <p>✨ I’m an entrepreneurship enthusiast with experience in building digital solutions, developing business strategies, and acquiring clients through effective communication and value-driven services.</p>
            </motion.div>

            <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-6 pt-6">
              <motion.a 
                whileHover={{ scale: 1.05, boxShadow: "0px 0px 20px 0px rgba(139, 92, 246, 0.6)" }} 
                whileTap={{ scale: 0.95 }}
                href="https://wa.me/923306381984" 
                className="px-8 py-3 rounded-full bg-primary text-primary-foreground font-semibold text-center transition-all"
              >
                Get In Touch
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.05, backgroundColor: "rgba(139, 92, 246, 0.1)" }} 
                whileTap={{ scale: 0.95 }}
                href="/Ammarcv.pdf" download="Ammar-Mustafa-CV.pdf"
                className="px-8 py-3 rounded-full border-2 border-primary text-primary font-semibold text-center transition-colors"
               >
                Download CV
              </motion.a>
            </motion.div>

            {/* Minor Skill Chips */}
            <motion.div variants={itemVariants} className="pt-8 grid grid-cols-2 gap-4">
               {[
                 { icon: <Code className="h-5 w-5" />, title: "Web Dev" },
                 { icon: <User className="h-5 w-5" />, title: "UI/UX" },
                 { icon: <Briefcase className="h-5 w-5" />, title: "Management" },
                 { icon: <Briefcase className="h-5 w-5" />, title: "Business" },
               ].map((skill, index) => (
                 <motion.div 
                   key={index} 
                   whileHover={{ y: -5, backgroundColor: "rgba(139, 92, 246, 0.15)", borderColor: "rgba(139, 92, 246, 0.5)" }}
                   className="flex items-center gap-3 p-3 rounded-xl border border-black/5 dark:border-white/5 bg-white/50 dark:bg-background/50 backdrop-blur-sm transition-all"
                 >
                   <div className="p-2 rounded-lg bg-primary/20 text-primary shadow-[0_0_10px_rgba(139,92,246,0.3)]">{skill.icon}</div>
                   <span className="font-medium text-sm text-foreground">{skill.title}</span>
                 </motion.div>
               ))}
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
import { Briefcase, Code, User, Download, MessageCircle } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export const About = () => {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const imageY = useTransform(scrollYProgress, [0, 1], [80, -80]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0, filter: "blur(8px)" },
    visible: {
      y: 0,
      opacity: 1,
      filter: "blur(0px)",
      transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] },
    },
  };

  const skills = [
    { icon: <Code className="h-5 w-5" />, title: "Web Development", desc: "React, Next.js, MERN" },
    { icon: <User className="h-5 w-5" />, title: "UI/UX Design", desc: "Figma, Tailwind" },
    { icon: <Briefcase className="h-5 w-5" />, title: "Project Management", desc: "Agile, Scrum" },
    { icon: <MessageCircle className="h-5 w-5" />, title: "Business Strategy", desc: "Growth, Clients" },
  ];

  return (
    <section ref={sectionRef} id="about" className="py-28 px-4 relative z-10">
      <div className="container mx-auto max-w-6xl">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-6xl font-display font-black mb-4">
            About <span className="gradient-text">Me</span>
          </h2>
          <div className="section-divider" />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-14 items-center">
          {/* Photo Card with 3D tilt */}
          <motion.div
            initial={{ opacity: 0, x: -60, rotateY: 15 }}
            whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, type: "spring", bounce: 0.3 }}
            className="lg:col-span-5 relative"
          >
            <motion.div
              style={{ y: imageY }}
              whileHover={{ scale: 1.03, rotateY: -8, rotateX: 5 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className="relative w-full aspect-[4/5] max-w-md mx-auto perspective-[1200px]"
            >
              {/* Gradient glow behind */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/30 via-purple-500/20 to-pink-500/20 rounded-3xl blur-[60px] transform -rotate-6" />

              {/* Card */}
              <div className="relative h-full w-full glass-card p-3 shadow-2xl">
                <div className="w-full h-full bg-gradient-to-br from-primary/10 via-purple-900/20 to-pink-900/20 rounded-2xl flex flex-col justify-center items-center relative overflow-hidden group">
                  {/* Fallback Icon */}
                  <User className="h-32 w-32 text-primary/20 absolute transition-all duration-700 group-hover:scale-125 group-hover:text-primary/40" />

                  {/* Photo */}
                  <img
                    src="/AmmarPhoto.jpg"
                    alt="Ammar Mustafa"
                    className="w-full h-full object-cover rounded-2xl relative z-10 transition-all duration-700 group-hover:scale-105"
                    onError={(e) => { e.currentTarget.style.display = 'none'; }}
                  />

                  {/* Overlay gradient on hover */}
                  <div className="absolute inset-0 z-20 bg-gradient-to-t from-primary/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 rounded-2xl" />
                </div>
              </div>

              {/* Floating badge */}
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5, type: "spring", bounce: 0.5 }}
                className="absolute -bottom-4 -right-4 bg-primary text-white px-5 py-2 rounded-2xl font-display font-bold text-sm shadow-lg shadow-primary/30 z-30"
              >
                2+ Years Exp
              </motion.div>
            </motion.div>
          </motion.div>

          {/* About Text */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="lg:col-span-7 space-y-8"
          >
            <motion.div variants={itemVariants} className="glass-card p-8 md:p-10">
              <h3 className="text-2xl md:text-3xl font-display font-bold gradient-text-static mb-6">
                Passionate Web Developer &<br />Tech Entrepreneur
              </h3>

              <div className="space-y-4 text-muted-foreground text-lg leading-relaxed">
                <motion.p variants={itemVariants}>
                  I'm a passionate web developer skilled in building responsive and user-friendly web applications using{" "}
                  <span className="text-primary font-semibold">JavaScript, React, Tailwind CSS, and the MERN stack</span>.
                </motion.p>
                <motion.p variants={itemVariants}>
                  I enjoy solving problems, learning new tools, and continuously improving my skills to grow as a developer
                  and create impactful digital experiences.
                </motion.p>
                <motion.p variants={itemVariants}>
                  I'm an entrepreneurship enthusiast with experience in building digital solutions, developing business
                  strategies, and acquiring clients through effective communication and value-driven services.
                </motion.p>
              </div>

              {/* CTA Buttons */}
              <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 pt-8">
                <motion.a
                  whileHover={{ scale: 1.05, boxShadow: "0px 0px 30px 0px rgba(139, 92, 246, 0.5)" }}
                  whileTap={{ scale: 0.95 }}
                  href="https://wa.me/923306381984"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="cosmic-button flex items-center justify-center gap-2"
                >
                  <MessageCircle className="w-4 h-4" />
                  Get In Touch
                </motion.a>
                <motion.a
                  whileHover={{ scale: 1.05, backgroundColor: "rgba(139, 92, 246, 0.1)" }}
                  whileTap={{ scale: 0.95 }}
                  href="/Ammarcv.pdf"
                  download="Ammar-Mustafa-CV.pdf"
                  className="px-8 py-3 rounded-full border-2 border-primary/30 text-primary font-semibold text-center transition-all duration-500 hover:border-primary/60 flex items-center justify-center gap-2"
                >
                  <Download className="w-4 h-4" />
                  Download CV
                </motion.a>
              </motion.div>
            </motion.div>

            {/* Skill Chips */}
            <motion.div variants={itemVariants} className="grid grid-cols-2 gap-4">
              {skills.map((skill, index) => (
                <motion.div
                  key={index}
                  whileHover={{
                    y: -6,
                    scale: 1.03,
                    boxShadow: "0 15px 40px rgba(139, 92, 246, 0.15)",
                  }}
                  className="glass-card p-4 flex items-center gap-4 group transition-all duration-500"
                >
                  <div className="p-3 rounded-xl bg-primary/15 text-primary group-hover:bg-primary/25 group-hover:shadow-[0_0_20px_rgba(139,92,246,0.3)] transition-all duration-500">
                    {skill.icon}
                  </div>
                  <div>
                    <span className="font-semibold text-sm text-foreground block">{skill.title}</span>
                    <span className="text-xs text-muted-foreground">{skill.desc}</span>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
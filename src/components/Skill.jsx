import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaHtml5, FaJsSquare, FaReact, FaGitAlt, FaFigma } from "react-icons/fa";
import { SiTailwindcss, SiMongodb, SiMysql } from "react-icons/si";
import { VscVscode } from "react-icons/vsc";

const skillsData = [
  { name: "HTML/CSS", level: 95, category: "frontend", icon: <FaHtml5 />, color: "#ea580c" },
  { name: "JavaScript", level: 75, category: "frontend", icon: <FaJsSquare />, color: "#eab308" },
  { name: "React", level: 75, category: "frontend", icon: <FaReact />, color: "#3b82f6" },
  { name: "Tailwind CSS", level: 90, category: "frontend", icon: <SiTailwindcss />, color: "#38bdf8" },
  { name: "MongoDB", level: 70, category: "backend", icon: <SiMongodb />, color: "#22c55e" },
  { name: "MySQL", level: 65, category: "backend", icon: <SiMysql />, color: "#2563eb" },
  { name: "Git/GitHub", level: 90, category: "tools", icon: <FaGitAlt />, color: "#ef4444" },
  { name: "Figma", level: 85, category: "tools", icon: <FaFigma />, color: "#ec4899" },
  { name: "VS Code", level: 95, category: "tools", icon: <VscVscode />, color: "#60a5fa" },
];

const categories = ["all", "frontend", "backend", "tools"];

export const Skills = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredSkills = skillsData.filter(
    (skill) => activeCategory === "all" || skill.category === activeCategory
  );

  return (
    <section id="skills" className="py-28 px-4 relative z-10">
      <div className="container mx-auto max-w-5xl">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-6xl font-display font-black mb-4">
            My <span className="gradient-text">Skills</span>
          </h2>
          <div className="section-divider" />
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Technologies and tools I use to bring ideas to life.
          </p>
        </motion.div>

        {/* Category Filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-3 mb-14"
        >
          {categories.map((category) => (
            <motion.button
              key={category}
              onClick={() => setActiveCategory(category)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`relative px-6 py-2.5 rounded-full text-sm font-semibold capitalize transition-all duration-500 ${
                activeCategory === category
                  ? "text-white"
                  : "text-muted-foreground hover:text-foreground bg-card/60 dark:bg-card/50 border border-border/30 dark:border-white/5 backdrop-blur-md"
              }`}
            >
              {activeCategory === category && (
                <motion.div
                  layoutId="activeSkillTab"
                  className="absolute inset-0 rounded-full"
                  style={{
                    background: "linear-gradient(135deg, hsl(263 70% 58%), hsl(280 80% 55%))",
                    boxShadow: "0 4px 20px rgba(139, 92, 246, 0.4)",
                  }}
                  transition={{ type: "spring", stiffness: 400, damping: 30 }}
                />
              )}
              <span className="relative z-10">{category}</span>
            </motion.button>
          ))}
        </motion.div>

        {/* Skill Cards */}
        <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {filteredSkills.map((skill) => (
              <motion.div
                key={skill.name}
                layout
                initial={{ opacity: 0, scale: 0.8, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.8, y: -20 }}
                transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                whileHover={{
                  y: -8,
                  scale: 1.03,
                  boxShadow: `0 20px 50px ${skill.color}20, 0 0 30px ${skill.color}10`,
                }}
                className="glass-card p-6 group"
              >
                {/* Icon & Name */}
                <div className="flex items-center gap-4 mb-5">
                  <motion.div
                    whileHover={{ rotate: 360, scale: 1.2 }}
                    transition={{ duration: 0.6, ease: "easeInOut" }}
                    className="text-2xl p-3 rounded-xl transition-all duration-500"
                    style={{
                      color: skill.color,
                      backgroundColor: `${skill.color}15`,
                      boxShadow: `0 0 0px ${skill.color}00`,
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.boxShadow = `0 0 25px ${skill.color}40`;
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.boxShadow = `0 0 0px ${skill.color}00`;
                    }}
                  >
                    {skill.icon}
                  </motion.div>
                  <div>
                    <h3 className="font-display font-bold text-lg text-foreground">{skill.name}</h3>
                    <span className="text-xs text-muted-foreground capitalize">{skill.category}</span>
                  </div>
                </div>

                {/* Progress Bar */}
                <div className="w-full h-2 rounded-full bg-muted/50 overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.2, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
                    className="h-full rounded-full relative"
                    style={{
                      background: `linear-gradient(90deg, ${skill.color}, ${skill.color}aa)`,
                      boxShadow: `0 0 12px ${skill.color}40`,
                    }}
                  />
                </div>

                {/* Percentage */}
                <div className="text-right mt-2">
                  <motion.span
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.8 }}
                    className="text-sm font-semibold"
                    style={{ color: skill.color }}
                  >
                    {skill.level}%
                  </motion.span>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};

import { motion } from "framer-motion";
import { ArrowRight, ExternalLink, Github, Code2, Layout, ShoppingCart } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "SaaS Landing Page",
    description: "A modern, conversion-optimized landing page with fluid animations and responsive design built with React and Tailwind CSS.",
    image: null,
    tags: ["React", "TailwindCSS", "Framer Motion"],
    demoUrl: "#",
    githubUrl: "#",
    icon: <Layout className="w-8 h-8" />,
    gradient: "from-violet-500/20 to-purple-600/20",
    accentColor: "#8b5cf6",
  },
  {
    id: 2,
    title: "Analytics Dashboard",
    description: "Interactive analytics dashboard with real-time data visualization, filtering, and responsive charts.",
    image: null,
    tags: ["JavaScript", "Chart.js", "Node.js"],
    demoUrl: "#",
    githubUrl: "#",
    icon: <Code2 className="w-8 h-8" />,
    gradient: "from-blue-500/20 to-cyan-500/20",
    accentColor: "#3b82f6",
  },
  {
    id: 3,
    title: "E-commerce Platform",
    description: "Full-featured e-commerce platform with user authentication, cart management, and payment processing.",
    image: null,
    tags: ["React", "Node.js", "MongoDB"],
    demoUrl: "#",
    githubUrl: "#",
    icon: <ShoppingCart className="w-8 h-8" />,
    gradient: "from-pink-500/20 to-rose-500/20",
    accentColor: "#ec4899",
  },
];

export const Projects = () => {
  return (
    <section id="projects" className="py-28 px-4 relative z-10">
      <div className="container mx-auto max-w-6xl">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-6xl font-display font-black mb-4">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <div className="section-divider" />
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Here are some of my recent projects. Each was carefully crafted with attention to detail, performance, and user experience.
          </p>
        </motion.div>

        {/* Project Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, i) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ y: -12, scale: 1.02 }}
              className="glass-card group overflow-hidden"
            >
              {/* Project Visual */}
              <div className={`relative h-48 bg-gradient-to-br ${project.gradient} flex items-center justify-center overflow-hidden`}>
                {/* Animated background pattern */}
                <div className="absolute inset-0 opacity-10">
                  <div className="absolute inset-0" style={{
                    backgroundImage: `radial-gradient(circle at 20% 50%, ${project.accentColor}40 0%, transparent 50%), radial-gradient(circle at 80% 20%, ${project.accentColor}30 0%, transparent 50%)`,
                  }} />
                </div>

                {/* Icon */}
                <motion.div
                  className="relative z-10 p-5 rounded-2xl bg-background/30 dark:bg-background/20 backdrop-blur-md border border-border/20 dark:border-white/10"
                  style={{ color: project.accentColor }}
                  whileHover={{ rotate: [0, -10, 10, 0], scale: 1.1 }}
                  transition={{ duration: 0.5 }}
                >
                  {project.icon}
                </motion.div>

                {/* Hover overlay with links */}
                <motion.div
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  className="absolute inset-0 bg-background/60 backdrop-blur-md flex items-center justify-center gap-4 z-20"
                >
                  <motion.a
                    href={project.demoUrl}
                    target="_blank"
                    rel="noreferrer noopener"
                    whileHover={{ scale: 1.15 }}
                    whileTap={{ scale: 0.9 }}
                    className="p-3 rounded-full bg-primary text-white shadow-lg shadow-primary/30"
                  >
                    <ExternalLink size={18} />
                  </motion.a>
                  <motion.a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noreferrer noopener"
                    whileHover={{ scale: 1.15 }}
                    whileTap={{ scale: 0.9 }}
                    className="p-3 rounded-full bg-card border border-border/20 dark:border-white/10 shadow-lg"
                  >
                    <Github size={18} />
                  </motion.a>
                </motion.div>
              </div>

              {/* Content */}
              <div className="p-6">
                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 text-xs font-semibold rounded-full bg-primary/10 text-primary border border-primary/10"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="text-xl font-display font-bold mb-2 group-hover:text-primary transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {project.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* GitHub CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="text-center mt-16"
        >
          <motion.a
            whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(139, 92, 246, 0.4)" }}
            whileTap={{ scale: 0.95 }}
            className="cosmic-button inline-flex items-center gap-2"
            target="_blank"
            rel="noreferrer noopener"
            href="https://github.com/Ammarmustafa-007"
          >
            <Github className="w-5 h-5" />
            Check My GitHub
            <ArrowRight size={16} />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};
import { ArrowUp, Heart } from "lucide-react";
import { motion } from "framer-motion";

export const Footer = () => {
  const handleScrollTop = (e) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative py-12 px-6 border-t border-border/30 z-10">
      {/* Top gradient line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent" />

      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
        {/* Copyright */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-sm text-muted-foreground font-medium"
        >
          &copy; {new Date().getFullYear()} Ammar Mustafa. All rights reserved.
        </motion.p>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-sm text-muted-foreground flex items-center gap-1.5"
        >
          Built with
          <motion.span
            animate={{ scale: [1, 1.3, 1] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            <Heart className="w-4 h-4 text-red-400 fill-red-400" />
          </motion.span>
          and lots of ☕
        </motion.p>

        {/* Back to top */}
        <motion.a
          href="#hero"
          onClick={handleScrollTop}
          whileHover={{ y: -4, scale: 1.1, boxShadow: "0 8px 30px rgba(139, 92, 246, 0.3)" }}
          whileTap={{ scale: 0.9 }}
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="p-3 rounded-xl glass-card text-primary hover:text-primary-foreground hover:bg-primary transition-all duration-500"
        >
          <ArrowUp size={20} />
        </motion.a>
      </div>
    </footer>
  );
};

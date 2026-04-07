import React, { useState, useEffect, useRef } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Themetoggle from "./Themetoggle";

const navitems = [
  { name: "Home", href: "#hero" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuopen, setMenuopen] = useState(false);
  const [activeSection, setActiveSection] = useState("#hero");
  const menuRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);

      // Track active section
      const sections = navitems.map(item => item.href.slice(1));
      for (const sectionId of sections.reverse()) {
        const el = document.getElementById(sectionId);
        if (el && el.getBoundingClientRect().top <= 200) {
          setActiveSection(`#${sectionId}`);
          break;
        }
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (menuopen) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
  }, [menuopen]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setMenuopen(false);
      }
    };
    if (menuopen) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [menuopen]);

  const handleNavClick = (e, href) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
    setMenuopen(false);
  };

  return (
    <>
      <motion.div
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className={`fixed w-full z-50 transition-all duration-500 ${
          scrolled
            ? "py-2 bg-background/60 backdrop-blur-xl shadow-[0_4px_30px_rgba(0,0,0,0.1)] border-b border-white/5"
            : "py-4"
        }`}
      >
        <div className="container mx-auto px-6 flex items-center justify-between">
          {/* Brand */}
          <motion.a
            href="#hero"
            onClick={(e) => handleNavClick(e, "#hero")}
            className="text-xl font-display font-bold flex items-center gap-1"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="gradient-text-static text-2xl">A</span>
            <span className="text-foreground">mmar</span>
            <span className="text-muted-foreground font-light ml-1">.</span>
          </motion.a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-1 p-1 rounded-full bg-card/30 backdrop-blur-md border border-white/5">
            {navitems.map((item) => (
              <motion.a
                key={item.name}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className={`relative px-5 py-2 rounded-full text-sm font-medium transition-colors duration-300 ${
                  activeSection === item.href
                    ? "text-primary-foreground"
                    : "text-muted-foreground hover:text-foreground"
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {activeSection === item.href && (
                  <motion.div
                    layoutId="activeNav"
                    className="absolute inset-0 rounded-full"
                    style={{
                      background: "linear-gradient(135deg, hsl(263 70% 58%), hsl(280 80% 55%))",
                      boxShadow: "0 4px 15px rgba(139, 92, 246, 0.4)",
                    }}
                    transition={{ type: "spring", stiffness: 400, damping: 30 }}
                  />
                )}
                <span className="relative z-10">{item.name}</span>
              </motion.a>
            ))}
          </div>

          <div className="flex items-center gap-3">
            {/* Theme Toggle */}
            <Themetoggle />

            {/* Mobile Menu Button */}
            <motion.button
              onClick={() => setMenuopen((prev) => !prev)}
              className="md:hidden p-2 rounded-xl bg-card/30 backdrop-blur-md border border-white/10 text-foreground"
              aria-label={menuopen ? "Close Menu" : "Open Menu"}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              {menuopen ? <X size={20} /> : <Menu size={20} />}
            </motion.button>
          </div>
        </div>
      </motion.div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuopen && (
          <motion.div
            ref={menuRef}
            initial={{ opacity: 0, backdropFilter: "blur(0px)" }}
            animate={{ opacity: 1, backdropFilter: "blur(20px)" }}
            exit={{ opacity: 0, backdropFilter: "blur(0px)" }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-background/90 flex flex-col items-center justify-center md:hidden"
          >
            <div className="flex flex-col items-center gap-6">
              {navitems.map((item, i) => (
                <motion.a
                  key={item.name}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 20 }}
                  transition={{ delay: i * 0.1, duration: 0.4, ease: "easeOut" }}
                  className={`text-3xl font-display font-semibold transition-colors duration-300 ${
                    activeSection === item.href ? "gradient-text-static" : "text-foreground hover:text-primary"
                  }`}
                >
                  {item.name}
                </motion.a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

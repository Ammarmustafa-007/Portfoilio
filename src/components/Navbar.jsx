import React, { useState, useEffect, useRef } from "react";
import { Menu, X } from "lucide-react";
import Themetoggle from "./Themetoggle";

const navitems = [
  { name: "Home", href: "#hero" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  // { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuopen, setMenuopen] = useState(false);
  const menuRef = useRef(null);

  // Scroll effect for navbar bg
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock/unlock body scroll when mobile menu is toggled
  useEffect(() => {
    if (menuopen) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
  }, [menuopen]);

  // Close menu on outside click
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setMenuopen(false);
      }
    };

    if (menuopen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [menuopen]);

  // ✅ Smooth scroll function
  const handleNavClick = (e, href) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
    setMenuopen(false); // close menu after click
  };

  return (
    <>
      <div
        className={`fixed w-full z-50 transition-all duration-300 ${
          scrolled
            ? "py-3 bg-background/80 backdrop-blur-md shadow-xs"
            : "py-5"
        }`}
      >
        <div className="container mx-auto flex items-center justify-around gap-4">
          {/* Brand Logo */}
          <a
            href="#hero"
            onClick={(e) => handleNavClick(e, "#hero")}
            className="text-2xl font-bold text-primary flex items-center"
          >
            <span className="relative z-10 hover:scale-105">
              <span className="text-glow text-foreground ">
                Ammar Mustafa&apos;s{" "}
              </span>
              Portfolio
            </span>{" "}
          </a>

          {/* Desktop nav */}
          <div className="hidden mr-11 md:flex space-x-10">
            {navitems.map((item, key) => (
              <a
                key={key}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className="text-foreground/85 hover:text-primary hover:text-glow hover:scale-125 cursor-pointer transition-colors duration-300 font-bold"
              >
                {item.name}
              </a>
            ))}
          </div>

          {/* Mobile nav button */}
          <button
            onClick={() => setMenuopen((prev) => !prev)}
            className="md:hidden p-1 text-foreground z-50 hover:scale-125 cursor-pointer"
            aria-label={menuopen ? "Close Menu" : "Open Menu"}
          >
            {menuopen ? <X size={24} /> : <Menu size={24} />}
          </button>

          {/* Mobile nav menu */}
         {/* Mobile nav menu */}
<div
  ref={menuRef}
  className={`fixed top-0 left-0 w-full h-screen bg-background/95 backdrop-blur-md z-40 flex flex-col items-center justify-center transition-all duration-300 md:hidden
    ${
      menuopen
        ? "opacity-100 pointer-events-auto"
        : "opacity-0 pointer-events-none"
    }`}
>
  <div className="flex flex-col space-y-8 text-xl">
    {navitems.map((item, key) => (
      <a
        key={key}
        href={item.href}
        onClick={(e) => handleNavClick(e, item.href)}
        className="text-foreground hover:text-primary hover:scale-125 cursor-pointer transition-colors duration-300"
      >
        {item.name}
      </a>
    ))}
  </div>
</div>


          {/* Theme toggle */}
          <div>
            <Themetoggle
              className={`${
                scrolled ? "translate-y-[-5px]" : "translate-y-0"
              } transition-all duration-300`}
            />
          </div>
        </div>
      </div>
    </>
  );
};

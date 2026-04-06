import React, { useEffect, useState } from "react";

const Themetoggle = ({ className = "" }) => {
const [darkmode, setDarkmode] = useState(() => {
  const storedTheme = localStorage.getItem("theme");
  if (storedTheme) return storedTheme === "dark";
  return true; // default to dark mode if nothing is stored
});

  useEffect(() => {
    if (darkmode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkmode]);

  const toggle = () => {
    setDarkmode((prev) => !prev);
  };

  return (
    <button
      className={`fixed top-4 right-4 z-40 hover:scale-125 cursor-pointer pt-2 transition-all duration-300 ${className}`}
      onClick={toggle}
    >
      {darkmode ? (
        <span className="material-icons h-6 w-6 text-yellow-300 animate-pulse hover:animate-spin360">
          light_mode
        </span>
      ) : (
        <span className="material-icons w-6 h-6 text-blue-800 animate-ping">
          dark_mode
        </span>
      )}
    </button>
  );
};

export default Themetoggle;

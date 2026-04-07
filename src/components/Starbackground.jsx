import { useEffect, useState } from "react";

export const Starbackground = () => {
  const [stars, setStars] = useState([]);
  const [meteors, setMeteors] = useState([]);

  useEffect(() => {
    generateStars();
    generateMeteors();

    const handleResize = () => generateStars();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const generateStars = () => {
    const numberOfStars = Math.floor(
      (window.innerWidth * window.innerHeight) / 4500
    );
    const newStars = [];
    for (let i = 0; i < numberOfStars; i++) {
      newStars.push({
        id: i,
        size: Math.random() * 2.5 + 0.5,
        x: Math.random() * 100,
        y: Math.random() * 100,
        opacity: Math.random() * 0.5 + 0.3,
        animationDuration: Math.random() * 4 + 2,
        animationDelay: Math.random() * 4,
      });
    }
    setStars(newStars);
  };

  const generateMeteors = () => {
    const newMeteors = [];
    for (let i = 0; i < 6; i++) {
      newMeteors.push({
        id: i,
        size: Math.random() * 1.5 + 0.8,
        x: Math.random() * 80 + 10,
        y: Math.random() * 25,
        // Each meteor gets a large enough delay so they don't all start visible.
        // The first one starts a few seconds in; subsequent ones are staggered.
        delay: (i * 4) + Math.random() * 3,
        animationDuration: Math.random() * 4 + 8,
      });
    }
    setMeteors(newMeteors);
  };

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {stars.map((star) => (
        <div
          key={star.id}
          className="star animate-pulse-subtle"
          style={{
            width: star.size + "px",
            height: star.size + "px",
            left: star.x + "%",
            top: star.y + "%",
            opacity: star.opacity,
            animationDuration: star.animationDuration + "s",
            animationDelay: star.animationDelay + "s",
          }}
        />
      ))}

      {meteors.map((meteor) => (
        <div
          key={meteor.id}
          className="animate-meteor"
          style={{
            position: "absolute",
            width: meteor.size * 45 + "px",
            height: meteor.size + "px",
            left: meteor.x + "%",
            top: meteor.y + "%",
            animationDelay: meteor.delay + "s",
            animationDuration: meteor.animationDuration + "s",
            background: "linear-gradient(90deg, hsl(var(--star-color)), hsla(var(--star-color), 0.4), transparent)",
            borderRadius: "9999px",
            boxShadow: "0 0 6px 2px hsla(var(--star-color), 0.25)",
            opacity: 0,
          }}
        />
      ))}
    </div>
  );
};
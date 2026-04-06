import { useState } from "react";
// React Icons
import { FaHtml5, FaJsSquare, FaReact, FaGitAlt, FaFigma } from "react-icons/fa";
import { SiTailwindcss, SiMongodb, SiMysql} from "react-icons/si";
import { VscVscode } from "react-icons/vsc";

const Skill = [
  // Frontend
  { name: "HTML/CSS", level: 95, category: "frontend", icon: <FaHtml5 className="text-orange-600 w-6 h-6   transition-transform duration-500 ease-in-out hover:animate-spin360 hover:scale-125" /> },
  { name: "JavaScript", level: 75, category: "frontend", icon: <FaJsSquare className="text-yellow-400 w-6 h-6  transition-transform duration-500 ease-in-out hover:animate-spin360 hover:scale-125" /> },
  { name: "React", level: 75, category: "frontend", icon: <FaReact className="text-blue-500 w-6 h-6 transition-transform duration-500 ease-in-out hover:animate-spin360 hover:scale-125" /> },
  { name: "Tailwind CSS", level: 90, category: "frontend", icon: <SiTailwindcss className="text-sky-400 w-6 h-6  transition-transform duration-500 ease-in-out hover:animate-spin360 hover:scale-125" /> },

  // Backend
  { name: "MongoDB", level: 70, category: "backend", icon: <SiMongodb className="text-green-500 w-6 h-6 transition-transform duration-500 ease-in-out hover:animate-spin360 hover:scale-125" /> },
  { name: "MySQL", level: 65, category: "backend", icon: <SiMysql className="text-blue-600 w-6 h-6 transition-transform duration-500 ease-in-out hover:animate-spin360 hover:scale-125" /> },

  // Tools
  { name: "Git/GitHub", level: 90, category: "tools", icon: <FaGitAlt className="text-red-500 w-6 h-6  transition-transform duration-500 ease-in-out hover:animate-spin360 hover:scale-125" /> },
  { name: "Figma", level: 85, category: "tools", icon: <FaFigma className="text-pink-500 w-6 h-6  transition-transform duration-500 ease-in-out hover:animate-spin360 hover:scale-125" /> },
  { name: "VS Code", level: 95, category: "tools", icon: <VscVscode className="text-blue-400 w-6 h-6  transition-transform duration-500 ease-in-out hover:animate-spin360 hover:scale-125" /> },
];

const categories = ["all", "frontend", "backend", "tools"];

export const Skills = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredSkills = Skill.filter(
    (skill) => activeCategory === "all" || skill.category === activeCategory
  );

  return (
    <section id="skills" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          My <span className="text-primary"> Skills</span>
        </h2>

        {/* Category Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category, key) => (
            <button
              key={key}
              onClick={() => setActiveCategory(category)}
              className={`px-5 py-2 rounded-full transition-colors duration-300 capitalize
                ${activeCategory === category 
                  ? "bg-primary text-primary-foreground" 
                  : "bg-secondary/70 text-foreground hover:bg-secondary"}`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Skill Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredSkills.map((Skill, key) => (
            <div
              key={key}
              className="bg-card p-6 rounded-lg shadow-md card-hover"
            >
              {/* Icon + Skill Name */}
              <div className="text-left mb-4 flex items-center gap-2">
                {Skill.icon}
                <h3 className="font-semibold text-lg">{Skill.name}</h3>
              </div>

              {/* Progress Bar */}
              <div className="w-full bg-secondary/50 h-2 rounded-full overflow-hidden">
                <div
                  className="bg-primary h-2 rounded-full origin-left animate-[grow_1.5s_ease-out]"
                  style={{ width: Skill.level + "%" }}
                />
              </div>

              {/* Percentage */}
              <div className="text-right mt-1">
                <span className="text-sm text-muted-foreground">
                  {Skill.level}%
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

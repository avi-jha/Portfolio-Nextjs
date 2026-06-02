import React from "react";
import JsonData from "../Data/data.json";

export default function CategoryGrid() {
  // Taking the first 8 tech stack items to mimic his categories grid
  const categories = JsonData.TechStack.slice(0, 8);

  return (
    <div className="category-grid">
      {categories.map((tech, i) => (
        <a key={i} href="#" className="category-pill">
          {tech.name}
        </a>
      ))}
    </div>
  );
}

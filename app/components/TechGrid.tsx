import React from "react";
import JsonData from "../Data/data.json";
import SectionTitle from "./SectionTitle";
import {
  FaPython,
  FaReact,
  FaNodeJs,
  FaDocker,
  FaAws,
} from "react-icons/fa";
import {
  SiDjango,
  SiFlutter,
  SiTypescript,
  SiPostgresql,
  SiNextdotjs,
  SiApachekafka,
} from "react-icons/si";

const techIcons: Record<string, React.ReactNode> = {
  Python: <FaPython />,
  Django: <SiDjango />,
  React: <FaReact />,
  "React Native": <FaReact />,
  "Next.js": <SiNextdotjs />,
  TypeScript: <SiTypescript />,
  "Node.js": <FaNodeJs />,
  Flutter: <SiFlutter />,
  PostgreSQL: <SiPostgresql />,
  AWS: <FaAws />,
  Docker: <FaDocker />,
  Kafka: <SiApachekafka />,
};

export default function TechGrid() {
  return (
    <section className="section" id="tech">
      <SectionTitle number="02" title="Tech Stack" />
      <div className="tech-grid">
        {JsonData.TechStack.map((tech, i) => (
          <div className="tech-card" key={i}>
            <div className="tech-icon" style={{ color: tech.color }}>
              {techIcons[tech.name] || "⚡"}
            </div>
            <span className="tech-name">{tech.name}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

import React from "react";
import JsonData from "../Data/data.json";
import SectionTitle from "./SectionTitle";
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";
import MY_PIC from '../assets/my_pic.jpeg'

const iconMap: Record<string, React.ReactNode> = {
  linkedin: <FaLinkedin size={18} />,
  github: <FaGithub size={18} />,
  email: <FaEnvelope size={18} />,
};

export default function AboutSection() {
  return (
    <section className="section" id="about">
      <SectionTitle number="01" title="About Me" />
      <div className="about-container">
        <div className="about-img-wrapper">
          <div
            style={{
              width: "100%",
              height: "100%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              background: "linear-gradient(135deg, rgba(0,242,255,0.1), rgba(140,0,255,0.1))",
              fontSize: "5rem",
              fontFamily: "'Outfit', sans-serif",
              fontWeight: 900,
              color: "rgba(255,255,255,0.15)",
            }}
          >
            <img src={MY_PIC.src} alt="" />
          </div>
        </div>

        <div className="about-text">
          {JsonData.about.paragraphs.map((para, i) => (
            <p key={i}>{para}</p>
          ))}

          <div className="about-stats">
            {JsonData.about.stats.map((stat, i) => (
              <div className="stat-item" key={i}>
                <div className="stat-value">{stat.value}</div>
                <div className="stat-label">{stat.label}</div>
              </div>
            ))}
          </div>

          <div className="social-links">
            {JsonData.socialLinks.map((link, i) => (
              <a
                key={i}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
                title={link.name}
              >
                {iconMap[link.icon] || link.name}
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

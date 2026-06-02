"use client";

import React, { useState, useEffect } from "react";
import JsonData from "../Data/data.json";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    setMenuOpen(false);
    const target = document.getElementById(id);
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className={`navbar ${scrolled ? "scrolled" : ""}`} id="navbar">
      <a href="#home" className="nav-logo" onClick={(e) => handleNavClick(e, "home")}>
        Avi<span>Jha</span>
      </a>
      <ul className={`nav-menu ${menuOpen ? "open" : ""}`}>
        {JsonData.Header.map((item) => (
          <li key={item}>
            <a
              href={`#${item}`}
              onClick={(e) => handleNavClick(e, item)}
            >
              {item}
            </a>
          </li>
        ))}
      </ul>
      <button
        className="menu-toggle"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle menu"
      >
        {menuOpen ? "✕" : "☰"}
      </button>
    </nav>
  );
}
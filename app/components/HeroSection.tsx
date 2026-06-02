"use client";

import React, { useState, useEffect } from "react";
import JsonData from "../Data/data.json";

export default function HeroSection() {
  const [currentText, setCurrentText] = useState("");
  const [textIndex, setTextIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  const texts = JsonData.hero.typingTexts;

  useEffect(() => {
    const timeout = setTimeout(
      () => {
        if (!isDeleting) {
          if (charIndex < texts[textIndex].length) {
            setCurrentText(texts[textIndex].substring(0, charIndex + 1));
            setCharIndex(charIndex + 1);
          } else {
            setTimeout(() => setIsDeleting(true), 1800);
          }
        } else {
          if (charIndex > 0) {
            setCurrentText(texts[textIndex].substring(0, charIndex - 1));
            setCharIndex(charIndex - 1);
          } else {
            setIsDeleting(false);
            setTextIndex((textIndex + 1) % texts.length);
          }
        }
      },
      isDeleting ? 40 : 80
    );

    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, textIndex, texts]);

  return (
    <section className="hero-section" id="home">
      <p className="hero-greeting">{JsonData.hero.greeting}</p>
      <h1 className="hero-name">{JsonData.hero.name}</h1>
      <div className="typing-wrap">
        <span>{currentText}</span>
        <span className="typing-cursor" />
      </div>
      <p className="hero-subtitle">{JsonData.hero.subtitle}</p>
      <div className="hero-buttons">
        <a href="#experience" className="btn btn-primary">
          {JsonData.hero.cta_primary}
        </a>
        <a href="#contact" className="btn btn-outline">
          {JsonData.hero.cta_secondary}
        </a>
      </div>
    </section>
  );
}

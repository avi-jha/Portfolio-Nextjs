"use client";

import React, { useState } from "react";
import JsonData from "../Data/data.json";
import SectionTitle from "./SectionTitle";
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";

const iconMap: Record<string, React.ReactNode> = {
  linkedin: <FaLinkedin size={18} />,
  github: <FaGithub size={18} />,
  email: <FaEnvelope size={18} />,
};

export default function ContactSection() {
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "sending" | "success" | "error"
  >("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitStatus("sending");
    const form = e.currentTarget;

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: process.env.NEXT_PUBLIC_WEB3FORMS_KEY,
          name: (form.elements.namedItem("name") as HTMLInputElement).value,
          email: (form.elements.namedItem("email") as HTMLInputElement).value,
          message: (form.elements.namedItem("message") as HTMLTextAreaElement)
            .value,
        }),
      });

      const result = await response.json();

      if (result.success) {
        setSubmitStatus("success");
        form.reset();
        setTimeout(() => setSubmitStatus("idle"), 5000);
      } else {
        setSubmitStatus("error");
        setTimeout(() => setSubmitStatus("idle"), 5000);
      }
    } catch {
      setSubmitStatus("error");
      setTimeout(() => setSubmitStatus("idle"), 5000);
    }
  }

  return (
    <section className="section" id="contact">
      <SectionTitle number="04" title="Contact" />
      <div className="contact-container">
        <p className="contact-subtitle">{JsonData.Contact.subtitle}</p>

        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="contact-name">
              Name <span className="required">*</span>
            </label>
            <input
              id="contact-name"
              name="name"
              type="text"
              className="form-input"
              placeholder="Your name"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="contact-email">
              Email <span className="required">*</span>
            </label>
            <input
              id="contact-email"
              name="email"
              type="email"
              className="form-input"
              placeholder="you@example.com"
              required
            />
          </div>

          <div className="form-group full-width">
            <label htmlFor="contact-message">
              Message <span className="required">*</span>
            </label>
            <textarea
              id="contact-message"
              name="message"
              className="form-input"
              placeholder="Tell me about your project or just say hello..."
              required
            />
          </div>

          {submitStatus === "success" && (
            <div className="form-status success">
              ✓ Message sent successfully! I&apos;ll get back to you soon.
            </div>
          )}

          {submitStatus === "error" && (
            <div className="form-status error">
              ✗ Failed to send. Please try again or email me directly.
            </div>
          )}

          <button
            type="submit"
            className="submit-btn"
            disabled={submitStatus === "sending"}
          >
            {submitStatus === "sending" ? "Sending..." : "Send Message"}
          </button>
        </form>

        <div className="contact-direct">
          <p>Or reach me directly</p>
          <div className="contact-direct-links">
            <a href={`mailto:${JsonData.Contact.email}`}>
              {JsonData.Contact.email}
            </a>
            <a href={`tel:${JsonData.Contact.phone.replace(/\s/g, "")}`}>
              {JsonData.Contact.phone}
            </a>
          </div>
          <div
            className="social-links"
            style={{ justifyContent: "center", marginTop: "1.5rem" }}
          >
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

import React from "react";
import JsonData from "../Data/data.json";

export default function PopularList() {
  const links = [
    { name: "LinkedIn Profile", url: JsonData.socialLinks[0].url },
    { name: "GitHub Repositories", url: JsonData.socialLinks[1].url },
    { name: "Email Me Directly", url: JsonData.socialLinks[2].url },
    { name: "View Resume (PDF)", url: "#" },
    { name: "Easebuzz Product Work", url: "#" },
    { name: "React Native Experiments", url: "#" }
  ];

  return (
    <ol className="popular-list">
      {links.map((link, i) => (
        <li key={i}>
          <a href={link.url} className="popular-link" target="_blank" rel="noopener noreferrer">
            <svg xmlns="http://www.w3.org/2000/svg" width="1.25rem" height="1.25rem" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="5" y1="12" y2="12" x2="18"></line>
              <polyline points="12 5 19 12 12 19"></polyline>
            </svg>
            {link.name}
          </a>
        </li>
      ))}
    </ol>
  );
}

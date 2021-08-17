import React from "react";
import { projectsList } from "./projectsList";
import "./styles.css";

export function Projects() {
  return (
    <div className="projects-section" style={{ top: "35px" }}>
      <h2>MY PROJECTS</h2>
      <div className="cards-container">
        {projectsList.map(({ src, title }, index) => {
          return (
            <div key={`${title}-${index}`} className="proj-card">
              <img src={src} alt="project" className="proj-img" />
              <div className="proj-description">
                <h3>{title}</h3>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

import React from "react";
import { projectsList } from "./projectsList";
import "./styles.css";

export function Projects() {
  return (
    <div className="projects-section" style={{ top: "35px" }}>
      <h2>MY PROJECTS</h2>
      {projectsList.map(({ src, title }, index) => {
        console.log(src);
        return (
          <div key={`${title}-${index}`}>
            <img src={src} alt="project" />
          </div>
        );
      })}
    </div>
  );
}

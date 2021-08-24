import React from "react";
import { projectsList } from "./projectsList";
import "./styles.css";

export function Projects() {
  return (
    <div className="projects-section" style={{ top: "35px" }}>
      <h2>MY PROJECTS</h2>
      <div className="cards-container">
        {projectsList.map(
          ({ src, title, stack, description, code, deployed }, index) => {
            return (
              <div key={`${title}-${index}`} className="proj-card">
                <img src={src} alt="project" className="proj-img" />
                <div className="proj-description">
                  <h3>{title}</h3>
                  <h6>{stack}</h6>
                  <p>{description}</p>
                </div>
                <div className="links">
                  <a href={code} target="_blank" rel="noreferrer">
                    CODE AND README
                  </a>
                  {deployed && (
                    <a href={deployed} target="_blank" rel="noreferrer">
                      DEPLOYED APP
                    </a>
                  )}
                </div>
              </div>
            );
          }
        )}
      </div>
      <div id="contact">
        <h2>CONTACT</h2>
      </div>
    </div>
  );
}

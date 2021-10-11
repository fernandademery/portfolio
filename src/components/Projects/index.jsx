import React from "react";
import { projectsList } from "./projectsList";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import Footer from "../Footer/index";
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
        <div>
          <p>I'm looking forward to hearing from you!</p>
          <p>Let's exchange ideas or discuss potential projects.</p>
          <p>I'm available on the links below</p>
          <div className="contact-links">
            <a
              href="https://www.linkedin.com/in/fernandademery/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faLinkedin} />
            </a>{" "}
            <a
              href="https://github.com/fernandademery"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faGithub} />
            </a>
            <a
              href="mailto:nandademery2@hotmail.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faEnvelope} />
            </a>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

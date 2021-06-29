import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import "./styles.css";

export default function HelloCard() {
  const [scroll, setScroll] = useState(false);

  const handleScroll = () => {
    const windowScroll = window.scrollY;
    if (windowScroll > 50) setScroll(true);
    else setScroll(false);
  };

  useEffect(() => {
    document.addEventListener("scroll", handleScroll);
  });
  return (
    <div className={`social-hidden ${scroll ? "social-visible" : ""}`}>
      <div>
        <p>Welcome to my portfolio!</p>
        <p>You can also find me on LinkedIn and Github:</p>
      </div>
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
    </div>
  );
}

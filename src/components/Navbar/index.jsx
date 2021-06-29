import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLaptopCode } from "@fortawesome/free-solid-svg-icons";
import { createBrowserHistory } from "history";
import "./styles.css";

export default function Navbar() {
  const [scroll, setScroll] = useState(false);
  const history = createBrowserHistory();
  const pathname = history.location.pathname;

  const handleScroll = () => {
    const windowScroll = window.scrollY;
    if (windowScroll > 50) setScroll(true);
    else setScroll(false);
  };

  useEffect(() => {
    document.addEventListener("scroll", handleScroll);
  });

  return (
    <header
      className={`${scroll ? "scrolled" : ""} ${
        pathname.includes("projects") ? "projects-page" : ""
      }`}
    >
      <nav>
        <a href="/" className="logo">
          <FontAwesomeIcon icon={faLaptopCode} />
        </a>

        <a href="/#about">ABOUT</a>

        <a href="/projects">PROJECTS</a>
        <a href="/contact">CONTACT</a>
      </nav>
    </header>
  );
}

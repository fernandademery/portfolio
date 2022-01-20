import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronUp } from "@fortawesome/free-solid-svg-icons";
import "./styles.css";

export default function BackToTop() {
  const [scroll, setScroll] = useState(false);

  const handleScroll = () => {
    const windowScroll = window.scrollY;
    if (windowScroll > 100) setScroll(true);
    else setScroll(false);
  };

  useEffect(() => {
    document.addEventListener("scroll", handleScroll);
  });
  return (
    <div
      className={`backToTop-button ${scroll ? "show" : ""}`}
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
    >
      <div>
        <FontAwesomeIcon icon={faChevronUp} />
      </div>
    </div>
  );
}

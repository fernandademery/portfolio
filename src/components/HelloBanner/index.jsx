import React from "react";
import HelloCard from "./components/HelloCard/index";
import "./styles.css";

export default function HelloBanner() {
  return (
    <div className="hello-banner hello-banner-background">
      <div className="name">
        <h1>FERNANDA D'EMERY</h1>
        <h3>software developer</h3>
      </div>
      <HelloCard />
    </div>
  );
}

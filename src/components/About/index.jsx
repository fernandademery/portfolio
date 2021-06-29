import React from "react";
import "./styles.css";

export default function About() {
  return (
    <section id="about">
      <h2>A BIT ABOUT MYSELF</h2>
      <section className="about-container">
        <section className="intro">
          <h3>Software development | Diversity in tech </h3>
          <div>
            <p>
              My name is Fernanda and I'm a Brazilian full-stack software
              developer living in Berlin. I'm currently interested in deepening
              my knowledge in the field of software engineering, as well as in
              supporting more diversity in tech.
            </p>
            <p>
              I have studied business and finance in the university, and have
              worked in several companies in roles related to customer
              acquisition, credit evaluation, sustainability, innovation and
              career coaching, always interested in technology and innovation.
            </p>
            <p>
              In October of 2019 I decided to do a career change a became a
              full-time programmer. I did a full-time intensive course where I
              learnt JavaScript and the MERN arquitecture (MondoDB, Express,
              React and node.js). And, since then, I have been working in
              several projects. At the moment I am a frontend developer in a
              young Berliner startup in the field of renewable energy
            </p>
            <p>
              In my current personal project, I've teamed up with a group of
              friends to create an open source application that uses NLP to
              support English learners to increase their vocabulary. Our first
              prorotype is actually live{" "}
              <a
                href="http://vocable.me:8000/"
                target="_blank"
                rel="noopener noreferrer"
              >
                here
              </a>
              !{" "}
            </p>
          </div>
        </section>
        <section className="stack">
          <h3>My skills | Stack</h3>
          <div>
            <p>
              If you want to see more about my work, visit my{" "}
              <a
                href="https://github.com/fernandademery"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
              </a>
              . If you want to chat about projects or collaboration
              opportunities, drop me a message on{" "}
              <a
                href="https://www.linkedin.com/in/fernandademery/"
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn
              </a>{" "}
              or <a href="mailto:nandademery2@hotmail.com">send me an email</a>!
            </p>
            <p>These are some of the technologies that I'm familiar with:</p>

            <ul>
              <li>JavaScript (ES6+)</li>
              <li>React.js</li>
              <li>Redux</li>
              <li>Node.js - Express framework</li>
              <li>HTML | CSS | Bootstrap</li>
              <li>MVC Design</li>
              <li>Responsive design - Grid, Flexbox</li>
              <li>Progressive Web Apps fundamentals</li>
              <li>MongoDB - Mongoose</li>
              <li>Agile methodologies</li>
              <li>RESTful API</li>
              <li>GraphQL - Apollo Client</li>
              <li>Git</li>
            </ul>
          </div>
        </section>
      </section>
      <div className="my-pic my-pic-background"></div>
    </section>
  );
}

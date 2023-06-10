import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            I am <span className="purple">Jad Al Wazzan </span>
            originally from <span className="purple"> Lebanon.</span>
            <br />Currently living in <span className="purple"> Richmond, VA.</span>
            <br />I am a junior pursuing a Bachelor's degree in Computer Science.
            <br />I'm passionate about Web Development, Data Analysis, DevOps, and almost anything related to tech.
            <br />
            <br />
            Some of the things I like to do when I'm not coding are:
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing video games
            </li>
            <li className="about-activity">
              <ImPointRight /> Hiking and camping
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Once you stop learning you start dying."{" "}
          </p>
          <footer className="blockquote-footer">Albert Einstein</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;

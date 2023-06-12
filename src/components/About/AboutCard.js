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
            <br />
            Currently living in <span className="purple"> Richmond, VA.</span>
            <br />
            <br />
            A highly skilled and experienced full-stack developer with a passion for building innovative and user-friendly web applications. With expertise in various programming languages and frameworks, I tackle complex projects with ease.
            <br />
            <br />
            I am dedicated to delivering high-quality work, exceeding client expectations by creating visually stunning and functional platforms tailored to their specific needs. Continuously learning and staying up-to-date with the latest technologies and industry trends, I strive for constant improvement.
            <br />
            <br />
            Beyond web development, I am enthusiastic about data analysis, DevOps, and all things tech-related, enhancing my versatility and providing comprehensive solutions.
            <br />
            <br />
            Currently pursuing a Bachelor's degree in Computer Science, I bring fresh perspectives and a growth mindset to every project.
            <br />
            <br />
            Thank you for visiting my portfolio. Let's bring your ideas to life together!
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
              <ImPointRight /> Traveling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Once you stop learning, you start dying."{" "}
          </p>
          <footer className="blockquote-footer">Albert Einstein</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;

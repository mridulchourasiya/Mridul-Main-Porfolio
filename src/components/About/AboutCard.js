import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Mridul Chourasia </span>
            from <span className="purple"> Madhya Pradesh, India.</span>
            <br /> I am a Final year student pursuing B.E. in Computer Science
            Engineering from Takshshila Institude of Technology, Jabalpur.
            <br />
            Additionally, I am enthusiastic about Full Stack Web Development and
            Cloud Computing.
            <br />
            <br />
            Some of my hobbies are
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Read Articals
            </li>
            <li className="about-activity">
              <ImPointRight /> Photoshop
            </li>
          </ul>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;

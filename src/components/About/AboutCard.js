import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Sahil Singh Rawat </span>
            from <span className="purple"> Rishikesh, India.</span>
            <br />
            <br></br>
            I am currently a engineering undergrad at GRAPHIC ERA HILL UNIVERSITY.
            <br />
            <br></br>
            I have cleared SSB Interview , got Recommended for INDIAN NAVY by 33SSB BHOPAL.
            <br />
            <br />
            <br></br>
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
          <li className="about-activity">
              <ImPointRight /> Play Guitar
            </li>
            <li className="about-activity">
              <ImPointRight /> Play Guitar
            </li>
            <li className="about-activity">
              <ImPointRight /> Public Speaking
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Sahil Singh</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;

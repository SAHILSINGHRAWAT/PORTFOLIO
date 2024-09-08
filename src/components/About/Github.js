import React from "react";
import { Row, Col } from "react-bootstrap";
import quesImage from "../../Assets/../Assets/ques.png";

function Github() {
  return (
    <>
      <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
        <h1 className="project-heading" style={{ paddingBottom: "20px" }}>
          Days I <strong className="purple">Code</strong>
        </h1>
        {/* Responsive Image */}
        <Col xs={15} md={10} lg={10} style={{ display: "flex", justifyContent: "center" }}>
          <img
            src={quesImage}
            alt="Question"
            className="img-fluid" // Bootstrap's responsive class
            style={{
              maxWidth: "100%", // Ensure it does not exceed the container width
              height: "auto", // Maintain aspect ratio
              padding: "10px",
            }}
          />
        </Col>
      </Row>
    </>
  );
}

export default Github;

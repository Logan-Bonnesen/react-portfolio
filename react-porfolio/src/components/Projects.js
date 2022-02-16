import React from "react";
import { Container, Row, Col } from "reactstrap";

// Whenever we try to render an array containing JSX, React knows to render each JSX element separately
function Projects(props) {
  return (
    <div>
      <p>This is the header</p>
      <Container>
        <Row>
          <Col><img src="https://via.placeholder.com/150"/></Col>
          <Col><img src="https://via.placeholder.com/150"/></Col>
          <Col><img src="https://via.placeholder.com/150"/></Col>
        </Row>
      </Container>
      <br></br>
      <Container>
        <Row>
          <Col><img src="https://via.placeholder.com/150"/></Col>
          <Col><img src="https://via.placeholder.com/150"/></Col>
          <Col><img src="https://via.placeholder.com/150"/></Col>
        </Row>
      </Container>
    </div>
  );
}

export default Projects;

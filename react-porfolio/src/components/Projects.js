import React from "react";
import { Container, Row, Col } from "reactstrap";
import petRec from "../img/petRec.png";
import movieRoulette from "../img/movieRoulette.png";
import teamProfileGenerator from "../img/teamProfileGenerator.png";
import employeeTracker from "../img/employeeTracker.png";
import { Link } from "react-router-dom";

// Whenever we try to render an array containing JSX, React knows to render each JSX element separately
function Projects(props) {
  return (
    <div>
      <p>This is the header</p>
      <Container>
        <Row>
         <a target="_blank" rel="noopener noreferrer" href="https://www.google.com/"><Col><img className="img-responsive" src={petRec} /></Col></a>
         <a href="https://www.google.com/"><Col><img className="img-responsive" src={movieRoulette} target="_blank"/></Col></a>
         <a href="https://www.google.com/"><Col><img className="img-responsive" src={teamProfileGenerator} target="_blank"/></Col></a>
        </Row>
      </Container>
      <br></br>
      <Container>
        <Row>
        <a href="https://www.google.com/"><Col><img className="img-responsive" src={employeeTracker}/></Col></a>
          <Col><img src="https://via.placeholder.com/150"/></Col>
          <Col><img src="https://via.placeholder.com/150"/></Col>
        </Row>
      </Container>
    </div>
  );
}

export default Projects;

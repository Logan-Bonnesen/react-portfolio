import React from "react";
import { Container, Row, Col } from "reactstrap";
import petRec from "../img/petRec.png";
import movieRoulette from "../img/movieRoulette.png";
import teamProfileGenerator from "../img/teamProfileGenerator.png";
import employeeTracker from "../img/employeeTracker.png";


// Whenever we try to render an array containing JSX, React knows to render each JSX element separately
function Projects(props) {
  return (
    <div>
      <h1>Portfolio</h1>
      <Container>
        <Row>
        <div><h2>Pet Health Record</h2><a target="_blank" rel="noopener noreferrer" href="https://pet-rec.herokuapp.com/"><Col><img className="img-responsive" src={petRec} /></Col></a></div>
        <div><h2>Movie Roulette</h2><a target="_blank" rel="noopener noreferrer" href="https://logan-bonnesen.github.io/Movie-Roulette/"><Col><img className="img-responsive" src={movieRoulette}/></Col></a></div>
        <div><h2>Team Profile Generator</h2><a target="_blank" rel="noopener noreferrer" href="https://watch.screencastify.com/v/BEjGIIDbIX9jikwITtrd"><Col><img className="img-responsive" src={teamProfileGenerator}/></Col></a></div>
        </Row>
      </Container>
      <br></br>
      <Container>
        <Row>
        <div><h2>Employee Tracker</h2><a target="_blank" rel="noopener noreferrer" href="https://watch.screencastify.com/v/j5ZP6OiI8kEQgtlrfIrf"><Col><img className="img-responsive" src={employeeTracker}/></Col></a></div>
          <Col><img src="https://via.placeholder.com/150"/></Col>
          <Col><img src="https://via.placeholder.com/150"/></Col>
        </Row>
      </Container>
    </div>
  );

}

export default Projects;

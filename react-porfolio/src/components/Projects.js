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
          <Col>
            <h2>Pet Health Record</h2>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://pet-rec.herokuapp.com/"
            >
              <img className="img-responsive" style={{height: "200px", width: "400px"}}src={petRec} />
            </a>
          </Col>

          <Col>
            <h2>Movie Roulette</h2>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://logan-bonnesen.github.io/Movie-Roulette/"
            >
              <img className="img-responsive" style={{height: "200px", width: "400px"}} src={movieRoulette} />
            </a>
          </Col>

          <Col>
            <h2>Team Profile Generator</h2>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://watch.screencastify.com/v/BEjGIIDbIX9jikwITtrd"
            >
              <img className="img-responsive" style={{height: "200px", width: "400px"}} src={teamProfileGenerator} />
            </a>
          </Col>
        </Row>
      </Container>
      <br></br>
      <Container>
        <Row>
          <Col>
            <h2>Employee Tracker</h2>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://watch.screencastify.com/v/j5ZP6OiI8kEQgtlrfIrf"
            >
              <img className="img-responsive" style={{height: "200px", width: "400px"}} src={employeeTracker} />
            </a>
          </Col>
          <Col>
            <img style={{height: "200px", width: "400px"}} src="https://via.placeholder.com/150" />
          </Col>
          <Col>
            <img style={{height: "200px", width: "400px"}} src="https://via.placeholder.com/150" />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Projects;

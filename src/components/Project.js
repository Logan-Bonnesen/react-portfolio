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
            <br></br>
            <a target="_blank" rel="noopener noreferrer" href="https://github.com/eburger939/pet-ehr">GitHub Repo</a>
            
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
            <br></br>
            <a target="_blank" rel="noopener noreferrer" href="https://github.com/Logan-Bonnesen/Movie-Roulette">GitHub Repo</a>
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
            <br></br>
            <a target="_blank" rel="noopener noreferrer" href="https://github.com/Logan-Bonnesen/Team-Profile-Generator">GitHub Repo</a>
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
            <br></br>
            <a target="_blank" rel="noopener noreferrer" href="https://github.com/Logan-Bonnesen/Employee-Tracker">GitHub Repo</a>
          </Col>
          <Col>
            <img style={{height: "200px", width: "400px"}} src="https://via.placeholder.com/150" />
            <br></br>
            <a target="_blank" rel="noopener noreferrer" href="https://github.com/eburger939/pet-ehr">GitHub Repo</a>
          </Col>
          <Col>
            <img style={{height: "200px", width: "400px"}} src="https://via.placeholder.com/150" />
            <br></br>
            <a target="_blank" rel="noopener noreferrer" href="https://github.com/eburger939/pet-ehr">GitHub Repo</a>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Projects;

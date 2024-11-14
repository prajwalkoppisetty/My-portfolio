import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import synthiq from "../../Assets/Projects/synthiq.png";
import library from "../../Assets/Projects/library.png";
import connectpub from "../../Assets/Projects/connectpublications.png";
import vortex from "../../Assets/Projects/Vortex.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works</strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={synthiq}
              isBlog={false}
              title="Synthiq"
              description="Developed an AI Chat-bot which utilizes the Gemini Ai’s API key and generate responses. Technologies used: ReactJS, NodeJS, ExpressJS, RestAPI."
              ghLink="https://github.com/prajwalkoppisetty/Synthiq"
              demoLink="https://synthiq-ai.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={library}
              isBlog={false}
              title="College Library"
              description="Developed a Library Management Website for my college, which facilitates the efficient management of the library. Technologies used: ReactJS, NodeJS, ExpressJS, MongoDB, ViteJS, Tailwind CSS."
              ghLink="https://github.com/prajwalkoppisetty/library"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={connectpub}
              isBlog={false}
              title="Connect Publications"
              description="This is my first real-time project developed for a copywriting company, which is used for making orders and transactions. Technologies used: HTML, CSS, Bootstrap, JavaScript, Razorpay."
              ghLink="https://github.com/prajwalkoppisetty/connectpublications"
              demoLink="https://connectpublications.in/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={vortex}
              isBlog={false}
              title="Voltage Vortex"
              description="Developed an e-commerce website for Voltage Vortex company. Technologies used: HTML, CSS, Bootstrap, JavaScript, Razorpay, SQL, Apache, PHP."
              ghLink="https://github.com/prajwalkoppisetty/library"
              demoLink="https://prajwalkoppisetty.github.io/vortex/"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;

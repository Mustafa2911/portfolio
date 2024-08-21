import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/codeEditor.png";
import villada from "../../Assets/Projects/villada.png";
import suicide from "../../Assets/Projects/suicide.png";
import bitsOfCode from "../../Assets/Projects/blog.png";
import knowlegebase from "../../Assets/Projects/knowledgebase.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>Here are a few projects I've worked on recently.</p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={knowlegebase}
              isBlog={false}
              title="KnowledgeBase"
              description="KnowledgeBase is a user-friendly platform designed for sharing articles and fostering discussion. Users can easily publish insightful articles on various topics and engage with the community through comments. Whether you're looking to share expertise or learn from others, KnowledgeBase provides a collaborative environment for knowledge exchange."
              demoLink="https://agamidemo.helpinbox.io:5173/knowledgebase/questions"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard imgPath={villada} isBlog={false} title="Villa Ada" description="Our team is currently developing VillaBooking, a dynamic platform that will allow users to book villas for their vacations with ease. As we continue to refine and expand the website, we're focused on curating a diverse selection of villas to cater to different preferences." demoLink="https://villaada.vercel.app/" />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;

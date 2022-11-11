import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/specno.png";
import projImg2 from "../assets/img/second work.jpg";
import projImg6 from "../assets/img/statsandroads.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import "animate.css";
import React from "react";
import TrackVisibility from "react-on-screen";

export const Projects = () => {
  const projects = [
    {
      description:
        "Onboarding website created for Specno, a cape town company. It was for my honours project, find code on my git hub account",
      imgUrl: projImg1,
    },
    {
      description: "Design & Development",
      imgUrl: projImg2,
    },
    {
      description:
        "Mobile app I created in undergrad to allow users to register any form of road related occurances into their community",
      imgUrl: projImg6,
    },
  ];

  return (
    <section className="project" id="project">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__fadeIn" : ""
                  }
                >
                  <h2>Projects</h2>
                  <p>The projects that I have worked on</p>
                  <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    <Nav
                      variant="pills"
                      className="nav-pills mb-5 justify-content-center align-items-center"
                      id="pills-tab"
                    ></Nav>
                    <Tab.Content
                      id="slideInUp"
                      className={
                        isVisible ? "animate__animated animate__slideInUp" : ""
                      }
                    >
                      <Tab.Pane eventKey="first">
                        <Row>
                          {projects.map((project, index) => {
                            return <ProjectCard key={index} {...project} />;
                          })}
                        </Row>
                      </Tab.Pane>
                    </Tab.Content>
                  </Tab.Container>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  );
};

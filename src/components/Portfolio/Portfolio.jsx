import React, { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import AnimationButton from "../AnimationButton";
import { useEffect } from "react";
import { BsGithub } from "react-icons/bs";
import { SiAirplayaudio } from "react-icons/si";
import Link from "next/link";

const Portfolio = (props) => {
  const projects = props.projects;
  const [filteredProjects, setFilteredProjects] = useState([]);
  useEffect(() => {
    const filtered = projects;
    setFilteredProjects(filtered);
  }, [projects]);
  const filter = (filteration) => {
    if (filteration === "latest") {
      const filtered = projects.slice(-1);
      setFilteredProjects(filtered);
    } else if (filteration === "featured") {
      const filtered = projects.filter((project) => project.featured);
      setFilteredProjects(filtered);
    } else {
      const filtered = projects;
      setFilteredProjects(filtered);
    }
  };

  return (
    <section className="py-5">
      <Container>
        <div className="pb-5 d-flex justify-content-evenly">
          <span
            onClick={() => {
              filter("all");
            }}
          >
            <AnimationButton>All</AnimationButton>
          </span>
          <span
            onClick={() => {
              filter("featured");
            }}
          >
            <AnimationButton>Featured</AnimationButton>
          </span>
          <span
            onClick={() => {
              filter("latest");
            }}
          >
            <AnimationButton>Latest</AnimationButton>
          </span>
        </div>
        <Row>
          {filteredProjects.map((project) => (
            <Col lg={4} md={6} key={project.id}>
              <div
                style={{ border: "1px solid #00bfe7", color: "#00bfe7" }}
                className="p-2 mb-3 d-flex justify-content-between"
              >
                <a href={project.github} target="_blank" rel="noreferrer">
                  <BsGithub /> GitHub
                </a>
                <a href={project.demo} target="_blank" rel="noreferrer">
                  Go Live <SiAirplayaudio />
                </a>
              </div>
              <AnimationButton>
                <img
                  src={project.img}
                  alt={project.title}
                  className="w-100"
                  height="200px"
                />
                <p className="text-center">{project.languages}</p>
              </AnimationButton>
              <div
                className="my-3 py-2 text-center"
                style={{ backgroundColor: "#00bfe7", color: "white" }}
              >
                {project.title} - {project.description}
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Portfolio;

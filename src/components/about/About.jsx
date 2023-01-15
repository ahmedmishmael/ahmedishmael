import React from "react";
import { GrMail } from "react-icons/gr";
import { GrSkype } from "react-icons/gr";
import { GrLinkedin } from "react-icons/gr";
import { GrGithub } from "react-icons/gr";
import { AiOutlineHeart } from "react-icons/ai";
import { Col, Container, Row } from "react-bootstrap";
import AhmedIshmaelPic from "../../assets/images/ahmedishmael.jpg";
import Image from "next/image";
import Carousel from "react-bootstrap/Carousel";

const About = (props) => {
  const certificates = props.certificates;

  return (
    <section className="py-5">
      <Container>
        <Row className="mb-5">
          <Col lg={4} className="d-flex flex-column align-items-center">
            <Image
              className="mb-3"
              src={AhmedIshmaelPic}
              width={150}
              alt="Ahmed Ishmael"
              priority
              style={{
                outline: "3px solid white",
                borderRadius: "3px",
              }}
            ></Image>
            <h2>Ahmed Ishmael</h2>
            <p style={{ color: "gray" }}>@ahmedmishmael</p>
            <h5>Frontend Web Developer</h5>
            <div className="d-flex mb-3">
              {" "}
              <a
                href="mailto:ahmedm.ishmael@outlook.com"
                target="_blank"
                rel="noreferrer"
                className="mx-1"
              >
                <GrMail style={{ color: "#00bfe7", fontSize: "x-large" }} />
              </a>{" "}
              <a
                href="skype:.cid.1644a0858e9613b1"
                target="_blank"
                rel="noreferrer"
                className="mx-1"
              >
                <GrSkype style={{ color: "#00bfe7", fontSize: "x-large" }} />
              </a>{" "}
              <a
                href="https://www.linkedin.com/in/ahmedmishmael"
                target="_blank"
                rel="noreferrer"
                className="mx-1"
              >
                <GrLinkedin style={{ color: "#00bfe7", fontSize: "x-large" }} />
              </a>{" "}
              <a
                href="https://github.com/ahmedmishmael"
                target="_blank"
                rel="noreferrer"
                className="mx-1"
              >
                <GrGithub style={{ color: "#00bfe7", fontSize: "x-large" }} />
              </a>
            </div>
            <a
              href="documents/Ahmed Ishmael Resume.pdf"
              download
              className="mb-5"
            >
              <button>Download CV</button>
            </a>
          </Col>
          <Col lg={8}>
            <h3>Personal Info</h3>
            <p>
              Name: Ahmed M. Ishmael
              <br />
              Date of birth: April 15, 1992
              <br />
              Nationality: Egyptian
              <br />
              Lives in: Cairo, Egypt
            </p>
            <h3>Education</h3>
            <p>Bachelor's degree from Mansoura University</p>
            <h3>Skills</h3>
            <p>
              C++ - HTML5 - CSS3 - Bootstrap - Tailwind CSS - Sass - JavaScript
              - TypeScript - React - Next JS
            </p>
            <h3>Work</h3>
            <p>Frontend Web Developer</p>
            <h3>Contact Details</h3>
            <p>
              Telephone: +20 22 198-9375
              <br />
              Cell: +20 155 111-4793
              <br />
              Website: https://ahmedishmael.vercel.app
              <br />
              Email: ahmedm.ishmael@outlook.com
            </p>
            <h3>About Website</h3>
            <p>
              Coded with{" "}
              <AiOutlineHeart style={{ color: "#00bfe7" }} className="mb-1" />{" "}
              by Ahmed Ishmael using React JS
            </p>
          </Col>
        </Row>
        <Carousel variant="dark">
          {certificates.map((e, index) => (
            <Carousel.Item key={index}>
              <img className="d-block w-100" src={e.url} alt="Certificate" />
            </Carousel.Item>
          ))}
        </Carousel>
      </Container>
    </section>
  );
};

export default About;

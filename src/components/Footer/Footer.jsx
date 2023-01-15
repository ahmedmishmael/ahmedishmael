import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import styles from "./Footer.module.css";
import { AiOutlineHeart } from "react-icons/ai";
import { MdOutlineArrowForwardIos } from "react-icons/md";
import { FaTelegramPlane } from "react-icons/fa";
import Image from "next/image";
import Logo from "../../assets/images/logo.png";
import SocialMedia from "../SocialMedia";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <Container>
        <div className="d-flex justify-content-md-between flex-wrap  pt-4">
          <div>
            <Image
              src={Logo}
              alt="Ahmed Ishmael Logo"
              width={50}
              height={50}
              priority
            ></Image>{" "}
            <span style={{ color: "#00bfe7" }}>AHMED ISHMAEL</span>
          </div>
          <div className="mt-2">
            <SocialMedia />
          </div>
        </div>
        <hr />
        <div>
          <Row>
            <Col lg={4} className="mb-5">
              <h5>About Me</h5>
              <p>
                I'm a Frontend Web Developer with an experience in web designing
                and development building high quality & responsive website.
              </p>
              <Link href="/about">
                Read More <MdOutlineArrowForwardIos className="mb-1" />
              </Link>
            </Col>
            <Col lg={2} className="mb-5">
              <h5>Featured</h5>
              <div className="d-flex flex-column">
                <Link href="/portfolio" className="mb-2">
                  Portfolio
                </Link>
                <Link href="/services" className="mb-2">
                  Services
                </Link>
                <Link href="/blog" className="mb-2">
                  Blog
                </Link>
                <Link href="/contact">Contact</Link>
              </div>
            </Col>
            <Col lg={2} className="mb-5">
              <h5>Social Media</h5>
              <div className="d-flex flex-column">
                <a
                  href="https://www.facebook.com/ahmedmishmael"
                  target="_blank"
                  rel="noreferrer"
                  className="mb-2"
                >
                  Facebook
                </a>
                <a
                  href="https://twitter.com/ahmedmishmael"
                  target="_blank"
                  rel="noreferrer"
                  className="mb-2"
                >
                  Twitter
                </a>
                <a
                  href="https://www.youtube.com/@ahmedmishmael"
                  target="_blank"
                  rel="noreferrer"
                  className="mb-2"
                >
                  Youtube
                </a>
                <a
                  href="https://www.linkedin.com/in/ahmedmishmael"
                  target="_blank"
                  rel="noreferrer"
                >
                  LinkedIn
                </a>
              </div>
            </Col>
            <Col lg={4} className="mb-5">
              <h5>Newsletter</h5>
              <p>
                Subscribe to our newsletter so you can get updates by email.
              </p>
              <div className="d-flex" style={{ width: "100%" }}>
                <input type="email" placeholder="Email" className="p-3 w-100" />
                <div
                  className="d-flex justify-content-center align-items-center"
                  style={{
                    width: "50px",
                    height: "50px",
                    backgroundColor: "#00bfe7",
                    cursor: "pointer",
                  }}
                >
                  <FaTelegramPlane
                    style={{ fontSize: "x-large", color: "white" }}
                  />
                </div>
              </div>
            </Col>
          </Row>
        </div>
        <hr />
        <div className="py-3 text-center">
          <p>Copyright © 2022 - 2023 All Rights Reserved</p>
          <p>
            Made with{" "}
            <AiOutlineHeart style={{ color: "#00bfe7" }} className="mb-1" /> by{" "}
            <span style={{ color: "#00bfe7" }}>Ahmed Ishmael</span>{" "}
            <Image
              src={Logo}
              alt="Ahmed Ishmael Logo"
              width={20}
              height={20}
              priority
              className="mb-3"
            ></Image>
          </p>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;

import Image from "next/image";
import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Logo from "../../assets/images/logo.png";
import Link from "next/link";
import SocialMedia from "../SocialMedia";
import styles from "./NavBar.module.css";

const NavBar = () => {
  return (
    <Navbar expand="lg" bg="transparent">
      <Container>
        <Navbar.Brand href="#home">
          <Image src={Logo} alt="Logo" width={50} height={50} priority></Image>
          <span>Ahmed Ishmael</span>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <span className={`${styles.navlink} me-4`}>
              <Link href="/">HOME</Link>
            </span>
            <span className={`${styles.navlink} me-4`}>
              <Link href="/about">ABOUT</Link>
            </span>
            <span className={`${styles.navlink} me-4`}>
              <Link href="/portfolio">PORTFOLIO</Link>
            </span>
            <span className={`${styles.navlink} me-4`}>
              <Link href="/services">SERVICES</Link>
            </span>
            <span className={`${styles.navlink} me-4`}>
              <Link href="/contact">CONTACT</Link>
            </span>
            <span className="d-flex">
              <span className="me-4 d-none d-lg-block">|</span>
              <span className="d-none d-lg-block">
                <SocialMedia />
              </span>
            </span>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;

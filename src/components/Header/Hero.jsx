import React from "react";
import NavBar from "../Navbar/NavBar";
import styles from "./Header.module.css";
import Carousel from "react-bootstrap/Carousel";
import AnimationButton from "../AnimationButton";
import Link from "next/link";

const Hero = () => {
  return (
    <div className={styles.hero}>
      <NavBar />
      <Carousel fade>
        <Carousel.Item className="pb-5">
          <div className={`${styles.carouselItem} w-100`}>
            <h3>HELLO WORLD!</h3>
            <h1>I AM WEB DEVELOPER</h1>
            <Link href="/portfolio">
              <AnimationButton>CHECK OUT PORTFOLIO</AnimationButton>
            </Link>
          </div>
          <Carousel.Caption>
            <h3>Take Your Business To The Next Level</h3>
            <p>Grow your business and start gaining more customers today</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item className="pb-5">
          <div className={`${styles.carouselItem} w-100`}>
            <h3>LOOKING FOR A WEB DEVELOPER?</h3>
            <h1>YOU ARE AT THE RIGHT PLACE</h1>
            <a href="documents/Ahmed Ishmael Resume.pdf" download>
              <AnimationButton>DOWNLOAD RESUME</AnimationButton>
            </a>
          </div>
          <Carousel.Caption>
            <h3>Feel Free To Contact Me</h3>
            <p>I'm open to work on site or remotely</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default Hero;

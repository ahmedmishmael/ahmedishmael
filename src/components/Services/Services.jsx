import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import UIUX from "../../assets/images/uiux.png";
import ContentWriting from "../../assets/images/content-writing.png";
import SEO from "../../assets/images/seo.png";
import Coding from "../../assets/images/coding.png";
import Image from "next/image";
import styles from "./Services.module.css";
import Link from "next/link";

const Services = () => {
  return (
    <section className="py-5">
      <Container>
        <Row>
          <Col md={6} sm={12}>
            <div className="service">
              <div className="service-icon">
                <Image
                  src={UIUX}
                  alt="UI/UX Icon"
                  width={50}
                  height={50}
                  priority
                ></Image>
              </div>
              <h4>UI/UX Design</h4>
              <p>
                Bring the power to your website through creative designs and
                eye-catching colors to help you to impress your visitors.
              </p>
            </div>
          </Col>
          <Col md={6} sm={12}>
            <div className="service">
              <div className="service-icon">
                <Image
                  src={ContentWriting}
                  alt="UI/UX Icon"
                  width={50}
                  height={50}
                  priority
                ></Image>
              </div>
              <h4>Content Writing</h4>
              <p>
                Whether you’re halfway, or you haven’t even started, I can give
                you smart solutions for your content.
              </p>
            </div>
          </Col>
          <Col md={6} sm={12}>
            <div className="service">
              <div className="service-icon">
                <Image
                  src={SEO}
                  alt="UI/UX Icon"
                  width={50}
                  height={50}
                  priority
                ></Image>
              </div>
              <h4>SEO</h4>
              <p>
                Keep in the top of search engines results and reach more through
                effective search engine optimization.
              </p>
            </div>
          </Col>
          <Col md={6} sm={12}>
            <div className="service">
              <div className="service-icon">
                <Image
                  src={Coding}
                  alt="UI/UX Icon"
                  width={50}
                  height={50}
                  priority
                ></Image>
              </div>
              <h4>Frontend Web Development</h4>
              <p>
                Build your website from scratch the way you want, responsive to
                all screens and enjoy the power of React and Next JS.
              </p>
            </div>
          </Col>
        </Row>
        <div className={styles.videoWrapper}>
          <video
            autoPlay
            muted
            loop
            style={{ width: "100%", height: "auto" }}
            className="py-5"
          >
            <source src="/videos/Butterfly.mp4" type="video/mp4" />
          </video>
          <div
            className={`${styles.videoCaption} d-flex flex-column justify-content-center align-items-center text-center`}
          >
            <h2>CREATE AWESOME WEBSITE WITH THE MOST POWERFUL FEATURES</h2>
            <Link href="/contact">
              <button>START YOUR JOURNEY TODAY</button>
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Services;

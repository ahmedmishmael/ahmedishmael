import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Play } from "@next/font/google";
import AnimationButton from "../AnimationButton";
import UIUX from "../../assets/images/uiux.png";
import ContentWriting from "../../assets/images/content-writing.png";
import SEO from "../../assets/images/seo.png";
import Coding from "../../assets/images/coding.png";
import Image from "next/image";
import Link from "next/link";

const play = Play({ weight: "400", subsets: ["latin"] });

const HomeServices = () => {
  return (
    <section className={`py-5`}>
      <Container>
        <Row>
          <Col lg={4} md={12} sm={12}>
            <div className="mb-5">
              <div className="section-title mb-5">
                <h5>SERVICES</h5>
                <h2 className="pb-3">What I Do?</h2>
              </div>
              <p className="mb-5">
                Have an experience in web designing and development building
                high quality & responsive website using HTML, CSS, Bootstrap
                ,Tailwind CSS, Javascript, Typescript, React JS and Next JS.
              </p>
              <Link href="/services">
                <AnimationButton>VIEW ALL SERVICES</AnimationButton>
              </Link>
            </div>
          </Col>
          <Col lg={8} md={12} sm={12}>
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
                    Whether you’re halfway, or you haven’t even started, I can
                    give you smart solutions for your content.
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
                    Keep in the top of search engines results and reach more
                    through effective search engine optimization.
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
                    Build your website from scratch the way you want, responsive
                    to all screens and enjoy the power of React and Next JS.
                  </p>
                </div>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default HomeServices;

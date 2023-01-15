import Image from "next/image";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Cara from "@/src/assets/images/gallery/cara.png";
import Lusion from "@/src/assets/images/gallery/lusion.png";
import AhmedIshmael from "@/src/assets/images/gallery/ahmedishmael.jpeg";
import DavidChu from "@/src/assets/images/gallery/davidchuchinabistro.png";
import Continental from "@/src/assets/images/gallery/continental.jpeg";
import Eskil from "@/src/assets/images/gallery/eskil.jpeg";
import Acurrency from "@/src/assets/images/gallery/acurrency.jpeg";

const HomePortfolio = () => {
  return (
    <section className="py-5">
      <Container>
        <div className="text-center section-title title-center mb-5">
          <h5>PROJECTS</h5>
          <h2 className="pb-3">Some Of My Works</h2>
        </div>
        <Row className="g-3">
          <Col lg={5} md={5} sm={12}>
            <Row className="g-3">
              <Col lg={12} md={12} sm={12}>
                <Image
                  src={Continental}
                  alt="Cara Project"
                  height={300}
                  className="w-100"
                ></Image>
              </Col>
              <Col lg={6} md={6} sm={6}>
                <Image
                  src={Eskil}
                  alt="Cara Project"
                  height={300}
                  className="w-100"
                ></Image>
              </Col>
              <Col lg={6} md={6} sm={6}>
                <Image
                  src={Acurrency}
                  alt="Cara Project"
                  height={300}
                  className="w-100"
                ></Image>
              </Col>
            </Row>
          </Col>
          <Col lg={5} md={5} sm={10}>
            <Row className="g-3">
              <Col lg={6} md={6} sm={6}>
                <Image
                  src={AhmedIshmael}
                  alt="Cara Project"
                  height={300}
                  className="w-100"
                ></Image>
              </Col>
              <Col lg={6} md={6} sm={6}>
                <Image
                  src={DavidChu}
                  alt="Cara Project"
                  height={300}
                  className="w-100"
                ></Image>
              </Col>
              <Col lg={12} md={12} sm={12}>
                <Image
                  src={Lusion}
                  alt="Cara Project"
                  height={300}
                  className="w-100"
                ></Image>
              </Col>
            </Row>
          </Col>
          <Col lg={2} md={2} sm={2}>
            <Image
              src={Cara}
              alt="Cara Project"
              height={616}
              className="w-100"
            ></Image>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default HomePortfolio;

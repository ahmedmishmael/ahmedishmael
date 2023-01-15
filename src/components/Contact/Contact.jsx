import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { HiLocationMarker } from "react-icons/hi";
import { FaPhoneAlt } from "react-icons/fa";
import { HiMail } from "react-icons/hi";

const Contact = () => {
  return (
    <section className="py-5">
      <Container>
        <Row>
          <Col lg={4}>
            <div className="d-flex">
              <div className="circle-icon p-3 me-3">
                <HiLocationMarker style={{ fontSize: "xx-large" }} />
              </div>
              <div>
                <h3>Location</h3>
                <p>Cairo, Egypt</p>
              </div>
            </div>
          </Col>
          <Col lg={4}>
            <div className="d-flex">
              <div className="circle-icon p-3 me-3">
                <FaPhoneAlt style={{ fontSize: "xx-large" }} />
              </div>
              <div>
                <h3>Phone</h3>
                <p>0020 155 111 4793</p>
              </div>
            </div>
          </Col>
          <Col lg={4}>
            <div className="d-flex">
              <div className="circle-icon p-3 me-3">
                <HiMail style={{ fontSize: "xx-large" }} />
              </div>
              <div>
                <h3>Email</h3>
                <p>ahmedm.ishmael@outlook.com</p>
              </div>
            </div>
          </Col>
        </Row>
        <Row className="pt-5">
          <Col lg={6} className="mb-4">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d110502.6038952537!2d31.18842343159818!3d30.059618470532715!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14583fa60b21beeb%3A0x79dfb296e8423bba!2sCairo%2C%20Cairo%20Governorate!5e0!3m2!1sen!2seg!4v1673728982350!5m2!1sen!2seg"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </Col>
          <Col lg={6} className="d-flex flex-column">
            <h2 className="mb-4">GET IN TOUCH</h2>
            <input
              type="text"
              placeholder="Name"
              required
              className="mb-3 p-3"
            />
            <input
              type="text"
              placeholder="Email"
              required
              className="mb-3 p-3"
            />
            <input type="text" placeholder="Website" className="mb-3 p-3" />
            <textarea placeholder="Message" rows="4" className="mb-3 p-3" />
            <button>SEND MESSAGE</button>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Contact;

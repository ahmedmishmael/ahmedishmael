import React from "react";
import { SiCplusplus } from "react-icons/si";
import { SiHtml5 } from "react-icons/si";
import { SiCss3 } from "react-icons/si";
import { FaSass } from "react-icons/fa";
import { SiBootstrap } from "react-icons/si";
import { SiJavascript } from "react-icons/si";
import { SiTypescript } from "react-icons/si";
import { SiReact } from "react-icons/si";
import { TbBrandNextjs } from "react-icons/tb";
import styles from "./Home.module.css";
import { Container } from "react-bootstrap";

const SpokenLanguages = () => {
  return (
    <section className="py-5">
      <Container>
        <div className="text-center section-title title-center mb-5">
          <h5>LANGUAGES</h5>
          <h2 className="pb-3">I Speak</h2>
        </div>
        <div className={styles.spokenLanguages}>
          <SiCplusplus />
          <SiHtml5 />
          <SiCss3 />
          <FaSass />
          <SiBootstrap />
          <SiJavascript />
          <SiTypescript />
          <SiReact />
          <TbBrandNextjs />
        </div>
      </Container>
    </section>
  );
};

export default SpokenLanguages;

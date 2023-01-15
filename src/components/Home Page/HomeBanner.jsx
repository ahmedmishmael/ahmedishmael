import Link from "next/link";
import React from "react";
import { Container } from "react-bootstrap";
import styles from "./Home.module.css";

const HomeBanner = () => {
  return (
    <section className={`${styles.banner} py-5`}>
      <Container>
        <div className={`${styles.bannerContent} py-3`}>
          <h2>
            Fresh Ideas, Fresh Moments <br /> Giving Wings to your Website.
          </h2>
          <h4 className="mt-5">
            Fly your website high light as a butterfly and enjoy <br />
            the power of React and Next Js.
          </h4>
          <Link href="/contact">
            <button className="px-5 mt-5">
              <h4 className="m-0">Start Your Journey</h4>
            </button>
          </Link>
        </div>
      </Container>
    </section>
  );
};

export default HomeBanner;

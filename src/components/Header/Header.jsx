import React from "react";
import { useRouter } from "next/router";
import Hero from "./Hero";
import Catalogue from "./Catalogue";
import styles from "./Header.module.css";
import { Play } from "@next/font/google";

const play = Play({ weight: "400", subsets: ["latin"] });

const Header = () => {
  const router = useRouter();
  return (
    <header className={`${styles.header} ${play.className}`}>
      {router.pathname === "/" ? <Hero /> : <Catalogue />}
    </header>
  );
};

export default Header;

import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import NavBar from "../Navbar/NavBar";
import styles from "./Header.module.css";

const Catalogue = () => {
  const router = useRouter();
  const [title, setTitle] = useState();

  useEffect(() => {
    switch (router.pathname) {
      case "/about":
        setTitle("About");
        break;
      case "/portfolio":
        setTitle("Portfolio");
        break;
      case "/services":
        setTitle("Services");
        break;
      case "/blog":
        setTitle("Blog");
        break;
      case "/contact":
        setTitle("Contact");
        break;
    }
  }, [router]);

  return (
    <div className={`${styles.catalogue} pb-5`}>
      <NavBar />
      <div className="text-center">
        <h1>{title}</h1>
        <p>
          <Link href="/">Home</Link> /{" "}
          <span style={{ color: "gray" }}>{title}</span>
        </p>
      </div>
    </div>
  );
};

export default Catalogue;

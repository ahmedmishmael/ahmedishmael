import React from "react";
import HomeBanner from "./HomeBanner";
import HomePortfolio from "./HomePortfolio";
import HomeServices from "./HomeServices";
import SpokenLanguages from "./SpokenLanguages";

const HomePage = () => {
  return (
    <>
      <HomeServices />
      <HomePortfolio />
      <HomeBanner />
      <SpokenLanguages />
    </>
  );
};

export default HomePage;

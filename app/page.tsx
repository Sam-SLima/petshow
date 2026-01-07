import React from "react";
import Header from "./_components/header";
import About from "./_components/about";
import Services from "./_components/services";
import Rates from "./_components/rates";
const Home = () => {
  return (
    <div>
      <Header />
      <About />
      <Services />
      <Rates />
    </div>
  );
};

export default Home;

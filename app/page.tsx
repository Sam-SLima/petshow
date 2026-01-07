import React from "react";
import Header from "./_components/header";
import About from "./_components/about";
import Services from "./_components/services";
import Rates from "./_components/rates";
import Footer from "./_components/footer";
const Home = () => {
  return (
    <div>
      <Header />
      <About />
      <Services />
      <Rates />
      <Footer />
    </div>
  );
};

export default Home;

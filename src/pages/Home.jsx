import React from "react";
import Main from '../components/Main'
import About from "../components/About";
import Patch from "../components/Patch";
import Testimonials from "../components/Testimonials";
import Services from "../components/Services";
import Cta from "../components/Cta";
import WhyUs from "../components/Whyus";

const Home = () => {
  return (
    <div>
      <Main />
      <About />
      <Patch />
      <WhyUs />
      <Services />
      <Testimonials />
      <Cta />
    </div>
  );
};

export default Home;

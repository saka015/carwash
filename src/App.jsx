import React from "react";

import Navbar from "./components/Navbar";
import Main from "./components/Main";
import About from "./components/About";
import Patch from "./components/Patch";
import WhyUs from "./components/WhyUs";
import Services from "./components/Services";
import Testimonials from "./components/Testimonials";
import Cta from "./components/Cta";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div>
      <Navbar />
      <Main />
      <About />
      <Patch />
      <WhyUs />
      <Services />
      <Testimonials />
      <Cta />
      <Footer/>
    </div>
  );
};

export default App;

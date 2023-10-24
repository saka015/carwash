import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Navbar from "./components/Navbar";
import Main from "./components/Main";
import About from "./components/About";
import Patch from "./components/Patch";
import WhyUs from "./components/WhyUs";
import Services from "./components/Services";
import Testimonials from "./components/Testimonials";
import Cta from "./components/Cta";
import Footer from "./components/Footer";
import OurServices from "./pages/OurServices";

const App = () => {
  return (
    <div>
      <Router>
        <Navbar />
        <Main />
        <About />
        <Patch />
        <WhyUs />
        <Services />
        <Testimonials />
        <Cta />
        <Footer />

        <Routes>
          <Route exact path="/ourservices" element={<OurServices />} />
        </Routes>
      </Router>
      ;
    </div>
  );
};

export default App;

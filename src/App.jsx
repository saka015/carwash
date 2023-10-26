import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import OurServices from "./pages/OurServices";
import LoginPage from "./pages/LoginPage";
import Contact from "./pages/Contact";
import Dashboard from "./pages/UserDashboard";

import error from "./assets/notfound.svg";

// Define a 404 Not Found component
const NotFound = () => (
  <div className="h-[100vh] flex ml-96">
    <img src={error} width="600" alt="" />
  </div>
);

const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/contactus" exact element={<Contact />} />
        <Route path="/ourservices" exact element={<OurServices />} />
        <Route path="/dashboard" exact element={<Dashboard />} />
        <Route path="/login" exact element={<LoginPage />} />
        <Route path="*" exact element={<NotFound />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;

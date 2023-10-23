import React from "react";

import Navbar from "./components/Navbar";
import Main from "./components/Main";
import About from "./components/About";
import Patch from "./components/Patch";

const App = () => {
  return (
    <div>
      <Navbar />
      <Main />
      <About />
      <Patch />
      <About />
    </div>
  );
};

export default App;

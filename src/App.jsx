import React from "react";

import Services from "./pages/Services";
import Works from "./pages/Works";

import Main from "./components/Main";
import Intro from "./components/Intro";
import Footer from "./pages/Footer";
import ClosingSection from "./pages/ClosingSection";

function App() {
  return (
    <div className="relative font-Satoshi-black">
      <div id="home">
        <Main />
      </div>

      <div id="intro">
        <Intro />
      </div>

      <div id="works">
        <Works />
      </div>
      <div id="services">
        <Services />
      </div>

      <div>
        <ClosingSection />
      </div>

      <div id="footer">
        <Footer />
      </div>
    </div>
  );
}

export default App;

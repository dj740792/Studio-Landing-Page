import React from "react";

import Services from "./pages/Services";
import Works from "./pages/Works";
import Main from "./components/Main";
import Intro from "./components/Intro";
import Footer from "./pages/Footer";
import ClosingSection from "./pages/ClosingSection";
import ScrollSec from "./components/ScrollSec";
import Bts from "./pages/Bts";
import BrandCarousel from "./components/BrandCarousel";

function App() {
  return (
    <div className="relative font-Clash-bold">
      <>
        <div id="home">
          <Main />
        </div>

        <ScrollSec />

        <div id="intro">
          <Intro />
        </div>

        <div id="works">
          <Works />
        </div>

        <div id="services">
          <Services />
        </div>
        <div id="services">
          <Bts />
        </div>
        <BrandCarousel />
        <ClosingSection />

        <div id="footer">
          <Footer />
        </div>
      </>
    </div>
  );
}

export default App;

import React, { useState } from "react";

import Services from "./pages/Services";
import Works from "./pages/Works";
import Main from "./components/Main";
import Intro from "./components/Intro";
import Footer from "./pages/Footer";
import ClosingSection from "./pages/ClosingSection";
import ScrollSec from "./components/ScrollSec";
import Loader from "./components/Loader";

import BrandCarousel from "./components/BrandCarousel";

function App() {
  const [showLoader, setShowLoader] = useState(true);

  return (
    <div className="relative font-Clash-bold">
      {showLoader ? (
        <Loader onComplete={() => setShowLoader(false)} />
      ) : (
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
          <BrandCarousel />

          <ClosingSection />

          <div id="footer">
            <Footer />
          </div>
        </>
      )}
    </div>
  );
}

export default App;

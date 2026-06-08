import React, { useState } from "react";

import Services from "./pages/Services";
import Works from "./pages/Works";
import Loader from "./components/Loader";
import Main from "./components/Main";
import Intro from "./components/Intro";
import Footer from "./pages/Footer";
import ClosingSection from "./pages/ClosingSection";
import ScrollSec from "./components/ScrollSec";

function App() {
  const [loadingDone, setLoadingDone] =
    useState(false);

  return (
    <div className="relative font-Clash-bold">
      
      {!loadingDone && (
        <Loader
          onComplete={() =>
            setLoadingDone(true)
          }
        />
      )}

      {loadingDone && (
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
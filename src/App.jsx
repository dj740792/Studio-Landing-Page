import React from "react";

import Services from "./pages/Services";
import Works from "./pages/Works";
import Testimonial from "./pages/Testimonial";
import ScrollSec from "./components/ScrollSec";
import Main from "./components/Main";
import Intro from "./components/Intro";

function App() {
  return (
    <div className="relative font-montserra">
      <div id="home">
        <Main />
      </div>
      <div id="intro">
        <Intro />
      </div>

      <div id="works">
        <Works />
      </div>
      <ScrollSec />

      <div id="services">
        <Services />
      </div>

      <div id="testimonials">
        <Testimonial />
      </div>
    </div>
  );
}

export default App;

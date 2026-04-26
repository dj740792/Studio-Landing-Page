import React from "react";
import Navbar from "./components/Navbar"; // Make sure this path is right
import Kern from "./pages/Kern";
import About from "./pages/About";
import Services from "./pages/Services";
import Works from "./pages/Works";
import Testimonial from "./pages/Testimonial";
import ScrollSec from "./components/ScrollSec";
function App() {
  return (
    <div className="relative font-montserra">
      <div id="home">
        <Kern />
      </div>
      <ScrollSec />
      <div id="about">
        <About />
      </div>

      <div id="works">
        <Works />
      </div>

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

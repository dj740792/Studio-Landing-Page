import React from "react";
import About from "./pages/About";
import Services from "./pages/Services";
import Works from "./pages/Works";
import Testimonial from "./pages/Testimonial";
import Kern from "./pages/Kern";
import Stats from "./components/Stats";

const App = () => {
  return (
    <div>
      <Kern />
      <About />
      <Services />
      <Works />
      <Testimonial />
    </div>
  );
};

export default App;

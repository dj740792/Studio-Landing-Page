import React from "react";
import { motion } from "framer-motion";
import Intro from "../components/Intro";
import Stats from "../components/Stats";
const About = () => {
  return (
    <div className="h-full w-full intersect:motion-preset-slide-up motion-delay-0">
      <Intro />
      <Stats />
    </div>
  );
};

export default About;

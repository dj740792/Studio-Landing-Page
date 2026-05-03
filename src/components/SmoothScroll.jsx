import React from "react";
import {
  motion,
  useScroll,
  useTransform,
  useMotionTemplate,
} from "motion/react";

const SmoothScroll = () => {
  return (
    <div>
      <Hero />
    </div>
  );
};

const SECTION_HEIGHT = 1500;
const Hero = () => {
  return (
    <div
      className="w-full relative "
      style={{ height: `calc(${SECTION_HEIGHT}px + 100vh)` }}
    >
      <CenterImage />
    </div>
  );
};

const CenterImage = () => {
  const { scrollY } = useScroll();
  const opacity = useTransform(
    scrollY,
    [0, SECTION_HEIGHT, SECTION_HEIGHT + 500],
    [1, 1],
  );
  const clip1 = useTransform(scrollY, [0, SECTION_HEIGHT], [25, 0]);
  const clip2 = useTransform(scrollY, [0, SECTION_HEIGHT], [75, 100]);

  const clipPath = useMotionTemplate`polygon(${clip1}% ${clip1}% ,${clip2}% ${clip1}%,${clip2}% ${clip2}%,${clip1}% ${clip2}% )`;
  return (
    <div className="sticky top-0 h-screen grid place-items-center">
      <motion.video
        className="w-[90vw] h-[90vh] object-cover rounded-2xl"
        style={{ opacity, clipPath }}
        src="/videos/ScrollVid.mp4"
        autoPlay
        loop
        muted
        playsInline
      />
    </div>
  );
};

export default SmoothScroll;

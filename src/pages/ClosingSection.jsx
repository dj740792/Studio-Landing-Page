import React from "react";
import CTAButton from "../components/CtaBtn";

const ClosingSection = () => {
  return (
    <section className="relative h-screen md:h-[120vh] xl:h-[160vh] 2xl:h-[160vh] lg:h-[140vh] w-full overflow-hidden">
      <img
        src="ctaImg.jpg"
        alt=""
        className="absolute inset-0 w-full h-full object-cover grayscale-100"
      />

      <div className="absolute inset-0 bg-black/40">
        <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-4 md:px-7 lg:px-10">
          <h2 className="uppercase text-white font-Satoshi-black leading-[0.82] text-[7vw] text-left">
            <span className="block">LET'S MAKE</span>
            <span className="block ml-[8vw]">SOMETHING REAL.</span>
            <span className="block">YOUR VISION.</span>
            <span className="block ml-[12vw]">OUR FRAME.</span>
          </h2>
        </div>
        <div className="mt-10 z-10">
          <CTAButton text="START A PROJECT"  />
        </div>
      </div>
    </section>
  );
};

export default ClosingSection;

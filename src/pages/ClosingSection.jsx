import React from "react";
import CtaButton from "../components/CtaBtn";

const ClosingSection = () => {
  return (
    <section className="relative h-screen md:h-[120vh] xl:h-[160vh] 2xl:h-[160vh] lg:h-[140vh] w-full overflow-hidden">
      <img
        src="/loaderImgs/ctaImg.jpg"
        alt="ctaImg"
        className="absolute inset-0 w-full h-full object-cover grayscale-75"
      />

      <div className="absolute inset-0 bg-black/40">
        <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-4 md:px-7 lg:px-10 gap-10">
          <h2 className="uppercase text-[#f8f8ef] font-Satoshi-black leading-[0.82] text-[10vw] sm:text-[7vw] text-left">
            <span className="block">LET'S MAKE</span>
            <span className="block ml-[8vw]">SOMETHING REAL.</span>
            <span className="block">YOUR VISION.</span>
            <span className="block ml-[12vw]">OUR FRAME.</span>
          </h2>
          <CtaButton text="START A PROJECT" />
          <div className="flex flex-col xl:mt-20 lg:mt-10 gap-2">
            <p className=" text-white/70 sm:max-w-sm text-center font-Clash-light tracking-wide text-[12px] sm:text-sm 2xl:text-lg">
              "From the first conversation to the final delivery, every detail
              felt intentional. The result exceeded anything we imagined."
            </p>
            <p className="sm:mt-5  text-[8px] sm:text-[12px] 2xl:text-md text-white/70 font-Clash-light"> - Founder, North Collective</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClosingSection;

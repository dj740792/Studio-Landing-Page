import React from "react";

const Intro = () => {
  return (
    <section className="h-screen w-full">
      <div className=" flex w-full">
        <div className="w-1/2 h-screen flex items-center justify-center">
          <img
            src="../pic10.jpg"
            alt=""
            className="relative rounded-xl w-[60%] h-[80%] right-[10%] "
          />

          <div className="border-x-8 border-rounded w-20 h-[80%] "></div>
        </div>
        <div className="flex w-1/2 h-screen">
          <div className="relative flex flex-col  justify-center items-start">
            <div>
              <h1 className="text-6xl mb-10 font-qurova">
                STYLE,CREATIVE <br />
                DIRECTION & CAPTURE{" "}
              </h1>
              <h3 className="text-lg w-150 font-mono font-light">
                We at KERN are a creative collective dedicated to the
                intersection of raw storytelling and digital precision.We bridge
                the gap between high-fashion editorial and disruptive brand
                content for a global audience. We believe that every frame is a
                chance to challenge the status quo and capture the unseen.
              </h3>
            </div>

            <img
              src="../pic11.jpg"
              alt=""
              className="relative rounded-xl w-50 h-60 left-[80%] top-[5%]"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Intro;

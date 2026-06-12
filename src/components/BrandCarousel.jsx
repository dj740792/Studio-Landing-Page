import { motion } from "framer-motion";

const slider1 = [
  "/brandSvgs/fujifilm.svg",
  "/brandSvgs/fujitsu.svg",
  "/brandSvgs/netflix.svg",
  "/brandSvgs/blackmagicdesign.svg",
];
const slider2 = [
  "/brandSvgs/redbull.svg",
  "/brandSvgs/uniqlo.svg",
  "/brandSvgs/plotly.svg",
  "/brandSvgs/boat.svg",
];
const BrandCarousel = () => {
  return (
    <section className="py-28 overflow-hidden">
      <div className="md:px-8 lg:px-10 flex items-center flex-col text-center mb-20">
        <h2 className="text-3xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl">
          Trusted
          <br />
          worldwide
        </h2>
        <p className="mt-6 opacity-90 text-sm md:text-base lg:text-lg max-w-md uppercase font-Clash-light">
          From startups to global names, great stories deserve great visuals.
        </p>
      </div>
      <div className="space-y-24 overflow-hidden flex flex-col items-center justify-center w-full px-4 md:px-8 lg:px-10 mt-10">
        <div className="w-full max-w-400 mx-auto overflow-hidden">
          <motion.div
            animate={{
              x: ["0%", "-25%"],
            }}
            transition={{
              duration: 20,
              ease: "linear",
              repeat: Infinity,
              repeatType: "loop",
            }}
            className="flex w-max gap-20"
          >
            {[...slider1, ...slider1, ...slider1, ...slider1].map((logo, i) => (
              <img
                key={i}
                src={logo}
                alt=""
                className="h-14 md:h-20 lg:h-24 xl:h-28 2xl:h-28 w-auto opacity-90"
              />
            ))}
          </motion.div>
        </div>
        <div className="w-full max-w-400 mx-auto overflow-hidden">
          <div className="relative w-full overflow-hidden">
            <motion.div
              animate={{
                x: ["-25%", "0%"],
              }}
              transition={{
                duration: 20,
                ease: "linear",
                repeat: Infinity,
              }}
              className="flex w-max gap-20 px-12"
            >
              {[...slider2, ...slider2, ...slider2, ...slider2].map(
                (logo, i) => (
                  <img
                    key={i}
                    src={logo}
                    alt=""
                    className="h-14 md:h-20 lg:h-24 xl:h-28 2xl:h-28 w-auto opacity-90"
                  />
                ),
              )}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BrandCarousel;

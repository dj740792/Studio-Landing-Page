import { motion } from "framer-motion";

const lines = [
  { text: 'ITS NEVER JUST A PHOTO.', delay: 0 },
  { text: "EVERY FRAME TELLS A STORY.", delay: 0.15 },
  { text: "WE CRAFT VISUAL IDENTITIES.", delay: 0.3 },
  { text: "YOUR BRAND. OUR LENS.", delay: 0.36 },

];

// each character slides up from underneath its overflow-hidden wrapper
const AnimatedText = ({ text, delay = 0 }) => {
  return (
    <span className="inline-flex flex-wrap justify-center">
      {text.split("").map((char, i) => (
        <span key={i} className="inline-block overflow-hidden">
          <motion.span
            className="inline-block"
            initial={{ y: "100%" }}
            whileInView={{ y: "0%" }}
            viewport={{ once: true }}
            transition={{
              duration: 0.6,
              delay: delay + i * 0.025,
              ease: [0.25, 0.46, 0.45, 0.94],
            }}
          >
            {char === " " ? "\u00A0" : char}
          </motion.span>
        </span>
      ))}
    </span>
  );
};

const Intro = () => {
  return (
    <section className="w-full min-h-screen flex flex-col items-center justify-center bg-amber-200">
      <div className="text-lg flex  justify-center mb-12 ">WHAT WE DO</div>
      
      <div className="flex flex-col  text-center gap-2 ">
        {lines.map((line, i) => (
          <h1
            key={i}
            className="font-qurova uppercase leading-tight flex-wrap "
            style={{ fontSize: "clamp(28px, 5vw, 72px)" }}
          >
            <AnimatedText text={line.text} delay={line.delay} />
          </h1>
        ))}
      </div>
    </section>
  );
};

export default Intro;

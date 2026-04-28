import { motion } from "framer-motion";

const lines = [
  { text: 'IT\'S NEVER "JUST A SHOOT."', delay: 0 },
  { text: "EVERY LIGHT HAS A REASON.", delay: 0.15 },
  { text: "WE BUILD VISUAL NARRATIVES.", delay: 0.3 },
  { text: "YOUR BRAND DESERVES TO BE FELT.", delay: 0.45 },
  { text: "NOT JUST SEEN.", delay: 0.6 },
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
    <section className="w-full min-h-screen  flex flex-col justify-between px-10 py-8">

     

      {/* Main text */}
      <div className="flex flex-col items-center text-center gap-2 mt-20">
        {lines.map((line, i) => (
          <h1
            key={i}
            className=" uppercase leading-[1.05] tracking-tighter"
            style={{ fontSize: "clamp(28px, 5vw, 82px)" }}
          >
            <AnimatedText text={line.text} delay={line.delay} />
          </h1>
        ))}
      </div>

      

    </section>
  );
};

export default Intro;
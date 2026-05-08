import {
  AnimatePresence,
  initPrefersReducedMotion,
  motion,
} from "framer-motion";
import WorksBtn from "../components/WorksBtn";
import { div, img } from "motion/react-client";
import { useState } from "react";
import { TextInitial } from "lucide-react";

const worksData = [
  {
    id: "01",
    title: "La Bicicleta",
    img: "pic20.jpg",
    video: "/videos/workVid1.mp4",
    widht: "w-1/2",
    type: "Music Video",
  },
  {
    id: "01",
    title: "Rising sun",
    img: "pic5.jpg",
    video: "/videos/ScrollVid.mp4",
    widht: "w-1/2",
  },
  {
    id: "02",
    title: "Rising sun",
    img: "pic6.jpg",
    video: "/videos/ScrollVid.mp4",
    widht: "w-1/2",
  },
  {
    id: "03",
    title: "Rising sun",
    img: "pic7.jpg",
    video: "/videos/ScrollVid.mp4",
    widht: "w-1/2",
  },
];

const WorkCard = ({ work }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className={`${work.widht}  px-4 py-4 flex flex-col rounded-xl `}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <motion.div className="relative w-full aspect-video rounded-xl overflow-hidden flex flex-col cursor-pointer h-150">
        <motion.img
          src={work.img}
          animate={{
            filter: isHovered
              ? "blur(10px) brightness(0.6) "
              : "blur(0px) brightness(1) ",
            scale: isHovered ? 1.05 : 1,
          }}
          transition={{ duration: 0.4 }}
          className="w-full h-full object-cover"
        />

        <AnimatePresence>
          {isHovered && (
            <motion.div
              drag
              dragConstraints={{
                top: -10,
                left: -10,
                right: 10,
                bottom: 10,
              }}
              dragTransition={{
                bounceStiffness: 600,
                bounceDamping: 30,
              }}
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 0.7 }}
              exit={{ opacity: 0, scale: 0.7 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="absolute inset-0 flex items-center justify-center z-10 p-6"
            >
              <div className="w-full h-full rounded-xl overflow-hidden ">
                <video
                  src={work.video}
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-full object-cover"
                ></video>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>

      <div className="flex mt-4 justify-between mx-2">
        <h2 className="text-lg uppercase flex ">
          <span className="text-xl flex">✦</span> {work.title}
        </h2>
        <p className="text-lg text-gray-800 tracking-tight">{work.type}</p>
      </div>
    </div>
  );
};

const Works = () => {
  return (
    <section className="min-h-screen w-full flex flex-col justify-center items-start mt-20 ">
      <div className="font-qurova mb-12 flex items-start text-8xl lg:text-[130px] uppercase lg:leading-30 ml-10 ">
        <h1 className="w-full h-max ">our works</h1>
      </div>
      <div className="flex flex-wrap px-4 lg:px-10 gap-y-10">
        {worksData.map((work) => (
          <WorkCard key={work.id} work={work} />
        ))}
      </div>
      <div className="flex self-center mt-20">
        <WorksBtn />
      </div>
    </section>
  );
};

export default Works;

import {
  AnimatePresence,
  initPrefersReducedMotion,
  motion,
} from "framer-motion";
import WorksBtn from "../components/WorksBtn";
import { div, img } from "motion/react-client";
import { useState } from "react";
import { TextInitial } from "lucide-react";

const wordVariants = {
  hidden: { y: "105%", opacity: 0 },
  visible: {
    y: "0%",
    opacity: 1,
    transition: {
      duration: 0.8,
      ease: [0.23, 1, 0.3, 1.2],
    },
  },
};
const infoVariants = {
  hidden: { y: "-105%", opacity: 0 },
  visible: {
    y: "0%",
    opacity: 1,
    transition: {
      duration: 0.8,
      ease: [0.23, 1, 0.3, 1.2],
    },
  },
};

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.05,
      delayChildren: 0.2,
    },
  },
};

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
    id: "02",
    title: "Nightlife in Chongqing",
    img: "Work2.png",
    video: "/videos/workVid2.mp4",
    widht: "w-1/2",
    type: "Documentary",
  },
  {
    id: "03",
    title: "Cindy Era tour",
    img: "work3.png",
    video: "/videos/workVid3.mp4",
    widht: "w-1/2",
    type: "Music Video",
  },
  {
    id: "04",
    title: "Great Ideas",
    img: "work4.jpg",
    video: "/videos/workVid4.mp4",
    widht: "w-1/2",
    type: "Short film",
  },
];

const WorkCard = ({ work }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className={`${work.widht}  px-4 py-4 flex flex-col rounded-xl`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <motion.div className="relative w-full  rounded-xl overflow-hidden flex flex-col justify-around  cursor-pointer h-150">
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
              className="absolute inset-0 flex items-center justify-center z-10 p-4"
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
      <motion.div
        variants={infoVariants}
        initial="hidden"
        animate={isHovered ? "visible" : "hidden"}
        className="flex w-full mt-2 justify-between"
      >
        <h2 className="text-lg uppercase flex gap-3">
          <span className="text-xl flex">✦</span> {work.title}
        </h2>
        <p className="text-lg tracking-tight">{work.type}</p>
      </motion.div>
    </div>
  );
};
const Works = () => {
  return (
    <section className="min-h-screen w-full flex flex-col justify-center items-start mt-20 ">
      <div className="font-qurova mb-12 flex items-start text-8xl sm:text-[60px] md:text-[80px] md:tracking-tight lg:text-[130px] uppercase lg:leading-30 ml-10 mt-50">
        <motion.h1
          variants={wordVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="w-full h-max "
        >
          our works
        </motion.h1>
      </div>
      <div className="flex flex-wrap px-4 lg:px-10 gap-y-10 md:px-4">
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

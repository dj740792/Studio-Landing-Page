import { motion, useScroll, useTransform } from "framer-motion";

const images = [
  {
    id: 1,
    image: "/pic1.jpg",
    video: "/videos/ScrollVid.mp4",
    bottom: "5%",
    left: "20%",
    wd: "300px",
    ht: "400px",
  },
  {
    id: 2,
    image: "/heroImg.png",
    video: "/videos/HeroVid.mp4",
    top: "25%",
    left: "32%",
    wd: "700px",
    ht: "500px",
  },
  {
    id: 3,
    image: "/pic19.jpg",
    video: "/videos/workVid1.mp4",
    top: "10%",
    left: "15%",
    wd: "250px",
    ht: "400px",
  },
  {
    id: 4,
    image: "/pic6.jpg",
    video: "/videos/workVid2.mp4",
    bottom: "5%",
    right: "20%",
    wd: "300px",
    ht: "400px",
  },
  {
    id: 5,
    image: "/pic2.jpg",
    video: "/videos/workVid3.mp4",
    top: "10%",
    right: "10%",
    wd: "350px",
    ht: "400px",
  },
];

const Gallery = ({ phase }) => {
  const { scrollYProgress } = useScroll();

  const scale = useTransform(scrollYProgress, [0, 0.35], [1, 0.5]);

  const radius = useTransform(scrollYProgress, [0, 0.35], ["0px", "70px"]);

  const y = useTransform(scrollYProgress, [0, 0.35], [0, 80]);

  return (
    <div className="absolute inset-0">
      {images.map((item, i) => {
        const isMain = item.id === 2;

        const style = {
          top: item.top,
          bottom: item.bottom,
          left: item.left,
          right: item.right,
          width: item.wd,
          height: item.ht,
        };

        const wrapperAnimate =
          phase === "hero"
            ? isMain
              ? {
                  top: 0,
                  left: 0,
                  width: "100vw",
                  height: "100vh",
                  x: 0,
                  y: 0,
                  opacity: 1,
                }
              : {
                  y: -80,
                  opacity: 0,
                }
            : {
                y: 0,
                opacity: 1,
              };

        const transition =
          phase === "hero"
            ? {
                duration: 1.4,
                ease: [0.76, 0, 0.24, 1],
              }
            : {
                duration: 1,
                delay: i * 0.45,
                ease: [0.22, 1, 0.36, 1],
              };

        const wrapperProps = {
          key: item.id,
          initial: {
            y: 120,
            opacity: 0,
          },
          animate: wrapperAnimate,
          transition,
          style: {
            ...style,
            position: "absolute",
            overflow: "hidden",
          },
        };

        if (isMain) {
          return (
            <motion.div
              {...wrapperProps}
              style={{
                ...wrapperProps.style,
                scale: phase === "hero" ? scale : 1,
                borderRadius: phase === "hero" ? radius : "0px",
                y: phase === "hero" ? y : 0,
                transformOrigin: "center center",
              }}
            >
              <motion.video
                playsInline
                autoPlay
                muted
                loop
                src={item.video}
                className="absolute inset-0 w-full h-full object-cover will-change-transform"
                initial={{
                  scale: 1.08,
                  opacity: 0,
                }}
                animate={{
                  scale: phase === "hero" ? 1 : 1.08,
                  opacity: phase === "hero" ? 1 : 0,
                }}
                transition={{
                  duration: 1.2,
                  ease: [0.76, 0, 0.24, 1],
                }}
              />

              <motion.img
                src={item.image}
                alt=""
                className="absolute inset-0 w-full h-full object-cover rounded-lg"
                initial={{
                  opacity: 1,
                  scale: 1,
                }}
                animate={{
                  opacity: phase === "hero" ? 0 : 1,
                  scale: phase === "hero" ? 1.05 : 1,
                }}
                transition={{
                  duration: 1.4,
                  delay: phase === "hero" ? 0.45 : 0,
                  ease: "easeOut",
                }}
              />

              <motion.div
                className="absolute inset-0 "
                initial={{ opacity: 0 }}
                animate={{
                  opacity: phase === "hero" ? 0.25 : 0,
                }}
                transition={{
                  duration: 1.4,
                }}
              />
            </motion.div>
          );
        }

        return (
          <motion.img
            {...wrapperProps}
            src={item.image}
            alt=""
            className="object-cover rounded-lg"
          />
        );
      })}
    </div>
  );
};

export default Gallery;

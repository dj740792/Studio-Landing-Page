import { motion, useScroll, useTransform } from "framer-motion";

const images = [
  {
    id: 1,
    src: "/videos/ScrollVid.mp4",
    bottom: "5%",
    left: "20%",
    wd: "300px",
    ht: "400px",
  },
  {
    id: 2,
    src: "/videos/HeroVid.mp4",
    top: "25%",
    left: "32%",
    wd: "700px",
    ht: "500px",
  },
  {
    id: 3,
    src: "/videos/workVid1.mp4",
    top: "10%",
    left: "15%",
    wd: "250px",
    ht: "400px",
  },
  {
    id: 4,
    src: "/videos/workVid2.mp4",
    bottom: "5%",
    right: "20%",
    wd: "300px",
    ht: "400px",
  },
  {
    id: 5,
    src: "/videos/workVid3.mp4",
    top: "10%",
    right: "10%",
    wd: "350px",
    ht: "400px",
  },
];

const Gallery = ({ phase }) => {
  return (
    <div className="absolute inset-0">
      {images.map((img, i) => {
        const isMain = img.id === 2;
        return (
          <motion.video
            playsInline
            autoPlay
            muted
            loop
            key={img.id}
            src={img.src}
            className="absolute object-cover rounded-md"
            style={{
              top: img.top,
              bottom: img.bottom,
              left: img.left,
              right: img.right,
              height: img.ht,
              width: img.wd,
            }}
            initial={{ y: 120, opacity: 0 }}
            animate={
              phase === "hero"
                ? isMain
                  ? {
                      x: 0,
                      y: 0,
                      top: 0,
                      left: 0,
                      width: "100vw",
                      height: "100vh",
                      objectFit: "cover",
                      borderRadius: "0px",
                      opacity: 1,
                      scale: 1,
                    }
                  : {
                      y: -200,
                      opacity: 0,
                    }
                : {
                    y: 0,
                    opacity: 1,
                  }
            }
            transition={{
              duration: isMain ? 1.5 : 0.7,
              delay: phase === "hero" ? 0 : i * 0.9,
              ease: "anticipate",
              
            }}
            exit={{}}
          />
        );
      })}
    </div>
  );
};

export default Gallery;

import { motion, AnimatePresence } from "framer-motion";

const images = [
  {
    id: 1,
    src: "/pic1.jpg",
    bottom: "5%",
    left: "20%",
    wd: "300px",
    ht: "400px",
  },
  {
    id: 2,
    src: "/pic2.jpg",
    top: "25%",
    left: "32%",
    wd: "700px",
    ht: "500px",
  },
  {
    id: 3,
    src: "/pic6.jpg",
    top: "10%",
    left: "15%",
    wd: "250px",
    ht: "400px",
  },
  {
    id: 4,
    src: "/pic4.jpg",
    bottom: "5%",
    right: "20%",
    wd: "300px",
    ht: "400px",
  },
  {
    id: 5,
    src: "/pic19.jpg",
    top: "10%",
    right: "10%",
    wd: "350px",
    ht: "400px",
  },
];

const Gallery = ({ phase }) => {
  return (
    <div className="absolute inset-0">
      <AnimatePresence>
        {phase !== "hero" &&
          images.map((img, i) => (
            <motion.img
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
                  ? { y: -200, opacity: 0 }
                  : { y: 0, opacity: 1 }
              }
              transition={{
                duration: 0.8,
                delay: phase === "hero" ? 0 : i * 0.6,
                ease: "anticipate",
              }}
              exit={{
                
                opacity: 0,
                scale: 2.5,
                filter:"blur(15px)",
                transition: { duration: 1, ease: "easeIn" },
              }}
            />
          ))}
      </AnimatePresence>
    </div>
  );
};

export default Gallery;

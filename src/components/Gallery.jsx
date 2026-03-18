import { motion } from "framer-motion";

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
      {images.map((img, i) => {
        const isMain = img.id === 2;
        return (
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
                ? isMain
                  ? {
                      x: "120%",
                      top: "35%",
                      objectFit: "cover",
                      width: "30vw",
                      borderRadius: "50%",
                      y: 0,
                      opacity: 1,
                      scale: [1, 1.05, 1],
                      ease: [0.6, 0.01, -0.05, 0.9],
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
              duration: isMain ? 1.2 : 0.7,
              delay: phase === "hero" ? 0 : i * 0.6,
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

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
    ht: "400px",
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
                      top: "0%",
                      left: "0%",
                      width: "100vw",
                      height: "",
                      borderRadius: 0,
                      objectFit:"cover",
                      y: 0,
                      opacity: 1,
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
              duration: isMain ? 1.2 : 0.9,
              delay: phase === "hero" ? 0 : i * 0.4,
              ease: "easeInOut",
            }}
          />
        );
      })}
    </div>
  );
};

export default Gallery;

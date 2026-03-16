import { motion } from "framer-motion";

const CUBIC = [0.6, 0.01, -0.05, 0.9];

const images = [
  { id: 1, src: "/pic1.jpg", left: "15%" },
  { id: 2, src: "/pic2.jpg", left: "30%" },
  { id: 3, src: "/pic3.jpg", left: "45%" }, // main image
  { id: 4, src: "/pic4.jpg", left: "60%" },
  { id: 5, src: "/pic5.jpg", left: "75%" },
];

const ImageSequence = () => {
  return (
    <div className="absolute inset-0">
      {images.map((img, i) => {
        const isMain = img.id === 3;

        return (
          <motion.div
            key={img.id}
            className="absolute overflow-hidden"
            style={{
              width: isMain ? "320px" : "200px",
              height: isMain ? "420px" : "260px",
              top: "50%",
              left: img.left,
              transform: "translate(-50%,-50%)",
              zIndex: isMain ? 10 : 5,
            }}
            initial={{ y: "120vh", opacity: 0 }}
            animate={{
              y: ["120vh", "0vh", isMain ? "0vh" : "-130vh"],
              opacity: [0, 1, isMain ? 1 : 0],
              scale: isMain ? [1, 1.05, 1] : 1,
            }}
            transition={{
              duration: 3.5,
              times: [0, 0.35, 1],
              ease: CUBIC,
              delay: i * 0.15,
            }}
          >
            <img
              src={img.src}
              className="w-full h-full object-cover"
              alt=""
            />
          </motion.div>
        );
      })}
    </div>
  );
};

export default ImageSequence;
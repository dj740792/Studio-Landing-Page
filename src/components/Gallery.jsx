import { motion } from "framer-motion";

const images = [
  { id: 1, src: "/pic1.jpg", top: "10%", left: "20%" },
  { id: 2, src: "/pic2.jpg", top: "40%", left: "10%" },
  { id: 3, src: "/pic3.jpg", top: "30%", left: "60%" },
  { id: 4, src: "/pic4.jpg", top: "60%", left: "40%" },
];

const Gallery = () => {
  return (
    <div className="absolute inset-0 bg-white">
      {images.map((img, i) => (
        <motion.img
          key={img.id}
          src={img.src}
          className="absolute w-[220px] h-[280px] object-cover"
          style={{ top: img.top, left: img.left }}
          initial={{ y: 120, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{
            duration: 0.8,
            delay: i * 0.15,
          }}
        />
      ))}
    </div>
  );
};

export default Gallery;
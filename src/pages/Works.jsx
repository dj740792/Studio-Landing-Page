import { motion } from "framer-motion";
import WorksBtn from "../components/WorksBtn";
import { div, img } from "motion/react-client";

const worksData = [
  {
    id: "01",
    title: "Rising sun",
    img: "pic5.jpg",
    video: "/videos/ScrollVid.mp4",
    widht: "w-full",
  },
  {
    id: "02",
    title: "Rising sun",
    img: "pic5.jpg",
    video: "/videos/ScrollVid.mp4",
    widht: "w-1/2",
  },
  {
    id: "03",
    title: "Rising sun",
    img: "pic5.jpg",
    video: "/videos/ScrollVid.mp4",
    widht: "w-1/2",
  },
  {
    id: "04",
    title: "Rising sun",
    img: "pic5.jpg",
    video: "/videos/ScrollVid.mp4",
    widht: "w-full",
  },
];
const Works = () => {
  return (
    <section className="min-h-screen w-full flex flex-col justify-center items-start ">
      <div className="font-qurova h-100 flex items-start text-8xl lg:text-[130px] uppercase lg:leading-30 ml-20">
        <h1 className="w-full h-max">
          our <br />
          <span className="ml-20 lg:ml-40"> works </span>
        </h1>
      </div>
      <div className="flex flex-wrap px-4 lg:px-10 gap-y-10">
        {worksData.map((work, i) => (
          <div
            key={work.id}
            className={`${work.widht} h-200 px-4 flex flex-col group `}
          >
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: i * 0.1 }}
              className="relative w-full rounded-md overflow-hidden "
            >
              <img src={work.img} className="h-full w-full object-cover " />
            </motion.div>
          </div>
        ))}
      </div>
      <div className="flex self-center mt-20"><WorksBtn /></div>
    </section>
  );
};

export default Works;

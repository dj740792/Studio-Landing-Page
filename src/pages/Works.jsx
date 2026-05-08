import { motion } from "framer-motion";
import WorksBtn from "../components/WorksBtn";
import { div, img } from "motion/react-client";

const worksData = [
  {
    id: "01",
    title: "Rising sun",
    img: "pic5.jpg",
    video: "/videos/ScrollVid.mp4",
    widht: "w-1/2",
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
  {
    id: "04",
    title: "Rising sun",
    img: "pic18.jpg",
    video: "/videos/ScrollVid.mp4",
    widht: "w-full",
  },
];
const Works = () => {
  return (
    <section className="min-h-screen w-full flex flex-col justify-center items-start mt-20">
      <div className="font-qurova mb-12 flex items-start text-8xl lg:text-[130px] uppercase lg:leading-30 ml-10 ">
        <h1 className="w-full h-max">
          our works
        </h1>
      </div>
      <div className="flex flex-wrap px-4 lg:px-10 gap-y-10">
        {worksData.map((work, i) => (
          <div
            key={work.id}
            className={`${work.widht} h-200 px-4 py-4 flex flex-col group `}
          >
            <motion.div
              
              className="relative w-full rounded-xl overflow-hidden flex flex-col "
            >
              <img src={work.img} className="h-full w-full object-cover " />
            </motion.div>
            <div className="flex flex-col mt-4">
              <h2 className="text-lg  uppercase tracking-tight flex items-center gap-2 ">
                <span className="text-xl">✦</span> {work.title}
              </h2>
            </div>
          </div>
        ))}
      </div>
      <div className="flex self-center mt-20">
        <WorksBtn />
      </div>
    </section>
  );
};

export default Works;

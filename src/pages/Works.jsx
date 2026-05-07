import React, { useRef } from "react";
import { aspectRatio, motion } from "framer-motion";
import WorksBtn from "../components/WorksBtn";
import { div } from "motion/react-client";

const worksData = [
  {
    id:"01",
    title:"Rising sun",
    src:"/videos/ScrollVid.mp4",
    aspectRatio:"aspect-video",
  },
  {
    id:"02",
    title:"Rising sun",
    src:"/videos/ScrollVid.mp4",
    aspectRatio:"aspect-[4/5]",
  },
  {
    id:"03",
    title:"Rising sun",
    src:"/videos/ScrollVid.mp4",
    aspectRatio:"aspect-video",
  },
  {
    id:"04",
    title:"Rising sun",
    src:"/videos/ScrollVid.mp4",
    aspectRatio:"aspect-video",
  },
  {
    id:"05",
    title:"Rising sun",
    src:"/videos/ScrollVid.mp4",
    aspectRatio:"aspect-[4/5]",
  }
]
const Works = () => {
  return (
    <section className="min-h-screen w-full flex flex-col justify-center items-start ml-20">
      <div className="font-qurova h-140 flex items-start text-8xl lg:text-[130px] uppercase lg:leading-30 ">
        <h1 className="w-full h-max">
          our <br />
          <span className="ml-20 lg:ml-40"> works </span>
        </h1>
      </div>
    <div className="h-full "></div>
    </section>
  );
};

export default Works;

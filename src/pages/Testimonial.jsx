import { div } from "motion/react-client";
import React from "react";

const Testimonial = () => {
  const review = [
    {
      id: 1,
      img: "/profilePic4.jpg",
    },
    {
      id: 2,
      img: "/profilePic5.jpg",
    },
    {
      id: 3,
      img: "/profilePic6.jpg",
    },
    {
      id: 4,
      img: "/profilePic7.jpg",
    },
    {
      id: 5,
      img: "/profilePic8.jpg",
    },
  ];
  const testimonials = [
    {
      id: 1,
      name: "Sarah Jenkins",
      position: "Founder, ORA Collective",
      review: `"The eye for detail in their editorial photography is rare. They managed to capture the raw, tactile nature of our products in a way that feels incredibly premium on screen."`,
      img: "/profilePic1.jpg",
    },
    {
      id: 2,
      name: "Rohan Varma",
      position: "Head of Marketing, NEXA",
      review: `"Finding a studio that understands both the grit of a location shoot and the precision of high-end web design is nearly impossible. KERN. is the exception."`,
      img: "/profilePic2.jpg",
    },
    {
      id: 3,
      name: "Elena Rossi",
      position: "Lead Designer, Studio Rosso",
      review: `"The motion work and visual storytelling they implemented for our launch exceeded every expectation. It's rare to find a team this technically capable and artistically driven."`,
      img: "/profilePic3.jpg",
    },
  ];
  return (
    <section className="h-screen w-full py-20 px-10">
      <div className="flex flex-col gap-4 text-center mb-16 ">
        <h1 className=" text-6xl font-roboto font-bold ">
          “SEE WHAT OUR CLIENTS ARE SAYING”
        </h1>

        <div className="flex justify-center  -space-x-2 ">
          {review.map((r, i) => (
            <img
              key={i}
              src={r.img}
              className="w-12 h-12 rounded-full object-cover"
              alt=""
            />
          ))}
        </div>
        <h2 className="text-[12px] font-bold uppercase tracking-[0.4em] opacity-70">
          Hear from those who we've captured and helped them in their journey
        </h2>
      </div>
      <div className="flex flex-wrap gap-6 max-w-[90vw] h-[60vh] mx-auto ">
        {testimonials.map((testi) => (
          <div
            key={testi.id}
            className="flex-1 min-w-40 border-2 border-black rounded-xl max-h-90 p-8 mt-10 flex flex-col justify-around"
          >
            <div className="flex justify-between items-center mb-10">
              <div className="flex items-center gap-5">
                <img
                  src={testi.img}
                  alt={testi.name}
                  className="w-16 h-16 rounded-full object-cover "
                />
                <div className="flex flex-col">
                  <h3 className="font-bold text-lg uppercase leading-none ">
                    {testi.name}
                  </h3>
                  <p className="text-sm opacity-80 mt-1 ">{testi.position}</p>
                </div>
              </div>
              {/* <div className="text-md font-semibold">{testi.date}</div> */}
            </div>
            <div className="flex flex-col h-full font-semibold text-2xl text-">
              {testi.review}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonial;

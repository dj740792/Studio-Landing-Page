import React from "react";

const Testimonial = () => {
  const testimonials = [
    {
      id: 1,
      name: "Sarah Jenkins",
      position: "Founder, ORA Collective",
      review:
        "The eye for detail in their editorial photography is rare. They managed to capture the raw, tactile nature of our products in a way that feels incredibly premium on screen.",
      profilePic: "/testimonials/sarah.jpg",
    },
    {
      id: 2,
      name: "Rohan Varma",
      position: "Head of Marketing, NEXA",
      review:
        "Finding a studio that understands both the grit of a location shoot and the precision of high-end web design is nearly impossible. KERN. is the exception.",
      profilePic: "/testimonials/rohan.jpg",
    },
    {
      id: 3,
      name: "Elena Rossi",
      position: "Lead Designer, Studio Rosso",
      review:
        "The motion work and visual storytelling they implemented for our launch exceeded every expectation. It's rare to find a team this technically capable and artistically driven.",
      profilePic: "/testimonials/elena.jpg",
    },
  ];
  return (
    <section className=" h-screen w-full py-20 px-10">
      <div className="text-center mb-16 ">
        <h1 className=" text-6xl font-roboto font-black ">
          “SEE WHAT OUR CLIENTS ARE SAYING”
        </h1>
      </div>
      <div className="flex flex-wrap   gap-6 bg-red-300 max-w-[90vw] mx-auto h-[70vh]">
        
      </div>
    </section>
  );
};

export default Testimonial;

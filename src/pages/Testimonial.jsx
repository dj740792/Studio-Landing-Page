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
    <div className="w-full h-screen flex flex-col justify-center items-center">
      <h1 className="relative text-5xl font-black bottom-[30%]">
        “SEE WHAT OUR CLIENTS ARE SAYING”
      </h1>
      <div></div>
    </div>
  );
};

export default Testimonial;

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Hero = () => {
  const [loading, setLoading] = useState(true);

  // Auto-finish the intro after 2.5 seconds
  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2500);
    return () => clearTimeout(timer);
  }, []);

  const transition = { duration: 1.6, ease: [0.6, 0.01, -0.05, 0.9] };

  return (
    <main className="relative h-screen w-full  overflow-hidden">
     
    </main>
  );
};

export default Hero;
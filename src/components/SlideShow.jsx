import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "../App.css";

export default function SlideShow() {
  const slides = [
    "/assets/img/slideshow/soulsmp-slideshow.png",
    "/assets/img/slideshow/practice-slideshow.png",
    "/assets/img/slideshow/lifesteal-slideshow.png",
  ];

  const [index, setIndex] = useState(0);

  // Auto slide
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % slides.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [slides.length]);

  const nextSlide = () => {
    setIndex((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setIndex((prev) =>
      prev === 0 ? slides.length - 1 : prev - 1
    );
  };

  return (
    <div className="slideshow-wrapper">
      <div className="slideshow-container">
        <AnimatePresence mode="wait">
          <motion.img
            key={index}
            src={slides[index]}
            className="slideshow-image"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          />
        </AnimatePresence>

        {/* LEFT ARROW */}
        <button className="slide-arrow left" onClick={prevSlide}>
          ❮
        </button>

        {/* RIGHT ARROW */}
        <button className="slide-arrow right" onClick={nextSlide}>
          ❯
        </button>
      </div>
    </div>
  );
}

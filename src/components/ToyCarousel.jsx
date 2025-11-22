import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ToyCard from "./ToyCard";

const toys = [
  { type: "bunny", color: "#BFDDF6" },
  { type: "shark", color: "#BDE0FE" },
  { type: "robot", color: "#CFF1E6" },
];

export default function ToyCarousel() {
  const [index, setIndex] = useState(0);
  useEffect(() => {
    const id = setInterval(() => setIndex((i) => (i + 1) % toys.length), 2500);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="w-full relative">
      <div className="h-[260px] flex items-center justify-center">
        <AnimatePresence mode="wait">
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.98 }}
            transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
          >
            <ToyCard {...toys[index]} />
          </motion.div>
        </AnimatePresence>
      </div>
      <div className="mt-3 flex justify-center gap-2">
        {toys.map((_, i) => (
          <button
            key={i}
            aria-label={`Go to slide ${i + 1}`}
            onClick={() => setIndex(i)}
            className={`h-2.5 rounded-full transition-all duration-300 ${
              index === i ? "w-6 bg-slate-500/70" : "w-2.5 bg-slate-300"
            }`}
          />
        ))}
      </div>
    </div>
  );
}

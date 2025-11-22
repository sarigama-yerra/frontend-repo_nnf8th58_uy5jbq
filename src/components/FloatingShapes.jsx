import { motion } from "framer-motion";

const float = (duration = 8, offset = 10) => ({
  animate: {
    y: [0, -offset, 0],
    rotate: [0, 6, 0],
  },
  transition: {
    duration,
    repeat: Infinity,
    ease: "easeInOut",
  },
});

export default function FloatingShapes() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {/* Top-left ring */}
      <motion.div
        className="absolute -left-8 -top-8 w-32 h-32 rounded-full"
        style={{
          background:
            "radial-gradient(circle at 30% 30%, rgba(173,216,230,0.45), rgba(173,216,230,0.15) 60%, transparent 70%)",
          boxShadow: "0 8px 40px rgba(173,216,230,0.35)",
          filter: "blur(0.3px)",
        }}
        {...float(10, 12)}
      />

      {/* Right orb */}
      <motion.div
        className="absolute -right-10 top-24 w-28 h-28 rounded-full"
        style={{
          background:
            "radial-gradient(circle at 40% 40%, rgba(255,182,193,0.4), rgba(255,182,193,0.15) 60%, transparent 70%)",
          boxShadow: "0 8px 40px rgba(255,182,193,0.35)",
        }}
        {...float(12, 10)}
      />

      {/* Bottom-left cube */}
      <motion.div
        className="absolute left-10 bottom-6 w-20 h-20 rounded-xl"
        style={{
          background:
            "linear-gradient(145deg, rgba(189,224,216,0.5), rgba(189,224,216,0.2))",
          boxShadow:
            "6px 6px 18px rgba(0,0,0,0.04), -6px -6px 18px rgba(255,255,255,0.65)",
        }}
        {...float(9, 8)}
      />

      {/* Bottom-right ring */}
      <motion.div
        className="absolute right-6 bottom-6 w-28 h-28 rounded-full"
        style={{
          background:
            "radial-gradient(circle at 70% 70%, rgba(255,228,181,0.5), rgba(255,228,181,0.2) 60%, transparent 70%)",
          boxShadow: "0 8px 40px rgba(255,228,181,0.35)",
        }}
        {...float(14, 12)}
      />
    </div>
  );
}

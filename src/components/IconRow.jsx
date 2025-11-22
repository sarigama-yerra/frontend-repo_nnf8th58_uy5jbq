import { motion } from "framer-motion";
import { Star, Heart, Smile, Sparkles } from "lucide-react";

const icons = [Star, Heart, Smile, Sparkles, Star];

export default function IconRow() {
  return (
    <div className="flex items-center justify-center gap-3 text-slate-400/70">
      {icons.map((Icon, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 6 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 + i * 0.08, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="rounded-full bg-gradient-to-b from-slate-50 to-white shadow-sm border border-slate-100 p-2"
        >
          <Icon className="w-4 h-4 text-slate-500" />
        </motion.div>
      ))}
    </div>
  );
}

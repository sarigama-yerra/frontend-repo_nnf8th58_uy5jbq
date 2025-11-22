import { motion } from "framer-motion";

const softShadow = {
  filter:
    "drop-shadow(0 12px 18px rgba(0,0,0,0.06)) drop-shadow(0 2px 6px rgba(0,0,0,0.04))",
};

export default function ToyCard({ type, color = "#BFDDF6" }) {
  const variants = {
    bunny: (
      <svg viewBox="0 0 140 160" className="w-full h-full">
        <defs>
          <linearGradient id="fur" x1="0" x2="0" y1="0" y2="1">
            <stop offset="0%" stopColor={color} />
            <stop offset="100%" stopColor="#EAF4FE" />
          </linearGradient>
        </defs>
        {/* Ears */}
        <g>
          <ellipse cx="45" cy="32" rx="16" ry="28" fill="url(#fur)" />
          <ellipse cx="95" cy="32" rx="16" ry="28" fill="url(#fur)" />
        </g>
        {/* Head */}
        <circle cx="70" cy="70" r="36" fill="url(#fur)" />
        {/* Blush */}
        <ellipse cx="50" cy="78" rx="8" ry="5" fill="#FFC4D6" opacity=".6" />
        <ellipse cx="90" cy="78" rx="8" ry="5" fill="#FFC4D6" opacity=".6" />
        {/* Eyes */}
        <circle cx="57" cy="70" r="6" fill="#2A2A2A" />
        <circle cx="83" cy="70" r="6" fill="#2A2A2A" />
        <circle cx="55" cy="68" r="2" fill="#fff" />
        <circle cx="81" cy="68" r="2" fill="#fff" />
        {/* Mouth */}
        <path d="M62 86 q8 6 16 0" stroke="#2A2A2A" strokeWidth="3" fill="none" strokeLinecap="round" />
        {/* Body */}
        <ellipse cx="70" cy="120" rx="32" ry="28" fill="url(#fur)" />
        {/* Paws */}
        <circle cx="48" cy="122" r="8" fill="#EAF4FE" />
        <circle cx="92" cy="122" r="8" fill="#EAF4FE" />
      </svg>
    ),
    shark: (
      <svg viewBox="0 0 160 140" className="w-full h-full">
        <defs>
          <linearGradient id="body" x1="0" x2="1" y1="0" y2="1">
            <stop offset="0%" stopColor="#BDE0FE" />
            <stop offset="100%" stopColor="#D7EEFF" />
          </linearGradient>
        </defs>
        {/* Body */}
        <ellipse cx="80" cy="80" rx="56" ry="36" fill="url(#body)" />
        {/* Fin */}
        <path d="M80 36 l18 24 h-36z" fill="#BDE0FE" />
        {/* Tail */}
        <path d="M26 86 l-18 10 18 10" fill="#BDE0FE" />
        {/* Belly */}
        <ellipse cx="80" cy="88" rx="42" ry="22" fill="#FFFFFF" opacity=".85" />
        {/* Eyes */}
        <circle cx="62" cy="70" r="6" fill="#2A2A2A" />
        <circle cx="98" cy="70" r="6" fill="#2A2A2A" />
        <circle cx="60" cy="68" r="2" fill="#fff" />
        <circle cx="96" cy="68" r="2" fill="#fff" />
        {/* Blush */}
        <ellipse cx="52" cy="84" rx="7" ry="5" fill="#FFC4D6" opacity=".6" />
        <ellipse cx="108" cy="84" rx="7" ry="5" fill="#FFC4D6" opacity=".6" />
        {/* Smile */}
        <path d="M68 96 q12 8 24 0" stroke="#2A2A2A" strokeWidth="3" fill="none" strokeLinecap="round" />
      </svg>
    ),
    robot: (
      <svg viewBox="0 0 140 160" className="w-full h-full">
        <defs>
          <linearGradient id="metal" x1="0" x2="0" y1="0" y2="1">
            <stop offset="0%" stopColor="#E3F7F0" />
            <stop offset="100%" stopColor="#F0FAF6" />
          </linearGradient>
          <linearGradient id="accent" x1="0" x2="1" y1="0" y2="1">
            <stop offset="0%" stopColor="#FDE1E8" />
            <stop offset="100%" stopColor="#FDF1F5" />
          </linearGradient>
        </defs>
        {/* Head */}
        <rect x="40" y="28" width="60" height="48" rx="14" fill="url(#metal)" />
        {/* Antenna */}
        <circle cx="70" cy="18" r="6" fill="#FDE1E8" />
        <rect x="68" y="20" width="4" height="8" rx="2" fill="#FDE1E8" />
        {/* Eyes */}
        <circle cx="56" cy="48" r="8" fill="#2A2A2A" />
        <circle cx="84" cy="48" r="8" fill="#2A2A2A" />
        <circle cx="54" cy="46" r="2" fill="#fff" />
        <circle cx="82" cy="46" r="2" fill="#fff" />
        {/* Blush */}
        <ellipse cx="48" cy="60" rx="7" ry="5" fill="#FFC4D6" opacity=".6" />
        <ellipse cx="92" cy="60" rx="7" ry="5" fill="#FFC4D6" opacity=".6" />
        {/* Body */}
        <rect x="32" y="84" width="76" height="56" rx="16" fill="url(#metal)" />
        {/* Heart panel */}
        <rect x="52" y="104" width="36" height="18" rx="9" fill="url(#accent)" />
      </svg>
    ),
  };

  return (
    <motion.div
      initial={{ y: 8, opacity: 0 }}
      animate={{ y: [8, -8, 8], opacity: 1 }}
      transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
      whileHover={{ rotate: 2 }}
      className="relative aspect-[7/8] max-w-[220px] w-full rounded-3xl bg-white/80 backdrop-blur-md border border-slate-100 p-4 flex items-center justify-center"
      style={softShadow}
    >
      {variants[type]}
    </motion.div>
  );
}

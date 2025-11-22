import { motion } from "framer-motion";
import IconRow from "./components/IconRow";
import FloatingShapes from "./components/FloatingShapes";
import ToyCard from "./components/ToyCard";
import ToyCarousel from "./components/ToyCarousel";

function App() {
  return (
    <div className="min-h-screen bg-white relative">
      <FloatingShapes />

      <main className="relative mx-auto max-w-7xl px-6 sm:px-8 pt-16 pb-24">
        <div className="text-center max-w-3xl mx-auto">
          <IconRow />
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="mt-4 text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-slate-800"
          >
            A magical workshop where toys come to life
          </motion.h1>
          <p className="mt-4 text-slate-500 max-w-xl mx-auto">
            Soft, huggable friends handcrafted with love. Premium plush with playful hearts.
          </p>
        </div>

        {/* Desktop toys */}
        <div className="hidden md:grid grid-cols-3 gap-6 mt-14 place-items-center">
          <ToyCard type="bunny" color="#CFE5FF" />
          <ToyCard type="shark" color="#BDE0FE" />
          <ToyCard type="robot" color="#D9F6EC" />
        </div>

        {/* Mobile carousel */}
        <div className="md:hidden mt-10">
          <ToyCarousel />
        </div>
      </main>
    </div>
  );
}

export default App;

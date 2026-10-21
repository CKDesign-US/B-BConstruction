import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react';
import { TESTIMONIALS } from '@/site.ts';

export default function Reviews() {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const count = TESTIMONIALS.length;

  const go = (dir: number) => {
    setDirection(dir);
    setIndex((prev) => (prev + dir + count) % count);
  };

  useEffect(() => {
    const id = setInterval(() => {
      setDirection(1);
      setIndex((prev) => (prev + 1) % count);
    }, 6000);
    return () => clearInterval(id);
  }, [count]);

  const t = TESTIMONIALS[index];

  return (
    <section id="reviews" className="py-20 md:py-28 bg-[#0F0F10]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-10"
        >
          <span className="text-[#EDC001] font-semibold text-sm tracking-widest uppercase">
            Customer Reviews
          </span>
          <h2 className="mt-3 text-3xl md:text-4xl font-extrabold text-white tracking-tight">
            What Our Clients Say
          </h2>
          <div className="mt-4 inline-flex items-center gap-2">
            <div className="flex items-center gap-0.5">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-[#EDC001] text-[#EDC001]" />
              ))}
            </div>
            <span className="text-gray-300 font-semibold">5.0</span>
            <span className="text-gray-500 text-sm">· Based on {count}+ reviews</span>
          </div>
        </motion.div>

        {/* Carousel */}
        <div className="relative bg-[#18181B] rounded-2xl border border-[#27272A] p-8 md:p-12 min-h-[280px] flex items-center">
          <Quote className="absolute top-6 left-6 w-12 h-12 text-[#EDC001]/15" />

          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={index}
              custom={direction}
              initial={{ opacity: 0, x: direction > 0 ? 40 : -40 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: direction > 0 ? -40 : 40 }}
              transition={{ duration: 0.3 }}
              className="relative z-10 w-full text-center"
            >
              <div className="flex items-center justify-center gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-[#EDC001] text-[#EDC001]" />
                ))}
              </div>
              <p className="text-lg md:text-xl text-gray-200 leading-relaxed italic">
                "{t.quote}"
              </p>
              <div className="mt-6">
                <div className="font-bold text-white">{t.name}</div>
                <div className="text-sm text-gray-500">
                  {t.location} · {t.service}
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Controls */}
          <button
            onClick={() => go(-1)}
            className="absolute left-2 md:left-4 top-1/2 -translate-y-1/2 w-10 h-10 flex items-center justify-center rounded-full bg-[#27272A] text-gray-300 hover:bg-[#EDC001] hover:text-black transition-colors"
            aria-label="Previous review"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={() => go(1)}
            className="absolute right-2 md:right-4 top-1/2 -translate-y-1/2 w-10 h-10 flex items-center justify-center rounded-full bg-[#27272A] text-gray-300 hover:bg-[#EDC001] hover:text-black transition-colors"
            aria-label="Next review"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>

        {/* Dots */}
        <div className="flex items-center justify-center gap-2 mt-6">
          {TESTIMONIALS.map((_, i) => (
            <button
              key={i}
              onClick={() => {
                setDirection(i > index ? 1 : -1);
                setIndex(i);
              }}
              className={`h-2 rounded-full transition-all ${
                i === index ? 'w-8 bg-[#EDC001]' : 'w-2 bg-[#27272A]'
              }`}
              aria-label={`Go to review ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

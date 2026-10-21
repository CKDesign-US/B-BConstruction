import { motion } from 'framer-motion';
import { GALLERY } from '@/site.ts';

export default function Gallery() {
  return (
    <section id="gallery" className="py-20 md:py-28 bg-[#18181B]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-2xl mx-auto mb-12"
        >
          <span className="text-[#EDC001] font-semibold text-sm tracking-widest uppercase">
            Our Work
          </span>
          <h2 className="mt-3 text-3xl md:text-4xl font-extrabold text-white tracking-tight">
            Project Gallery
          </h2>
          <p className="mt-4 text-gray-400 text-lg">
            A look at recent projects we've completed for local homeowners.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-5">
          {GALLERY.map((item, idx) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.06 }}
              className={`group relative overflow-hidden rounded-xl cursor-pointer ${
                idx === 0 ? 'col-span-2 md:col-span-1' : ''
              }`}
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-48 md:h-64 object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-90 group-hover:opacity-100 transition-opacity" />
              <div className="absolute bottom-0 left-0 right-0 p-4">
                <span className="text-[10px] font-bold text-[#EDC001] uppercase tracking-wider">
                  {item.category}
                </span>
                <h3 className="text-sm md:text-base font-bold text-white mt-0.5">
                  {item.title}
                </h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

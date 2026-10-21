import { motion } from 'framer-motion';
import {
  PaintRoller,
  Columns3,
  Home,
  Hammer,
  Truck,
  Check,
  type LucideIcon,
} from 'lucide-react';
import { SERVICES } from '@/site.ts';

const iconMap: Record<string, LucideIcon> = {
  PaintRoller,
  Columns3,
  Home,
  Hammer,
  Truck,
};

export default function Services() {
  return (
    <section id="services" className="py-20 md:py-28 bg-[#0F0F10]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-2xl mx-auto mb-14"
        >
          <span className="text-[#EDC001] font-semibold text-sm tracking-widest uppercase">
            What We Do
          </span>
          <h2 className="mt-3 text-3xl md:text-4xl font-extrabold text-white tracking-tight">
            Complete Home Improvement Services
          </h2>
          <p className="mt-4 text-gray-400 text-lg">
            One trusted crew for every project — big or small. Explore our core services below.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES.map((service, idx) => {
            const Icon = iconMap[service.icon] ?? Hammer;
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.08 }}
                className="group relative bg-[#18181B] rounded-2xl overflow-hidden border border-[#27272A] hover:border-[#EDC001]/50 transition-colors"
              >
                {/* Image */}
                <div className="relative h-44 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#18181B] to-transparent" />
                  <div className="absolute bottom-3 left-4 flex items-center gap-3">
                    <div className="flex items-center justify-center w-11 h-11 bg-[#EDC001] rounded-lg shadow-lg">
                      <Icon className="w-6 h-6 text-black" strokeWidth={2} />
                    </div>
                    <h3 className="text-xl font-bold text-white">{service.title}</h3>
                  </div>
                </div>

                {/* Body */}
                <div className="p-5">
                  <p className="text-sm text-gray-400 leading-relaxed mb-4">
                    {service.description}
                  </p>
                  <ul className="space-y-2">
                    {service.features.map((feat) => (
                      <li key={feat} className="flex items-center gap-2 text-sm text-gray-200">
                        <span className="flex items-center justify-center w-5 h-5 bg-[#EDC001]/15 rounded-full shrink-0">
                          <Check className="w-3 h-3 text-[#EDC001]" strokeWidth={3} />
                        </span>
                        {feat}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            );
          })}

          {/* CTA card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: SERVICES.length * 0.08 }}
            className="bg-[#EDC001] rounded-2xl p-7 flex flex-col justify-center items-center text-center"
          >
            <h3 className="text-2xl font-extrabold text-black">
              Don't see your project?
            </h3>
            <p className="mt-3 text-black/80 text-sm">
              We handle all types of home improvement work. Call us to discuss your needs.
            </p>
            <a
              href="#quote"
              className="mt-5 inline-block bg-black text-[#EDC001] font-bold px-6 py-3 rounded-lg hover:bg-[#18181B] transition-colors"
            >
              Request a Quote
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

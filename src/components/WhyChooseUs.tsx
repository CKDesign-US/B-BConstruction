import { motion } from 'framer-motion';
import {
  BadgeDollarSign,
  Clock,
  Sparkles,
  ShieldCheck,
  type LucideIcon,
} from 'lucide-react';
import { DIFFERENTIATORS } from '@/data/site';

const iconMap: Record<string, LucideIcon> = {
  BadgeDollarSign,
  Clock,
  Sparkles,
  ShieldCheck,
};

export default function WhyChooseUs() {
  return (
    <section id="about" className="py-20 md:py-28 bg-[#0F0F10]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-end mb-14">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span className="text-[#EDC001] font-semibold text-sm tracking-widest uppercase">
              Why Choose Us
            </span>
            <h2 className="mt-3 text-3xl md:text-4xl font-extrabold text-white tracking-tight">
              The Local Contractor Homeowners Trust
            </h2>
          </motion.div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-gray-400 text-lg"
          >
            For years, B&B Construction has delivered dependable, high-quality home improvement
            services to Wisconsin homeowners. We combine old-school craftsmanship with modern
            reliability — and back every project with our satisfaction guarantee.
          </motion.p>
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-14"
        >
          {[
            { stat: '500+', label: 'Projects Completed' },
            { stat: '5.0', label: 'Average Star Rating' },
            { stat: '100%', label: 'Satisfaction Guarantee' },
            { stat: '24h', label: 'Response Time' },
          ].map((item) => (
            <div
              key={item.label}
              className="bg-[#18181B] rounded-xl p-6 text-center border border-[#27272A]"
            >
              <div className="text-3xl md:text-4xl font-extrabold text-[#EDC001]">
                {item.stat}
              </div>
              <div className="mt-1 text-sm text-gray-400">{item.label}</div>
            </div>
          ))}
        </motion.div>

        {/* Differentiators */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {DIFFERENTIATORS.map((item, idx) => {
            const Icon = iconMap[item.icon] ?? ShieldCheck;
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.08 }}
                className="bg-[#18181B] rounded-xl p-6 border border-[#27272A] hover:border-[#EDC001]/40 transition-colors"
              >
                <div className="flex items-center justify-center w-12 h-12 bg-[#EDC001]/10 rounded-lg mb-4">
                  <Icon className="w-6 h-6 text-[#EDC001]" />
                </div>
                <h3 className="font-bold text-white text-lg">{item.title}</h3>
                <p className="mt-2 text-sm text-gray-400 leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

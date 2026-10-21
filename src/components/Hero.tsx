import { motion } from 'framer-motion';
import { Phone, ChevronRight, ShieldCheck, BadgeDollarSign, MapPin, Star } from 'lucide-react';
import { BUSINESS } from '@/site.ts';

const trustBadges = [
  { icon: ShieldCheck, label: 'Licensed & Insured' },
  { icon: BadgeDollarSign, label: 'Free Estimates' },
  { icon: MapPin, label: 'Local Experts' },
];

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center pt-16 md:pt-20 overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.pexels.com/photos/36035073/pexels-photo-36035073.jpeg?auto=compress&cs=tinysrgb&h=1080&w=1920"
          alt="Home renovation project"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0F0F10] via-[#0F0F10]/90 to-[#0F0F10]/50" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0F0F10] via-transparent to-[#0F0F10]/40" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl"
        >
          {/* Rating pill */}
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#EDC001]/10 border border-[#EDC001]/30 mb-6">
            <div className="flex items-center gap-0.5">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-3.5 h-3.5 fill-[#EDC001] text-[#EDC001]" />
              ))}
            </div>
            <span className="text-xs font-medium text-[#EDC001]">5.0 Rated Local Contractor</span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white leading-[1.1] tracking-tight">
            Quality Craftsmanship
            <br />
            <span className="text-[#EDC001]">& Reliable Home Services</span>
          </h1>

          <p className="mt-6 text-lg text-gray-300 leading-relaxed max-w-xl">
            Your trusted local construction and home improvement team. From painting and flooring
            to full renovations — we deliver dependable results with fast response times and
            honest pricing.
          </p>

          {/* CTAs */}
          <div className="mt-8 flex flex-col sm:flex-row gap-3 sm:gap-4">
            <motion.a
              href={BUSINESS.phoneHref}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="flex items-center justify-center gap-2 bg-[#EDC001] text-black font-bold px-7 py-4 rounded-lg text-base shadow-lg shadow-[#EDC001]/20"
            >
              <Phone className="w-5 h-5" />
              Call {BUSINESS.phone}
            </motion.a>
            <motion.a
              href="#quote"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="flex items-center justify-center gap-2 border-2 border-white/30 text-white font-bold px-7 py-4 rounded-lg text-base hover:border-[#EDC001] hover:text-[#EDC001] transition-colors"
            >
              Get Free Estimate
              <ChevronRight className="w-5 h-5" />
            </motion.a>
          </div>

          {/* Trust badges */}
          <div className="mt-10 flex flex-wrap gap-x-6 gap-y-3">
            {trustBadges.map((badge) => (
              <div key={badge.label} className="flex items-center gap-2">
                <badge.icon className="w-5 h-5 text-[#EDC001]" />
                <span className="text-sm font-medium text-gray-200">{badge.label}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

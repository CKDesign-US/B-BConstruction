import { motion } from 'framer-motion';
import { Phone, Mail, Clock, ShieldCheck } from 'lucide-react';
import { BUSINESS } from '../site.ts';

export default function QuoteForm() {
  return (
    <section id="quote" className="py-20 md:py-28 bg-[#18181B]">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-10"
        >
          <span className="text-[#EDC001] font-semibold text-sm tracking-widest uppercase">
            Free Estimate
          </span>
          <h2 className="mt-3 text-3xl md:text-4xl font-extrabold text-white tracking-tight">
            Get In Touch With Us
          </h2>
          <p className="mt-4 text-gray-400">
            Ready to start your home improvement project? Call us directly for a fast, free estimate and immediate assistance.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="bg-[#0F0F10] rounded-2xl border border-[#27272A] p-8 md:p-12 text-center"
        >
          <div className="mx-auto w-16 h-16 flex items-center justify-center bg-[#EDC001]/15 rounded-full mb-6">
            <Phone className="w-8 h-8 text-[#EDC001]" />
          </div>

          <span className="text-sm font-medium text-gray-400 uppercase tracking-widest">
            Call Us Directly
          </span>
          <h3 className="mt-2 text-3xl md:text-5xl font-extrabold text-white tracking-tight">
            {BUSINESS.phone}
          </h3>
          <p className="mt-3 text-gray-400 max-w-md mx-auto text-sm">
            Available Mon–Sat: 7am–7pm. Fast response times and honest, upfront quotes with no hidden fees.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <motion.a
              href={BUSINESS.phoneHref}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="inline-flex items-center justify-center gap-3 bg-[#EDC001] text-black font-extrabold px-8 py-4 rounded-xl text-lg shadow-lg shadow-[#EDC001]/20 transition-all"
            >
              <Phone className="w-5 h-5" />
              Call Now
            </motion.a>
            <motion.a
              href={`mailto:${BUSINESS.email}`}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="inline-flex items-center justify-center gap-3 border border-[#27272A] bg-[#18181B] text-gray-200 font-semibold px-8 py-4 rounded-xl text-lg hover:border-[#EDC001] hover:text-[#EDC001] transition-colors"
            >
              <Mail className="w-5 h-5 text-[#EDC001]" />
              Email Us
            </motion.a>
          </div>

          <div className="mt-10 pt-8 border-t border-[#27272A] grid grid-cols-1 sm:grid-cols-3 gap-4 text-center">
            <div className="flex items-center justify-center gap-2 text-xs text-gray-400">
              <ShieldCheck className="w-4 h-4 text-[#EDC001]" />
              <span>Licensed & Insured</span>
            </div>
            <div className="flex items-center justify-center gap-2 text-xs text-gray-400">
              <Clock className="w-4 h-4 text-[#EDC001]" />
              <span>Fast Response</span>
            </div>
            <div className="flex items-center justify-center gap-2 text-xs text-gray-400">
              <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
              <span>Ready for Projects</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

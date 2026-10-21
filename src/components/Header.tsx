import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Phone } from 'lucide-react';
import { BUSINESS, NAV_LINKS } from '../site';
import logoImg from '../bb.jpeg';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-[#0F0F10]/95 backdrop-blur-md shadow-lg shadow-black/30'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo */}
            <a href="#home" className="flex items-center gap-2.5 group">
              <img
                src={logoImg}
                alt="B&B Construction Logo"
                className="w-10 h-10 object-cover rounded-lg transition-transform group-hover:scale-105"
              />
              <div className="flex flex-col leading-none">
                <span className="text-lg font-extrabold text-white tracking-tight">
                  B&B <span className="text-[#EDC001]">Construction</span>
                </span>
                <span className="text-[10px] text-gray-400 tracking-widest uppercase">
                  Home Improvement
                </span>
              </div>
            </a>

            {/* Desktop nav */}
            <nav className="hidden md:flex items-center gap-7">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-sm font-medium text-gray-300 hover:text-[#EDC001] transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </nav>

            {/* Desktop CTA */}
            <div className="hidden md:flex items-center gap-3">
              <a
                href={BUSINESS.phoneHref}
                className="flex items-center gap-2 text-sm font-medium text-gray-300 hover:text-white transition-colors"
              >
                <Phone className="w-4 h-4" />
                {BUSINESS.phone}
              </a>
              <motion.a
                href="#quote"
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
                className="bg-[#EDC001] text-black font-bold text-sm px-5 py-2.5 rounded-lg shadow-lg shadow-[#EDC001]/20"
              >
                Get a Free Quote
              </motion.a>
            </div>

            {/* Mobile hamburger */}
            <button
              className="md:hidden flex items-center justify-center w-10 h-10 text-white"
              onClick={() => setOpen(true)}
              aria-label="Open menu"
            >
              <Menu className="w-7 h-7" />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile slide-over */}
      <AnimatePresence>
        {open && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 bg-black/60 md:hidden"
              onClick={() => setOpen(false)}
            />
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'tween', duration: 0.3 }}
              className="fixed top-0 right-0 bottom-0 w-[280px] bg-[#18181B] z-50 md:hidden flex flex-col"
            >
              <div className="flex items-center justify-between p-5 border-b border-[#27272A]">
                <div className="flex items-center gap-2">
                  <img
                    src={logoImg}
                    alt="B&B Construction Logo"
                    className="w-8 h-8 object-cover rounded-md"
                  />
                  <span className="font-extrabold text-white">
                    B&B <span className="text-[#EDC001]">Construction</span>
                  </span>
                </div>
                <button
                  onClick={() => setOpen(false)}
                  className="w-9 h-9 flex items-center justify-center text-gray-400 hover:text-white"
                  aria-label="Close menu"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>
              <nav className="flex flex-col p-5 gap-1">
                {NAV_LINKS.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="py-3 px-4 rounded-lg text-base font-medium text-gray-200 hover:bg-[#27272A] hover:text-[#EDC001] transition-colors"
                  >
                    {link.label}
                  </a>
                ))}
              </nav>
              <div className="mt-auto p-5 space-y-3">
                <a
                  href={BUSINESS.phoneHref}
                  className="flex items-center justify-center gap-2 w-full py-3 rounded-lg bg-[#27272A] text-white font-semibold"
                >
                  <Phone className="w-5 h-5 text-[#EDC001]" />
                  {BUSINESS.phone}
                </a>
                <a
                  href="#quote"
                  onClick={() => setOpen(false)}
                  className="block text-center w-full py-3 rounded-lg bg-[#EDC001] text-black font-bold"
                >
                  Get a Free Quote
                </a>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}

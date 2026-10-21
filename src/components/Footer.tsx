import { Phone, Mail, MapPin, HardHat, Clock } from 'lucide-react';
import { BUSINESS, NAV_LINKS, SERVICES } from '@/site.ts';

export default function Footer() {
  return (
    <footer className="bg-[#18181B] border-t border-[#27272A]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="flex items-center justify-center w-10 h-10 bg-[#EDC001] rounded-lg">
                <HardHat className="w-6 h-6 text-black" strokeWidth={2.5} />
              </div>
              <div className="flex flex-col leading-none">
                <span className="text-lg font-extrabold text-white">
                  B&B <span className="text-[#EDC001]">Construction</span>
                </span>
                <span className="text-[10px] text-gray-500 tracking-widest uppercase">
                  Home Improvement
                </span>
              </div>
            </div>
            <p className="text-sm text-gray-400 leading-relaxed">
              Quality craftsmanship and reliable home services for Wisconsin homeowners. Licensed,
              insured, and committed to your satisfaction.
            </p>
          </div>

          {/* Nav */}
          <div>
            <h4 className="font-bold text-white mb-4 text-sm uppercase tracking-wider">
              Navigation
            </h4>
            <ul className="space-y-2.5">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-gray-400 hover:text-[#EDC001] transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-bold text-white mb-4 text-sm uppercase tracking-wider">
              Services
            </h4>
            <ul className="space-y-2.5">
              {SERVICES.map((s) => (
                <li key={s.id}>
                  <a
                    href="#services"
                    className="text-sm text-gray-400 hover:text-[#EDC001] transition-colors"
                  >
                    {s.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold text-white mb-4 text-sm uppercase tracking-wider">
              Get In Touch
            </h4>
            <ul className="space-y-3.5">
              <li>
                <a
                  href={BUSINESS.phoneHref}
                  className="flex items-center gap-3 text-sm text-gray-400 hover:text-[#EDC001] transition-colors"
                >
                  <Phone className="w-5 h-5 text-[#EDC001] shrink-0" />
                  {BUSINESS.phone}
                </a>
              </li>
              <li className="flex items-center gap-3 text-sm text-gray-400">
                <Mail className="w-5 h-5 text-[#EDC001] shrink-0" />
                {BUSINESS.email}
              </li>
              <li className="flex items-center gap-3 text-sm text-gray-400">
                <MapPin className="w-5 h-5 text-[#EDC001] shrink-0" />
                Serving Wisconsin
              </li>
              <li className="flex items-center gap-3 text-sm text-gray-400">
                <Clock className="w-5 h-5 text-[#EDC001] shrink-0" />
                Mon–Sat: 7am–7pm
              </li>
            </ul>
            <a
              href="#quote"
              className="mt-5 inline-block bg-[#EDC001] text-black font-bold text-sm px-5 py-2.5 rounded-lg hover:opacity-90 transition-opacity"
            >
              Get a Free Quote
            </a>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-[#27272A] flex flex-col md:flex-row items-center justify-between gap-3">
          <p className="text-xs text-gray-500">
            © {new Date().getFullYear()} {BUSINESS.name}. All rights reserved.
          </p>
          <p className="text-xs text-gray-500">Licensed & Insured · Wisconsin</p>
        </div>
      </div>
    </footer>
  );
}

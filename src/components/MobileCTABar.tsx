import { Phone, ClipboardList } from 'lucide-react';
import { BUSINESS } from '@/site.ts';

export default function MobileCTABar() {
  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 z-50 flex">
      <a
        href={BUSINESS.phoneHref}
        className="flex-1 flex items-center justify-center gap-2 bg-[#18181B] text-white font-bold py-4 border-t border-[#27272A]"
      >
        <Phone className="w-5 h-5 text-[#EDC001]" />
        Call Now
      </a>
      <a
        href="#quote"
        className="flex-1 flex items-center justify-center gap-2 bg-[#EDC001] text-black font-bold py-4"
      >
        <ClipboardList className="w-5 h-5" />
        Free Quote
      </a>
    </div>
  );
}

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  User,
  Phone,
  Wrench,
  MapPin,
  MessageSquare,
  Mail,
  CheckCircle2,
  ChevronRight,
  Loader2,
  type LucideIcon,
} from 'lucide-react';
import { BUSINESS, SERVICES } from '@/data/site';

type FormData = {
  name: string;
  phone: string;
  service: string;
  zip: string;
  details: string;
  contactMethod: string;
};

const emptyForm: FormData = {
  name: '',
  phone: '',
  service: '',
  zip: '',
  details: '',
  contactMethod: 'Phone Call',
};

const contactMethods = ['Phone Call', 'Text Message', 'Email'];

export default function QuoteForm() {
  const [form, setForm] = useState<FormData>(emptyForm);
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);

  const update = (field: keyof FormData, value: string) =>
    setForm((prev) => ({ ...prev, [field]: value }));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    // Mock async submission
    await new Promise((r) => setTimeout(r, 1200));
    setSubmitting(false);
    setSuccess(true);
  };

  const reset = () => {
    setForm(emptyForm);
    setSuccess(false);
  };

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
            Get Your Free Project Quote
          </h2>
          <p className="mt-4 text-gray-400">
            Tell us about your project and we'll get back to you within 24 hours. No obligation.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="bg-[#0F0F10] rounded-2xl border border-[#27272A] p-6 md:p-8"
        >
          <AnimatePresence mode="wait">
            {success ? (
              <motion.div
                key="success"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                className="text-center py-10"
              >
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: 'spring', stiffness: 200, delay: 0.1 }}
                  className="mx-auto w-16 h-16 flex items-center justify-center bg-[#EDC001]/15 rounded-full"
                >
                  <CheckCircle2 className="w-9 h-9 text-[#EDC001]" />
                </motion.div>
                <h3 className="mt-5 text-2xl font-bold text-white">Request Received!</h3>
                <p className="mt-3 text-gray-400 max-w-md mx-auto">
                  Thanks, {form.name || 'there'}! We've received your request for{' '}
                  <span className="text-[#EDC001] font-semibold">
                    {form.service || 'your project'}
                  </span>
                  . Our team will reach out within 24 hours.
                </p>
                <div className="mt-6 flex flex-col sm:flex-row gap-3 justify-center">
                  <a
                    href={BUSINESS.phoneHref}
                    className="inline-flex items-center justify-center gap-2 bg-[#EDC001] text-black font-bold px-6 py-3 rounded-lg"
                  >
                    <Phone className="w-4 h-4" />
                    Call Now Instead
                  </a>
                  <button
                    onClick={reset}
                    className="inline-flex items-center justify-center gap-2 border border-[#27272A] text-gray-300 font-medium px-6 py-3 rounded-lg hover:border-[#EDC001] hover:text-[#EDC001] transition-colors"
                  >
                    Submit Another Request
                  </button>
                </div>
              </motion.div>
            ) : (
              <motion.form
                key="form"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onSubmit={handleSubmit}
                className="space-y-5"
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <Field
                    icon={User}
                    label="Name"
                    required
                    value={form.name}
                    onChange={(v) => update('name', v)}
                    placeholder="Your full name"
                  />
                  <Field
                    icon={Phone}
                    label="Phone Number"
                    required
                    type="tel"
                    value={form.phone}
                    onChange={(v) => update('phone', v)}
                    placeholder="920-555-0123"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-1.5">
                      Service Needed <span className="text-[#EDC001]">*</span>
                    </label>
                    <div className="relative">
                      <Wrench className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
                      <select
                        required
                        value={form.service}
                        onChange={(e) => update('service', e.target.value)}
                        className="w-full bg-[#18181B] border border-[#27272A] text-white text-sm rounded-lg pl-11 pr-4 py-3 focus:outline-none focus:border-[#EDC001] transition-colors appearance-none"
                      >
                        <option value="" disabled>
                          Select a service
                        </option>
                        {SERVICES.map((s) => (
                          <option key={s.id} value={s.title}>
                            {s.title}
                          </option>
                        ))}
                        <option value="Other">Other / Not Sure</option>
                      </select>
                    </div>
                  </div>
                  <Field
                    icon={MapPin}
                    label="Zip Code"
                    required
                    value={form.zip}
                    onChange={(v) => update('zip', v)}
                    placeholder="54901"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-1.5">
                    Project Details
                  </label>
                  <div className="relative">
                    <MessageSquare className="absolute left-3 top-3.5 w-5 h-5 text-gray-500" />
                    <textarea
                      rows={3}
                      value={form.details}
                      onChange={(e) => update('details', e.target.value)}
                      placeholder="Tell us about your project, timeline, and any specific needs..."
                      className="w-full bg-[#18181B] border border-[#27272A] text-white text-sm rounded-lg pl-11 pr-4 py-3 focus:outline-none focus:border-[#EDC001] transition-colors resize-none"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Preferred Contact Method
                  </label>
                  <div className="flex flex-wrap gap-2">
                    {contactMethods.map((method) => (
                      <button
                        key={method}
                        type="button"
                        onClick={() => update('contactMethod', method)}
                        className={`px-4 py-2.5 rounded-lg text-sm font-medium transition-all ${
                          form.contactMethod === method
                            ? 'bg-[#EDC001] text-black'
                            : 'bg-[#18181B] text-gray-400 border border-[#27272A] hover:border-[#EDC001]/50'
                        }`}
                      >
                        {method}
                      </button>
                    ))}
                  </div>
                </div>

                <motion.button
                  type="submit"
                  disabled={submitting}
                  whileHover={{ scale: submitting ? 1 : 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full flex items-center justify-center gap-2 bg-[#EDC001] text-black font-bold py-4 rounded-lg text-base shadow-lg shadow-[#EDC001]/20 disabled:opacity-60"
                >
                  {submitting ? (
                    <>
                      <Loader2 className="w-5 h-5 animate-spin" />
                      Submitting...
                    </>
                  ) : (
                    <>
                      Get My Free Quote
                      <ChevronRight className="w-5 h-5" />
                    </>
                  )}
                </motion.button>
                <p className="text-center text-xs text-gray-500 flex items-center justify-center gap-1.5">
                  <Mail className="w-3.5 h-3.5" />
                  We respect your privacy. No spam, ever.
                </p>
              </motion.form>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}

function Field({
  icon: Icon,
  label,
  required,
  value,
  onChange,
  placeholder,
  type = 'text',
}: {
  icon: LucideIcon;
  label: string;
  required?: boolean;
  value: string;
  onChange: (v: string) => void;
  placeholder?: string;
  type?: string;
}) {
  return (
    <div>
      <label className="block text-sm font-medium text-gray-300 mb-1.5">
        {label} {required && <span className="text-[#EDC001]">*</span>}
      </label>
      <div className="relative">
        <Icon className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
        <input
          type={type}
          required={required}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder={placeholder}
          className="w-full bg-[#18181B] border border-[#27272A] text-white text-sm rounded-lg pl-11 pr-4 py-3 focus:outline-none focus:border-[#EDC001] transition-colors placeholder:text-gray-600"
        />
      </div>
    </div>
  );
}

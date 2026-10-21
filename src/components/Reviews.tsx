import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, Quote, ChevronLeft, ChevronRight, PlusCircle, X, MessageSquarePlus } from 'lucide-react';

interface ReviewItem {
  name: string;
  location: string;
  service: string;
  rating: number;
  quote: string;
}

export default function Reviews() {
  // Use 'bb_user_reviews_v2' to force-clear any old cached placeholder data from previous site visits
  const STORAGE_KEY = 'bb_user_reviews_v2';

  const [reviews, setReviews] = useState<ReviewItem[]>(() => {
    // Clear old storage key if present
    if (localStorage.getItem('bb_user_reviews')) {
      localStorage.removeItem('bb_user_reviews');
    }

    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) {
      try {
        return JSON.parse(saved);
      } catch (e) {
        console.error("Failed to parse local storage reviews", e);
      }
    }
    return []; // Completely empty initial list
  });

  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // New review form state
  const [formName, setFormName] = useState('');
  const [formLocation, setFormLocation] = useState('');
  const [formService, setFormService] = useState('Home Improvement');
  const [formRating, setFormRating] = useState(5);
  const [formQuote, setFormQuote] = useState('');

  const count = reviews.length;

  // Save to localStorage whenever reviews change
  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(reviews));
  }, [reviews]);

  const go = (dir: number) => {
    if (count === 0) return;
    setDirection(dir);
    setIndex((prev) => (prev + dir + count) % count);
  };

  // Auto-play carousel when reviews exist
  useEffect(() => {
    if (count <= 1) return;
    const id = setInterval(() => {
      setDirection(1);
      setIndex((prev) => (prev + 1) % count);
    }, 6000);
    return () => clearInterval(id);
  }, [count]);

  // Calculate dynamic average rating
  const averageRating = count > 0
    ? (reviews.reduce((acc, r) => acc + (r.rating || 5), 0) / count).toFixed(1)
    : '0.0';

  const handleAddReview = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formName.trim() || !formQuote.trim()) return;

    const newReview: ReviewItem = {
      name: formName.trim(),
      location: formLocation.trim() || 'Local Client',
      service: formService.trim(),
      rating: Number(formRating),
      quote: formQuote.trim(),
    };

    const updatedReviews = [newReview, ...reviews];
    setReviews(updatedReviews);
    setIndex(0); // Jump to new review

    // Reset form & close modal
    setFormName('');
    setFormLocation('');
    setFormQuote('');
    setFormRating(5);
    setIsModalOpen(false);
  };

  const t = reviews[index] || reviews[0];

  return (
    <section id="reviews" className="py-20 md:py-28 bg-[#0F0F10]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header & Total Stats */}
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

          <div className="mt-4 flex flex-wrap items-center justify-center gap-4">
            {count > 0 ? (
              <div className="inline-flex items-center gap-2 bg-[#18181B] border border-[#27272A] px-4 py-2 rounded-full">
                <div className="flex items-center gap-0.5">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-[#EDC001] text-[#EDC001]" />
                  ))}
                </div>
                <span className="text-white font-bold">{averageRating}</span>
                <span className="text-gray-400 text-sm">
                  · Based on {count} {count === 1 ? 'review' : 'reviews'}
                </span>
              </div>
            ) : null}

            <button
              onClick={() => setIsModalOpen(true)}
              className="inline-flex items-center gap-2 bg-[#EDC001] text-black font-bold text-sm px-5 py-2.5 rounded-full hover:bg-yellow-400 transition-colors shadow-lg shadow-[#EDC001]/10"
            >
              <PlusCircle className="w-4 h-4" />
              Write a Review
            </button>
          </div>
        </motion.div>

        {/* Carousel or Empty State */}
        {count === 0 ? (
          /* Empty State */
          <div className="bg-[#18181B] rounded-2xl border border-[#27272A] p-10 md:p-14 text-center shadow-xl">
            <div className="w-16 h-16 bg-[#27272A] rounded-full flex items-center justify-center mx-auto mb-4 text-[#EDC001]">
              <MessageSquarePlus className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-bold text-white mb-2">No Reviews Yet</h3>
            <p className="text-gray-400 text-sm max-w-md mx-auto mb-6">
              Have you worked with B&B Construction? Be the very first client to leave a review and let us know about your experience!
            </p>
            <button
              onClick={() => setIsModalOpen(true)}
              className="bg-[#EDC001] text-black font-bold text-sm px-6 py-3 rounded-xl hover:bg-yellow-400 transition-colors shadow-lg shadow-[#EDC001]/10"
            >
              Be the First to Leave a Review
            </button>
          </div>
        ) : (
          /* Review Carousel */
          <>
            <div className="relative bg-[#18181B] rounded-2xl border border-[#27272A] p-8 md:p-12 min-h-[280px] flex items-center shadow-xl">
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
                      <Star
                        key={i}
                        className={`w-5 h-5 ${
                          i < (t.rating || 5)
                            ? 'fill-[#EDC001] text-[#EDC001]'
                            : 'text-gray-600'
                        }`}
                      />
                    ))}
                  </div>
                  <p className="text-lg md:text-xl text-gray-200 leading-relaxed italic">
                    "{t.quote}"
                  </p>
                  <div className="mt-6">
                    <div className="font-bold text-white">{t.name}</div>
                    <div className="text-sm text-gray-400">
                      {t.location} · {t.service}
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>

              {/* Controls */}
              {count > 1 && (
                <>
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
                </>
              )}
            </div>

            {/* Carousel Navigation Dots */}
            {count > 1 && (
              <div className="flex items-center justify-center gap-2 mt-6 overflow-x-auto py-2">
                {reviews.map((_, i) => (
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
            )}
          </>
        )}

        {/* Write a Review Modal */}
        {isModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4 backdrop-blur-sm">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="bg-[#18181B] border border-[#27272A] rounded-2xl max-w-lg w-full p-6 md:p-8 relative shadow-2xl"
            >
              <button
                onClick={() => setIsModalOpen(false)}
                className="absolute top-5 right-5 text-gray-400 hover:text-white"
                aria-label="Close modal"
              >
                <X className="w-6 h-6" />
              </button>

              <h3 className="text-2xl font-bold text-white mb-1">Leave a Review</h3>
              <p className="text-gray-400 text-sm mb-6">
                Share your experience working with B&B Construction.
              </p>

              <form onSubmit={handleAddReview} className="space-y-4">
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-gray-300 mb-1">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={formName}
                    onChange={(e) => setFormName(e.target.value)}
                    placeholder="e.g. John Smith"
                    className="w-full bg-[#0F0F10] border border-[#27272A] rounded-lg px-4 py-2.5 text-white text-sm focus:outline-none focus:border-[#EDC001]"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-gray-300 mb-1">
                      Location / City
                    </label>
                    <input
                      type="text"
                      value={formLocation}
                      onChange={(e) => setFormLocation(e.target.value)}
                      placeholder="e.g. Fond du Lac, WI"
                      className="w-full bg-[#0F0F10] border border-[#27272A] rounded-lg px-4 py-2.5 text-white text-sm focus:outline-none focus:border-[#EDC001]"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-gray-300 mb-1">
                      Service Provided
                    </label>
                    <input
                      type="text"
                      value={formService}
                      onChange={(e) => setFormService(e.target.value)}
                      placeholder="e.g. Siding Replacement"
                      className="w-full bg-[#0F0F10] border border-[#27272A] rounded-lg px-4 py-2.5 text-white text-sm focus:outline-none focus:border-[#EDC001]"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-gray-300 mb-1">
                    Rating
                  </label>
                  <select
                    value={formRating}
                    onChange={(e) => setFormRating(Number(e.target.value))}
                    className="w-full bg-[#0F0F10] border border-[#27272A] rounded-lg px-4 py-2.5 text-white text-sm focus:outline-none focus:border-[#EDC001]"
                  >
                    <option value={5}>5 Stars - Excellent</option>
                    <option value={4}>4 Stars - Very Good</option>
                    <option value={3}>3 Stars - Average</option>
                    <option value={2}>2 Stars - Poor</option>
                    <option value={1}>1 Star - Terrible</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-gray-300 mb-1">
                    Your Review *
                  </label>
                  <textarea
                    required
                    rows={4}
                    value={formQuote}
                    onChange={(e) => setFormQuote(e.target.value)}
                    placeholder="Tell others about your experience..."
                    className="w-full bg-[#0F0F10] border border-[#27272A] rounded-lg px-4 py-2.5 text-white text-sm focus:outline-none focus:border-[#EDC001]"
                  />
                </div>

                <div className="flex justify-end gap-3 pt-2">
                  <button
                    type="button"
                    onClick={() => setIsModalOpen(false)}
                    className="px-5 py-2.5 rounded-lg border border-[#27272A] text-gray-300 text-sm font-medium hover:bg-[#27272A] transition-colors"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="px-5 py-2.5 rounded-lg bg-[#EDC001] text-black text-sm font-bold hover:bg-yellow-400 transition-colors"
                  >
                    Submit Review
                  </button>
                </div>
              </form>
            </motion.div>
          </div>
        )}

      </div>
    </section>
  );
}

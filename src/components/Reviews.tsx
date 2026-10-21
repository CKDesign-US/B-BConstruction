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
  // Load reviews from localStorage (starts empty if none added yet)
  const [reviews, setReviews] = useState<ReviewItem[]>(() => {
    const saved = localStorage.getItem('bb_user_reviews');
    if (saved) {
      try {
        return JSON.parse(saved);
      } catch (e) {
        console.error("Failed to parse local storage reviews", e);
      }
    }
    return []; // Empty initial list
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
    localStorage.setItem('bb_user_reviews', JSON.stringify(reviews));
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

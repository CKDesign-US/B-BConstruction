import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import QuoteForm from '@/components/QuoteForm';
import WhyChooseUs from '@/components/WhyChooseUs';
import Gallery from '@/components/Gallery';
import Reviews from '@/components/Reviews';
import Footer from '@/components/Footer';
import MobileCTABar from '@/components/MobileCTABar';
import Schema from '@/components/Schema';

export default function App() {
  return (
    <div className="min-h-screen bg-[#0F0F10] pb-14 md:pb-0">
      <Schema />
      <Header />
      <main>
        <Hero />
        <Services />
        <QuoteForm />
        <WhyChooseUs />
        <Gallery />
        <Reviews />
      </main>
      <Footer />
      <MobileCTABar />
    </div>
  );
}

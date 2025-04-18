import Hero from '@/components/Hero';
import Services from '@/components/Services';
import Gallery from '@/components/Gallery';
import BeforeAfter from '@/components/BeforeAfter';
import Testimonials from '@/components/Testimonials';
// import ContactForm from '@/components/ContactForm';
import WhatsAppButton from '@/components/WhatsAppButton';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <Services />
      <Gallery />
      <BeforeAfter />
      <Testimonials />
      <WhatsAppButton />
    </main>
  );
}

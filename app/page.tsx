import Header from '@/components/header';
import Hero from '@/components/hero';
import Features from '@/components/features';
import About from '@/components/about';
import Services from '@/components/services';
import Statistics from '@/components/statistics';
import Portfolio from '@/components/portfolio';
import Process from '@/components/process';
import CTASection from '@/components/cta-section';
import Footer from '@/components/footer';

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <Hero />
      <Features />
      <About />
      <Services />
      <Portfolio viewAllHref="/portfolio" />
      <Statistics />
      <Process />
      <CTASection />
      <Footer />
    </main>
  );
}

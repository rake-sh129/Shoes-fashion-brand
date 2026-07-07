import { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Hero from './Hero';
import HorizontalShowcase from './HorizontalShowcase';

gsap.registerPlugin(ScrollTrigger);

const Home = () => {
  useEffect(() => {
    // Refresh ScrollTrigger after all components mount to ensure 
    // exact calculations for the horizontal scrolling section
    ScrollTrigger.refresh();
  }, []);

  return (
    <main className="w-full bg-primary overflow-hidden">
      {/* 1. The Immersive Hero Section */}
      <Hero />

      {/* 2. The GSAP Horizontal Scrolling Showcase */}
      <HorizontalShowcase />

      {/* 3. Placeholder for the next section (Editorial / Best Sellers) */}
      <section className="min-h-screen bg-primary flex flex-col items-center justify-center relative z-10 border-t border-glass-border pt-20">
        <div className="max-w-4xl text-center px-6">
          <h2 className="text-5xl md:text-7xl font-display font-bold text-white mb-6 tracking-tighter">
            THE <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold to-gold-muted">FUTURE</span> OF FOOTWEAR.
          </h2>
          <p className="text-gray-muted text-lg md:text-xl font-sans max-w-2xl mx-auto mb-10">
            Precision engineering meets high-end fashion. Every silhouette is crafted to push boundaries and redefine movement.
          </p>
          <button className="magnetic-target border border-glass-border bg-glass backdrop-blur-md px-10 py-5 rounded-full font-bold uppercase tracking-widest text-sm text-white hover:border-gold transition-all duration-300 hover:-translate-y-1">
            Explore Editorials
          </button>
        </div>
      </section>
      
      {/* 4. Simple Footer Placeholder */}
      <footer className="bg-secondary py-12 border-t border-glass-border text-center">
        <h3 className="text-3xl font-display font-bold text-white mb-4">AURA<span className="text-gold">.</span></h3>
        <p className="text-gray-muted text-sm font-sans">© 2026 Aura Footwear. All rights reserved.</p>
      </footer>
    </main>
  );
};

export default Home;
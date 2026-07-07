import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register the ScrollTrigger plugin with GSAP to fix the "never read" error
// and ensure it functions correctly in production builds.
gsap.registerPlugin(ScrollTrigger);

const products = [
  { id: 1, name: 'AURA ZERO', price: '$350', img: 'https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?auto=format&fit=crop&q=80&w=800' },
  { id: 2, name: 'AURA PHANTOM', price: '$420', img: 'https://images.unsplash.com/photo-1553177595-4deabe780c66?auto=format&fit=crop&q=80&w=800' },
  { id: 3, name: 'AURA VELOCITY', price: '$290', img: 'https://images.unsplash.com/photo-1608231387042-66d1773070a5?auto=format&fit=crop&q=80&w=800' },
  { id: 4, name: 'AURA NEXUS', price: '$480', img: 'https://images.unsplash.com/photo-1579338908476-3a3a1d71a706?auto=format&fit=crop&q=80&w=800' }
];

const HorizontalShowcase = () => {
  const sectionRef = useRef(null);
  const wrapperRef = useRef(null);

  useEffect(() => {
    // Create the horizontal scrolling pin animation
    const pin = gsap.to(wrapperRef.current, {
      x: () => -(wrapperRef.current.scrollWidth - window.innerWidth),
      ease: "none",
      scrollTrigger: {
        trigger: sectionRef.current,
        pin: true,
        scrub: 1,
        end: () => "+=" + wrapperRef.current.scrollWidth,
        invalidateOnRefresh: true,
      }
    });

    // Cleanup function to kill the animation on component unmount
    return () => {
      pin.kill();
    };
  }, []);

  return (
    <section ref={sectionRef} className="h-screen bg-secondary overflow-hidden flex items-center relative">
      <div className="absolute top-12 left-12 md:left-24 z-10 mix-blend-difference">
        <h2 className="text-4xl md:text-6xl font-display font-bold text-white uppercase tracking-tighter">
          Archive
        </h2>
      </div>
      
      <div ref={wrapperRef} className="flex gap-12 px-12 md:px-24 h-[60vh] items-center">
        {products.map((product) => (
          <div key={product.id} className="group relative w-[300px] md:w-[450px] h-full flex-shrink-0 bg-glass bg-glass-gradient border border-glass-border rounded-2xl p-8 flex flex-col justify-between hover:border-gold/50 transition-all duration-500 transform hover:-translate-y-4 shadow-2xl">
            <div className="absolute top-6 right-6 text-xl font-sans font-light text-gray-muted">
              {product.id.toString().padStart(2, '0')}
            </div>
            
            <div className="flex-1 w-full flex items-center justify-center perspective-1000">
              <img 
                src={product.img} 
                alt={product.name} 
                className="w-full h-auto object-contain transform group-hover:scale-110 group-hover:rotate-6 transition-transform duration-700 ease-out drop-shadow-2xl mix-blend-screen"
              />
            </div>
            
            <div className="flex justify-between items-end">
              <div>
                <p className="text-gray-muted text-sm uppercase tracking-widest mb-1">Limited</p>
                <h3 className="text-2xl font-display font-bold text-white group-hover:text-gold transition-colors">{product.name}</h3>
              </div>
              <p className="text-xl font-sans text-white">{product.price}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HorizontalShowcase;
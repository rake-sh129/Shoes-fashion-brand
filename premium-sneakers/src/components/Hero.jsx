import { useEffect, useRef } from 'react';
import gsap from 'gsap';

const Hero = () => {
  const containerRef = useRef(null);
  const textRef = useRef(null);
  const shoeRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline();
      
      tl.fromTo('.hero-text-line',
        { y: 100, opacity: 0, rotateX: -45 },
        { y: 0, opacity: 1, rotateX: 0, duration: 1.2, stagger: 0.15, ease: 'power4.out', delay: 0.2 }
      )
      .fromTo(shoeRef.current,
        { scale: 0.8, opacity: 0, y: 50 },
        { scale: 1, opacity: 1, y: 0, duration: 1.5, ease: 'expo.out' },
        "-=0.8"
      )
      .fromTo('.hero-cta',
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 1, ease: 'power3.out' },
        "-=1"
      );

      gsap.to(shoeRef.current, {
        y: -20,
        rotation: 2,
        duration: 3,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut'
      });
    }, containerRef);

    const handleMouseMove = (e) => {
      const { clientX, clientY } = e;
      const xPos = (clientX / window.innerWidth - 0.5) * 30;
      const yPos = (clientY / window.innerHeight - 0.5) * 30;
      
      gsap.to(shoeRef.current, {
        x: xPos,
        y: yPos,
        rotationY: xPos * 0.5,
        rotationX: -yPos * 0.5,
        duration: 1,
        ease: 'power2.out'
      });
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      ctx.revert();
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <section ref={containerRef} className="relative w-full h-screen flex items-center justify-center overflow-hidden bg-primary pt-20">
      {/* Animated Mesh Gradient Background Placeholder */}
      <div className="absolute inset-0 z-0 opacity-30 bg-[radial-gradient(circle_at_50%_50%,_rgba(245,196,81,0.15),_transparent_60%)] blur-3xl"></div>
      
      <div className="max-w-7xl mx-auto px-6 w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center z-10">
        <div ref={textRef} className="flex flex-col items-start perspective-1000">
          <div className="overflow-hidden mb-2">
            <h1 className="hero-text-line text-6xl md:text-8xl font-display font-bold leading-[0.9] tracking-tighter">
              BEYOND
            </h1>
          </div>
          <div className="overflow-hidden mb-6">
            <h1 className="hero-text-line text-6xl md:text-8xl font-display font-bold leading-[0.9] tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-gold to-gold-muted">
              LIMITS.
            </h1>
          </div>
          <p className="hero-text-line text-gray-muted text-lg md:text-xl font-sans max-w-md mb-10 leading-relaxed">
            Experience the next generation of athletic luxury. Engineered for zero gravity, designed for absolute presence.
          </p>
          <div className="hero-cta flex gap-6">
            <button className="magnetic-target bg-white text-primary px-8 py-4 rounded-full font-bold uppercase tracking-widest text-sm hover:bg-gold transition-colors duration-300">
              Shop Collection
            </button>
            <button className="magnetic-target border border-glass-border bg-glass backdrop-blur-md px-8 py-4 rounded-full font-bold uppercase tracking-widest text-sm text-white hover:border-gold transition-colors duration-300">
              Explore Tech
            </button>
          </div>
        </div>
        
        <div className="relative h-full flex items-center justify-center pointer-events-none">
          <div ref={shoeRef} className="relative z-10 w-[120%] aspect-square max-w-[600px]">
            {/* 3D Shoe Asset Placeholder */}
            <div className="w-full h-full bg-gradient-to-tr from-glass to-secondary rounded-full blur-2xl absolute inset-0 opacity-50"></div>
            <img 
              src="https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?auto=format&fit=crop&q=80&w=1000&ixlib=rb-4.0.3" 
              alt="Premium Sneaker" 
              className="w-full h-full object-contain drop-shadow-[0_35px_35px_rgba(0,0,0,0.8)] filter contrast-125"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
import { useEffect, useState } from 'react';
import { Search, Heart, ShoppingBag, Menu } from 'lucide-react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    
    gsap.fromTo('.nav-item', 
      { y: -50, opacity: 0 }, 
      { y: 0, opacity: 1, duration: 1, stagger: 0.1, ease: 'power4.out', delay: 0.5 }
    );

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-500 ${isScrolled ? 'bg-primary/90 backdrop-blur-md border-b border-glass-border py-4' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <div className="flex items-center gap-12">
          <Link to="/" className="nav-item text-2xl font-display font-bold tracking-tighter text-white">
            AURA<span className="text-gold">.</span>
          </Link>
          <div className="hidden md:flex gap-8 text-sm font-sans tracking-wide text-gray-muted">
            {['Men', 'Women', 'Sneakers', 'Collections', 'About'].map((item) => (
              <Link key={item} to={`/${item.toLowerCase()}`} className="nav-item hover:text-white transition-colors duration-300">
                {item}
              </Link>
            ))}
          </div>
        </div>
        <div className="flex items-center gap-6 text-white">
          <button className="nav-item magnetic-target p-2 hover:text-gold transition-colors"><Search size={20} strokeWidth={1.5} /></button>
          <button className="nav-item magnetic-target p-2 hover:text-gold transition-colors"><Heart size={20} strokeWidth={1.5} /></button>
          <button className="nav-item magnetic-target p-2 hover:text-gold transition-colors relative">
            <ShoppingBag size={20} strokeWidth={1.5} />
            <span className="absolute top-1 right-1 w-2 h-2 bg-gold rounded-full"></span>
          </button>
          <button className="nav-item md:hidden p-2"><Menu size={24} /></button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
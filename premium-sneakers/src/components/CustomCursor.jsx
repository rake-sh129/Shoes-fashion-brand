import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const CustomCursor = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const updateMousePosition = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseOver = (e) => {
      const tagName = e.target.tagName?.toLowerCase();

      if (
        tagName === 'a' ||
        tagName === 'button' ||
        e.target.closest('.magnetic-target')
      ) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    window.addEventListener('mousemove', updateMousePosition);
    window.addEventListener('mouseover', handleMouseOver);

    return () => {
      window.removeEventListener('mousemove', updateMousePosition);
      window.removeEventListener('mouseover', handleMouseOver);
    };
  }, []);

  const variants = {
    default: {
      x: mousePosition.x - 16,
      y: mousePosition.y - 16,
      width: 32,
      height: 32,
      backgroundColor: 'transparent',
      border: '1px solid rgba(255, 255, 255, 0.5)',
      transition: {
        type: 'tween',
        ease: 'backOut',
        duration: 0.1,
      },
    },
    hover: {
      x: mousePosition.x - 32,
      y: mousePosition.y - 32,
      width: 64,
      height: 64,
      backgroundColor: 'rgba(245, 196, 81, 0.2)',
      border: '1px solid rgba(245, 196, 81, 0.8)',
      mixBlendMode: 'screen',
      transition: {
        type: 'spring',
        mass: 0.2,
      },
    },
  };

  return (
    <motion.div
      className="pointer-events-none fixed left-0 top-0 z-[9999] hidden rounded-full backdrop-blur-sm md:block"
      variants={variants}
      animate={isHovering ? 'hover' : 'default'}
    />
  );
};

export default CustomCursor;
import { useEffect, useState, useRef } from "react";

export function GridGlow() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const rafRef = useRef<number>();

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      // Use requestAnimationFrame to throttle updates
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current);
      }
      
      rafRef.current = requestAnimationFrame(() => {
        setMousePosition({ x: e.clientX, y: e.clientY });
      });
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current);
      }
    };
  }, []);

  return (
    <>
      {/* Grid Background */}
      <div 
        className="fixed inset-0 pointer-events-none z-0 dark:opacity-100 opacity-50"
        style={{
          backgroundImage: `
            linear-gradient(to right, currentColor 1px, transparent 1px),
            linear-gradient(to bottom, currentColor 1px, transparent 1px)
          `,
          backgroundSize: '20px 20px',
          color: 'rgba(128, 128, 128, 0.08)'
        }}
      />
      
      {/* Mouse Glow Effect */}
      <div
        className="fixed pointer-events-none z-10 transition-opacity duration-200 dark:opacity-100 opacity-60"
        style={{
          left: mousePosition.x,
          top: mousePosition.y,
          width: '800px',
          height: '800px',
          transform: 'translate(-50%, -50%)',
          background: 'radial-gradient(circle, rgba(128, 128, 128, 0.25) 0%, rgba(128, 128, 128, 0.12) 25%, rgba(128, 128, 128, 0.04) 50%, transparent 70%)',
          mixBlendMode: 'screen',
          opacity: mousePosition.x === 0 && mousePosition.y === 0 ? 0 : 1,
        }}
      />
      
      {/* Grid Glow Effect */}
      <div
        className="fixed inset-0 pointer-events-none z-5 dark:opacity-100 opacity-70"
        style={{
          background: `radial-gradient(circle 600px at ${mousePosition.x}px ${mousePosition.y}px, rgba(128, 128, 128, 0.25) 0%, transparent 100%)`,
          maskImage: `
            linear-gradient(to right, white 1px, transparent 1px),
            linear-gradient(to bottom, white 1px, transparent 1px)
          `,
          maskSize: '20px 20px',
          WebkitMaskImage: `
            linear-gradient(to right, white 1px, transparent 1px),
            linear-gradient(to bottom, white 1px, transparent 1px)
          `,
          WebkitMaskSize: '20px 20px',
          mixBlendMode: 'screen',
          opacity: mousePosition.x === 0 && mousePosition.y === 0 ? 0 : 1,
        }}
      />
    </>
  );
}

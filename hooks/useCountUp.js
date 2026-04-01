import { useState, useEffect, useRef } from 'react';

export default function useCountUp(end, duration = 2000, startOnView = true) {
  const [count, setCount] = useState(0);
  const [hasStarted, setHasStarted] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    if (!startOnView) {
      setHasStarted(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasStarted) {
          setHasStarted(true);
        }
      },
      { threshold: 0.3 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [hasStarted, startOnView]);

  useEffect(() => {
    if (!hasStarted) return;

    const numericEnd = parseFloat(String(end).replace(/[^0-9.]/g, ''));
    if (isNaN(numericEnd) || numericEnd === 0) {
      setCount(numericEnd || 0);
      return;
    }

    let startTime = null;
    let raf;

    const animate = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      // easeOutExpo for a satisfying deceleration
      const eased = 1 - Math.pow(2, -10 * progress);
      setCount(Math.floor(eased * numericEnd));

      if (progress < 1) {
        raf = requestAnimationFrame(animate);
      } else {
        setCount(numericEnd);
      }
    };

    raf = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(raf);
  }, [hasStarted, end, duration]);

  // Reconstruct the string with prefix/suffix (e.g., "5+" → count + "+")
  const raw = String(end);
  const prefix = raw.match(/^[^0-9]*/)[0];
  const suffix = raw.match(/[^0-9]*$/)[0];
  const display = `${prefix}${count}${suffix}`;

  return { ref, display };
}

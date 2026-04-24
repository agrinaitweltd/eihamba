import useCountUp from '@/hooks/useCountUp';

function HeroStat({ value, label, delay }) {
  const { ref, display } = useCountUp(value, 2000, false);
  return (
    <div className="hero-stat" ref={ref} style={{ animationDelay: `${delay}s` }}>
      <h3>{display}</h3>
      <p>{label}</p>
    </div>
  );
}

export default function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-bg">
        <img src="/hero-bg.png" alt="Coffee plantation in Bwindi" className="hero-bg-img" />
      </div>
      <div className="hero-overlay"></div>

      <div className="container">
        <div className="hero-content">
          <h1>
            Every Cup Protects <span className="highlight">Mountain Gorillas</span>
          </h1>
          <p>
            Exceptional coffee cultivated in the misty highlands of Bwindi at 1,100-1,800m
            altitude. By choosing Eihamba, you support forest conservation and empower reformed
            poachers turned sustainable farmers.
          </p>
          <div className="hero-buttons">
            <a href="#contact" className="btn-primary">Contact Us →</a>
            <a href="#products" className="btn-outline">Our Products</a>
          </div>
        </div>
      </div>

      <div className="scroll-indicator">
        Scroll to Explore
        <span className="arrow">v</span>
      </div>

      <div className="hero-stats">
        <div className="hero-stats-inner">
          <HeroStat value="15+" label="Years Experience" delay={0} />
          <HeroStat value="50+" label="Global Partners" delay={0.12} />
          <HeroStat value="10+" label="Tons Exported" delay={0.24} />
        </div>
      </div>
    </section>
  );
}

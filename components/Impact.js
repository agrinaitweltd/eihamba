import useCountUp from '@/hooks/useCountUp';

function CountCard({ value, label, delay }) {
  const { ref, display } = useCountUp(value, 2200);

  return (
    <div
      className="impact-card"
      ref={ref}
      style={{ animationDelay: `${delay}s` }}
    >
      <h3>{display}</h3>
      <p>{label}</p>
    </div>
  );
}

export default function Impact() {
  const stats = [
    { value: '5+', label: 'Metric Tons Exported' },
    { value: '413+', label: 'Partner Farmers' },
    { value: '3+', label: 'Countries Served' },
    { value: '3+', label: 'Organic Products' },
  ];

  return (
    <section className="impact">
      <div className="container">
        <div className="impact-header">
          <p className="section-label">Track Record</p>
          <h2 className="section-title">Our Impact</h2>
        </div>

        <div className="impact-grid">
          {stats.map((s, i) => (
            <CountCard key={i} value={s.value} label={s.label} delay={i * 0.12} />
          ))}
        </div>
      </div>
    </section>
  );
}

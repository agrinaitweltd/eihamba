export default function Partners() {
  const partners = [
    { src: '/partner-bcgcs.png', alt: 'Bwindi Coffee Growers Cooperative Society', name: 'BCGCS' },
    { src: '/partner-ucda.png', alt: 'Uganda Coffee Development Authority', name: 'UCDA' },
    { src: '/partner-mcga.png', alt: 'Mountain Coffee Growers Association', name: 'MCGA' },
  ];

  return (
    <section className="partners">
      <div className="container">
        <div className="partners-header">
          <p className="section-label">Trusted Partnerships</p>
          <h2 className="section-title">Our Partners</h2>
          <div className="divider-center"></div>
          <p className="section-subtitle">
            Proudly working with leading organisations shaping Uganda&apos;s coffee industry
          </p>
        </div>

        <div className="partners-logos">
          {partners.map((p) => (
            <div className="partner-logo" key={p.name}>
              <img src={p.src} alt={p.alt} />
              <p className="partner-name">{p.name}</p>
            </div>
          ))}
        </div>

        <p className="partners-quote">
          &ldquo;Our certifications reflect our unwavering commitment to quality, sustainability,
          and ethical trade practices across our entire supply chain.&rdquo;
        </p>
      </div>
    </section>
  );
}

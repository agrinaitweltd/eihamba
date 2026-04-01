import CountText from '@/components/CountText';

export default function Journey() {
  const milestones = [
    {
      year: '2018',
      title: 'Company Founded',
      desc: 'Eihamba Coffee was established with a vision to showcase Ugandan coffee excellence to the world.',
    },
    {
      year: '2022',
      title: 'First International Export',
      desc: 'Shipped our first container to European specialty roasters, marking the beginning of global expansion.',
    },
    {
      year: '2022',
      title: 'Coffee Washing Station Opened',
      desc: 'Inaugurated our modern coffee processing facility, enabling full control over quality from cherry to export.',
    },
    {
      year: '2023',
      title: 'Partnership With Bwindi Coffee Growers Cooperative',
      desc: 'Partnered with Bwindi Coffee Growers Cooperative to add value to their coffee, train farmers and market access.',
    },
    {
      year: '2025',
      title: 'Certifications',
      desc: 'Achieved UCDA and URSS certifications, affirming our commitment to sustainable practices.',
    },
    {
      year: '2026',
      title: 'Expanding Horizons',
      desc: 'Launching new direct trade programs and expanding into emerging markets in Asia and the Middle East.',
      isLast: true,
    },
  ];

  return (
    <section className="journey" id="journey">
      <div className="container">
        <div className="journey-header">
          <p className="section-label">Our History</p>
          <h2 className="section-title">Our Journey</h2>
          <p className="section-subtitle">
            From humble beginnings to becoming a trusted name in Ugandan coffee
          </p>
        </div>

        <div className="timeline">
          {milestones.map((m, i) => (
            <div className="timeline-item" key={i}>
              <CountText as="p" className="year" value={m.year} />
              <h4>{m.title}</h4>
              <p>{m.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

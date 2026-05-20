export default function VisionMission() {
  return (
    <section className="vision-mission">
      <div className="vision-mission-bg">
        <img src="/vision-bg.png" alt="Coffee forest background" className="vm-bg-img" />
      </div>
      <div className="vision-mission-overlay"></div>

      <div className="container">
        <div className="vision-mission-grid">
          {/* Vision */}
          <div className="vm-card reveal-left">
            <div className="vm-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="28" height="28">
                <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/>
                <circle cx="12" cy="12" r="3"/>
              </svg>
            </div>
            <p className="vm-label">Our Vision</p>
            <h3>A Future Where Coffee Cultivation and Conservation Thrive Together</h3>
            <div className="vm-divider"></div>
            <p>
              We envision Bwindi&apos;s forest flourishing alongside thriving farming communities,
              where every cup of coffee contributes to protecting mountain gorillas and preserving
              one of Earth&apos;s most precious ecosystems.
            </p>
          </div>

          {/* Mission */}
          <div className="vm-card reveal-right">
            <div className="vm-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="28" height="28">
                <circle cx="12" cy="12" r="10"/>
                <circle cx="12" cy="12" r="6"/>
                <circle cx="12" cy="12" r="2"/>
              </svg>
            </div>
            <p className="vm-label">Our Mission</p>
            <h3>Empowering Communities, Protecting Wildlife Through Exceptional Coffee</h3>
            <div className="vm-divider"></div>
            <p>
              We transform the lives of reformed poachers into sustainable coffee farmers,
              creating economic opportunities that protect Bwindi&apos;s forest while delivering
              exceptional, fully-washed coffee with captivating earthy and floral notes.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
